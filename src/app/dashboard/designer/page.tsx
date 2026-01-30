'use client'

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
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
import { designerProjects } from "@/lib/data"

export default function DesignerDashboardPage() {
  const [earningsData, setEarningsData] = useState<
    { name: string; total: number }[]
  >([])

  useEffect(() => {
    const data = [
      { name: "Jan", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Feb", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Mar", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Apr", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "May", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Jun", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Jul", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Aug", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Sep", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Oct", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Nov", total: Math.floor(Math.random() * 50000) + 10000 },
      { name: "Dec", total: Math.floor(Math.random() * 50000) + 10000 },
    ]
    setEarningsData(data)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold">Designer Dashboard</h1>
        <p className="text-muted-foreground">
          Track your projects, earnings, and client requests.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Requests</CardTitle>
            <Badge variant="destructive">
              {
                designerProjects.filter((p) => p.status === "New Request")
                  .length
              }
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                designerProjects.filter((p) => p.status === "New Request")
                  .length
              }
            </div>
            <p className="text-xs text-muted-foreground">Pending your review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <Badge variant="default" className="bg-green-600">
              {designerProjects.filter((p) => p.status === "Active").length}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {designerProjects.filter((p) => p.status === "Active").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Projects currently in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Projects
            </CardTitle>
            <Badge variant="secondary">
              {designerProjects.filter((p) => p.status === "Completed").length}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {designerProjects.filter((p) => p.status === "Completed").length}
            </div>
            <p className="text-xs text-muted-foreground">All-time completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,45,830</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Budget</TableHead>
                  <TableHead className="text-right">Received</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {designerProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.clientName}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "default"
                            : project.status === "Completed"
                              ? "secondary"
                              : "destructive"
                        }
                        className={
                          project.status === "Active"
                            ? "bg-green-600 text-white"
                            : ""
                        }
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      ₹{project.budget.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {project.receivedDate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Earnings Summary</CardTitle>
            <CardDescription>
              Your earnings over the last 12 months.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={earningsData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />
                <Bar
                  dataKey="total"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
