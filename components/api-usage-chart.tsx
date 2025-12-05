"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { day: "Mon", calls: 420000 },
  { day: "Tue", calls: 380000 },
  { day: "Wed", calls: 510000 },
  { day: "Thu", calls: 470000 },
  { day: "Fri", calls: 590000 },
  { day: "Sat", calls: 340000 },
  { day: "Sun", calls: 290000 },
]

export function ApiUsageChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">API Usage</CardTitle>
            <p className="text-xs text-muted-foreground">Weekly API calls from clients</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-card-foreground">3.0M</p>
            <p className="text-xs text-muted-foreground">This week</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "oklch(0.65 0 0)", fontSize: 10 }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(0.65 0 0)", fontSize: 10 }}
                tickFormatter={(value: number) => `${value / 1000}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.16 0 0)",
                  border: "1px solid oklch(0.26 0 0)",
                  borderRadius: "8px",
                  color: "oklch(0.95 0 0)",
                }}
                formatter={(value: number) => [`${(value / 1000).toFixed(0)}K calls`, ""]}
                cursor={{ fill: "oklch(0.26 0 0)" }}
              />
              <Bar dataKey="calls" fill="oklch(0.65 0.2 270)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

