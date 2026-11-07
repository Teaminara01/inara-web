/** Case study. Source: content-info/inara-brochure-png (Calcutta Gin slide). */
import type { Project } from "../schema";

export const calcuttaGin = {
  slug: "calcutta-gin",
  client: "Calcutta Gin",
  title: "Heritage-led marketing collateral for Calcutta Gin",
  summary:
    "Visually striking collateral that reflected the brand's heritage and premium positioning, and strengthened its presence across touchpoints.",
  industry: "Food and Beverage",
  practices: ["digital-marketing"],
  services: [{ practice: "digital-marketing", service: "branding-design" }],
  cover: {
    src: "/work/calcutta-gin/cover.webp",
    alt: "Calcutta Gin signage and poster: a gin bottle in a postage-stamp frame beside a heritage Kolkata building",
  },
  challenge:
    "Calcutta Gin needed marketing collateral that matched its heritage story and premium positioning.",
  solution:
    "We partnered with Calcutta Gin to craft visually striking marketing collateral, using a postage-stamp motif and old-Calcutta architecture with the line “Every sip takes you to espy the city's of yore era”. Through cohesive design and strong visual storytelling, we helped elevate brand recall and strengthen its presence across touchpoints.",
  outcomes: ["Elevated brand recall", "A stronger, consistent presence across touchpoints"],
  deliverables: ["Marketing collateral", "Signage", "Poster design", "Visual storytelling"],
  gallery: [
    { src: "/work/calcutta-gin/signage.webp", alt: "Calcutta Gin projecting wall sign on a building" },
    { src: "/work/calcutta-gin/poster.webp", alt: "Calcutta Gin poster with the bottle in a postage-stamp frame" },
  ],
  seo: { title: "Calcutta Gin case study" },
} satisfies Project;
