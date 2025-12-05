export function LogoCloud() {
  const logos = [
    { name: "OpenAI", width: 120 },
    { name: "Anthropic", width: 130 },
    { name: "Mistral", width: 100 },
    { name: "Cohere", width: 110 },
    { name: "Hugging Face", width: 140 },
  ]

  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading AI companies</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
