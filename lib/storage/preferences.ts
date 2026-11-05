/**
 * Browser preferences wrapper. Components never touch localStorage directly
 * (CLAUDE.md → Local Storage & Client State). Only non-sensitive UI
 * preferences belong here; anything sensitive goes through SecureStorage.
 */

export type ThemePreference = "light" | "dark" | "system";

/** Also read by the inline theme script in lib/theme.ts. Don't rename casually. */
export const THEME_STORAGE_KEY = "inara-theme";

function isTheme(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export const preferences = {
  getTheme(): ThemePreference {
    try {
      const value = window.localStorage.getItem(THEME_STORAGE_KEY);
      return isTheme(value) ? value : "system";
    } catch {
      return "system"; // storage blocked (privacy mode)
    }
  },

  setTheme(theme: ThemePreference): void {
    try {
      if (theme === "system") window.localStorage.removeItem(THEME_STORAGE_KEY);
      else window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // storage blocked: the choice still applies for this page view
    }
  },
};
