"use client"

import { StatsCards } from "@/components/stats-cards"
import { NetworkChart } from "@/components/network-chart"
import { DataTransferChart } from "@/components/data-transfer-chart"
import { ActiveJobsTable } from "@/components/active-jobs-table"
import { NodeDistribution } from "@/components/node-distribution"
import { RecentActivity } from "@/components/recent-activity"
import { ApiUsageChart } from "@/components/api-usage-chart"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <NetworkChart />
        <DataTransferChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActiveJobsTable />
        </div>
        <NodeDistribution />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ApiUsageChart />
        <RecentActivity />
      </div>
    </div>
  )
}
