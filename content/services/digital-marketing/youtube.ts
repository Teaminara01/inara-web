/** §2.6 YouTube Marketing */
import type { Service } from "../../schema";

export const youtube = {
  slug: "youtube",
  title: "YouTube Marketing",
  headline: "Grow a channel that builds authority, attracts subscribers, and drives revenue.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "Channel audit & strategy", text: "Positioning, content roadmap, and KPIs" },
        {
          label: "Video production",
          text: "Scriptwriting, storyboarding, editing, and motion graphics",
        },
        {
          label: "YouTube SEO",
          text: "Titles, descriptions, tags, chapters, metadata, and high-CTR thumbnails",
        },
        { label: "YouTube Ads", text: "In-stream, in-feed, and Shorts campaigns" },
        {
          label: "Creator collaborations",
          text: "Influencer partnerships and co-created content",
        },
        {
          label: "Monetization",
          text: "AdSense optimization, sponsorships, memberships, merchandise, and affiliate programs",
        },
        {
          label: "Channel management",
          text: "A dedicated channel manager, content calendar, and community engagement",
        },
      ],
    },
    {
      type: "features",
      title: "Packages by audience",
      items: [
        { label: "Startups", text: "Explainers, founder stories, and product demos" },
        {
          label: "SMBs",
          text: "How-to tutorials, testimonials, and local or niche keyword ranking",
        },
        {
          label: "Enterprises",
          text: "Documentary-style content, executive interviews, CSR stories, internal communications, and live streams",
        },
        {
          label: "Creators",
          text: "Editing, thumbnail design, and revenue diversification",
        },
      ],
    },
    {
      type: "chips",
      title: "KPIs we report on",
      items: [
        "Watch time",
        "Audience retention",
        "CTR",
        "Views",
        "Subscriber growth",
        "Engagement",
        "Video-ad ROI",
      ],
    },
  ],
} satisfies Service;
