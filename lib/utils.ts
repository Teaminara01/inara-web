/**
 * Joins class names, skipping falsy values: cn("a", cond && "b").
 * It does NOT resolve Tailwind conflicts ("h-11" + "h-auto" → both kept, CSS
 * order decides). Pass layout/spacing extras via `className`, but change
 * colours, sizes, and display through component variants instead.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
