"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const regions = [
  { name: "North America", nodes: 4521, percentage: 35.2 },
  { name: "Europe", nodes: 3842, percentage: 29.9 },
  { name: "Asia Pacific", nodes: 2987, percentage: 23.3 },
  { name: "South America", nodes: 892, percentage: 6.9 },
  { name: "Other", nodes: 605, percentage: 4.7 },
]

const colors = [
  "oklch(0.65 0.2 270)",
  "oklch(0.7 0.15 180)",
  "oklch(0.75 0.18 85)",
  "oklch(0.6 0.2 30)",
  "oklch(0.55 0.15 330)",
]

export function NodeDistribution() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">Node Distribution</CardTitle>
        <p className="text-xs text-muted-foreground">12,847 active nodes worldwide</p>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex h-3 overflow-hidden rounded-full bg-secondary">
          {regions.map((region, index) => (
            <div
              key={region.name}
              style={{
                width: `${region.percentage}%`,
                backgroundColor: colors[index],
              }}
              className="transition-all hover:opacity-80"
            />
          ))}
        </div>
        <div className="space-y-3">
          {regions.map((region, index) => (
            <div key={region.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colors[index] }} />
                <span className="text-sm text-card-foreground">{region.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-card-foreground">{region.nodes.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground w-10 text-right">{region.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

