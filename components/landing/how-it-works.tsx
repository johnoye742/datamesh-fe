import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const enterpriseSteps = [
    {
      step: "01",
      title: "Get API Access",
      description: "Sign up and receive your API key in minutes. No credit card required for trial.",
    },
    {
      step: "02",
      title: "Submit Scrape Jobs",
      description: "Use our simple API or dashboard to submit URLs. We handle proxy rotation automatically.",
    },
    {
      step: "03",
      title: "Receive Clean Data",
      description:
        "Get structured JSON data delivered to your webhook or poll our API. Pay only for successful requests.",
    },
  ]

  const contributorSteps = [
    {
      step: "01",
      title: "Download the App",
      description: "Install our lightweight app on Windows, Mac, or Linux. Takes less than 2 minutes.",
    },
    {
      step: "02",
      title: "Set Your Preferences",
      description: "Choose bandwidth limits, active hours, and payout method. You're always in control.",
    },
    {
      step: "03",
      title: "Start Earning",
      description: "The app runs silently in the background. Watch your earnings grow in real-time.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How it works</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enterprise Flow */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-6">For Enterprises</h3>
            <div className="space-y-6">
              {enterpriseSteps.map((step) => (
                <Card key={step.step} className="bg-card border-border">
                  <CardContent className="flex gap-4 p-6">
                    <span className="flex-shrink-0 text-4xl font-bold text-muted-foreground/30">{step.step}</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contributor Flow */}
          <div>
            <h3 className="text-lg font-semibold text-success mb-6">For Contributors</h3>
            <div className="space-y-6">
              {contributorSteps.map((step) => (
                <Card key={step.step} className="bg-card border-border">
                  <CardContent className="flex gap-4 p-6">
                    <span className="flex-shrink-0 text-4xl font-bold text-muted-foreground/30">{step.step}</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
