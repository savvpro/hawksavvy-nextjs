import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Products | HawkSavvy Voice, Signal, and Flow",
  description:
    "Explore HawkSavvy Voice, HawkSavvy Signal, and HawkSavvy Flow — three product pillars for conversational AI, growth intelligence, and agentic workflow execution.",
};

const products = [
  {
    id: "voice",
    tag: "Voice",
    tagVariant: "teal" as const,
    name: "HawkSavvy Voice",
    headline: "Conversational AI grounded in knowledge and connected to action.",
    body: "A conversational AI platform for voice and chat interactions grounded in approved enterprise knowledge and connected to meaningful business actions. Designed for real operational environments, not lab demos.",
    useCases: [
      "Receptionist and intake automation",
      "Lead qualification and routing",
      "Customer support and callbacks",
      "Appointment and meeting coordination",
      "Internal assistant experiences",
    ],
    color: "signal-teal",
    borderClass: "border-signal-teal/25",
    bgClass: "bg-signal-teal/5 dark:bg-signal-teal/8",
    accentClass: "text-signal-teal",
    iconBg: "bg-signal-teal/15",
  },
  {
    id: "signal",
    tag: "Signal",
    tagVariant: "sky" as const,
    name: "HawkSavvy Signal",
    headline: "Growth intelligence that turns market signals into real execution.",
    body: "A growth intelligence and campaign operating system that transforms real market signals into content planning, publishing workflows, and commercial opportunity discovery.",
    useCases: [
      "SEO content systems and publishing",
      "Social media workflow automation",
      "Research-to-campaign pipelines",
      "Market signal mapping and analysis",
      "Thought leadership operations",
    ],
    color: "vector-sky",
    borderClass: "border-vector-sky/25",
    bgClass: "bg-vector-sky/5 dark:bg-vector-sky/8",
    accentClass: "text-sky-dark dark:text-vector-sky",
    iconBg: "bg-vector-sky/15",
  },
  {
    id: "flow",
    tag: "Flow",
    tagVariant: "sand" as const,
    name: "HawkSavvy Flow",
    headline: "Agentic execution with visible control and accountability.",
    body: "An agentic workflow layer for structured execution, accountability, task orchestration, and business process automation with visible human control built into the operating design.",
    useCases: [
      "Task routing and prioritization",
      "Follow-up and escalation automation",
      "Approvals and execution tracking",
      "Operational escalation pathways",
      "AI-assisted operating cadence",
    ],
    color: "sovereign-sand",
    borderClass: "border-sovereign-sand/25",
    bgClass: "bg-sovereign-sand/5 dark:bg-sovereign-sand/8",
    accentClass: "text-sand-dark dark:text-sovereign-sand",
    iconBg: "bg-sovereign-sand/15",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full bg-vector-sky/4 dark:bg-vector-sky/6 blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="neutral">Product Ecosystem</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Productized systems designed for deployable enterprise value.
            </h1>
            <p className="mt-6 text-graphite dark:text-silver text-xl leading-relaxed max-w-2xl">
              HawkSavvy's product ecosystem translates repeated delivery patterns into hardened systems that help organizations move faster without sacrificing control.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-8">
          {products.map((product, i) => (
            <FadeUp key={product.id} delay={i * 0.08}>
              <div
                id={product.id}
                className={`rounded-2xl border ${product.borderClass} ${product.bgClass} p-8 md:p-12`}
              >
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <Badge variant={product.tagVariant}>{product.tag}</Badge>
                    <h2
                      className="mt-4 font-display font-bold text-2xl md:text-3xl text-ink dark:text-cloud-white leading-tight"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {product.name}
                    </h2>
                    <p
                      className={`mt-2 text-lg font-medium ${product.accentClass}`}
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {product.headline}
                    </p>
                    <p className="mt-4 text-graphite dark:text-silver leading-relaxed">
                      {product.body}
                    </p>
                    <div className="mt-7">
                      <Button href="/contact" variant="primary">
                        Request a Walkthrough
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60 mb-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      Use Cases
                    </p>
                    <ul className="space-y-2.5" role="list">
                      {product.useCases.map((uc) => (
                        <li key={uc} className="flex items-center gap-3 text-sm text-slate-text dark:text-mist">
                          <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${product.iconBg} ${product.accentClass}`} aria-hidden="true" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-chalk dark:bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Product Philosophy"
              heading="Productized where useful. Customized where necessary."
              body="We do not force every client into a rigid software template. Our products act as accelerators and operating layers that reduce delivery time, improve repeatability, and provide a stronger base for enterprise deployment."
            />
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Request a product walkthrough."
              body="See how Voice, Signal, and Flow can work together in your operating environment."
              primaryLabel="Request a Walkthrough"
              primaryHref="/contact"
              secondaryLabel="Explore Services"
              secondaryHref="/services"
            />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
