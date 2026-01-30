import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { designers } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ListFilter, Search, SlidersHorizontal, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"


const Filters = () => (
    <div className="flex flex-col gap-6">
        <div>
            <h3 className="mb-4 font-semibold font-headline">Service Category</h3>
            <div className="space-y-2">
                {['Fashion', 'Graphic', 'Branding', 'UI/UX', 'Interior', 'Other'].map(category => (
                    <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category.toLowerCase()} />
                        <Label htmlFor={category.toLowerCase()} className="font-normal">{category}</Label>
                    </div>
                ))}
            </div>
        </div>
        <Separator />
        <div>
            <h3 className="mb-4 font-semibold font-headline">Budget Range</h3>
            <RadioGroup defaultValue="any" className="space-y-2">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="any" id="any" />
                    <Label htmlFor="any" className="font-normal">Any</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low" className="font-normal">Low ( &lt; ₹10,000 )</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="font-normal">Medium ( ₹10,000 - ₹50,000 )</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="font-normal">High ( &gt; ₹50,000 )</Label>
                </div>
            </RadioGroup>
        </div>
        <Separator />
         <div>
            <h3 className="mb-4 font-semibold font-headline">Experience Level</h3>
            <div className="space-y-2">
                {['Junior', 'Mid-level', 'Senior'].map(level => (
                    <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={level.toLowerCase()} />
                        <Label htmlFor={level.toLowerCase()} className="font-normal">{level}</Label>
                    </div>
                ))}
            </div>
        </div>
        <Separator />
        <div>
            <h3 className="mb-4 font-semibold font-headline">Rating</h3>
            <div className="flex items-center space-x-2">
                <Checkbox id="rating-4.5" />
                <Label htmlFor="rating-4.5" className="font-normal">4.5 stars & up</Label>
            </div>
        </div>
        <Separator />
        <div>
            <h3 className="mb-4 font-semibold font-headline">Location/Timezone</h3>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="est">EST (USA)</SelectItem>
                    <SelectItem value="gmt">GMT (UK)</SelectItem>
                    <SelectItem value="ist">IST (India)</SelectItem>
                    <SelectItem value="jst">JST (Japan)</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
);


export default function BrowseDesignersPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
            <h1 className="font-headline text-4xl font-bold tracking-tight">Browse Designers</h1>
            <p className="text-muted-foreground">Find the perfect creative partner for your project.</p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <aside className="hidden lg:block">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                            <ListFilter className="h-5 w-5" />
                            Filters
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Filters />
                    </CardContent>
                </Card>
            </aside>
            <main className="lg:col-span-3">
                <div className="flex flex-col gap-4 mb-6 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search designers, skills, or style..." className="pl-10" />
                    </div>
                    <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex-1 md:flex-auto">
                                    Sort by: Best match
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Best match</DropdownMenuItem>
                                <DropdownMenuItem>Highest rated</DropdownMenuItem>
                                <DropdownMenuItem>Most projects</DropdownMenuItem>
                                <DropdownMenuItem>Newest</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                         <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="lg:hidden">
                                    <SlidersHorizontal className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                               <h2 className="text-lg font-semibold font-headline mb-4">Filters</h2>
                               <Filters />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Showing {designers.length} designers</p>
                
                <div className="grid grid-cols-1 gap-6">
                    {designers.map(designer => {
                        const designerImage = PlaceHolderImages.find(p => p.id === designer.imageId);
                        return (
                            <Card key={designer.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <div className="md:col-span-1 relative h-64 md:h-full w-full">
                                        {designerImage && (
                                            <Image 
                                                src={designerImage.imageUrl} 
                                                alt={designer.name} 
                                                fill 
                                                className="object-cover" 
                                                data-ai-hint={designerImage?.imageHint}
                                            />
                                        )}
                                    </div>
                                    <div className="md:col-span-2">
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-headline text-xl font-bold">
                                                        <Link href={`/designers/${designer.id}`} className="hover:underline">{designer.name}</Link>
                                                    </h3>
                                                    <p className="text-muted-foreground">{designer.specialty}</p>
                                                    <p className="text-sm text-muted-foreground mt-1">{designer.tagline}</p>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm font-medium">
                                                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                                    <span>{designer.rating}</span>
                                                    <span className="text-muted-foreground font-normal">({designer.reviews})</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                {designer.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 pt-2">
                                                {designer.portfolioImageIds.map(id => {
                                                    const img = PlaceHolderImages.find(p => p.id === id);
                                                    return img ? (
                                                        <div key={id} className="relative aspect-square rounded-md overflow-hidden">
                                                            <Image src={img.imageUrl} alt={img.description} fill className="object-cover" data-ai-hint={img.imageHint} />
                                                        </div>
                                                    ) : null;
                                                }).slice(0, 3)}
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
                                                <p className="text-lg font-semibold">From <span className="font-bold">₹{designer.startingPrice.toLocaleString()}</span></p>
                                                <div className="flex gap-2 w-full sm:w-auto">
                                                    <Button variant="outline" asChild className="flex-1">
                                                        <Link href={`/messages?with=${designer.id}`}>Message</Link>
                                                    </Button>
                                                    <Button asChild className="flex-1">
                                                        <Link href={`/designers/${designer.id}`}>View Profile</Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </main>
        </div>
    </div>
  )
}
