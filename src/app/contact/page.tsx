import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or need support? Fill out the form below or email us directly. We're here to help!
            </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl">
          <CardHeader>
            <CardTitle className="font-headline">Send us a message</CardTitle>
            <CardDescription>We typically respond within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Select>
                <SelectTrigger id="topic">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={6} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
        
        <div className="mt-12 text-center text-muted-foreground">
            <p>You can also reach us at <a href="mailto:support@designverse.com" className="font-medium text-primary hover:underline">support@designverse.com</a>.</p>
        </div>
      </div>
    </div>
  )
}
