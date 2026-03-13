"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/sovereign-ai", label: "Sovereign AI" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
];

const MORE_LINKS = [
  { href: "/resource-augmentation", label: "Resource Augmentation" },
  { href: "/case-studies", label: "Case Studies" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Close more dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => pathname === href;

  const navBase =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const navScrolled =
    "bg-pearl/95 dark:bg-midnight-slate/95 backdrop-blur-md shadow-sm shadow-hairline/50 dark:shadow-deep-slate/50 border-b border-hairline dark:border-deep-slate";
  const navTop =
    "bg-transparent";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-sovereign-sand focus:text-ink focus:font-display focus:font-semibold"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`${navBase} ${scrolled || mobileOpen ? navScrolled : navTop}`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
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

          {/* Desktop nav */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-signal-teal bg-signal-teal/10"
                    : "text-graphite dark:text-silver hover:text-ink dark:hover:text-cloud-white hover:bg-chalk dark:hover:bg-deep-slate"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-graphite dark:text-silver hover:text-ink dark:hover:text-cloud-white hover:bg-chalk dark:hover:bg-deep-slate transition-colors duration-150"
              >
                More
                <span className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}>
                  <ChevronIcon />
                </span>
              </button>
              {moreOpen && (
                <div
                  role="menu"
                  className="absolute top-full mt-2 right-0 w-52 rounded-xl border border-hairline dark:border-deep-slate bg-white dark:bg-midnight-slate shadow-lg shadow-ink/10 dark:shadow-obsidian/40 py-1.5 z-50"
                >
                  {MORE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-slate-text dark:text-mist hover:bg-chalk dark:hover:bg-deep-slate hover:text-ink dark:hover:text-cloud-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                aria-label={
                  resolvedTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="p-2 rounded-lg text-graphite dark:text-silver hover:text-ink dark:hover:text-cloud-white hover:bg-chalk dark:hover:bg-deep-slate transition-colors duration-150"
              >
                {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            )}

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-full bg-sovereign-sand text-ink text-sm font-semibold font-display hover:brightness-105 transition-all duration-200 shadow-sm"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Book a Strategy Call
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden p-2 rounded-lg text-graphite dark:text-silver hover:bg-chalk dark:hover:bg-deep-slate transition-colors"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-hairline dark:border-deep-slate bg-pearl/98 dark:bg-midnight-slate/98 backdrop-blur-md"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-1">
              {[...NAV_LINKS, ...MORE_LINKS].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-signal-teal bg-signal-teal/10"
                      : "text-slate-text dark:text-mist hover:text-ink dark:hover:text-cloud-white hover:bg-chalk dark:hover:bg-deep-slate"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-hairline dark:border-deep-slate mt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-full bg-sovereign-sand text-ink text-sm font-semibold font-display"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
