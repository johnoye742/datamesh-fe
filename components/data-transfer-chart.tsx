"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { time: "00:00", outgoing: 45, incoming: 12 },
  { time: "02:00", outgoing: 38, incoming: 10 },
  { time: "04:00", outgoing: 32, incoming: 8 },
  { time: "06:00", outgoing: 40, incoming: 11 },
  { time: "08:00", outgoing: 58, incoming: 15 },
  { time: "10:00", outgoing: 72, incoming: 18 },
  { time: "12:00", outgoing: 85, incoming: 22 },
  { time: "14:00", outgoing: 92, incoming: 24 },
  { time: "16:00", outgoing: 98, incoming: 26 },
  { time: "18:00", outgoing: 88, incoming: 23 },
  { time: "20:00", outgoing: 75, incoming: 19 },
  { time: "22:00", outgoing: 55, incoming: 14 },
]

export function DataTransferChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Data Transfer</CardTitle>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "oklch(0.7 0.15 180)" }} />
              <span className="text-muted-foreground">Outgoing</span>
              <span className="font-medium text-card-foreground">847GB</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "oklch(0.75 0.18 85)" }} />
              <span className="text-muted-foreground">Incoming</span>
              <span className="font-medium text-card-foreground">215GB</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorOutgoing" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.7 0.15 180)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.7 0.15 180)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorIncoming" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.75 0.18 85)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.75 0.18 85)" stopOpacity={0} />
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
                tickFormatter={(value) => `${value}GB`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.16 0 0)",
                  border: "1px solid oklch(0.26 0 0)",
                  borderRadius: "8px",
                  color: "oklch(0.95 0 0)",
                }}
                formatter={(value: number) => [`${value}GB`, ""]}
              />
              <Area
                type="monotone"
                dataKey="outgoing"
                stroke="oklch(0.7 0.15 180)"
                strokeWidth={2}
                fill="url(#colorOutgoing)"
              />
              <Area
                type="monotone"
                dataKey="incoming"
                stroke="oklch(0.75 0.18 85)"
                strokeWidth={2}
                fill="url(#colorIncoming)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

