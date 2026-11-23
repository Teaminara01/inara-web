/**
 * Influencer Marketing & Amplification.
 * Source: brochure "What We Do" (Influencer Marketing: Amplification). Review before launch.
 */
import type { Service } from "../../schema";

export const influencerMarketing = {
  slug: "influencer-marketing",
  title: "Influencer Marketing",
  headline: "Amplify your brand through creators your audience already follows and trusts.",
  intro: "We match your brand with relevant creators, run the campaign end to end, and report on what it delivered.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "Creator discovery", text: "Shortlisting creators by audience fit, location, and engagement" },
        { label: "Campaign planning", text: "Brief, deliverables, timelines, and content guidelines aligned to your brand voice" },
        { label: "Campaign management", text: "Outreach, coordination, approvals, and publishing" },
        { label: "Amplification", text: "Extending the best creator content through your own channels and paid media" },
        { label: "Reporting", text: "Reach, engagement, and conversion tracking for every campaign" },
      ],
    },
  ],
  related: [
    { practice: "digital-marketing", service: "social-media" },
    { practice: "digital-marketing", service: "pr-communications" },
    { practice: "digital-marketing", service: "ppc" },
  ],
  seo: {
    title: "Influencer Marketing",
    description:
      "Creator discovery, campaign management, and amplification from Inara AI, a full-service digital agency in Kolkata.",
  },
} satisfies Service;
