interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "sky" | "sand" | "neutral";
  className?: string;
}

const variantClasses = {
  teal: "bg-signal-teal/10 text-teal-dark dark:text-signal-teal border-signal-teal/20",
  sky: "bg-vector-sky/10 text-sky-dark dark:text-vector-sky border-vector-sky/20",
  sand: "bg-sovereign-sand/20 text-sand-dark dark:text-sovereign-sand border-sovereign-sand/20",
  neutral:
    "bg-chalk dark:bg-deep-slate text-graphite dark:text-silver border-hairline dark:border-deep-slate",
};

export function Badge({
  children,
  variant = "teal",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border font-mono ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
    >
      {children}
    </span>
  );
}
