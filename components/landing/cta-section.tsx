import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enterprise CTA */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <span className="text-sm font-medium text-primary">For Enterprises</span>
            <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Ready to scale your data collection?
            </h3>
            <p className="mt-4 text-muted-foreground">
              Start with 10K free requests. No credit card required. Get production-ready in under 5 minutes.
            </p>
            <Button size="lg" className="mt-6 gap-2">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Contributor CTA */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <span className="text-sm font-medium text-success">For Contributors</span>
            <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Turn your bandwidth into income</h3>
            <p className="mt-4 text-muted-foreground">
              Download our lightweight app and start earning immediately. Available for Windows, Mac, and Linux.
            </p>
            <Button size="lg" variant="outline" className="mt-6 gap-2 bg-transparent">
              <Download className="h-4 w-4" /> Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
