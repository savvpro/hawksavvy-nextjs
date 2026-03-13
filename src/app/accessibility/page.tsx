import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Accessibility Statement | HawkSavvy",
  description: "HawkSavvy's commitment to WCAG 2.2 AA accessibility and how to report barriers.",
};

export default function AccessibilityPage() {
  return (
    <article className="pt-32 pb-24 bg-pearl dark:bg-obsidian">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Badge variant="teal">Accessibility</Badge>
        <h1
          className="mt-5 font-display font-bold text-4xl text-ink dark:text-cloud-white mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Accessibility Statement
        </h1>
        <p className="text-sm text-pewter dark:text-silver/60 font-mono mb-12" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Last reviewed: March 2025
        </p>

        <div className="space-y-10 text-graphite dark:text-silver leading-relaxed">
          <section aria-labelledby="commitment">
            <h2 id="commitment" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Our Commitment
            </h2>
            <p>
              HawkSavvy is committed to ensuring that this website is accessible to all users, including those with disabilities. We are targeting conformance with the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA.
            </p>
            <p className="mt-4">
              Our accessibility target includes: sufficient text contrast ratios, keyboard operability for all interactive elements, visible focus states, semantic HTML structure, appropriate use of ARIA where required, screen reader compatibility, and support for <code className="px-1.5 py-0.5 rounded bg-chalk dark:bg-deep-slate text-xs font-mono" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>prefers-reduced-motion</code>.
            </p>
          </section>

          <section aria-labelledby="measures">
            <h2 id="measures" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Measures We Take
            </h2>
            <ul className="space-y-2">
              {[
                "Semantic HTML landmarks (header, nav, main, section, footer)",
                "Minimum 4.5:1 contrast ratio for normal text",
                "Minimum 3:1 contrast ratio for large text and UI components",
                "Keyboard navigation for all interactive elements",
                "Visible focus indicators on all focusable elements",
                "Descriptive alt text for all non-decorative images",
                "Explicit form labels associated with all input fields",
                "Accessible error messages tied to form fields",
                "Reduced motion support via CSS media query",
                "Skip-to-main-content link at page top",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal-teal mt-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="known-issues">
            <h2 id="known-issues" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Known Limitations
            </h2>
            <p>
              While we strive for WCAG 2.2 AA conformance, this site is under active development. Some areas may not yet fully meet all criteria. We are actively working to address any gaps and appreciate feedback that helps us improve.
            </p>
          </section>

          <section aria-labelledby="feedback">
            <h2 id="feedback" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Reporting Accessibility Barriers
            </h2>
            <p>
              If you encounter any accessibility barriers on this site, we want to know. Please contact us through our contact form with a description of the issue, the page URL where you encountered it, and your assistive technology setup if relevant.
            </p>
            <p className="mt-4">
              We aim to respond to accessibility feedback within 5 business days.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary">
                Report an Accessibility Issue
              </Button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
