/**
 * Platform partners. Source: content-info/inara-brochure-png ("The Right Partners" slide).
 * Shown as text badges (no third-party logos are stored in the repo).
 */
import type { PartnersContent } from "./schema";

export const partners = {
  eyebrow: "Partnering with",
  title: "The right partners",
  intro:
    "We collaborate with leading platforms and media houses to deliver exceptional results, and deploy the right tools when they're needed.",
  partners: [
    { name: "Google", tier: "Premier Partner" },
    { name: "Meta", tier: "Business Partner" },
    { name: "Shopify", tier: "Partner" },
    { name: "Mailchimp", tier: "Partner" },
    { name: "Klaviyo", tier: "Partner" },
    { name: "Freshdesk" },
    { name: "Locobuzz" },
    { name: "Wati" },
  ],
  note: "Partnerships that power performance. Together, we scale impact.",
} satisfies PartnersContent;
