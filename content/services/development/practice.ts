/** §1 Development: practice overview. Source: content-info/inara-ai-services.md */
import { ctas } from "../../ctas";
import type { PracticeInfo } from "../../schema";

export const developmentPractice = {
  slug: "development",
  number: 1,
  title: "Development",
  navLabel: "Development",
  intro:
    "Secure, scalable software built around how your business runs, from a marketing site to an enterprise platform.",
  blocks: [
    {
      type: "steps",
      title: "Our delivery process",
      items: [
        {
          title: "Discovery Workshop",
          text: "We define goals, scope, risks, and success metrics, then produce a roadmap with timeline and cost.",
        },
        {
          title: "IA & UX/UI Design",
          text: "User personas, wireframes, clickable prototypes, and a reusable UI system.",
        },
        {
          title: "Agile Development",
          text: "Sprint-based builds with regular demos, progress reports, and continuous testing.",
        },
        {
          title: "Quality & Security Testing",
          text: "Functional, performance, compatibility, accessibility, and security testing.",
        },
        {
          title: "Launch & Deployment",
          text: "CI/CD pipelines, environment configuration, automated rollbacks, and uptime monitoring.",
        },
        {
          title: "Support & Evolution",
          text: "Monitoring, security patches, performance tuning, and new feature releases.",
        },
      ],
    },
    {
      type: "features",
      title: "Technology stack",
      items: [
        { label: "Frontend", text: "React, Next.js, Angular, Vue.js, TypeScript" },
        { label: "Backend", text: "Node.js, NestJS, Python, PHP/Laravel, .NET, Java/Spring Boot" },
        { label: "Mobile", text: "Swift (iOS), Kotlin (Android), Flutter, React Native" },
        {
          label: "Commerce & CMS",
          text: "Shopify / Shopify Plus, WooCommerce, Magento, WordPress, headless CMS",
        },
        { label: "Data", text: "PostgreSQL, MySQL, MongoDB" },
        {
          label: "Cloud & DevOps",
          text: "AWS, Microsoft Azure, Google Cloud, Docker, serverless, CI/CD",
        },
      ],
    },
  ],
  cta: ctas.discoveryWorkshop,
  seo: {
    title: "Development Services",
    description:
      "Websites, web apps, mobile apps, e-commerce stores, and SaaS platforms: secure, scalable software built around how your business runs.",
  },
} satisfies PracticeInfo;
