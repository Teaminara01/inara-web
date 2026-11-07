/**
 * DRAFT · SAMPLE DATA. Fictional project for layout preview in `npm run dev`.
 * Replace with a real, client-approved case study, then remove `draft: true`.
 */
import type { Project } from "../schema";

export const sampleLocalSeo = {
  slug: "sample-local-seo",
  draft: true,
  client: "Sample Client: Multi-location Clinic Group",
  title: "Local SEO and content engine for a clinic group",
  summary:
    "Technical SEO fixes, Google Business Profile optimization across locations, and an intent-led content program.",
  industry: "Healthcare",
  year: "2025",
  practices: ["digital-marketing"],
  services: [
    { practice: "digital-marketing", service: "seo" },
    { practice: "digital-marketing", service: "content" },
  ],
  cover: {
    src: "/work/sample-local-seo.svg",
    alt: "Abstract illustration of map pins and search results in brand colours",
  },
  challenge:
    "Each location had inconsistent listings and thin pages, so patients searching nearby rarely found the clinics.",
  solution:
    "We fixed crawlability and Core Web Vitals, unified listings and citations, built location pages, and published a monthly calendar of patient-focused articles.",
  results: [
    { value: "[x]%", label: "Organic traffic change (sample)" },
    { value: "[x]", label: "Keywords in top 3 (sample)" },
  ],
  stack: ["Google Business Profile", "Search Console", "GA4", "WordPress"],
} satisfies Project;
