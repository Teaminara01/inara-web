/**
 * Track record. The brief only has placeholders, so this stays disabled.
 * To show it: fill every `value` with a real, verified number and set `enabled: true`.
 * Never ship invented figures.
 */
import type { StatsContent } from "./schema";

export const stats = {
  enabled: false,
  title: "Our track record",
  items: [
    { label: "Projects delivered", value: null },
    { label: "Clients served", value: null },
    { label: "Client retention", value: null },
    { label: "Years of experience", value: null },
    { label: "Review rating", value: null },
  ],
} satisfies StatsContent;
