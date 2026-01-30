import Link from "next/link"
import { PlusCircle, Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { featuredDesigners, clientProjects } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function ClientDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="font-headline text-3xl font-bold">Client Dashboard</h1>
          <p className="text-muted-foreground">Manage your projects and favorite designers.</p>
        </div>
        <Button asChild>
          <Link href="/request-project">
            <PlusCircle className="mr-2 h-4 w-4" />
            Start New Project
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">My Projects</CardTitle>
              <CardDescription>A summary of your active and past projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Designer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Due Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>{project.designerName}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.status === "Active" ? "default" :
                            project.status === "Completed" ? "secondary" : "outline"
                          }
                          className={project.status === "Active" ? "bg-green-600 text-white" : ""}
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">₹{project.budget.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{project.dueDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Saved Designers</CardTitle>
              <CardDescription>Your favorite designers for future projects.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {featuredDesigners.map((designer) => {
                const designerImage = PlaceHolderImages.find((p) => p.id === designer.imageId);
                return (
                  <div key={designer.id} className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                       <AvatarImage src={designerImage?.imageUrl} alt={designer.name} data-ai-hint={designerImage?.imageHint} />
                      <AvatarFallback>{designer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Link href={`/designers/${designer.id}`} className="font-semibold hover:underline">{designer.name}</Link>
                      <p className="text-sm text-muted-foreground">{designer.specialty}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
