import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Brush,
  CheckCircle,
  Clapperboard,
  HeartHandshake,
  LayoutGrid,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { categories, featuredDesigners } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PersonalizedRecommendations } from '@/components/personalized-recommendations';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-collaboration');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 text-center md:grid-cols-2 md:text-left">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Find the perfect designer for your next custom creation.
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse verified designers, chat about your idea, and get custom designs delivered just for you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/designers">Find a Designer</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="/auth">I’m a Designer</Link>
              </Button>
            </div>
            <Link href="/how-it-works" className="inline-block text-sm text-primary hover:underline">
              See how it works
            </Link>
          </div>
          <div className="relative h-64 w-full md:h-96">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="rounded-lg object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      </section>

      {/* How It Works (3 steps) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground">A simple, transparent process.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">1. Tell us what you need</h3>
              <p className="text-muted-foreground">Post a project brief or browse our marketplace of talented designers.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">2. Match with designers</h3>
              <p className="text-muted-foreground">Get proposals from interested designers or contact them directly.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">3. Chat, create, and get it delivered</h3>
              <p className="text-muted-foreground">Collaborate, provide feedback, and receive your final designs.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link">
              <Link href="/how-it-works">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Browse Top Categories */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold">Browse Top Categories</h2>
            <p className="text-muted-foreground">Find designers by specialty.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} className="group overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/designers?category=${category.id}`}>View designers</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold">Featured Designers</h2>
            <p className="text-muted-foreground">Handpicked professionals to bring your vision to life.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDesigners.map((designer) => {
              const designerImage = PlaceHolderImages.find((p) => p.id === designer.imageId);
              return (
                <Card key={designer.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={designerImage?.imageUrl} alt={designer.name} data-ai-hint={designerImage?.imageHint} />
                        <AvatarFallback>{designer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="font-headline text-lg">{designer.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{designer.specialty}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>{designer.rating}</span>
                      <span className="text-muted-foreground">({designer.reviews} reviews)</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{designer.location}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/designers/${designer.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/designers">Explore All Designers</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Personalized Recommendations */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <PersonalizedRecommendations />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold">Why Choose DesignVerse?</h2>
            <p className="text-muted-foreground">Your trusted partner for custom design.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">Verified Designers</h3>
              <p className="text-muted-foreground">Every designer on our platform is vetted for quality and professionalism.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">Secure Payments</h3>
              <p className="text-muted-foreground">We hold your payment in escrow until you approve the final designs.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">Direct Chat & Calls</h3>
              <p className="text-muted-foreground">Communicate directly with your designer to ensure your vision is met.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Brush className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">Custom Designs</h3>
              <p className="text-muted-foreground">Receive unique, tailor-made designs, not templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 text-center md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">Start your first project today.</h2>
            <p>Post your project brief and get matched with the perfect designer.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/request-project">Post a Project</Link>
            </Button>
          </div>
          <Separator orientation="vertical" className="hidden h-24 justify-self-center bg-primary-foreground/20 md:block" />
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">Join as a designer.</h2>
            <p>Grow your client base and work on exciting projects.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/auth">Become a Designer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
