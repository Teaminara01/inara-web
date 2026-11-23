/**
 * About page (/about). Source: content-info/inara-brochure-png
 * (intro, "Our DNA", "What We Do", "Why Inara AI?", "Our Journey",
 * "Our Strategic Process", approach and closing slides).
 * Stats, clients and partners are rendered from their own content files.
 */
import { ctas } from "./ctas";
import type { AboutContent } from "./schema";

export const about = {
  seo: {
    title: "About Us",
    description:
      "Inara AI is a full-service digital agency in Kolkata: strategy, branding, digital marketing, web and app development, and content and film production.",
  },
  eyebrow: "About Inara AI",
  title: "We get people talking about your brand",
  lead: "One of Kolkata's newest and fastest-growing full-service digital agencies, creating memorable experiences across strategy and branding, digital marketing, website and app development, and content and film production.",

  story: {
    title: "Our journey: from agency experience to independent partner",
    paragraphs: [
      "Founded in **April 2024**, Inara AI is a full-service digital marketing and brand-building agency based in Kolkata. While we are new as an independent agency, our roots in the industry run deep.",
      "Before founding Inara AI, our leadership spent over **6 years** with reputed digital agencies like **IEPL** and **Klarustech**, gaining hands-on experience with some of the most respected brands across hospitality, F&B, healthcare, lifestyle, and corporate sectors.",
      "Inara AI was born with a simple belief: brands deserve **clarity, consistency, and creative excellence**, not average marketing.",
      "Working with established agencies gave us exposure to high-pressure campaigns, large-scale brand mandates, and result-driven digital ecosystems. That experience shaped our approach: strategic at the core, creative in execution, and measurable in outcomes.",
      "With this foundation, we entered the market as a **trusted, execution-focused partner** for brands looking to grow meaningfully in the digital space.",
    ],
  },

  blocks: [
    {
      type: "features",
      title: "Our DNA: we are…",
      items: [
        {
          label: "Independent",
          text: "Agnostic, honest, and accountable. We aren't bound by networks, just by our commitment to your success.",
        },
        {
          label: "Hungry",
          text: "Restless for better ideas and better outcomes. We constantly push boundaries to find the next big thing for your brand.",
        },
        {
          label: "Experienced",
          text: "A multi-disciplinary team shipping real-world results. We bring years of expertise across diverse verticals to the table.",
        },
      ],
    },
    {
      type: "features",
      title: "What we do",
      intro: "Dedicated to doing what's right to help our clients win.",
      items: [
        { label: "Strategy", text: "Brand and digital strategy." },
        { label: "Analytics", text: "Data insights and reporting." },
        { label: "Development", text: "Websites and apps." },
        { label: "Content production", text: "Video and photography." },
        { label: "Communications", text: "PR and social." },
        { label: "Performance", text: "Paid media and SEO." },
        { label: "Influencer marketing", text: "Creator partnerships and amplification." },
        { label: "Design", text: "UI/UX and branding." },
      ],
    },
    {
      type: "features",
      title: "Why Inara AI?",
      intro: "We don't just execute. We elevate your digital presence.",
      items: [
        {
          label: "Experienced",
          text: "With all digital and design disciplines in-house, our experienced team has worked with national and international brands to deliver excellence.",
        },
        {
          label: "Strategic partnerships",
          text: "We have partners and tie-ups with providers across the industry to help you get the best results and deploy the right tools when required.",
        },
        {
          label: "Data driven",
          text: "We emphasize strategy. We are driven by data, with clear actions and insights, and use proven methodologies to implement digital seamlessly.",
        },
      ],
    },
    {
      type: "steps",
      title: "Our strategic process: memorable brand, trusted performance",
      items: [
        { title: "Objective", text: "Clarify the brand's core objective and success metrics, grounded in business goals." },
        { title: "Audience", text: "Deep research into target segments, needs, behaviours, and decision triggers." },
        { title: "Voice", text: "Create a strong, consistent brand voice that is memorable and trustworthy." },
        { title: "Execution", text: "Consistent cross-platform delivery of campaigns and content aligned to the voice." },
        { title: "Measure and optimize", text: "Disciplined measurement and iterative performance optimization based on data." },
      ],
    },
    {
      type: "steps",
      title: "Driven by curiosity, guided by insight",
      items: [
        { title: "Listen closely" },
        { title: "Think thoughtfully" },
        { title: "Turn insights into action" },
        { title: "Deliver meaningful solutions" },
      ],
    },
  ],

  cta: {
    title: "Ready to create something memorable?",
    intro: "Share your challenge with us. We're confident we can turn it into a solution.",
    cta: ctas.contact,
  },
} satisfies AboutContent;
