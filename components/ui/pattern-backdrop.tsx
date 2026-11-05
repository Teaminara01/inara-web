import { cn } from "@/lib/utils";

/**
 * Decorative dot-grid layer. Place inside a `relative isolate` parent; the
 * dot colour follows the theme / band via --pattern-dot (globals.css).
 */
export function PatternBackdrop({ fade = true, className }: { fade?: boolean; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 pattern-dots", fade && "pattern-fade", className)}
    />
  );
}
