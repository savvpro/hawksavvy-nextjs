import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | HawkSavvy Enterprise AI Advisory, Buildouts, and Operations",
  description:
    "HawkSavvy provides sovereign AI advisory, enterprise AI buildouts, knowledge systems, workflow automation, and managed AI operations for modern businesses.",
};

const services = [
  {
    id: "advisory",
    number: "01",
    title: "Sovereign AI Advisory",
    body: "We help organizations define the right AI posture before implementation begins: use-case prioritization, governance requirements, model strategy, deployment architecture, and operating design.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
  },
  {
    id: "buildouts",
    number: "02",
    title: "Enterprise AI Buildouts",
    body: "Custom design and deployment of AI agents, retrieval systems, workflow orchestration, and human-in-the-loop operating layers built around real business needs — not generic templates.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: "knowledge",
    number: "03",
    title: "Knowledge System Design",
    body: "Controlled knowledge bases, retrieval architecture, source approvals, enterprise memory structures, and context delivery systems for trustworthy and policy-aligned agent performance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    id: "automation",
    number: "04",
    title: "Workflow Automation and Agentic Execution",
    body: "We automate high-friction workflows across operations, customer handling, follow-up, internal coordination, and task execution while preserving accountability and review logic.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: "managed",
    number: "05",
    title: "Managed AI Operations",
    body: "Ongoing system monitoring, iteration, prompt and policy refinement, deployment updates, and operational tuning so AI systems do not decay after launch.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: "integration",
    number: "06",
    title: "Integration-Led Delivery",
    body: "Where the use case requires it, HawkSavvy connects AI into the surrounding software environment: data sources, workflow platforms, communication layers, and operational tools.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
];

const processSteps = [
  { label: "Assess", desc: "Understand the operating environment, use cases, and constraints" },
  { label: "Architect", desc: "Design the system, governance model, and integration approach" },
  { label: "Deploy", desc: "Build and implement with quality, testing, and operator readiness" },
  { label: "Govern", desc: "Instrument observability, access controls, and review structures" },
  { label: "Refine", desc: "Iterate based on real usage data, performance, and feedback" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 w-[700px] h-[500px] rounded-full bg-signal-teal/4 dark:bg-signal-teal/7 blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="teal">Services</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Services built to move AI from concept to controlled production.
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <FadeUp key={svc.id} delay={i * 0.07}>
                <div
                  id={svc.id}
                  className="h-full rounded-2xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40 p-8 hover:border-signal-teal/30 hover:shadow-lg hover:shadow-signal-teal/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-signal-teal/10 dark:bg-signal-teal/15 flex items-center justify-center text-signal-teal">
                      {svc.icon}
                    </div>
                    <span
                      className="text-xs font-mono font-semibold text-signal-teal/60 pt-3"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                      aria-hidden="true"
                    >
                      {svc.number}
                    </span>
                  </div>
                  <h2
                    className="font-display font-bold text-lg text-ink dark:text-cloud-white mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {svc.title}
                  </h2>
                  <p className="text-graphite dark:text-silver text-sm leading-relaxed">
                    {svc.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process band */}
      <section className="section-padding bg-chalk dark:bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="How We Work"
              heading="A structured delivery process for every engagement."
            />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <FadeUp key={step.label} delay={i * 0.07}>
                <div className="relative text-center">
                  <div className="w-10 h-10 rounded-full bg-signal-teal/10 dark:bg-signal-teal/15 border border-signal-teal/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xs font-mono font-bold text-signal-teal" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm text-ink dark:text-cloud-white mb-1.5" style={{ fontFamily: "var(--font-manrope)" }}>
                    {step.label}
                  </h3>
                  <p className="text-xs text-graphite dark:text-silver leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Need a specific AI operating model?"
              body="We can scope the right service mix around your sector, risk profile, and workflow maturity."
              primaryLabel="Book a Services Consultation"
              primaryHref="/contact"
              secondaryLabel="View Solutions"
              secondaryHref="/solutions"
            />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
