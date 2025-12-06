import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/abstract-network-grid-dark.jpg')] opacity-5" />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link href="/landing" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
            <span className="text-2xl font-semibold text-foreground">NodeNet</span>
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground leading-tight">
              The decentralized
              <br />
              data infrastructure
              <br />
              for AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Access millions of residential IPs worldwide. Scrape any website without blocks. Power the next generation
              of AI.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-foreground">12.8K</p>
                <p className="text-sm text-muted-foreground">Active Nodes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99.7%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">190+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">Trusted by leading AI companies worldwide</p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/landing" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-2xl font-semibold text-foreground">NodeNet</span>
            </Link>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}
