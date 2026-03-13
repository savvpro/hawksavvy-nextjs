import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Use | HawkSavvy",
  description: "HawkSavvy Terms of Use — acceptable use, intellectual property, disclaimers, and limitations.",
};

export default function TermsOfUsePage() {
  return (
    <article className="pt-32 pb-24 bg-pearl dark:bg-obsidian">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Badge variant="neutral">Legal</Badge>
        <h1
          className="mt-5 font-display font-bold text-4xl text-ink dark:text-cloud-white mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Terms of Use
        </h1>
        <p className="text-sm text-pewter dark:text-silver/60 font-mono mb-12" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Last updated: March 2025
        </p>

        <div className="space-y-10 text-graphite dark:text-silver leading-relaxed">
          <section aria-labelledby="acceptance">
            <h2 id="acceptance" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using the HawkSavvy website and related materials, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.
            </p>
          </section>

          <section aria-labelledby="acceptable-use">
            <h2 id="acceptable-use" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Acceptable Use
            </h2>
            <p>You agree to use this site only for lawful purposes and in accordance with these terms. You may not:</p>
            <ul className="mt-4 space-y-2">
              {[
                "Use the site in any way that violates applicable law or regulation",
                "Attempt to gain unauthorized access to any part of the site",
                "Transmit any harmful, offensive, or disruptive material",
                "Impersonate HawkSavvy or any other entity",
                "Scrape or harvest content without prior written permission",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal-teal mt-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="ip">
            <h2 id="ip" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, design elements, and code, is the property of HawkSavvy or its content suppliers and is protected by applicable intellectual property laws.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, modify, or create derivative works from any content on this site without express written permission from HawkSavvy.
            </p>
          </section>

          <section aria-labelledby="disclaimers">
            <h2 id="disclaimers" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Disclaimers
            </h2>
            <p>
              This website is provided on an &quot;as is&quot; basis without warranties of any kind. HawkSavvy makes no guarantees about the accuracy, completeness, or availability of any content on this site.
            </p>
            <p className="mt-4">
              Content on this site is for informational purposes only and does not constitute professional advice of any kind.
            </p>
          </section>

          <section aria-labelledby="liability">
            <h2 id="liability" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, HawkSavvy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any content herein.
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Changes to These Terms
            </h2>
            <p>
              HawkSavvy may update these Terms of Use from time to time. Continued use of the site following any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section aria-labelledby="contact-terms">
            <h2 id="contact-terms" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact
            </h2>
            <p>
              For questions about these terms, please use the contact form on our website. HawkSavvy is based in Chicago, Illinois, United States.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
