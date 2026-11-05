/** §2.1 SEO & Search Marketing */
import type { Service } from "../../schema";

export const seo = {
  slug: "seo",
  title: "SEO & Search Marketing",
  headline:
    "Sustainable organic growth through technical excellence, intent-driven content, and real authority.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "SEO audits",
          text: "Site structure, content, and backlink analysis to uncover ranking blockers",
        },
        {
          label: "Technical SEO",
          text: "Crawlability, indexing, site architecture, Core Web Vitals, mobile usability, and schema markup",
        },
        {
          label: "On-page optimization",
          text: "Meta tags, headers, internal linking, and keyword-to-intent mapping",
        },
        {
          label: "Local SEO",
          text: "Google Business Profile optimization, consistent listings and citations, and location-focused content",
        },
        {
          label: "AI search optimization",
          text: "Structuring content to be cited in AI Overviews and answer engines",
        },
        {
          label: "Authority link building",
          text: "White-hat backlinks chosen for topical relevance and domain authority",
        },
      ],
    },
    {
      type: "steps",
      title: "Our process",
      items: [
        { title: "Discovery & audit" },
        { title: "Strategy & keyword roadmap" },
        { title: "On-page optimization" },
        { title: "Technical fixes & SEO content" },
        { title: "Link building" },
        { title: "Monitoring & reporting" },
      ],
    },
    {
      type: "chips",
      title: "KPIs we report on",
      items: [
        "Organic traffic",
        "Impressions",
        "Keyword positions",
        "Click-through rate",
        "Indexed pages",
        "Backlink growth",
        "Conversions",
        "Qualified leads",
      ],
    },
  ],
  related: [{ practice: "digital-marketing", service: "content" }],
} satisfies Service;
