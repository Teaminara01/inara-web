/** §2.2 Social Media Marketing */
import type { Service } from "../../schema";

export const socialMedia = {
  slug: "social-media",
  title: "Social Media Marketing",
  headline: "Build community, drive engagement, and turn followers into customers.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "Social strategy",
          text: "Audience, competitor, and channel analysis, plus content pillars, tone of voice, and posting cadence",
        },
        {
          label: "Content creation",
          text: "Platform-native graphics, reels, carousels, short-form video, and copy",
        },
        {
          label: "Community management",
          text: "Monitoring and replying to comments, DMs, and mentions in your brand voice",
        },
        { label: "Paid social advertising", text: "Lead, conversion, and awareness campaigns" },
        {
          label: "Influencer & creator marketing",
          text: "Partner matching, campaign management, and performance tracking",
        },
        {
          label: "Social listening & reputation",
          text: "Sentiment, mention, and trend tracking, with crisis response protocols",
        },
      ],
    },
    {
      type: "chips",
      title: "Platforms",
      items: ["Instagram", "Facebook", "LinkedIn", "X (Twitter)", "TikTok", "YouTube"],
    },
    {
      type: "steps",
      title: "Our process",
      items: [
        { title: "Discovery" },
        { title: "Strategy" },
        { title: "Content creation" },
        { title: "Publishing & scheduling" },
        { title: "Community management" },
        { title: "Analysis & optimization" },
      ],
    },
    {
      type: "chips",
      title: "KPIs we report on",
      items: [
        "Reach",
        "Engagement rate",
        "Audience growth",
        "Click-through rate",
        "Website traffic",
        "Leads",
        "Return on ad spend (ROAS)",
      ],
      note: "All in monthly reports and live dashboards.",
    },
  ],
} satisfies Service;
