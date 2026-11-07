/**
 * Communications, PR & Social.
 * Source: brochure "What We Do" (Communications: PR & Social) and partner slide
 * ("leading platforms and media houses"). Review before launch.
 */
import type { Service } from "../../schema";

export const prCommunications = {
  slug: "pr-communications",
  title: "PR & Communications",
  headline: "Get people talking about your brand, with consistent communication across media and social.",
  intro: "We shape your story, take it to the right media and platforms, and keep your brand voice consistent everywhere it appears.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "Communication strategy", text: "Key messages, audiences, and a calendar of moments worth talking about" },
        { label: "Media relations", text: "Working with media houses on launches, announcements, and features" },
        { label: "Launch & event communication", text: "Campaigns for openings, launches, and brand events" },
        { label: "Social communication", text: "Keeping the brand's voice consistent across social channels" },
      ],
    },
  ],
  related: [
    { practice: "digital-marketing", service: "social-media" },
    { practice: "digital-marketing", service: "influencer-marketing" },
    { practice: "digital-marketing", service: "branding-design" },
  ],
  seo: {
    title: "PR & Communications",
    description:
      "Communication strategy, media relations, and launch campaigns from Inara AI, a full-service digital agency in Kolkata.",
  },
} satisfies Service;
