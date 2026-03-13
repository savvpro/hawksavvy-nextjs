import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions | HawkSavvy Sector AI Solutions",
  description:
    "HawkSavvy builds sector-aware AI systems for healthcare, pharmacy, wealth, advisory, education, and service operations.",
};

const solutions = [
  {
    id: "healthcare",
    tag: "Healthcare & Pharmacy",
    tagVariant: "teal" as const,
    headline: "AI systems built for high-trust clinical and operational environments.",
    body: "AI systems for communication, knowledge access, workflow coordination, intake, document handling, and pharmacy-adjacent operational support. Designed for environments where accuracy, compliance sensitivity, and human review matter.",
    painPoints: [
      "Fragmented patient intake and communication",
      "Staff time consumed by repetitive coordination",
      "Knowledge access across policy-sensitive content",
      "Document and record workflow inefficiency",
    ],
    systems: [
      "Intake and communication agents",
      "Pharmacy workflow coordination",
      "Policy-aware knowledge systems",
      "Internal operational assistance",
    ],
  },
  {
    id: "wealth",
    tag: "Wealth & Advisory",
    tagVariant: "sky" as const,
    headline: "AI for client engagement, internal leverage, and digital authority.",
    body: "AI systems for lead handling, internal knowledge support, follow-up, digital authority content systems, and concierge-style client communication. Built for compliance-sensitive advisory environments.",
    painPoints: [
      "Delayed lead response and follow-through",
      "Advisor bandwidth consumed by routine tasks",
      "Content and publishing operations without scale",
      "Inconsistent client communication quality",
    ],
    systems: [
      "Lead engagement and qualification agents",
      "Internal knowledge and research assistance",
      "Digital authority content operations",
      "Client communication workflows",
    ],
  },
  {
    id: "education",
    tag: "Education & Training",
    tagVariant: "sand" as const,
    headline: "AI for enrollment, communication, and learning operations at scale.",
    body: "AI-powered enrollment support, student communication, internal assistance, content operations, and information delivery workflows. Designed for institutions and training organizations with high communication volume.",
    painPoints: [
      "Enrollment inquiry volume exceeding team capacity",
      "Student communication inconsistency",
      "Content operations without sustainable scale",
      "Fragmented internal knowledge access",
    ],
    systems: [
      "Enrollment and inquiry handling agents",
      "Student communication workflows",
      "Learning content operations",
      "Internal staff assistance systems",
    ],
  },
  {
    id: "professional",
    tag: "Professional Services",
    tagVariant: "neutral" as const,
    headline: "Operational leverage for specialist and advisory firms.",
    body: "Operational assistants, document chasing, scheduling, follow-up systems, internal research support, and structured workflow automation for specialist firms that need execution without overhead.",
    painPoints: [
      "Fee-earner time spent on non-billable coordination",
      "Document and workflow tracking inefficiency",
      "Client follow-up falling through the cracks",
      "Research operations lacking structure",
    ],
    systems: [
      "Operational and scheduling assistants",
      "Document and follow-up workflow agents",
      "Internal research and knowledge tools",
      "Structured workflow automation",
    ],
  },
  {
    id: "operations",
    tag: "Service Operations",
    tagVariant: "teal" as const,
    headline: "Front-office AI for service-heavy, high-volume businesses.",
    body: "Front-office AI, booking, support triage, callback systems, workflow routing, and operational visibility across service-heavy businesses that need responsiveness and throughput without growing headcount proportionally.",
    painPoints: [
      "High inbound communication volume",
      "Booking and scheduling coordination friction",
      "Support triage without intelligent routing",
      "Operational visibility gaps across workflows",
    ],
    systems: [
      "Front-office conversational AI",
      "Booking and scheduling automation",
      "Support triage and routing agents",
      "Workflow visibility and escalation",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] rounded-full bg-signal-teal/4 dark:bg-signal-teal/7 blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="neutral">Solutions</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-3xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Sector-aware solutions built for real operational contexts.
            </h1>
            <p className="mt-6 text-graphite dark:text-silver text-xl leading-relaxed max-w-2xl">
              HawkSavvy does not believe generic AI value is enough. The strongest systems reflect the vocabulary, workflows, constraints, and commercial realities of the sectors they serve.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-10">
          {solutions.map((sol, i) => (
            <FadeUp key={sol.id} delay={i * 0.06}>
              <div
                id={sol.id}
                className="rounded-2xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/30 p-8 md:p-10"
              >
                <div className="grid lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3">
                    <Badge variant={sol.tagVariant}>{sol.tag}</Badge>
                    <h2
                      className="mt-4 font-display font-bold text-2xl text-ink dark:text-cloud-white leading-snug"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {sol.headline}
                    </h2>
                    <p className="mt-4 text-graphite dark:text-silver leading-relaxed">
                      {sol.body}
                    </p>
                    <div className="mt-6">
                      <Button href="/contact" variant="secondary" size="sm">
                        Discuss This Sector →
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-2 grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60 mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                        Common Challenges
                      </p>
                      <ul className="space-y-2" role="list">
                        {sol.painPoints.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-xs text-graphite dark:text-silver">
                            <span className="flex-shrink-0 w-1 h-1 rounded-full bg-controlled-copper mt-1.5" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-pewter dark:text-silver/60 mb-3" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                        System Types
                      </p>
                      <ul className="space-y-2" role="list">
                        {sol.systems.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-xs text-graphite dark:text-silver">
                            <span className="flex-shrink-0 w-1 h-1 rounded-full bg-signal-teal mt-1.5" aria-hidden="true" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-chalk dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Looking for a sector-specific AI solution?"
              body="Tell us your context. We'll scope the right system for your operating environment."
              primaryLabel="Discuss Your Use Case"
              primaryHref="/contact"
              secondaryLabel="View Products"
              secondaryHref="/products"
            />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
