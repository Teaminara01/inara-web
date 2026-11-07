/** Case study. Source: content-info/inara-brochure-png (Amma's Special slide). */
import type { Project } from "../schema";

export const ammasSpecial = {
  slug: "ammas-special",
  client: "Amma's Special",
  title: "Data-driven Meta campaigns that grew D2C sales for Amma's Special",
  summary:
    "Homemaker-focused Meta campaigns for an idli and dosa batter brand delivered 50% more website traffic, a 40% boost in conversions, and an average 3x ROAS.",
  industry: "Food and Beverage",
  practices: ["digital-marketing"],
  services: [
    { practice: "digital-marketing", service: "ppc" },
    { practice: "digital-marketing", service: "social-media" },
  ],
  cover: {
    src: "/work/ammas-special/cover.webp",
    alt: "Two Amma's Special idli and dosa batter ads: “Breakfast with benefits” and “Summer heat got bowl'd”",
  },
  challenge: "Lack of online visibility and low direct-to-consumer (D2C) sales.",
  solution:
    "We launched data-driven Meta ad campaigns targeting homemakers, using focused carousel creatives and lead forms.",
  results: [
    { value: "+50%", label: "Website traffic" },
    { value: "+40%", label: "Conversions" },
    { value: "3x", label: "Average return on ad spend (ROAS)" },
  ],
  deliverables: ["Meta ads", "Carousel creatives", "Lead form campaigns", "Audience targeting"],
  seo: { title: "Amma's Special case study" },
} satisfies Project;
