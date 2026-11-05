"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavLink } from "@/content/schema";
import { buttonClasses } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  items: NavLink[];
  cta: NavLink;
  labels: { open: string; close: string };
};

/** Mobile menu toggle + panel (interactive leaf; hidden on lg+). */
export function MobileNav({ items, cta, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="flex size-11 items-center justify-center rounded-full border border-line"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-lg"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-lg font-medium hover:bg-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={cta.href} onClick={close} className={cn(buttonClasses("primary", "lg"), "mt-4 w-full")}>
            {cta.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
