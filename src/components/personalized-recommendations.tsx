"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  getPersonalizedDesignerRecommendations,
  type PersonalizedRecommendationsOutput,
} from "@/ai/flows/personalized-designer-recommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { designers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const recommendationsSchema = z.object({
  projectRequirements: z
    .string()
    .min(50, "Please describe your project in at least 50 characters."),
  stylePreferences: z
    .string()
    .min(10, "Please describe your style preferences in at least 10 characters."),
});

type RecommendationsFormValues = z.infer<typeof recommendationsSchema>;

export function PersonalizedRecommendations() {
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<RecommendationsFormValues>({
    resolver: zodResolver(recommendationsSchema),
    defaultValues: {
      projectRequirements: "",
      stylePreferences: "",
    },
  });

  const onSubmit = async (values: RecommendationsFormValues) => {
    setIsLoading(true);
    setRecommendations([]);

    try {
      const result = await getPersonalizedDesignerRecommendations({
        ...values,
        pastCollaborations: "None provided",
      });
      setRecommendations(result);
    } catch (error) {
      console.error("Failed to get recommendations:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get designer recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          AI-Powered Matching
        </div>
        <h2 className="font-headline text-3xl font-bold">Get Personalized Recommendations</h2>
        <p className="text-muted-foreground">
          Don't have time to browse? Let our AI find the perfect designer for you. Just describe your project and style, and we'll provide a curated list of top matches.
        </p>

        <Card>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="projectRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Requirements</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., I need a logo and brand guide for my new coffee shop. It should be modern, minimalist, and use earthy tones..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Be as detailed as possible for the best results.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stylePreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Style Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., I love a clean, Scandinavian aesthetic. I'm inspired by brands like Apple and Allbirds."
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Finding Matches...
                    </>
                  ) : (
                    "Get Recommendations"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <h3 className="font-headline text-2xl font-semibold">Your Top Matches</h3>
        {isLoading && (
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <Card key={i} className="flex animate-pulse items-center space-x-4 p-4">
                        <div className="h-16 w-16 rounded-full bg-muted"></div>
                        <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 rounded bg-muted"></div>
                        <div className="h-3 w-1/2 rounded bg-muted"></div>
                        <div className="h-3 w-2/3 rounded bg-muted"></div>
                        </div>
                    </Card>
                ))}
            </div>
        )}
        {!isLoading && recommendations.length > 0 && (
          <div className="space-y-4">
            {recommendations.map((rec, index) => {
              const designerSlug = rec.designerProfileUrl.split('/').pop() || '';
              const designerData = designers.find(d => d.id === designerSlug);
              const designerImage = designerData ? PlaceHolderImages.find(p => p.id === designerData.imageId) : undefined;
              
              return (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                    <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16 border">
                            {designerImage && <AvatarImage src={designerImage.imageUrl} alt={rec.designerName} data-ai-hint={designerImage?.imageHint} />}
                            <AvatarFallback>{rec.designerName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <CardTitle className="font-headline text-lg">{rec.designerName}</CardTitle>
                            {designerData && <p className="text-sm text-muted-foreground">{designerData.specialty}</p>}
                            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                <span>{designerData?.rating || 'New'}</span>
                                <span>({designerData?.reviews || 0} reviews)</span>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm italic text-muted-foreground">"{rec.matchReason}"</p>
                </CardContent>
                <div className="border-t bg-muted/50 px-6 py-3">
                    <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={rec.designerProfileUrl}>View Profile &rarr;</Link>
                    </Button>
                </div>
              </Card>
            )})}
          </div>
        )}
        {!isLoading && recommendations.length === 0 && (
          <div className="flex h-full items-center justify-center rounded-lg border border-dashed bg-card p-8 text-center">
            <p className="text-muted-foreground">
              Your recommended designers will appear here once you fill out the form.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
