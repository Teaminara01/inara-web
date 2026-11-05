import Link from "next/link";
import type { Route } from "next";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  /** Yellow: main call to action. Black text for contrast. */
  primary: "bg-brand text-ink hover:bg-brand-amber",
  /** Always black: for use on yellow (brand) backgrounds. */
  dark: "bg-ink text-paper hover:bg-zinc-800",
  /** Theme-aware solid: black in light mode, white in dark mode. */
  inverse: "bg-fg text-canvas hover:opacity-85",
  /** Outline: works on light and dark (inherits text colour). */
  outline: "border-2 border-current hover:bg-brand hover:text-ink hover:border-brand",
  /** Black outline for use on yellow (brand) backgrounds. */
  outlineInk: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return cn(base, variants[variant], sizes[size]);
}

type StyleProps = { variant?: ButtonVariant; size?: ButtonSize; className?: string; children: ReactNode };

/** Internal navigation styled as a button. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
}: StyleProps & { href: Route }) {
  return (
    <Link href={href} className={cn(buttonClasses(variant, size), className)}>
      {children}
    </Link>
  );
}

/** External link (WhatsApp, mailto, tel) styled as a button. */
export function ButtonAnchor({
  variant,
  size,
  className,
  children,
  ...props
}: StyleProps & Omit<ComponentProps<"a">, "className" | "children">) {
  const external = props.href?.startsWith("http");
  return (
    <a
      className={cn(buttonClasses(variant, size), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

/** Native <button>, e.g. form submit. */
export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: StyleProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(buttonClasses(variant, size), className)} {...props}>
      {children}
    </button>
  );
}
