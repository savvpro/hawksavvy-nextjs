import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sovereign AI | HawkSavvy",
  description:
    "See how HawkSavvy approaches sovereign AI through model optionality, deployment control, governance, auditability, knowledge design, and human-guided execution.",
};

const layers = [
  {
    number: "01",
    title: "Model Sovereignty",
    body: "Choose the right model stack for the job, not a permanent black-box dependency. Open, closed, fine-tuned, or hybrid — the architecture serves the use case.",
    color: "border-signal-teal/30 bg-signal-teal/5 dark:bg-signal-teal/8",
    accent: "text-signal-teal",
  },
  {
    number: "02",
    title: "Deployment Sovereignty",
    body: "Public cloud, controlled cloud, hybrid, or structured enterprise environment based on need, risk profile, and data residency requirements.",
    color: "border-vector-sky/30 bg-vector-sky/5 dark:bg-vector-sky/8",
    accent: "text-sky-dark dark:text-vector-sky",
  },
  {
    number: "03",
    title: "Data Sovereignty",
    body: "Ground systems in approved knowledge boundaries, access policies, and governed information flow. No uncontrolled data ingestion or retrieval.",
    color: "border-sovereign-sand/30 bg-sovereign-sand/5 dark:bg-sovereign-sand/8",
    accent: "text-sand-dark dark:text-sovereign-sand",
  },
  {
    number: "04",
    title: "Workflow Sovereignty",
    body: "AI must adapt to the business process, not force the business into brittle automation patterns built around a vendor's preferred architecture.",
    color: "border-controlled-copper/30 bg-controlled-copper/5 dark:bg-controlled-copper/8",
    accent: "text-controlled-copper",
  },
  {
    number: "05",
    title: "Human Sovereignty",
    body: "Critical actions stay visible, reviewable, and accountable. Human oversight is not an afterthought — it is built into the system's operating structure.",
    color: "border-signal-teal/30 bg-signal-teal/5 dark:bg-signal-teal/8",
    accent: "text-signal-teal",
  },
];

const frameworkSteps = [
  { step: "01", label: "Define Goals", desc: "Map business-critical workflows and sovereignty requirements" },
  { step: "02", label: "Knowledge Architecture", desc: "Identify sources, access controls, and policy boundaries" },
  { step: "03", label: "Model Selection", desc: "Choose models and architecture by use case and risk profile" },
  { step: "04", label: "Agent Implementation", desc: "Implement behavior, tool access, and review thresholds" },
  { step: "05", label: "Observability", desc: "Instrument logging, monitoring, and performance refinement" },
  { step: "06", label: "Operator Training", desc: "Train users and operators for accountable governance" },
];

export default function SovereignAIPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-pearl dark:bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[600px] rounded-full bg-signal-teal/5 dark:bg-signal-teal/8 blur-[120px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 max-w-3xl">
          <FadeUp>
            <Badge variant="teal">Sovereign AI</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-ink dark:text-cloud-white"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Sovereign AI is about control, not just capability.
            </h1>
            <p className="mt-6 text-graphite dark:text-silver text-xl leading-relaxed max-w-2xl">
              For HawkSavvy, sovereign AI means an organization retains meaningful control over how intelligence is deployed, governed, integrated, and operated across its business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Five layers */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Five Layers of Sovereignty"
              heading="What sovereignty means at HawkSavvy."
            />
          </FadeUp>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {layers.map((layer, i) => (
              <FadeUp key={layer.number} delay={i * 0.08}>
                <div className={`h-full rounded-2xl border ${layer.color} p-8`}>
                  <p
                    className={`text-3xl font-bold font-mono mb-4 ${layer.accent} opacity-30`}
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    aria-hidden="true"
                  >
                    {layer.number}
                  </p>
                  <h3
                    className="font-display font-semibold text-lg text-ink dark:text-cloud-white mb-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {layer.title}
                  </h3>
                  <p className="text-graphite dark:text-silver text-sm leading-relaxed">
                    {layer.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-padding bg-obsidian dark:bg-obsidian text-cloud-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <Badge variant="sand">Why It Matters</Badge>
              <h2
                className="mt-5 font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-cloud-white"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Enterprise AI breaks when control is treated as a secondary concern.
              </h2>
              <p className="mt-6 text-silver text-lg leading-relaxed">
                The moment AI touches customer communication, internal operations, policy-sensitive knowledge, or decision support, governance stops being optional. Without it, organizations increase risk, reduce explainability, and create operational fragility.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="section-padding bg-chalk dark:bg-deep-slate/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Our Framework"
              heading="How we build sovereign AI systems."
            />
          </FadeUp>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {frameworkSteps.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.08}>
                <div className="rounded-xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate/60 p-6 flex gap-5">
                  <span
                    className="flex-shrink-0 text-xs font-mono font-bold text-signal-teal opacity-70 pt-1"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink dark:text-cloud-white text-sm mb-1.5" style={{ fontFamily: "var(--font-manrope)" }}>
                      {item.label}
                    </h3>
                    <p className="text-graphite dark:text-silver text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="section-padding bg-white dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader
                eyebrow="Open Stack Compatibility"
                heading="Open source matters because sovereignty requires optionality."
                align="left"
              />
              <p className="mt-5 text-graphite dark:text-silver leading-relaxed">
                HawkSavvy believes open ecosystems, Git-native development culture, and composable infrastructure matter because they reduce unnecessary dependency and expand architectural freedom.
              </p>
              <p className="mt-4 text-graphite dark:text-silver leading-relaxed">
                Frontier closed models still matter, but they should sit inside a broader strategy of control and choice — not as the only option.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Start a Sovereign AI Consultation
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-3">
                {[
                  { label: "Open-source models", status: "Supported" },
                  { label: "Proprietary frontier models", status: "Supported" },
                  { label: "Self-hosted deployment", status: "Supported" },
                  { label: "Private cloud deployment", status: "Supported" },
                  { label: "Hybrid architecture", status: "Supported" },
                  { label: "Vendor lock-in", status: "Avoided" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40"
                  >
                    <span className="text-sm text-slate-text dark:text-mist">{item.label}</span>
                    <span
                      className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                        item.status === "Avoided"
                          ? "text-controlled-copper"
                          : "text-signal-teal"
                      }`}
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-chalk dark:bg-midnight-slate">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <CTASection
              heading="Build a sovereign AI roadmap for your business."
              primaryLabel="Start a Sovereign AI Consultation"
              primaryHref="/contact"
              variant="dark"
            />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
