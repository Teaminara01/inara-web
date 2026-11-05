/**
 * DRAFT · SAMPLE DATA. Fictional project for layout preview in `npm run dev`.
 * Replace with a real, client-approved case study, then remove `draft: true`.
 */
import type { Project } from "../schema";

export const sampleHeadlessCommerce = {
  slug: "sample-headless-commerce",
  draft: true,
  client: "Sample Client: D2C Lifestyle Brand",
  title: "Headless storefront and conversion program for a D2C brand",
  summary:
    "A Next.js storefront on Shopify Plus with zero-downtime migration, followed by an ongoing CRO program on product pages and checkout.",
  industry: "Retail & e-commerce",
  year: "2026",
  practices: ["development", "digital-marketing"],
  services: [
    { practice: "development", service: "ecommerce" },
    { practice: "digital-marketing", service: "cro" },
  ],
  cover: {
    src: "/work/sample-headless-commerce.svg",
    alt: "Abstract illustration of storefront product cards in brand colours",
  },
  challenge:
    "A slow legacy store, a checkout with high drop-off, and no reliable way to test changes.",
  solution:
    "We re-platformed to a headless Next.js frontend on Shopify Plus with full SEO preservation and 301 redirect mapping, then ran A/B tests on product pages, cart, and checkout.",
  results: [
    { value: "[x]%", label: "Conversion rate change (sample)" },
    { value: "[x]s", label: "Faster page load (sample)" },
    { value: "0", label: "Minutes of downtime (sample)" },
  ],
  stack: ["Next.js", "Shopify Plus", "TypeScript", "Vercel"],
} satisfies Project;
