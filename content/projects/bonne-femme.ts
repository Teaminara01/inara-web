/** Case study. Source: content-info/inara-brochure-png (Bonne Femme slide). */
import type { Project } from "../schema";

export const bonneFemme = {
  slug: "bonne-femme",
  client: "Bonne Femme",
  title: "A refined, elegant brand presence for Bonne Femme",
  summary:
    "Branding, packaging, menu design, and print collateral designed to reflect sophistication, luxury, and timeless femininity.",
  industry: "Hospitality",
  practices: ["digital-marketing"],
  services: [
    { practice: "digital-marketing", service: "branding-design" },
    { practice: "digital-marketing", service: "social-media" },
  ],
  cover: {
    src: "/work/bonne-femme/cover.webp",
    alt: "Bonne Femme brand board: deep green and gold identity, menu cover, open menu, and social posts",
  },
  challenge:
    "Bonne Femme needed a brand presence that felt refined and premium, consistent from packaging and menus to social media.",
  solution:
    "We crafted a refined and elegant brand presence through premium design solutions, including packaging, brand collateral, menu design, and cohesive visual storytelling across platforms. The result was designed to reflect sophistication, luxury, and timeless femininity.",
  deliverables: ["Branding", "Packaging design", "Social media", "Visual identity", "Print collateral", "Creative strategy"],
  gallery: [
    {
      src: "/work/bonne-femme/brand-board.webp",
      alt: "Full Bonne Femme brand board from logo to menu, social creatives, and thank-you card",
    },
  ],
  seo: { title: "Bonne Femme case study" },
} satisfies Project;
