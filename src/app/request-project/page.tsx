import { Calendar as CalendarIcon, Upload } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { categories } from "@/lib/data"

const stylePreferences = [
  "Minimal",
  "Bold",
  "Luxurious",
  "Traditional",
  "Modern",
  "Vintage",
  "Artsy",
  "Corporate",
]

const requiredOutputs = [
  "Source files (e.g., .ai, .psd)",
  "Print-ready files (e.g., PDF, EPS)",
  "Web-optimized files (e.g., JPG, PNG, SVG)",
]

export default function RequestProjectPage() {
  return (
    <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Post a Project Brief</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Provide as much detail as possible to attract the right designers for your project.
            </p>
            </div>

            <Card className="mx-auto mt-12 max-w-4xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Project Details</CardTitle>
                    <CardDescription>This information will be visible to designers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-semibold">1. Basic Info</h3>
                        <div className="space-y-2">
                            <Label htmlFor="project-title">Project Title</Label>
                            <Input id="project-title" placeholder="e.g., Logo Design for a Coffee Shop" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select>
                                    <SelectTrigger id="category">
                                    <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                    {categories.map(cat => (
                                        <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="deadline">Deadline</Label>
                                <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !Date && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    <span>Pick a date</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" initialFocus />
                                </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Project Details */}
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-semibold">2. Project Description</h3>
                         <div className="space-y-2">
                            <Label htmlFor="description">Describe what you need</Label>
                            <Textarea id="description" placeholder="Tell designers about your project, goals, target audience, and any specific requirements..." rows={8} />
                        </div>
                         <div className="space-y-2">
                            <Label>Style Preferences</Label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                {stylePreferences.map(style => (
                                    <div key={style} className="flex items-center space-x-2 rounded-md border p-2">
                                        <Checkbox id={`style-${style}`} />
                                        <Label htmlFor={`style-${style}`} className="text-sm font-normal">{style}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="references">Reference Images</Label>
                            <div className="flex items-center justify-center w-full">
                                <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <Input id="dropzone-file" type="file" className="hidden" />
                                </Label>
                            </div> 
                        </div>
                        <div className="space-y-2">
                            <Label>Required Outputs</Label>
                            <div className="space-y-2">
                                {requiredOutputs.map(output => (
                                <div key={output} className="flex items-center space-x-2">
                                    <Checkbox id={`output-${output}`} />
                                    <Label htmlFor={`output-${output}`} className="text-sm font-normal">{output}</Label>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Separator />
                    
                    {/* Budget */}
                     <div className="space-y-4">
                        <h3 className="font-headline text-lg font-semibold">3. Budget</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="budget-min">Minimum Budget</Label>
                                <Input id="budget-min" type="number" placeholder="e.g., 20000" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="budget-max">Maximum Budget</Label>
                                <Input id="budget-max" type="number" placeholder="e.g., 50000" />
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className="w-full">Send Project Request</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}
