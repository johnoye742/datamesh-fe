import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Is this legal?",
      answer:
        "Yes. Web scraping publicly available information is legal in most jurisdictions. We comply with GDPR and CCPA, and prohibit scraping of personal data, copyrighted content behind paywalls, or any illegal activity.",
    },
    {
      question: "How is this different from traditional proxy services?",
      answer:
        "Traditional proxies use datacenter IPs that are easily detected and blocked. Our network uses real residential IPs from actual users, making requests indistinguishable from normal web traffic.",
    },
    {
      question: "What happens to my data as a contributor?",
      answer:
        "We never access your personal data, browsing history, or files. Requests are only routed through your connection - we don't see or store any of your information. You can verify this with our open-source client.",
    },
    {
      question: "How much can I earn as a contributor?",
      answer:
        "Earnings depend on your bandwidth and location. US and EU IPs earn more. On average, users earn $0.10-0.50 per GB shared. Running 24/7 with a good connection typically yields $20-50/month.",
    },
    {
      question: "Do you offer an SLA?",
      answer:
        "Yes, our Growth and Enterprise plans include SLA guarantees. Growth includes 99.5% uptime and 95% success rate guarantees. Enterprise plans include custom SLAs based on your requirements.",
    },
    {
      question: "Can I scrape JavaScript-rendered pages?",
      answer:
        "Yes. Our network includes headless browser capabilities for dynamic content. Just specify 'render: true' in your API request and we'll return the fully rendered HTML.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/30" id="faq">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
