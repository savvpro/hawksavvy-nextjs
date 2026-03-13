import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | HawkSavvy",
  description: "HawkSavvy Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-32 pb-24 bg-pearl dark:bg-obsidian">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Badge variant="neutral">Legal</Badge>
        <h1
          className="mt-5 font-display font-bold text-4xl text-ink dark:text-cloud-white mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-pewter dark:text-silver/60 font-mono mb-12" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Last updated: March 2025
        </p>

        <div className="prose-content space-y-10 text-graphite dark:text-silver leading-relaxed">
          <section aria-labelledby="info-collected">
            <h2 id="info-collected" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Information We Collect
            </h2>
            <p>
              HawkSavvy collects information you provide directly through our contact form, including your name, work email, company name, role, website, sector, and a description of your inquiry.
            </p>
            <p className="mt-4">
              We may also collect standard technical data when you visit our website, such as browser type, device type, referring URL, and pages viewed. This information is used to maintain and improve site performance.
            </p>
          </section>

          <section aria-labelledby="how-we-use">
            <h2 id="how-we-use" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              How We Use Your Information
            </h2>
            <ul className="space-y-2">
              {[
                "To respond to your inquiry and schedule consultations",
                "To assess fit and scope appropriate service options",
                "To communicate relevant updates related to your inquiry",
                "To maintain and improve our website",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-signal-teal mt-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Cookies and Analytics
            </h2>
            <p>
              HawkSavvy may use privacy-respecting analytics tools to understand aggregate site usage. If we implement any tracking cookies, we will update this policy and provide appropriate disclosure. We do not use intrusive tracking or cross-site behavioral advertising.
            </p>
          </section>

          <section aria-labelledby="data-retention">
            <h2 id="data-retention" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Data Retention
            </h2>
            <p>
              We retain inquiry data for a reasonable period necessary to respond and maintain business records. You may request deletion of your personal information at any time by contacting us.
            </p>
          </section>

          <section aria-labelledby="international">
            <h2 id="international" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              International Processing
            </h2>
            <p>
              HawkSavvy is based in Chicago, Illinois. Information submitted through our website may be processed in the United States and, where applicable, by our global delivery teams. By using this site, you acknowledge that your information may be processed in jurisdictions with different data protection laws.
            </p>
          </section>

          <section aria-labelledby="contact-privacy">
            <h2 id="contact-privacy" className="font-display font-bold text-xl text-ink dark:text-cloud-white mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact for Privacy Inquiries
            </h2>
            <p>
              If you have questions or requests related to your personal data, please contact us through the contact form on our website. We will respond to privacy-related requests within a reasonable timeframe.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
