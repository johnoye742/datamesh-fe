import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We switched from Bright Data and immediately saw our success rates jump from 85% to 99%. The decentralized approach just works better.",
      author: "Sarah Chen",
      role: "Head of Data, AI Startup",
      type: "enterprise",
    },
    {
      quote:
        "I run 3 computers on the network and make about $120/month. It's truly passive - I just let it run and collect payments.",
      author: "Marcus Rodriguez",
      role: "Node Contributor",
      type: "contributor",
    },
    {
      quote:
        "The API is dead simple. We were scraping Reddit at scale within an hour of signing up. No proxy management headaches.",
      author: "James Liu",
      role: "ML Engineer, Research Lab",
      type: "enterprise",
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Loved by both sides</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI teams get their data. Contributors get paid. Everyone wins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <Quote
                  className={`h-8 w-8 mb-4 ${testimonial.type === "enterprise" ? "text-primary" : "text-success"}`}
                />
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
