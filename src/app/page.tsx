import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "HawkSavvy | Sovereign AI Systems for Enterprise Execution",
  description:
    "HawkSavvy designs, deploys, and governs sovereign AI systems for enterprise operations, customer communication, workflow automation, and sector-specific execution.",
};

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Agentic Systems",
    body: "AI agents for customer communication, internal assistance, and workflow execution — grounded in approved knowledge and connected to real actions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Knowledge Infrastructure",
    body: "Retrieval, policy-aware knowledge systems, structured data grounding, and controlled enterprise memory for trustworthy agent performance.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Human-Augmented Delivery",
    body: "Specialized AI operators and technical resources who help deploy, refine, and run systems with discipline, clear cadence, and accountability.",
  },
];

const products = [
  {
    id: "voice",
    tag: "Voice",
    name: "HawkSavvy Voice",
    body: "Conversational AI for voice and chat, grounded in approved knowledge and connected to action.",
    color: "from-signal-teal/10 to-transparent",
    accent: "text-signal-teal",
    border: "border-signal-teal/20",
  },
  {
    id: "signal",
    tag: "Signal",
    name: "HawkSavvy Signal",
    body: "Growth intelligence and campaign systems for market discovery, content operations, and strategic publishing.",
    color: "from-vector-sky/10 to-transparent",
    accent: "text-sky-dark dark:text-vector-sky",
    border: "border-vector-sky/20",
  },
  {
    id: "flow",
    tag: "Flow",
    name: "HawkSavvy Flow",
    body: "An agentic operating layer for structured execution, accountability, and workflow orchestration.",
    color: "from-sovereign-sand/10 to-transparent",
    accent: "text-sand-dark dark:text-sovereign-sand",
    border: "border-sovereign-sand/20",
  },
];

const sectors = [
  { label: "Healthcare & Pharmacy", icon: "⚕" },
  { label: "Wealth & Advisory", icon: "◈" },
  { label: "Education & Training", icon: "◉" },
  { label: "Professional Services", icon: "◆" },
  { label: "Service Operations", icon: "◎" },
];

const services = [
  "Sovereign AI Advisory",
  "Enterprise AI Buildouts",
  "AI Workflow Automation",
  "Knowledge System Design",
  "Resource Augmentation",
  "Managed AI Operations",
];

const sovereigntyPoints = [
  "Control your intelligence layer",
  "Reduce lock-in risk",
  "Keep governance visible",
  "Align AI to real business rules",
  "Preserve human accountability",
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        aria-label="Hero"
        className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-pearl dark:bg-obsidian"
      >
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-signal-teal/5 dark:bg-signal-teal/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-vector-sky/4 dark:bg-vector-sky/6 blur-[100px]" />
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-ink dark:text-cloud-white" />
          </svg>
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <FadeUp delay={0}>
              <Badge variant="teal">Chicago-Based Sovereign AI Enterprise</Badge>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1
                className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.08] tracking-tight text-ink dark:text-cloud-white"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Sovereign AI systems for enterprises that need{" "}
                <span className="text-signal-teal">control</span>,{" "}
                <span className="text-teal-dark dark:text-vector-sky">speed</span>, and real execution.
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-7 text-graphite dark:text-silver text-lg md:text-xl leading-relaxed max-w-2xl">
                HawkSavvy designs, deploys, and governs AI agents, knowledge systems, and human-augmented workflows for organizations that cannot afford fragile automation, black-box dependency, or pilot-stage theater.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Book a Strategy Call
                </Button>
                <Button href="/solutions" variant="secondary" size="lg">
                  Explore Solutions
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.26}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Model-flexible", "Human-guided", "Open-stack compatible", "Enterprise-focused"].map((s, i) => (
                  <span key={s} className="flex items-center gap-2 text-sm text-pewter dark:text-silver/70">
                    {i > 0 && <span className="w-1 h-1 rounded-full bg-hairline dark:bg-steel/40" aria-hidden="true" />}
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      {s}
                    </span>
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── What HawkSavvy does ─── */}
      <section className="section-padding bg-white dark:bg-midnight-slate" aria-label="Core capabilities">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="What We Do"
              heading="We turn AI from scattered capability into governed execution."
              body="Most organizations do not need more AI noise. They need systems that fit their data boundaries, align with real workflows, integrate with human teams, and stay accountable in production. HawkSavvy delivers that layer."
            />
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-hairline dark:border-deep-slate bg-pearl dark:bg-deep-slate/40 p-8 hover:border-signal-teal/40 dark:hover:border-signal-teal/30 hover:shadow-lg hover:shadow-signal-teal/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-signal-teal/10 dark:bg-signal-teal/15 flex items-center justify-center text-signal-teal mb-5">
                    {cap.icon}
                  </div>
                  <h3
                    className="font-display font-semibold text-lg text-ink dark:text-cloud-white mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-graphite dark:text-silver text-sm leading-relaxed">
                    {cap.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sovereign AI ─── */}
      <section className="section-padding bg-chalk dark:bg-obsidian relative overflow-hidden" aria-label="Sovereign AI approach">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-signal-teal/4 dark:bg-signal-teal/6 blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <Badge variant="sand">Sovereign by Design</Badge>
                <h2
                  className="mt-5 font-display font-bold text-3xl md:text-4xl lg:text-[2.8rem] leading-tight tracking-tight text-ink dark:text-cloud-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Control is no longer optional.
                </h2>
                <p className="mt-5 text-graphite dark:text-silver text-lg leading-relaxed">
                  When AI touches operations, customer communication, internal knowledge, or decision support, sovereignty matters. That means deployment choice, model optionality, governance, permissions, auditability, and responsible human oversight.
                </p>
                <ul className="mt-8 space-y-3" role="list">
                  {sovereigntyPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-slate-text dark:text-mist">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-signal-teal/15 flex items-center justify-center" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Button href="/sovereign-ai" variant="primary">
                    See Our Sovereign AI Approach
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="rounded-2xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate p-8 space-y-1">
                {[
                  { label: "Model Sovereignty", desc: "Choose the right model stack, not a black-box dependency" },
                  { label: "Deployment Sovereignty", desc: "Cloud, hybrid, or structured enterprise environment" },
                  { label: "Data Sovereignty", desc: "Approved knowledge boundaries and governed information flow" },
                  { label: "Workflow Sovereignty", desc: "AI adapts to the business process, not the reverse" },
                  { label: "Human Sovereignty", desc: "Critical actions stay visible, reviewable, accountable" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex gap-4 p-4 rounded-xl ${i % 2 === 0 ? "bg-chalk dark:bg-deep-slate/50" : ""}`}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-md bg-signal-teal/10 flex items-center justify-center text-signal-teal text-xs font-mono font-semibold"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink dark:text-cloud-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        {item.label}
                      </p>
                      <p className="text-xs text-graphite dark:text-silver mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section className="section-padding bg-white dark:bg-midnight-slate" aria-label="Products">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Product Ecosystem"
              heading="Productized systems built for repeatable enterprise value."
              body="HawkSavvy combines solution delivery with internal product IP so implementations move faster, quality stays consistent, and enterprise deployments scale with more control."
            />
          </FadeUp>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.1}>
                <div className={`h-full rounded-2xl border ${p.border} bg-gradient-to-b ${p.color} bg-pearl dark:bg-deep-slate/30 p-8 hover:shadow-lg transition-all duration-300`}>
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest font-mono mb-3 ${p.accent}`}
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {p.tag}
                  </p>
                  <h3
                    className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-graphite dark:text-silver text-sm leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div className="mt-10 text-center">
              <Button href="/products" variant="secondary">
                Explore All Products
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Sectors ─── */}
      <section className="section-padding bg-chalk dark:bg-deep-slate/20" aria-label="Sectors served">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Sectors"
              heading="Built for high-trust, workflow-heavy sectors."
            />
          </FadeUp>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {sectors.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate/60 text-slate-text dark:text-mist hover:border-signal-teal/40 hover:text-teal-dark dark:hover:text-signal-teal transition-all duration-200">
                  <span aria-hidden="true" className="text-signal-teal">{s.icon}</span>
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.4}>
            <div className="mt-10 text-center">
              <Button href="/solutions" variant="ghost">
                View All Solutions →
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Services strip ─── */}
      <section className="section-padding bg-white dark:bg-midnight-slate" aria-label="Services overview">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Services"
                  heading="From advisory to deployment to ongoing augmentation."
                  align="left"
                />
                <div className="mt-8">
                  <Button href="/services" variant="primary">
                    Explore All Services
                  </Button>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <div
                    key={svc}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40 text-sm text-slate-text dark:text-mist"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-teal flex-shrink-0" aria-hidden="true" />
                    {svc}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── Human + AI Philosophy ─── */}
      <section className="section-padding bg-obsidian dark:bg-obsidian text-cloud-white" aria-label="Operating philosophy">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="sand">Operating Philosophy</Badge>
            <blockquote className="mt-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-cloud-white max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              HawkSavvy runs on a human-accountable AI operating philosophy.
            </blockquote>
            <p className="mt-6 text-silver text-lg leading-relaxed max-w-2xl mx-auto">
              We do not treat AI as a replacement fantasy. We treat it as a force multiplier. Our systems are designed to reduce manual friction, increase execution speed, and preserve accountability through guided workflows, review layers, and controlled escalation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="section-padding bg-chalk dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Build AI your business can actually trust and operate."
              primaryLabel="Schedule a Discovery Session"
              primaryHref="/contact"
              secondaryLabel="Contact HawkSavvy"
              secondaryHref="/contact"
              variant="dark"
            />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
