/** §3.2 Conversational AI */
import type { Service } from "../../schema";

export const conversationalAi = {
  slug: "conversational-ai",
  title: "Conversational AI",
  headline:
    "Assistants that understand your business and act on it, across chat, voice, and messaging.",
  blocks: [
    {
      type: "features",
      title: "Capabilities",
      items: [
        {
          label: "Omnichannel assistants",
          text: "Website chat, WhatsApp, Slack, Microsoft Teams, email, and voice",
        },
        {
          label: "Voice-first architecture",
          text: "Real-time voice transcription, multi-language voice assistants, and advanced noise handling",
        },
        {
          label: "Grounded answers",
          text: "RAG over your knowledge base, policies, product catalog, and live system data",
        },
        {
          label: "Action-taking",
          text: "Booking appointments, updating records, raising tickets, and processing requests through tool calls",
        },
        {
          label: "Smart escalation",
          text: "Hands complex or sensitive conversations to a human with the full transcript and context",
        },
        {
          label: "NLP",
          text: "Intent detection, entity extraction, sentiment analysis, and translation",
        },
      ],
    },
    {
      type: "list",
      title: "Use cases",
      items: [
        "24/7 customer support with Tier-1 ticket resolution",
        "Lead capture, qualification, and meeting booking",
        "Smart scheduling, reminders, and no-show follow-ups",
        "Internal HR and IT helpdesk assistants",
        "**AI meeting workflows:** Automated Google Meet and Teams booking, real-time transcription, minutes of meeting (MoM) generation, and extraction of summaries and action items",
      ],
    },
  ],
} satisfies Service;
