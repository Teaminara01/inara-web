/** Case study. Source: content-info/inara-brochure-png (Neotia Getwel slide + creatives). */
import type { Project } from "../schema";

export const neotiaGetwel = {
  slug: "neotia-getwel",
  client: "Neotia Getwel Multispecialty Hospital",
  title: "Growing reach and specialist appointments for Neotia Getwel",
  summary:
    "Awareness and consultation campaigns across Siliguri and North Bengal increased reach 2.5x in 90 days and boosted appointments for specialist clinics.",
  industry: "Healthcare",
  year: "2025",
  practices: ["digital-marketing"],
  services: [
    { practice: "digital-marketing", service: "social-media" },
    { practice: "digital-marketing", service: "ppc" },
    { practice: "digital-marketing", service: "seo" },
  ],
  cover: {
    src: "/work/neotia-getwel/cover.webp",
    alt: "Two Neotia Getwel Facebook posts: a paediatric cardiology clinic and epilepsy warning signs",
  },
  challenge:
    "Low digital visibility and patient footfall for specific departments such as gynaecology, urology, and cardiac care.",
  solution:
    "We ran awareness and consultation-focused Meta campaigns targeting Siliguri and North Bengal. Content focused on patient testimonials, doctor highlights, and seasonal health awareness (such as Monsoon Care and No Smoking Day), and we used location targeting with lead generation form ads for specialist appointments.",
  results: [{ value: "2.5x", label: "Reach in 90 days" }],
  outcomes: [
    "Boosted appointments for specialist clinics, especially urology and gynaecology",
    "Website ranks for top keywords",
  ],
  deliverables: ["Meta campaigns", "Lead generation ads", "Doctor highlight creatives", "Health awareness content", "SEO"],
  gallery: [
    {
      src: "/work/neotia-getwel/post-1.webp",
      alt: "Neotia Getwel post announcing a paediatric cardiology clinic with Dr. Sanjiban Ghosh",
    },
    {
      src: "/work/neotia-getwel/post-2.webp",
      alt: "Neotia Getwel awareness post on recognising the warning signs of epilepsy",
    },
    { src: "/work/creatives/dr-vikas-modi-1.webp", alt: "Neotia Getwel orthopaedics post: why orthopaedic issues rise with age" },
    { src: "/work/creatives/dr-rahul-taparia-2.webp", alt: "Neotia Getwel post: don't ignore diabetic foot health" },
  ],
  seo: { title: "Neotia Getwel case study" },
} satisfies Project;
