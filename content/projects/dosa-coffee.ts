/** Case study. Source: content-info/inara-brochure-png (two Dosa Coffee slides). */
import type { Project } from "../schema";

export const dosaCoffee = {
  slug: "dosa-coffee",
  client: "Dosa Coffee",
  title: "Campaign and collateral design for Dosa Coffee in Kolkata and Delhi",
  summary:
    "Design and digital activity for a South Indian restaurant brand with a presence in Kolkata and Delhi, including multi-platform campaigns, a website, film production, and offline collateral.",
  industry: "Hospitality",
  practices: ["digital-marketing", "development"],
  services: [
    { practice: "digital-marketing", service: "social-media" },
    { practice: "digital-marketing", service: "seo" },
    { practice: "digital-marketing", service: "ppc" },
    { practice: "digital-marketing", service: "branding-design" },
    { practice: "digital-marketing", service: "content-production" },
    { practice: "development", service: "web" },
  ],
  cover: {
    src: "/work/dosa-coffee/cover.webp",
    alt: "Grid of Dosa Coffee Instagram posts announcing the Delhi launch, with dosas and filter coffee",
  },
  challenge:
    "Dosa Coffee needed consistent campaign communication across Kolkata and Delhi, online and offline, including the launch in Delhi.",
  solution:
    "We handled designs and digital activities, including execution of multi-platform campaigns. Across digital and offline campaigns, we tapped into a strong audience base to create content that amplified the product and established campaign communication, from social posts to vehicle branding, standees, and menus.",
  outcomes: ["Campaign communication", "Audience amplification", "Product and brand strengthening"],
  deliverables: [
    "Social media marketing",
    "SEO",
    "Website development",
    "Performance marketing",
    "Branding",
    "Film production",
    "Marketing collateral",
  ],
  gallery: [
    {
      src: "/work/dosa-coffee/collateral.webp",
      alt: "Dosa Coffee collateral: branded delivery truck, roll-up standee, and combo menu",
    },
  ],
  seo: { title: "Dosa Coffee case study" },
} satisfies Project;
