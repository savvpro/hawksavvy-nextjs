import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You | HawkSavvy",
  description: "We have received your inquiry. The HawkSavvy team will be in touch shortly.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-24 bg-pearl dark:bg-obsidian">
      <div className="max-w-lg mx-auto px-6 text-center">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-full bg-signal-teal/10 border border-signal-teal/30 flex items-center justify-center mx-auto mb-8"
          aria-hidden="true"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          className="font-display font-bold text-3xl md:text-4xl text-ink dark:text-cloud-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Inquiry received.
        </h1>
        <p className="text-graphite dark:text-silver text-lg leading-relaxed mb-10">
          Thank you for reaching out to HawkSavvy. We have received your inquiry and will review it carefully. A member of our team will be in touch to align on the right next step.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/sovereign-ai" variant="secondary">
            Learn About Sovereign AI
          </Button>
        </div>

        <p className="mt-10 text-xs text-pewter dark:text-silver/50 font-mono" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Typical response time: 1–2 business days
        </p>
      </div>
    </section>
  );
}
