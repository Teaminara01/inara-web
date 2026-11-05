import { cn } from "@/lib/utils";

const SPARKLE_PATH =
  "M12 0c.9 6.4 3.6 9.6 12 12-8.4 2.4-11.1 5.6-12 12-.9-6.4-3.6-9.6-12-12C8.4 9.6 11.1 6.4 12 0Z";

/**
 * Glowing, twinkling star that sweeps left → right across its parent
 * (one pass every 4s). Put it inside a `relative` link next to the label.
 * Pure CSS: works in server and client components. Hidden for
 * reduced motion and from assistive tech.
 *
 * Animations: animate-nav-star-sweep (travel) + animate-twinkle (shimmer),
 * defined in app/globals.css.
 */
export function NavStar({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        // Track spans the link's width; translateX(100%) = one full link width.
        "pointer-events-none absolute inset-x-0 -top-2.5 h-3 animate-nav-star-sweep motion-reduce:hidden",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="block size-3 animate-twinkle text-brand-orange drop-shadow-[0_0_3px_var(--color-brand)] dark:text-brand dark:drop-shadow-[0_0_5px_var(--color-brand)]"
      >
        <path d={SPARKLE_PATH} fill="currentColor" />
      </svg>
    </span>
  );
}
