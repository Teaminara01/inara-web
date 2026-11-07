/**
 * Track record. Source: content-info/inara-brochure-png (stats slide).
 * Only real, verified numbers: if one goes stale, update it or set `enabled: false`.
 */
import type { StatsContent } from "./schema";

export const stats = {
  enabled: true,
  title: "Our track record",
  intro:
    "We work where **data, technology and content** collide, to create memorable experiences for brands.",
  items: [
    { label: "Years of experience", value: "5+" },
    { label: "Brands collaborated", value: "20+" },
    { label: "Success stories", value: "26+" },
  ],
} satisfies StatsContent;
