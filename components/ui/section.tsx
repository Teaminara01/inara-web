import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { PatternBackdrop } from "./pattern-backdrop";

const tones = {
  light: "bg-canvas text-fg",
  surface: "bg-surface text-fg",
  dark: "theme-dark bg-ink text-paper",
} as const;

export type SectionTone = keyof typeof tones;

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  /** Wraps children in <Container>. Default true. */
  contained?: boolean;
  /** Dot-grid background. */
  pattern?: boolean;
};

/** Page section with vertical rhythm and a light/surface/dark tone. */
export function Section({
  tone = "light",
  contained = true,
  pattern = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative isolate py-16 sm:py-24", tones[tone], className)} {...props}>
      {pattern && <PatternBackdrop />}
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
