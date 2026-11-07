/**
 * Site-wide content: brand, contact details, navigation, footer, default SEO.
 * This is the ONLY place contact details live.
 */
import { routes } from "@/lib/routes";
import type { SiteContent } from "./schema";

export const site = {
  name: "Inara AI",
  tagline: "We make it matter",
  positioning: "Build. Grow. Automate.",
  pitch:
    "Inara AI designs and builds digital products, grows them with performance marketing, and runs them with AI agents that work alongside your team inside the systems you already use.",

  // Source: content-info/inara-brochure-png (contact slide).
  contact: {
    email: "admin@inaramarketing.com",
    phones: [
      { display: "+91 96743 41297", tel: "+919674341297" },
      { display: "+91 97481 73113", tel: "+919748173113" },
    ],
    whatsapp: {
      number: "919674341297",
      defaultMessage: "Hi Inara AI, I'd like to know more about your services.",
      label: "Chat on WhatsApp",
    },
    location: "Kolkata, India",
    address: {
      lines: ["P.S Aviator, 3rd Floor, Unit 304", "Atghara, New Town", "Kolkata, West Bengal 700136"],
      street: "P.S Aviator, 3rd Floor, Unit 304, Atghara, New Town",
      locality: "Kolkata",
      region: "West Bengal",
      postalCode: "700136",
      country: "IN",
    },
  },

  nav: [
    { label: "Development", href: routes.practice("development") },
    { label: "Digital Marketing", href: routes.practice("digital-marketing") },
    { label: "AI & Automation", href: routes.practice("ai-automation"), highlight: true },
    { label: "All services", href: routes.services() },
    { label: "About", href: routes.about() },
  ],

  workLink: { label: "Our Work", href: routes.work() },

  headerCta: { label: "Contact us", href: routes.contact() },

  footer: {
    blurb: "Build. Grow. Automate.",
    servicesHeading: "Services",
    companyHeading: "Company",
    companyLinks: [
      { label: "Home", href: routes.home() },
      { label: "About us", href: routes.about() },
      { label: "All services", href: routes.services() },
      { label: "Contact", href: routes.contact() },
    ],
    contactHeading: "Get in touch",
  },

  seo: {
    defaultTitle: "Inara AI | Build. Grow. Automate.",
    titleTemplate: "%s | Inara AI",
    description:
      "Inara AI designs and builds digital products, grows them with performance marketing, and runs them with AI agents that work alongside your team.",
  },

  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    home: "Home",
    services: "Services",
    explore: "Explore",
    learnMore: "Learn more",
    relatedServices: "Related services",
    servicesInPractice: "Our services",
    ctaHeading: "Ready to get started?",
    opensInNewTab: "(opens in a new tab)",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    draft: "Draft · sample data",
  },
} satisfies SiteContent;
