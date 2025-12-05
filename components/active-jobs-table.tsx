"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Play, Pause, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const jobs = [
  {
    id: "job-001",
    name: "Reddit /r/machinelearning",
    status: "running",
    progress: 78,
    requests: "124K",
    dataSize: "18.4GB",
    successRate: "99.2%",
  },
  {
    id: "job-002",
    name: "Twitter AI Discussions",
    status: "running",
    progress: 45,
    requests: "89K",
    dataSize: "12.1GB",
    successRate: "97.8%",
  },
  {
    id: "job-003",
    name: "HackerNews Comments",
    status: "paused",
    progress: 62,
    requests: "56K",
    dataSize: "8.2GB",
    successRate: "99.5%",
  },
  {
    id: "job-004",
    name: "GitHub Repositories",
    status: "running",
    progress: 91,
    requests: "203K",
    dataSize: "45.7GB",
    successRate: "98.9%",
  },
  {
    id: "job-005",
    name: "Stack Overflow Q&A",
    status: "queued",
    progress: 0,
    requests: "0",
    dataSize: "0GB",
    successRate: "-",
  },
]

export function ActiveJobsTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-medium">Active Scraping Jobs</CardTitle>
        <Button variant="outline" size="sm">
          View All
          <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="pb-3 font-medium">Job Name</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Progress</th>
                <th className="pb-3 font-medium hidden sm:table-cell">Requests</th>
                <th className="pb-3 font-medium hidden md:table-cell">Data</th>
                <th className="pb-3 font-medium hidden lg:table-cell">Success</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-border/50 last:border-0">
                  <td className="py-3">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-card-foreground">{job.name}</span>
                      <span className="text-xs text-muted-foreground">{job.id}</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge
                      variant="outline"
                      className={
                        job.status === "running"
                          ? "border-success/30 bg-success/10 text-success"
                          : job.status === "paused"
                            ? "border-warning/30 bg-warning/10 text-warning"
                            : "border-muted-foreground/30 bg-muted text-muted-foreground"
                      }
                    >
                      {job.status}
                    </Badge>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${job.progress}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{job.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 hidden sm:table-cell">
                    <span className="text-sm text-card-foreground">{job.requests}</span>
                  </td>
                  <td className="py-3 hidden md:table-cell">
                    <span className="text-sm text-card-foreground">{job.dataSize}</span>
                  </td>
                  <td className="py-3 hidden lg:table-cell">
                    <span className="text-sm text-card-foreground">{job.successRate}</span>
                  </td>
                  <td className="py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          {job.status === "running" ? (
                            <>
                              <Pause className="mr-2 h-4 w-4" /> Pause Job
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" /> Resume Job
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Cancel Job</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

