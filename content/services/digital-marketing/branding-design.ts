/**
 * Strategy, Branding & Design.
 * Source: brochure "What We Do" (Strategy: Brand & Digital; Design: UI/UX & Branding)
 * and the Bonne Femme / Calcutta Gin / Dosa Coffee work. Review before launch.
 */
import type { Service } from "../../schema";

export const brandingDesign = {
  slug: "branding-design",
  title: "Strategy, Branding & Design",
  headline: "Memorable brands with a clear strategy, a consistent voice, and design that carries across every touchpoint.",
  intro:
    "We start with the brand's objective and audience, then build the identity and design system that brings it to life online and offline.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "Brand & digital strategy", text: "Objectives, success metrics, audience research, and positioning grounded in business goals" },
        { label: "Visual identity", text: "Logo, colour, typography, and brand guidelines for consistent use" },
        { label: "Brand voice", text: "A strong, consistent voice that is memorable and trustworthy" },
        { label: "Packaging design", text: "Packaging that reflects the brand's positioning on the shelf and online" },
        { label: "Print & marketing collateral", text: "Menus, signage, banners, vehicle branding, and in-store material" },
        { label: "UI/UX design", text: "Website and app interfaces designed around your users" },
      ],
    },
    {
      type: "callout",
      title: "Selected work",
      body: "Brand presence, packaging, and menu design for Bonne Femme; heritage-led collateral for Calcutta Gin; and digital and offline campaign design for Dosa Coffee.",
    },
  ],
  related: [
    { practice: "digital-marketing", service: "content-production" },
    { practice: "digital-marketing", service: "social-media" },
    { practice: "development", service: "web" },
  ],
  seo: {
    title: "Strategy, Branding & Design",
    description:
      "Brand strategy, visual identity, packaging, print collateral, and UI/UX design from Inara AI, a full-service digital agency in Kolkata.",
  },
} satisfies Service;
