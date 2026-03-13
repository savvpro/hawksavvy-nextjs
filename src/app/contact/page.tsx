import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact HawkSavvy | Book a Strategy Call",
  description:
    "Contact HawkSavvy to discuss sovereign AI strategy, enterprise AI buildouts, product walkthroughs, or sector-specific system design.",
};

const steps = [
  { step: "01", label: "We review the inquiry", desc: "We read every submission and assess context before responding." },
  { step: "02", label: "We align on use case and scope", desc: "A brief pre-call or email exchange to define the right focus." },
  { step: "03", label: "We schedule a strategy call", desc: "A focused, structured session aligned to your operating context." },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-pearl dark:bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <Badge variant="teal">Contact</Badge>
            <h1
              className="mt-5 font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight text-ink dark:text-cloud-white max-w-2xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Let&rsquo;s discuss the right AI operating layer for your business.
            </h1>
            <p className="mt-5 text-graphite dark:text-silver text-lg leading-relaxed max-w-xl">
              Use the form below to tell us what you are exploring. Whether you need advisory, a custom buildout, product guidance, or AI resource augmentation, HawkSavvy can frame the right next step.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-24 bg-pearl dark:bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Sidebar */}
            <aside>
              <FadeUp delay={0.12}>
                {/* What happens next */}
                <div className="rounded-2xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate p-7 mb-5">
                  <h2
                    className="font-display font-semibold text-base text-ink dark:text-cloud-white mb-5"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    What happens next
                  </h2>
                  <ol className="space-y-5" role="list">
                    {steps.map((s) => (
                      <li key={s.step} className="flex gap-4">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full bg-signal-teal/10 border border-signal-teal/30 flex items-center justify-center text-xs font-mono font-bold text-signal-teal"
                          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                          aria-label={`Step ${s.step}`}
                        >
                          {s.step}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink dark:text-cloud-white" style={{ fontFamily: "var(--font-manrope)" }}>
                            {s.label}
                          </p>
                          <p className="text-xs text-graphite dark:text-silver mt-0.5 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Contact notes */}
                <div className="rounded-2xl border border-hairline dark:border-deep-slate bg-chalk dark:bg-deep-slate/40 p-7">
                  <h2
                    className="font-display font-semibold text-sm text-ink dark:text-cloud-white mb-4 font-mono uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    About HawkSavvy
                  </h2>
                  <ul className="space-y-3 text-sm text-graphite dark:text-silver">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-teal flex-shrink-0" aria-hidden="true" />
                      Chicago-based commercial front
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-teal flex-shrink-0" aria-hidden="true" />
                      Global delivery capability
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal-teal flex-shrink-0" aria-hidden="true" />
                      Enterprise and high-trust use cases preferred
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
