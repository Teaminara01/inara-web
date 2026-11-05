/**
 * WhatsApp "click to chat" helpers (no backend, see .claude/BACKEND.md).
 * Pure functions: no React, no browser APIs, easy to unit test.
 */

/** Keeps the wa.me URL well under browser/WhatsApp length limits. */
export const MAX_MESSAGE_LENGTH = 1500;

/**
 * Builds a https://wa.me link. `number` must be digits in international
 * format ("919674341297"); any other characters are stripped defensively.
 */
export function buildWhatsAppUrl(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  const text = message?.trim().slice(0, MAX_MESSAGE_LENGTH);
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

const PLACEHOLDER = /\{\{\s*(\w+)\s*\}\}/g;

/**
 * Fills `{{key}}` placeholders. A line whose placeholders are ALL empty is
 * dropped, so optional fields don't leave "Company: " lines behind.
 * Runs of blank lines are collapsed to one.
 */
export function fillTemplate(template: string, values: Record<string, string | undefined>): string {
  const lines = template.split("\n").flatMap((line) => {
    const keys = [...line.matchAll(PLACEHOLDER)].map((m) => m[1]);
    if (keys.length > 0 && keys.every((k) => !values[k]?.trim())) return [];
    return [line.replace(PLACEHOLDER, (_, key: string) => values[key]?.trim() ?? "")];
  });
  return lines
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
