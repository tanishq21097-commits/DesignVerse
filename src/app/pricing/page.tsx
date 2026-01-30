import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const commissionTiers = [
  { tier: "Starter", earnings: "Up to ₹5,00,000", commission: "20%" },
  { tier: "Pro", earnings: "₹5,00,001 - ₹20,00,000", commission: "15%" },
  { tier: "Expert", earnings: "Over ₹20,00,000", commission: "10%" },
]

const paymentFaqs = [
  {
    id: "q1",
    question: "How do clients pay?",
    answer: "Clients fund the project into a secure escrow account before work begins. We support payments via credit/debit cards, net banking, and UPI.",
  },
  {
    id: "q2",
    question: "When do I get paid as a designer?",
    answer: "Once the client approves the final deliverables, the funds are released from escrow to your DesignVerse account within 24 hours. From there, you can withdraw your earnings.",
  },
  {
    id: "q3",
    question: "What are the withdrawal options?",
    answer: "Designers can withdraw their earnings directly to their bank account. We process withdrawals twice a week. A small processing fee may apply depending on your bank.",
  },
  {
    id: "q4",
    question: "Are there any hidden fees?",
    answer: "No. Our pricing is transparent. Clients pay a small service fee on top of the project price, and designers pay a commission on their earnings. There are no monthly subscriptions or hidden charges.",
  },
]

export default function PricingPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Free to sign up. No monthly fees. Only pay for the work you do or get done.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">For Clients</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-4xl font-bold">Free to Join</p>
              <p className="text-muted-foreground">
                Browse designer profiles, post projects, and receive proposals at no cost. You only pay when you decide to hire a designer.
              </p>
              <div className="rounded-lg border bg-muted/50 p-4">
                <p className="font-semibold">5% Service Fee</p>
                <p className="text-sm text-muted-foreground">A small service fee is added to each project payment to cover platform costs, payment processing, and support.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">For Designers</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-4xl font-bold">Grow Your Business</p>
              <p className="text-muted-foreground">
                Create a profile, showcase your portfolio, and get access to a global pool of clients. We only make money when you do.
              </p>
               <div className="rounded-lg border bg-muted/50 p-4">
                <p className="font-semibold">Tiered Platform Commission</p>
                <p className="text-sm text-muted-foreground">Our commission decreases as your lifetime earnings on the platform grow. More success means you keep more of your money.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
            <h2 className="text-center font-headline text-3xl font-bold mb-8">Designer Commission Tiers</h2>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tier</TableHead>
                            <TableHead>Lifetime Earnings on DesignVerse</TableHead>
                            <TableHead className="text-right">Platform Commission</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {commissionTiers.map(tier => (
                            <TableRow key={tier.tier}>
                                <TableCell className="font-medium">
                                    <Badge>{tier.tier}</Badge>
                                </TableCell>
                                <TableCell>{tier.earnings}</TableCell>
                                <TableCell className="text-right font-bold text-primary">{tier.commission}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>

        <div className="mt-20">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold">Payment FAQs</h2>
                <p className="mt-2 text-muted-foreground">Your questions about payments and withdrawals, answered.</p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                    {paymentFaqs.map((faq) => (
                    <AccordionItem value={faq.id} key={faq.id}>
                        <AccordionTrigger className="text-left font-headline text-lg">
                        {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </div>
    </div>
  )
}
