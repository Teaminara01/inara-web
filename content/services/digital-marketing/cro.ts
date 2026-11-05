/** §2.3 Conversion Rate Optimization (CRO) */
import type { Service } from "../../schema";

export const cro = {
  slug: "cro",
  title: "Conversion Rate Optimization (CRO)",
  headline: "Get more customers from the traffic you already have.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "Behavior analytics",
          text: "Heatmaps, click and scroll tracking, and session recordings to find friction and drop-off",
        },
        {
          label: "Funnel analysis",
          text: "Pinpointing where prospects leave, from landing page to checkout",
        },
        {
          label: "A/B & multivariate testing",
          text: "Headlines, CTAs, layouts, imagery, pricing, and forms",
        },
        {
          label: "Landing page optimization",
          text: "Matching message to ad intent to raise conversion rates and Quality Scores",
        },
        {
          label: "Form optimization",
          text: "Fewer fields, smarter validation, and lower abandonment",
        },
        { label: "UX audits", text: "Cross-device usability review with prioritized fixes" },
        { label: "Personalization", text: "Tailored content for visitor segments" },
        { label: "Voice-of-customer research", text: "On-site surveys and feedback polls" },
      ],
    },
    {
      type: "features",
      title: "Specialized programs",
      items: [
        {
          label: "E-commerce CRO",
          text: "Product discovery, product pages, cart and checkout flows, cart abandonment, and average order value",
        },
        {
          label: "SaaS CRO",
          text: "Pricing pages, trial-to-paid conversion, onboarding, and churn reduction",
        },
        {
          label: "Lead generation CRO",
          text: "Form and landing-page funnels for B2B and services",
        },
      ],
    },
    {
      type: "steps",
      title: "Our process",
      items: [
        { title: "Analysis & audit" },
        { title: "Hypothesis prioritization by impact and effort" },
        { title: "Experiment design" },
        { title: "Testing to statistical significance" },
        { title: "Rollout of winners" },
        { title: "Continuous iteration" },
      ],
    },
    {
      type: "callout",
      title: "Typical timeline",
      body: "Early signals in 2–4 weeks, with significant gains usually in 1–3 months.",
    },
  ],
  related: [{ practice: "development", service: "ecommerce" }],
} satisfies Service;
