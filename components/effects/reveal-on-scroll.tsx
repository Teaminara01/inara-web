"use client";

/**
 * Plays entrance animations once as elements scroll into view.
 *
 * Wrap server-rendered content; mark elements with `data-reveal="up"` or
 * `data-reveal="image"` (styles in app/globals.css). Elements are only hidden
 * after this component mounts (it sets `data-reveal-ready`), so content stays
 * visible without JavaScript. Reduced-motion users get no hiding/animation.
 */
import { useEffect, useRef, type ReactNode } from "react";

export function RevealOnScroll({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    targets.forEach((el) => observer.observe(el));
    root.setAttribute("data-reveal-ready", "");
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
