import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  heading: string;
  body?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "sand" | "default";
}

export function CTASection({
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: CTASectionProps) {
  const bgClass =
    variant === "dark"
      ? "bg-obsidian dark:bg-obsidian"
      : variant === "sand"
      ? "bg-sovereign-sand/10 dark:bg-sovereign-sand/5 border border-sovereign-sand/20"
      : "bg-chalk dark:bg-deep-slate/50";

  return (
    <section className={`rounded-2xl lg:rounded-3xl px-8 py-14 md:py-20 ${bgClass}`}>
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <h2
          className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight text-ink dark:text-cloud-white"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {heading}
        </h2>
        {body && (
          <p className="text-graphite dark:text-silver text-lg leading-relaxed">
            {body}
          </p>
        )}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
