import { Badge } from "@/components/ui/Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowVariant?: "teal" | "sky" | "sand" | "neutral";
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  eyebrowVariant = "teal",
  heading,
  body,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
      )}
      <h2
        className="font-display font-bold text-3xl md:text-4xl lg:text-[2.6rem] leading-tight tracking-tight text-ink dark:text-cloud-white"
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {heading}
      </h2>
      {body && (
        <p className="text-graphite dark:text-silver text-lg leading-relaxed max-w-2xl prose-width">
          {body}
        </p>
      )}
    </div>
  );
}
