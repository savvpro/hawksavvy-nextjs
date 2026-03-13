import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Resource Augmentation | HawkSavvy",
  description:
    "HawkSavvy provides specialized AI resource augmentation for enterprise automation, orchestration, system deployment, and controlled delivery execution.",
};

const useCases = [
  "Enterprise AI pilots moving toward production",
  "Internal teams lacking implementation bandwidth",
  "Workflow automation programs needing operator support",
  "Product teams building AI-enabled experiences",
  "Businesses needing managed continuity after deployment",
];

const roles = [
  { label: "AI Operators", desc: "Specialists managing agent behavior, outputs, and escalation logic" },
  { label: "Workflow Designers", desc: "Professionals mapping and implementing structured automation paths" },
  { label: "Implementation Engineers", desc: "Technical builders deploying retrieval, orchestration, and integration layers" },
  { label: "Prompt & Policy Specialists", desc: "Experts managing knowledge boundaries, tone, and system behavior" },
  { label: "Deployment Support", desc: "Product-minded resources ensuring quality delivery and rollout readiness" },
  { label: "System Refinement Resources", desc: "Continuous improvement specialists for post-launch iteration" },
];

const deliverySteps = [
  { number: "01", label: "Capability Mapping", desc: "We assess the skills, capacity, and specialist coverage required" },
  { number: "02", label: "Use-Case Alignment", desc: "We map resources to specific delivery objectives and outcomes" },
  { number: "03", label: "Pod Design", desc: "We structure the team, responsibilities, and operating boundaries" },
  { number: "04", label: "Operating Cadence", desc: "We establish reporting rhythm, escalation paths, and quality checkpoints" },
  { number: "05", label: "Handoff or Continuity", desc: "We define transition plans or ongoing embedded delivery arrangements" },
];

export default function ResourceAugmentationPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-sovereign-sand/5 dark:bg-sovereign-sand/8 blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="sand">Resource Augmentation</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Specialized AI resource augmentation for serious enterprise execution.
            </h1>
            <p className="mt-6 text-graphite dark:text-silver text-xl leading-relaxed max-w-2xl">
              HawkSavvy provides specialized AI talent capacity for organizations that need more than advice but are not looking to build an entire internal AI team from scratch.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Not labor arbitrage */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader
                eyebrow="Our Model"
                heading="Augmentation, not labor arbitrage."
                align="left"
              />
              <p className="mt-5 text-graphite dark:text-silver leading-relaxed">
                Our augmentation model is designed around specialist capability: AI operators, workflow designers, implementation engineers, prompt and policy specialists, product-minded deployment support, and system refinement resources.
              </p>
              <p className="mt-4 text-graphite dark:text-silver leading-relaxed">
                We do not supply generic contractors. We supply disciplined, accountable professionals with clear operating roles within a governed delivery structure.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-3">
                {roles.map((role) => (
                  <div
                    key={role.label}
                    className="flex items-start gap-4 rounded-xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40 px-5 py-4"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal-teal mt-2" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-ink dark:text-cloud-white" style={{ fontFamily: "var(--font-manrope)" }}>
                        {role.label}
                      </p>
                      <p className="text-xs text-graphite dark:text-silver mt-0.5">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Where it fits */}
      <section className="section-padding bg-chalk dark:bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Where It Fits"
              heading="Ideal for organizations that need to move faster without losing control."
            />
          </FadeUp>
          <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {useCases.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <li className="flex items-start gap-4 rounded-xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate/60 px-6 py-5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sovereign-sand/20 flex items-center justify-center mt-0.5" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#D6C6A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-slate-text dark:text-mist">{item}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery model */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Delivery Model"
              heading="How HawkSavvy augmentation works."
            />
          </FadeUp>
          <div className="mt-14 grid sm:grid-cols-5 gap-5">
            {deliverySteps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-sovereign-sand/15 border border-sovereign-sand/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xs font-mono font-bold text-sand-dark dark:text-sovereign-sand" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-sm text-ink dark:text-cloud-white mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
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
      <section className="section-padding bg-chalk dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Scope an augmentation pod."
              body="Tell us what capability you need. We'll design a pod structure that fits your team and delivery requirements."
              primaryLabel="Scope an Augmentation Pod"
              primaryHref="/contact"
              secondaryLabel="Learn About Services"
              secondaryHref="/services"
            />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
