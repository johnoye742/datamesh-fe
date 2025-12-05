import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShieldCheck, Zap, BarChart3, Wallet, Lock, Clock, TrendingUp } from "lucide-react"

export function DualValueProps() {
  return (
    <section className="py-20 lg:py-32" id="enterprises">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* For Enterprises */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary">For AI Companies & Enterprises</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Unblockable data access at scale
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop losing data to IP bans. Our decentralized network of residential IPs ensures your scrapers never get
              blocked.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Access 12,000+ residential IPs across 190+ countries. Target specific geos for localized data.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Undetectable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Real residential IPs with organic browsing patterns. 99.7% success rate on protected sites.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Parallel scraping across thousands of nodes. Collect millions of pages per hour.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Monitor job progress, success rates, and costs in real-time through our dashboard and API.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* For Contributors */}
        <div id="contributors">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-success">For Individual Contributors</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Earn passive income from your bandwidth
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your unused internet bandwidth and earn up to $50/month. No technical skills required.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <Wallet className="h-10 w-10 text-success mb-2" />
                <CardTitle className="text-lg">Passive Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Earn $0.10-0.50 per GB of bandwidth shared. Average users earn $20-50/month.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Lock className="h-10 w-10 text-success mb-2" />
                <CardTitle className="text-lg">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Your personal data is never collected. Only legitimate business requests routed through your
                  connection.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Clock className="h-10 w-10 text-success mb-2" />
                <CardTitle className="text-lg">Set & Forget</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Install once and run in background. Set bandwidth limits. Control when you share.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-success mb-2" />
                <CardTitle className="text-lg">Instant Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Withdraw earnings anytime via crypto or PayPal. No minimum threshold required.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
