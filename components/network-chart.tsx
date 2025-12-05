"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { time: "00:00", requests: 180000, success: 175000 },
  { time: "02:00", requests: 150000, success: 146000 },
  { time: "04:00", requests: 120000, success: 117000 },
  { time: "06:00", requests: 140000, success: 136000 },
  { time: "08:00", requests: 200000, success: 195000 },
  { time: "10:00", requests: 280000, success: 274000 },
  { time: "12:00", requests: 320000, success: 312000 },
  { time: "14:00", requests: 350000, success: 343000 },
  { time: "16:00", requests: 380000, success: 371000 },
  { time: "18:00", requests: 340000, success: 332000 },
  { time: "20:00", requests: 290000, success: 283000 },
  { time: "22:00", requests: 220000, success: 215000 },
]

export function NetworkChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Network Requests</CardTitle>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "oklch(0.65 0.2 270)" }} />
              <span className="text-muted-foreground">Total</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "oklch(0.65 0.2 145)" }} />
              <span className="text-muted-foreground">Success</span>
            </div>
          </div>
        </div>
        <p className="text-2xl font-bold">2.89M</p>
        <p className="text-xs text-muted-foreground">Last 24 hours</p>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.2 270)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.65 0.2 270)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.2 145)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.65 0.2 145)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "oklch(0.65 0 0)", fontSize: 10 }}
              />
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
                formatter={(value: number) => [`${(value / 1000).toFixed(0)}K`, ""]}
              />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="oklch(0.65 0.2 270)"
                strokeWidth={2}
                fill="url(#colorRequests)"
              />
              <Area
                type="monotone"
                dataKey="success"
                stroke="oklch(0.65 0.2 145)"
                strokeWidth={2}
                fill="url(#colorSuccess)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

