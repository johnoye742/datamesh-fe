"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Server, Database, DollarSign, TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    name: "Active Nodes",
    value: "12,847",
    change: "+342",
    trend: "up",
    icon: Server,
    description: "Residential IPs online",
  },
  {
    name: "Requests Today",
    value: "2.4M",
    change: "+18.2%",
    trend: "up",
    icon: Globe,
    description: "Successful scrapes",
  },
  {
    name: "Data Collected",
    value: "847 GB",
    change: "+124 GB",
    trend: "up",
    icon: Database,
    description: "Last 24 hours",
  },
  {
    name: "Revenue (MTD)",
    value: "$127,450",
    change: "+12.4%",
    trend: "up",
    icon: DollarSign,
    description: "From API access",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>{stat.change}</span>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-card-foreground/80">{stat.name}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

