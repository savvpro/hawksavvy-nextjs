import Link from "next/link";

const FOOTER_LINKS = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/sovereign-ai", label: "Sovereign AI" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  Products: [
    { href: "/products#voice", label: "HawkSavvy Voice" },
    { href: "/products#signal", label: "HawkSavvy Signal" },
    { href: "/products#flow", label: "HawkSavvy Flow" },
  ],
  Services: [
    { href: "/services", label: "AI Advisory" },
    { href: "/services#buildouts", label: "Enterprise Buildouts" },
    { href: "/services#knowledge", label: "Knowledge Systems" },
    { href: "/resource-augmentation", label: "Resource Augmentation" },
  ],
  Solutions: [
    { href: "/solutions#healthcare", label: "Healthcare & Pharmacy" },
    { href: "/solutions#wealth", label: "Wealth & Advisory" },
    { href: "/solutions#education", label: "Education & Training" },
    { href: "/solutions#professional", label: "Professional Services" },
    { href: "/solutions#operations", label: "Service Operations" },
  ],
};

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-chalk dark:bg-midnight-slate border-t border-hairline dark:border-deep-slate"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4"
              aria-label="HawkSavvy — home"
            >
              <span className="w-7 h-7 rounded-md bg-signal-teal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L8 8L2 14" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 5L14 8L8 11" stroke="#D6C6A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span
                className="font-display font-bold text-lg tracking-tight text-ink dark:text-cloud-white"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                HawkSavvy
              </span>
            </Link>
            <p className="text-graphite dark:text-silver text-sm leading-relaxed max-w-xs">
              Chicago-based sovereign AI enterprise. Designing, deploying, and governing AI systems for high-trust businesses.
            </p>
            <p className="mt-5 text-xs text-pewter dark:text-silver/60 font-mono" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
              Chicago, IL · Global Delivery
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest text-pewter dark:text-silver/60 mb-4 font-mono"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-graphite dark:text-silver hover:text-ink dark:hover:text-cloud-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-hairline dark:border-deep-slate flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-pewter dark:text-silver/60">
            © {new Date().getFullYear()} HawkSavvy. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-4">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-pewter dark:text-silver/60 hover:text-graphite dark:hover:text-silver transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
