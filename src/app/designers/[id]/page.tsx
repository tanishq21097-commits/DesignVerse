import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Languages, MapPin, MessageCircle, Star, Briefcase, PlusCircle } from "lucide-react"

import { designers } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


export default function DesignerProfilePage({ params }: { params: { id: string } }) {
  const designer = designers.find((d) => d.id === params.id)

  if (!designer) {
    notFound()
  }

  const designerImage = PlaceHolderImages.find((p) => p.id === designer.imageId)

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Avatar className="h-24 w-24 border-2 border-primary">
                  {designerImage && <AvatarImage src={designerImage.imageUrl} alt={designer.name} data-ai-hint={designerImage?.imageHint} />}
                  <AvatarFallback className="text-3xl">{designer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="font-headline text-3xl font-bold">{designer.name}</h1>
                    <BadgeCheck className="h-6 w-6 text-blue-500" />
                    <Badge>Top Rated</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground">{designer.specialty}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {designer.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {designer.rating} ({designer.reviews} reviews)
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">About {designer.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground whitespace-pre-line">{designer.bio}</p>
              <Separator />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span><span className="font-semibold">{designer.experience} years</span> of experience</span>
                </div>
                 <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-muted-foreground" />
                  <span>Speaks <span className="font-semibold">{designer.languages.join(', ')}</span></span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {designer.portfolioImageIds.map(id => {
                  const img = PlaceHolderImages.find(p => p.id === id);
                  return img ? (
                     <Dialog key={id}>
                        <DialogTrigger asChild>
                           <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                              <Image src={img.imageUrl} alt={img.description} fill className="object-cover transition-transform group-hover:scale-105" data-ai-hint={img.imageHint} />
                              <div className="absolute inset-0 bg-black/20"></div>
                           </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                           <DialogHeader>
                              <DialogTitle className="font-headline">{img.description}</DialogTitle>
                              <DialogDescription>Project for a client showcasing {designer.specialty}.</DialogDescription>
                           </DialogHeader>
                           <div className="relative aspect-video mt-4">
                               <Image src={img.imageUrl} alt={img.description} fill className="object-contain" data-ai-hint={img.imageHint} />
                           </div>
                        </DialogContent>
                     </Dialog>
                  ) : null;
                })}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {designer.designerReviews.map(review => (
                    <div key={review.id} className="flex gap-4">
                        <Avatar>
                            <AvatarFallback>{review.clientName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">{review.clientName}</span>
                                <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-0.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-muted-foreground/50'}`} />
                                ))}
                            </div>
                            <p className="text-muted-foreground mt-2">{review.review}</p>
                            <Badge variant="outline" className="mt-2">{review.projectType}</Badge>
                        </div>
                    </div>
                ))}
            </CardContent>
          </Card>

          {/* Designer FAQ */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {designer.faq.map(faq => (
                    <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <Card className="shadow-lg">
                 <CardHeader>
                    <CardTitle className="font-headline text-center">Contact Designer</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button size="lg" asChild>
                        <Link href={`/messages?with=${designer.id}`}>
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Message
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                         <Link href={`/request-project?designer=${designer.id}`}>
                            <PlusCircle className="mr-2 h-5 w-5" />
                           Request a project
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Services & Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {designer.services.map(service => (
                        <div key={service.id} className="p-4 rounded-lg border">
                            <h4 className="font-semibold">{service.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-lg font-bold text-primary">₹{service.price.toLocaleString()}</p>
                                <Button variant="secondary" size="sm" asChild>
                                    <Link href={`/request-project?designer=${designer.id}&service=${service.id}`}>Request</Link>
                                </Button>
                            </div>
                            <div className="text-xs text-muted-foreground mt-2 grid grid-cols-2 gap-2">
                                <span>Delivery: {service.deliveryTime}</span>
                                <span>{service.revisions} Revisions</span>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
