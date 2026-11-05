/** §2.4 Content Marketing */
import type { Service } from "../../schema";

export const contentMarketing = {
  slug: "content",
  title: "Content Marketing",
  headline: "Content that ranks, earns trust, and moves buyers to act.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "Content strategy",
          text: "Audience personas, customer-journey mapping, competitor gap analysis, and KPI definition",
        },
        {
          label: "Blog & SEO writing",
          text: "Keyword-led articles, pillar pages, and topic clusters",
        },
        { label: "Thought leadership", text: "White papers, case studies, eBooks, and reports" },
        {
          label: "Visual & video content",
          text: "Infographics, explainer videos, and social assets",
        },
        { label: "Email content", text: "Newsletters and nurture sequences" },
        {
          label: "Content audits",
          text: "Refreshing, consolidating, or retiring existing content",
        },
      ],
    },
    {
      type: "text",
      title: "What you receive",
      body: "A content strategy and editorial calendar, brand voice guidelines and content frameworks, keyword and internal-linking plans, finished content, and monthly performance reports.",
    },
    {
      type: "text",
      title: "Distribution",
      body: "Owned (website, email), earned (PR, partnerships, influencers), and paid amplification.",
    },
    {
      type: "steps",
      title: "Our process",
      items: [
        { title: "Discovery & research" },
        { title: "Strategy" },
        { title: "Creation" },
        { title: "SEO optimization" },
        { title: "Distribution & promotion" },
        { title: "Analysis & optimization" },
      ],
    },
    {
      type: "chips",
      title: "KPIs we report on",
      items: [
        "Organic traffic",
        "Rankings",
        "Engagement",
        "Leads",
        "Conversion rate",
        "Revenue attribution",
      ],
      note: "Meaningful organic results typically appear in 3–6 months.",
    },
  ],
  related: [{ practice: "digital-marketing", service: "seo" }],
} satisfies Service;
