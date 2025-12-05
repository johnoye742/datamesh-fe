"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/landing" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">N</span>
            </div>
            <span className="text-xl font-semibold text-foreground">NodeNet</span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            <Link href="#enterprises" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              For Enterprises
            </Link>
            <Link
              href="#contributors"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              For Contributors
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
          <Button size="sm">Get Started</Button>
        </div>
        <button type="button" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-6 py-4">
            <Link href="#enterprises" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              For Enterprises
            </Link>
            <Link href="#contributors" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              For Contributors
            </Link>
            <Link href="#pricing" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="#faq" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <div className="flex gap-4 pt-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
