export function StatsSection() {
  const stats = [
    { value: "12.8K", label: "Active Nodes", sublabel: "Worldwide" },
    { value: "2.4B", label: "Requests Processed", sublabel: "This month" },
    { value: "99.7%", label: "Success Rate", sublabel: "On protected sites" },
    { value: "$1.2M", label: "Paid to Contributors", sublabel: "Last 30 days" },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
