/** Case study. Source: content-info/inara-brochure-png (Genome The Fertility Centre slide). */
import type { Project } from "../schema";

export const genomeFertility = {
  slug: "genome-fertility",
  client: "Genome The Fertility Centre",
  title: "Building trust and awareness for Genome The Fertility Centre",
  summary:
    "Emotional Bengali and Hindi campaigns around “new beginnings” reached 100,000+ local users on a ₹12k budget and grew organic followers by 30%.",
  industry: "Healthcare",
  practices: ["digital-marketing"],
  services: [
    { practice: "digital-marketing", service: "social-media" },
    { practice: "digital-marketing", service: "ppc" },
  ],
  cover: {
    src: "/work/genome-fertility/cover.webp",
    alt: "Genome The Fertility Centre Bengali Facebook post with a couple holding their newborn",
  },
  challenge:
    "Fertility as a category needed emotional trust-building, and awareness in digital-first channels was low.",
  solution:
    "We designed multiple emotional campaigns in Bengali and Hindi around “new beginnings”, using stories and reels. We created carousel creatives in English and Bengali for local resonance, and ran reach and engagement campaigns in Kolkata and surrounding cities targeting women aged 28–40.",
  results: [
    { value: "100k+", label: "Local users reached on a ₹12k budget" },
    { value: "+30%", label: "Organic followers" },
    { value: "2x", label: "Page growth in March" },
  ],
  deliverables: ["Bengali & Hindi campaigns", "Stories & reels", "Bilingual carousels", "Reach & engagement ads"],
  seo: { title: "Genome The Fertility Centre case study" },
} satisfies Project;
