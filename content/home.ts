/**
 * Home page. Sections render top to bottom; reorder the array to reorder the page.
 * Practice cards come from the services registry automatically.
 */
import { routes } from "@/lib/routes";
import { ctas } from "./ctas";
import { aiDeploymentTimeline } from "./services/ai-automation/practice";
import type { HomeContent } from "./schema";

export const home = {
  seo: {
    // Uses site.seo.defaultTitle when title is omitted.
    description:
      "Inara AI designs and builds digital products, grows them with performance marketing, and runs them with AI agents that work alongside your team.",
  },
  sections: [
    {
      type: "hero",
      eyebrow: "We make it matter",
      title: "Build. Grow. Automate.",
      body: "Inara AI designs and builds digital products, grows them with performance marketing, and runs them with AI agents that work alongside your team inside the systems you already use.",
      primaryCta: ctas.contact,
      secondaryCta: { label: "Explore our services", href: routes.services() },
      // Agent loop from the brief (Perceive → Reason → Decide → Act → Learn),
      // plus Integrate (connects to your existing systems).
      visual: {
        center: "AI Agent",
        ariaLabel:
          "AI agent loop: Perceive, Reason, Decide, Act, Learn, and Integrate with your existing systems.",
        nodes: [
          { label: "Perceive", icon: "eye" },
          { label: "Reason", icon: "brain" },
          { label: "Decide", icon: "branch" },
          { label: "Act", icon: "zap" },
          { label: "Learn", icon: "refresh" },
          { label: "Integrate", icon: "plug" },
        ],
      },
    },
    {
      type: "practices",
      title: "Our three practices",
      intro: "One partner to build the product, grow it, and automate it.",
    },
    {
      type: "why",
      title: "Why Inara AI",
      items: [
        {
          title: "One partner, three practices.",
          text: "We build the product, grow it, and automate it.",
        },
        { title: "No rip-and-replace.", text: "We work with your existing stack." },
        {
          title: "Humans stay in control.",
          text: "Approvals, audit trails, and role-based access come as standard.",
        },
        {
          title: "Measured outcomes.",
          text: "Every engagement has defined KPIs and transparent reporting.",
        },
        {
          title: "Agile and transparent.",
          text: "Sprint demos, real-time progress visibility, and a dedicated team.",
        },
      ],
    },
    { type: "stats" },
    // Featured work + brands render as one continuous dark stretch.
    {
      type: "featuredWork",
      eyebrow: "Our work",
      title: "Crafting meaningful stories through our work",
      intro: "Selected case studies from hospitality, food and beverage, and healthcare brands.",
      readMore: "Read more",
      allWork: "See all our work",
      limit: 6,
    },
    {
      type: "brands",
      title: "Brands we've",
      highlight: "partnered",
      titleEnd: "with",
      footerLabel: "{count} brands and counting — see our work",
    },
    { type: "partners" },
    { type: "timeline", block: aiDeploymentTimeline },
    {
      type: "cta",
      title: "Ready to get started?",
      items: [
        { practice: "Development", cta: ctas.discoveryWorkshop },
        { practice: "Marketing", cta: ctas.freeAudit },
        { practice: "AI & Automation", cta: ctas.workflowAssessment },
      ],
    },
  ],
} satisfies HomeContent;
