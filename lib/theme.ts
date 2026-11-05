/**
 * Dark mode. Default follows the device (prefers-color-scheme); the header
 * toggle stores an explicit choice via lib/storage/preferences.ts.
 * Dark mode = class "dark" on <html> (see `@custom-variant dark` in globals.css).
 */
import { THEME_STORAGE_KEY, preferences, type ThemePreference } from "./storage/preferences";

const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs inline in <head> before first paint, so there's no light→dark flash.
 * Kept tiny and dependency-free; mirrors `resolveTheme` + `applyTheme`.
 */
export const themeInitScript = `(function(){try{var p=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});var d=p==="dark"||(p!=="light"&&matchMedia(${JSON.stringify(
  DARK_QUERY,
)}).matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})();`;

export function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference !== "system") return preference;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function applyTheme(preference: ThemePreference): void {
  document.documentElement.classList.toggle("dark", resolveTheme(preference) === "dark");
}

/** Saves and applies an explicit choice. */
export function setTheme(preference: ThemePreference): void {
  preferences.setTheme(preference);
  applyTheme(preference);
}

/** Re-applies the theme when the OS setting changes (only while on "system"). */
export function watchSystemTheme(): () => void {
  const query = window.matchMedia(DARK_QUERY);
  const onChange = () => {
    if (preferences.getTheme() === "system") applyTheme("system");
  };
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function isDarkActive(): boolean {
  return document.documentElement.classList.contains("dark");
}

/** Subscribe to <html class> changes, for useSyncExternalStore. */
export function subscribeToTheme(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
