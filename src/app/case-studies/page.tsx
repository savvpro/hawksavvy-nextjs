import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | HawkSavvy",
  description:
    "See how HawkSavvy approaches sovereign AI systems across growth, communication, operations, and sector-specific execution.",
};

const caseStudies = [
  {
    id: "education-growth",
    sector: "Education · Growth Operations",
    sectorVariant: "sky" as const,
    number: "01",
    title: "AI-Driven Content and SEO Operating System",
    challenge:
      "The client needed more content velocity, stronger SEO structure, and a system capable of supporting brand-aligned campaign execution at scale without adding proportional headcount.",
    approach:
      "Built a governed AI-driven content and SEO engine with structured publishing workflows, topic modeling, and brand policy enforcement baked into the system architecture.",
    outcomes: [
      "Increased content throughput significantly",
      "Improved SEO architecture and repeatability",
      "Stronger campaign alignment and consistency",
    ],
  },
  {
    id: "wealth-advisory",
    sector: "Wealth · Advisory",
    sectorVariant: "sand" as const,
    number: "02",
    title: "Multi-Pillar AI Ecosystem for Advisory Operations",
    challenge:
      "Need for always-on lead engagement, internal knowledge support, and compliance-conscious digital authority workflows in a regulated advisory environment.",
    approach:
      "Designed a multi-pillar AI ecosystem across communication, internal assistance, and content operations — with compliance-sensitive knowledge boundaries built into each layer.",
    outcomes: [
      "Better responsiveness at scale",
      "Stronger internal research leverage",
      "More consistent client-facing activity",
    ],
  },
  {
    id: "pharmacy-operations",
    sector: "Pharmacy · Operations",
    sectorVariant: "teal" as const,
    number: "03",
    title: "AI-Enabled Operating Framework for Pharmacy Workflows",
    challenge:
      "Fragmented operational flows and need for stronger coordination across inventory, documentation, and process layers in a workflow-heavy environment.",
    approach:
      "Mapped and designed an AI-enabled operating framework around business-critical workflows with structured automation, human review points, and centralized operational visibility.",
    outcomes: [
      "More centralized operational intelligence",
      "Stronger process continuity across teams",
      "Reduced coordination friction",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full bg-vector-sky/4 dark:bg-vector-sky/6 blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="neutral">Case Studies</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Selected applications of our operating model.
            </h1>
            <p className="mt-6 text-graphite dark:text-silver text-xl leading-relaxed max-w-2xl">
              HawkSavvy's work spans AI-powered growth systems, conversational platforms, workflow automation, and sector-specific operating environments.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case study cards */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <FadeUp key={cs.id} delay={i * 0.08}>
              <article
                id={cs.id}
                className="rounded-2xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/30 p-8 md:p-12"
                aria-label={cs.title}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                  <Badge variant={cs.sectorVariant}>{cs.sector}</Badge>
                  <span
                    className="text-2xl font-mono font-bold text-ink dark:text-deep-slate/70 dark:text-deep-slate"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    aria-hidden="true"
                  >
                    {cs.number}
                  </span>
                </div>

                <h2
                  className="font-display font-bold text-2xl text-ink dark:text-cloud-white mb-8"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {cs.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60 mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      Challenge
                    </p>
                    <p className="text-sm text-slate-text dark:text-mist leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60 mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      Approach
                    </p>
                    <p className="text-sm text-slate-text dark:text-mist leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60 mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                      Outcomes
                    </p>
                    <ul className="space-y-2" role="list">
                      {cs.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-text dark:text-mist">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal-teal mt-1.5" aria-hidden="true" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-chalk dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Request relevant examples for your sector."
              body="We can share more specific material aligned to your use case and operating context."
              primaryLabel="Request Relevant Examples"
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
