/** §1.1 Web Development */
import type { Service } from "../../schema";

export const web = {
  slug: "web",
  title: "Web Development",
  headline: "Fast, secure, search-ready websites that turn visitors into customers.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        {
          label: "CMS development",
          text: "WordPress, Drupal, headless, or custom CMS that your team can edit without developers",
        },
        {
          label: "Frontend engineering",
          text: "Responsive React, Vue, and Angular interfaces with code splitting, lazy loading, and caching",
        },
        {
          label: "Backend engineering",
          text: "Secure APIs, databases, server infrastructure, and third-party integrations",
        },
        {
          label: "Cloud-native builds",
          text: "Serverless and microservice architectures on AWS, Azure, or Google Cloud",
        },
        {
          label: "Design & redesign",
          text: "Mobile-first responsive design and modernization of legacy sites",
        },
        {
          label: "Web optimization",
          text: "Core Web Vitals, page speed, technical SEO, and UX improvements",
        },
        { label: "Web testing", text: "Cross-browser, performance, and security testing" },
        {
          label: "Support & modernization",
          text: "Ongoing maintenance and upgrades of legacy platforms",
        },
      ],
    },
    {
      type: "list",
      title: "Why it matters",
      items: [
        "Built SEO-ready, with clean architecture, schema markup, and fast load times",
        "Security-first approach covering hardened hosting, SSL, and secure coding practices",
        "Scales as traffic and content grow",
      ],
    },
  ],
  related: [{ practice: "digital-marketing", service: "seo" }],
} satisfies Service;
