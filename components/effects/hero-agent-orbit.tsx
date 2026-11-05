"use client";

/**
 * Home hero visual: an "AI Agent" tile with its loop of capabilities
 * (Perceive → Reason → Decide → Act → Learn → Integrate) in a circle.
 *
 * - 3D: centre tile and nodes sit at different depths in a `preserve-3d`
 *   scene that tilts toward the mouse (CSS variables set in rAF, no re-renders).
 * - Motion (pure CSS): nodes light up one at a time (animate-agent-node,
 *   staggered by index), outer ring turns slowly, scene floats, stars twinkle.
 * - Sized in container units (cqw), so it scales from phone to desktop.
 * - Pauses off-screen; static with prefers-reduced-motion; no tilt on touch.
 * - Exposed to assistive tech as one image with `visual.ariaLabel`.
 * Content: content/home.ts → hero.visual. Timings: app/globals.css.
 */
import { useEffect, useRef, type ComponentType, type CSSProperties, type SVGProps } from "react";
import type { AgentIcon, AgentLoopVisual } from "@/content";
import {
  BrainIcon,
  BranchIcon,
  ChipIcon,
  EyeIcon,
  PlugIcon,
  RefreshIcon,
  SparkleIcon,
  ZapIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const icons: Record<AgentIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  eye: EyeIcon,
  brain: BrainIcon,
  branch: BranchIcon,
  zap: ZapIcon,
  refresh: RefreshIcon,
  plug: PlugIcon,
};

/** Seconds each node stays lit; must match --animate-agent-node (nodes × STEP). */
const STEP = 1.5;
/** Node orbit radius, % of the container. */
const RADIUS = 39;
const MAX_TILT_X = 12;
const MAX_TILT_Y = 16;

/** Twinkling stars: position (%), size (cqw), delay and duration (s). */
const stars = [
  { x: 6, y: 10, size: 3.4, delay: 0, dur: 3.2 },
  { x: 90, y: 6, size: 2.6, delay: 1.1, dur: 2.6 },
  { x: 97, y: 42, size: 2, delay: 2, dur: 3.4 },
  { x: 2, y: 50, size: 2.4, delay: 0.6, dur: 2.8 },
  { x: 10, y: 92, size: 3, delay: 1.7, dur: 3.6 },
  { x: 92, y: 88, size: 3.6, delay: 0.3, dur: 3 },
  { x: 66, y: 2, size: 2, delay: 2.4, dur: 2.4 },
  { x: 30, y: 4, size: 1.8, delay: 1.4, dur: 3.1 },
  { x: 76, y: 24, size: 1.6, delay: 0.9, dur: 2.7 },
  { x: 22, y: 30, size: 1.6, delay: 2.8, dur: 3.3 },
  { x: 80, y: 70, size: 1.8, delay: 1.9, dur: 2.9 },
  { x: 28, y: 74, size: 1.6, delay: 0.4, dur: 3.5 },
  { x: 50, y: 99, size: 2.2, delay: 2.2, dur: 3 },
] as const;

/** Applied to every animated element so the whole scene pauses together. */
const pausable =
  "group-data-[paused=true]/agent:[animation-play-state:paused] motion-reduce:animate-none";

export function HeroAgentOrbit({ visual, className }: { visual: AgentLoopVisual; className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const count = visual.nodes.length;

  useEffect(() => {
    const root = rootRef.current;
    const tilt = tiltRef.current;
    if (!root || !tilt) return;

    const io = new IntersectionObserver(([entry]) => {
      root.dataset.paused = entry?.isIntersecting ? "false" : "true";
    });
    io.observe(root);

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return () => io.disconnect();

    let frame = 0;
    let px = 0;
    let py = 0;
    const render = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (px - (rect.left + rect.width / 2)) / (window.innerWidth / 2)));
      const dy = Math.max(-1, Math.min(1, (py - (rect.top + rect.height / 2)) / (window.innerHeight / 2)));
      tilt.style.setProperty("--tilt-x", `${(-dy * MAX_TILT_X).toFixed(2)}deg`);
      tilt.style.setProperty("--tilt-y", `${(dx * MAX_TILT_Y).toFixed(2)}deg`);
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label={visual.ariaLabel}
      className={cn("group/agent @container relative aspect-square w-full select-none [perspective:1200px]", className)}
    >
      <div
        ref={tiltRef}
        className="preserve-3d absolute inset-0 transition-transform duration-500 ease-out [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]"
      >
        <div className={cn("preserve-3d absolute inset-0 animate-float-soft", pausable)}>
          {/* Twinkling stars (furthest back) */}
          {stars.map((s, i) => (
            <SparkleIcon
              key={i}
              className={cn(
                "absolute -translate-1/2 animate-star-twinkle drop-shadow-[0_0_6px_var(--color-brand)]",
                i % 3 === 0 ? "text-brand" : i % 3 === 1 ? "text-brand-amber" : "text-brand-orange",
                pausable,
              )}
              style={
                {
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  width: `${s.size}cqw`,
                  height: `${s.size}cqw`,
                  animationDelay: `${s.delay}s`,
                  animationDuration: `${s.dur}s`,
                } as CSSProperties
              }
            />
          ))}

          {/* Glow + rings */}
          <div className="absolute inset-[24%] rounded-full bg-brand/35 blur-3xl [transform:translateZ(-60px)] dark:bg-brand/20" />
          <div
            className={cn(
              "absolute rounded-full border-2 border-dashed border-fg/15 animate-spin-slow",
              pausable,
            )}
            style={{ inset: `${50 - RADIUS}%` }}
          />
          <div className="absolute inset-[27%] rounded-full border border-fg/10 bg-canvas/40" />

          {/* Centre tile */}
          <div className="preserve-3d absolute inset-[32%]">
            <div className="relative flex size-full flex-col items-center justify-center gap-[2.5cqw] overflow-hidden rounded-[22%] border-2 border-paper/70 bg-linear-135 from-brand via-brand-amber to-brand-orange text-ink shadow-[0_24px_60px_-18px_var(--color-brand-orange)] [transform:translateZ(70px)]">
              <span className="pointer-events-none absolute inset-0 bg-linear-to-br from-paper/55 via-paper/0 to-transparent" />
              <ChipIcon className="relative size-[13cqw]" strokeWidth={1.6} />
              <span className="relative text-[3.4cqw] font-bold tracking-[0.25em] uppercase">
                {visual.center}
              </span>
            </div>
          </div>

          {/* Nodes, clockwise from the top; each lights up in turn */}
          {visual.nodes.map((node, i) => {
            const Icon = icons[node.icon];
            const angle = -Math.PI / 2 + (i * 2 * Math.PI) / count;
            const delay = { animationDelay: `${i * STEP}s`, animationDuration: `${count * STEP}s` };
            return (
              <div
                key={node.label}
                className="preserve-3d absolute flex flex-col items-center"
                style={{
                  left: `${50 + RADIUS * Math.cos(angle)}%`,
                  top: `${50 + RADIUS * Math.sin(angle)}%`,
                  transform: "translate(-50%, -32%) translateZ(35px)",
                }}
              >
                <div
                  className={cn(
                    "flex size-[14cqw] items-center justify-center rounded-[3.5cqw] border-2 border-line bg-card shadow-lg animate-agent-node",
                    pausable,
                  )}
                  style={delay}
                >
                  <Icon className="size-[6cqw] text-brand-orange-deep dark:text-brand" strokeWidth={1.8} />
                </div>
                <span
                  className={cn("mt-[2cqw] text-[2.9cqw] font-semibold tracking-widest text-muted uppercase animate-agent-label", pausable)}
                  style={delay}
                >
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
