"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";
import { isDarkActive, setTheme, subscribeToTheme, watchSystemTheme } from "@/lib/theme";

type ThemeToggleProps = {
  labels: { toDark: string; toLight: string };
};

/** Sun/moon button. Switches between light and dark and remembers the choice. */
export function ThemeToggle({ labels }: ThemeToggleProps) {
  // Server snapshot = light; React re-renders with the real value after hydration.
  const dark = useSyncExternalStore(subscribeToTheme, isDarkActive, () => false);

  useEffect(() => watchSystemTheme(), []);

  const label = dark ? labels.toLight : labels.toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:border-fg"
    >
      {dark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </button>
  );
}
