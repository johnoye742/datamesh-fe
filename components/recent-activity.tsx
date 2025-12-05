"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "success",
    message: "OpenAI integration completed successfully",
    time: "2 minutes ago",
    icon: CheckCircle2,
  },
  {
    id: 2,
    type: "warning",
    message: "Rate limit approaching for Twitter job",
    time: "15 minutes ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "info",
    message: "New API key generated for Anthropic Inc.",
    time: "1 hour ago",
    icon: Info,
  },
  {
    id: 4,
    type: "success",
    message: "Monthly invoice processed: $47,250",
    time: "3 hours ago",
    icon: CheckCircle2,
  },
  {
    id: 5,
    type: "error",
    message: "Connection timeout on 3 nodes (auto-recovered)",
    time: "5 hours ago",
    icon: XCircle,
  },
  {
    id: 6,
    type: "info",
    message: "342 new nodes joined the network",
    time: "8 hours ago",
    icon: Info,
  },
]

const typeStyles = {
  success: "text-success bg-success/10",
  warning: "text-warning bg-warning/10",
  error: "text-destructive bg-destructive/10",
  info: "text-primary bg-primary/10",
}

export function RecentActivity() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  typeStyles[activity.type as keyof typeof typeStyles]
                }`}
              >
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

