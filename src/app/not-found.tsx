import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | HawkSavvy",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-24 bg-pearl dark:bg-obsidian">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p
          className="text-8xl font-bold font-mono text-hairline dark:text-deep-slate mb-8 select-none"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="font-display font-bold text-3xl text-ink dark:text-cloud-white mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Page not found.
        </h1>
        <p className="text-graphite dark:text-silver leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. Use the links below to find what you need.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
