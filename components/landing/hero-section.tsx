import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
            </span>
            <span className="text-sm text-muted-foreground">12,847 nodes online worldwide</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            The decentralized infrastructure for AI data collection
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Access millions of residential IPs to scrape the web without getting blocked. For AI companies that need
            fresh data. For users who want passive income.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Start Scraping <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-transparent">
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* Visual Element */}
        <div className="mt-16 lg:mt-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
              <div className="rounded-lg bg-secondary/50 p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-destructive" />
                    <div className="h-3 w-3 rounded-full bg-warning" />
                    <div className="h-3 w-3 rounded-full bg-success" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">api.nodenet.io</span>
                </div>
                <pre className="text-sm text-muted-foreground font-mono overflow-x-auto">
                  {`curl -X POST https://api.nodenet.io/v1/scrape \\
  -H "Authorization: Bearer sk_live_..." \\
  -d '{
    "url": "https://reddit.com/r/MachineLearning",
    "format": "json",
    "proxy_type": "residential"
  }'

{
  "status": "success",
  "data": [...],
  "nodes_used": 3,
  "latency_ms": 847
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
