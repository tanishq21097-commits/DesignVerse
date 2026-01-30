import { CheckCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const clientSteps = [
  {
    step: 1,
    title: "Create an Account",
    description: "Sign up for free and tell us about your creative needs.",
  },
  {
    step: 2,
    title: "Describe Your Project",
    description: "Post a detailed project brief or browse our marketplace to find designers.",
  },
  {
    step: 3,
    title: "Choose a Designer",
    description: "Receive proposals from talented designers or contact your chosen professional directly.",
  },
  {
    step: 4,
    title: "Collaborate & Create",
    description: "Use our built-in chat to discuss ideas, share files, and provide feedback.",
  },
  {
    step: 5,
    title: "Approve & Download",
    description: "Once you're happy, approve the final design and download your files. Payment is released securely.",
  },
]

const designerSteps = [
  {
    step: 1,
    title: "Create Your Profile",
    description: "Showcase your skills, portfolio, and services to attract clients.",
  },
  {
    step: 2,
    title: "Get Discovered",
    description: "Receive project requests directly from clients or apply to public project briefs.",
  },
  {
    step: 3,
    title: "Discuss Requirements",
    description: "Use our chat to align with the client on project goals, deliverables, and timelines.",
  },
  {
    step: 4,
    title: "Deliver & Revise",
    description: "Submit your designs, get feedback, and make revisions until your client is satisfied.",
  },
  {
    step: 5,
    title: "Get Paid Securely",
    description: "Once the work is approved, funds are released to you from our secure escrow system.",
  },
]

const safetyFeatures = [
    { title: "Verified Designers", description: "Our team vets every designer to ensure quality and professionalism." },
    { title: "Escrow Payments", description: "Client payments are held securely until the project is approved." },
    { title: "Ratings & Reviews", description: "A transparent review system helps build trust and credibility." },
    { title: "Dispute Support", description: "Our support team is here to help resolve any issues that may arise." }
]

export default function HowItWorksPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">How DesignVerse Works</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A seamless and secure process for bringing creative visions to life, whether you're hiring or designing.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* For Clients */}
          <div>
            <h2 className="font-headline text-3xl font-bold mb-8">For Clients</h2>
            <div className="relative border-l-2 border-primary/20 pl-8">
              {clientSteps.map((item, index) => (
                <div key={item.step} className="relative mb-10">
                  <div className="absolute -left-[2.1rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-4">
                <Link href="/designers">Find a Designer</Link>
            </Button>
          </div>

          {/* For Designers */}
          <div>
            <h2 className="font-headline text-3xl font-bold mb-8">For Designers</h2>
             <div className="relative border-l-2 border-primary/20 pl-8">
              {designerSteps.map((item, index) => (
                <div key={item.step} className="relative mb-10">
                  <div className="absolute -left-[2.1rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
             <Button asChild className="mt-4" variant="secondary">
                <Link href="/auth">Become a Designer</Link>
            </Button>
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="mt-24">
             <div className="mx-auto max-w-3xl text-center">
                <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-3xl font-bold mt-4">Trust & Safety</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Your security is our top priority. We've built our platform with features to ensure a safe and reliable experience for everyone.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {safetyFeatures.map(feature => (
                    <div key={feature.title} className="text-center">
                        <CheckCircle className="mx-auto h-8 w-8 text-green-600 mb-2"/>
                        <h3 className="font-headline text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}
