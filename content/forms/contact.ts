/**
 * Contact / lead form. Submitting opens WhatsApp with a pre-filled message;
 * nothing is sent to a server (see .claude/BACKEND.md).
 */
import type { LeadForm } from "../schema";

export const contactForm = {
  title: "Tell us what you need",
  intro:
    "Fill in a few details and we'll open WhatsApp with your message ready to send. You can review and edit it before sending.",
  fields: [
    { name: "name", label: "Your name", type: "text", required: true, maxLength: 80, autoComplete: "name" },
    { name: "company", label: "Company", type: "text", maxLength: 100, autoComplete: "organization" },
    { name: "email", label: "Email", type: "email", maxLength: 120, autoComplete: "email" },
    {
      name: "service",
      label: "What can we help with?",
      type: "select",
      required: true,
      placeholder: "Choose a service",
      options: "services",
    },
    {
      name: "message",
      label: "Tell us about your project",
      type: "textarea",
      required: true,
      maxLength: 1000,
      placeholder: "Goals, timeline, current tools…",
    },
  ],
  submitLabel: "Send on WhatsApp",
  whatsappTemplate: [
    "Hi Inara AI,",
    "",
    "Name: {{name}}",
    "Company: {{company}}",
    "Email: {{email}}",
    "Interested in: {{service}}",
    "",
    "{{message}}",
  ].join("\n"),
  privacyNote:
    "Nothing is stored on this website. Your message is sent only when you press Send in WhatsApp.",
  fallbackLabel: "WhatsApp didn't open? Message us directly",
  errors: {
    required: "This field is required.",
    email: "Enter a valid email address.",
    tel: "Enter a valid phone number.",
  },
  seo: {
    title: "Contact",
    description:
      "Talk to Inara AI about development, digital marketing, or AI automation. Send us a message on WhatsApp.",
  },
} satisfies LeadForm;
