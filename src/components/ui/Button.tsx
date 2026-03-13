import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sovereign-sand text-ink font-semibold hover:brightness-105 shadow-sm",
  secondary:
    "bg-transparent border border-steel/50 dark:border-steel/30 text-ink dark:text-cloud-white hover:bg-chalk dark:hover:bg-deep-slate",
  ghost:
    "bg-transparent text-graphite dark:text-mist hover:text-teal-dark dark:hover:text-signal-teal hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-5 py-2.5 text-sm rounded-full",
  lg: "px-7 py-3.5 text-base rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-display font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vector-sky",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      style={{ fontFamily: "var(--font-manrope)" }}
      {...props}
    >
      {children}
    </button>
  );
}
