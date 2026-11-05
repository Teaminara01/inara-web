/** §2.5 Pay-Per-Click Marketing (PPC) */
import type { Service } from "../../schema";

export const ppc = {
  slug: "ppc",
  title: "Pay-Per-Click Marketing (PPC)",
  headline: "Paid campaigns that are tightly structured, continuously tested, and measured on return.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "Search ads", text: "Google Ads and Microsoft (Bing) Ads" },
        { label: "Display ads", text: "Google Display Network banners and responsive display" },
        {
          label: "Shopping ads",
          text: "Product feed optimization and bid strategy for Google Shopping and Performance Max",
        },
        {
          label: "Paid social",
          text: "Meta (Facebook and Instagram), LinkedIn, and TikTok campaigns",
        },
        { label: "Remarketing", text: "Audience re-engagement across search, display, and social" },
        {
          label: "PPC audit & strategy",
          text: "Wasted-spend analysis, audience gaps, and a data-backed roadmap",
        },
      ],
    },
    {
      type: "text",
      title: "Core capabilities",
      body: "Keyword research (long-tail and negatives), ad copy and creative A/B testing, landing page optimization, bid management, and conversion tracking.",
    },
    {
      type: "list",
      title: "Our commitments",
      items: [
        "You own your ad accounts and data",
        "Transparent reporting with no hidden fees",
        "Flexible engagement without long-term lock-in",
      ],
    },
    {
      type: "steps",
      title: "Our process",
      items: [
        { title: "Audit & analysis" },
        { title: "Strategy" },
        { title: "Account setup & conversion tracking" },
        { title: "Creative development" },
        { title: "Launch & monitor" },
        { title: "Scale & optimize" },
      ],
    },
    {
      type: "chips",
      title: "KPIs we report on",
      items: ["CPC", "CPA", "Conversion rate", "Quality Score", "ROAS", "ROI", "Lead volume"],
    },
  ],
  related: [{ practice: "digital-marketing", service: "cro" }],
} satisfies Service;
