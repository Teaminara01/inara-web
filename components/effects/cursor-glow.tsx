"use client";

import { useEffect, useRef } from "react";

/**
 * Soft yellow glow that follows the mouse across the whole page.
 * - Updates CSS variables in requestAnimationFrame (no React re-renders).
 * - pointer-events: none, so it never blocks clicks or text selection.
 * - Disabled on touch devices and when the user prefers reduced motion.
 * Look (radius, colour) lives in globals.css: `cursor-glow`, --glow-color.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      frame = 0;
      el.style.setProperty("--glow-x", `${x}px`);
      el.style.setProperty("--glow-y", `${y}px`);
      el.style.opacity = "1";
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const hide = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
    />
  );
}
