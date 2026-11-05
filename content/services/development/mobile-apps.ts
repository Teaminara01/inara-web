/** §1.3 Mobile App Development */
import type { Service } from "../../schema";

export const mobileApps = {
  slug: "mobile-apps",
  title: "Mobile App Development",
  headline: "Native and cross-platform apps built for performance, retention, and app-store success.",
  blocks: [
    {
      type: "features",
      title: "What's included",
      items: [
        { label: "iOS", text: "iPhone, iPad, Apple Watch, and Apple TV apps in Swift" },
        { label: "Android", text: "Phone, tablet, Wear OS, and Android TV apps in Kotlin" },
        { label: "Cross-platform", text: "Flutter and React Native apps from a single codebase" },
        {
          label: "Progressive Web Apps (PWA)",
          text: "Installable, offline-capable web apps",
        },
        {
          label: "Hybrid migration",
          text: "Moving legacy Xamarin, Cordova, or PhoneGap apps to modern frameworks",
        },
        {
          label: "App support",
          text: "OS compatibility updates, crash monitoring, and performance tuning",
        },
      ],
    },
    {
      type: "list",
      title: "Features we build",
      items: [
        "Firebase backends, push notifications, in-app analytics, and feedback loops",
        "On-device AI and smart features such as ML Kit vision, conversational assistants, voice, and AR experiences",
        "Integrations with your databases, APIs, CRM, and ERP",
        "Secure authentication, encrypted storage, API protection, and permission management",
        "App Store and Google Play release management through CI/CD",
      ],
    },
  ],
} satisfies Service;
