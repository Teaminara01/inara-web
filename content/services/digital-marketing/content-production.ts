/**
 * Content & Film Production.
 * Source: brochure "What We Do" (Content Production: Video & Photography),
 * "Content Creation & Film Production", and the Dosa Coffee work. Review before launch.
 */
import type { Service } from "../../schema";

export const contentProduction = {
  slug: "content-production",
  title: "Content & Film Production",
  headline: "Video and photography that tell your brand's story and are made for the platforms your audience uses.",
  intro: "We plan, shoot, and edit content that is consistent with your brand voice and ready for every channel you publish on.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "Brand films", text: "Concept, script, shoot, and edit for brand and campaign films" },
        { label: "Product & food photography", text: "Styled shoots for menus, packaging, e-commerce, and social" },
        { label: "Reels & short-form video", text: "Platform-native vertical video for Instagram, Facebook, and YouTube" },
        { label: "Campaign content", text: "Content built to amplify products and carry campaign communication" },
      ],
    },
    {
      type: "callout",
      title: "Selected work",
      body: "For Dosa Coffee, across Kolkata and Delhi, we handled film production alongside design and multi-platform campaigns.",
    },
  ],
  related: [
    { practice: "digital-marketing", service: "social-media" },
    { practice: "digital-marketing", service: "youtube" },
    { practice: "digital-marketing", service: "branding-design" },
  ],
  seo: {
    title: "Content & Film Production",
    description:
      "Brand films, product and food photography, and short-form video from Inara AI, a full-service digital agency in Kolkata.",
  },
} satisfies Service;
