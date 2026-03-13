import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About HawkSavvy | Chicago-Based Sovereign AI Enterprise",
  description:
    "Learn how HawkSavvy combines frontier AI, open-stack flexibility, governance, and specialized human execution to build enterprise-grade sovereign AI systems.",
};

const differentiators = [
  "We build for production, not demos",
  "We design governance into the system, not after the fact",
  "We combine productized assets with custom implementation depth",
  "We keep humans in meaningful control loops",
  "We support open, hybrid, and model-flexible pathways where needed",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] rounded-full bg-signal-teal/4 dark:bg-signal-teal/7 blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="neutral">About HawkSavvy</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              A modern AI enterprise built for real operating environments.
            </h1>
            <p className="mt-6 text-graphite dark:text-silver text-xl leading-relaxed max-w-2xl">
              HawkSavvy exists to help organizations move beyond fragmented tools and generic automation into governed AI systems that work inside the realities of enterprise operations.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Company story */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader
                eyebrow="Company Story"
                heading="Built at the intersection of technical depth and operational accountability."
                align="left"
              />
              <p className="mt-6 text-graphite dark:text-silver leading-relaxed">
                HawkSavvy combines deep AI implementation capability with a grounded execution model. We build bespoke client systems while also developing internal intellectual property that accelerates delivery, improves quality consistency, and creates repeatable value across sectors.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40 p-8 space-y-6">
                {[
                  { label: "Headquartered", value: "Chicago, Illinois" },
                  { label: "Delivery model", value: "Global, distributed capability" },
                  { label: "Focus", value: "Enterprise & high-trust sectors" },
                  { label: "Model", value: "Client delivery + internal IP" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-hairline dark:border-deep-slate pb-5 last:border-0 last:pb-0">
                    <span className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-ink dark:text-cloud-white" style={{ fontFamily: "var(--font-manrope)" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Dual-track model */}
      <section className="section-padding bg-chalk dark:bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="How We Operate"
              heading="A dual-track model built for speed, quality, and durable scale."
            />
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <FadeUp delay={0.08}>
              <div className="rounded-2xl border border-signal-teal/20 bg-signal-teal/5 dark:bg-signal-teal/8 p-10">
                <div className="w-10 h-10 rounded-xl bg-signal-teal/15 flex items-center justify-center text-signal-teal mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.01-1.01a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15a2 2 0 0 1 .27.92z"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
                  Client Delivery
                </h3>
                <p className="text-graphite dark:text-silver leading-relaxed">
                  We design bespoke AI ecosystems tailored to sector-specific needs, business constraints, and measurable outcomes. Every engagement is structured around real workflows, not template implementations.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="rounded-2xl border border-vector-sky/20 bg-vector-sky/5 dark:bg-vector-sky/8 p-10">
                <div className="w-10 h-10 rounded-xl bg-vector-sky/15 flex items-center justify-center text-sky-dark dark:text-vector-sky mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
                  Internal IP
                </h3>
                <p className="text-graphite dark:text-silver leading-relaxed">
                  We build reusable modules, orchestration layers, and product assets that reduce implementation time and harden repeated patterns into scalable systems with better quality control.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-obsidian dark:bg-obsidian text-cloud-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="sand">Philosophy</Badge>
            <blockquote
              className="mt-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-cloud-white max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Intelligence without control is risk. Automation without accountability is theater.
            </blockquote>
            <p className="mt-6 text-silver text-lg leading-relaxed max-w-2xl mx-auto">
              That belief shapes how we design, deploy, and govern every engagement. HawkSavvy aims for active usefulness, not passive novelty. Every system must be understandable, controllable, and commercially relevant.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Global footprint */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader
                eyebrow="Operating Footprint"
                heading="Chicago-led, globally executed."
                align="left"
              />
              <p className="mt-5 text-graphite dark:text-silver leading-relaxed">
                HawkSavvy is based out of Chicago, with delivery capability extending across global technical resources, distributed infrastructure environments, and specialized teams operating across select regions in Asia and beyond.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Commercial Base", value: "Chicago, IL" },
                  { label: "Delivery Reach", value: "Global" },
                  { label: "Infrastructure", value: "Hybrid-capable" },
                  { label: "Time Zones", value: "Multi-region" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40 p-5 text-center">
                    <p className="font-display font-bold text-xl text-ink dark:text-cloud-white" style={{ fontFamily: "var(--font-manrope)" }}>
                      {item.value}
                    </p>
                    <p className="text-xs text-pewter dark:text-silver/60 mt-1 font-mono uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-chalk dark:bg-deep-slate/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="What Makes Us Different"
              heading="What separates us from generic AI vendors."
            />
          </FadeUp>
          <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {differentiators.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <li className="flex items-start gap-4 rounded-xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate/60 px-6 py-5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-signal-teal/15 flex items-center justify-center mt-0.5" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-slate-text dark:text-mist">{item}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Talk to the team behind HawkSavvy."
              body="If your business needs a serious AI operating layer — not another experiment — start the conversation here."
              primaryLabel="Get in Touch"
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
