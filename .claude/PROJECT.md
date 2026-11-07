# Inara Web — Project Specs

> Source material lives in `content-info/`. This file summarizes it for day-to-day work; when the two disagree, `content-info/` wins.

## The business

| Item             | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| Brand name       | **Inara AI** (wordmark renders as lowercase "inara ai")        |
| Tagline (logo)   | **We make it matter**                                          |
| Positioning line | **Build. Grow. Automate.**                                     |
| AI practice line | **AI handles the analysis. Your people keep the judgment.**    |
| Contact details  | Email, phones, WhatsApp, office address: `content/site.ts` only (source: brochure contact slide) |
| Market           | Kolkata-based agency (founded April 2024), selling to startups, SMBs, and enterprises |

**One-line pitch:** Inara AI designs and builds digital products, grows them with performance marketing, and runs them with AI agents that work alongside your team inside the systems you already use.

## Three practices (site information architecture)

Full copy: `content-info/inara-ai-services.md` (see `.claude/services.md` for how to use it).

1. **Development**: Web Development, Web App Development, Mobile App Development, E-commerce Development, SaaS Development
2. **Digital Marketing**: SEO & Search Marketing, Social Media Marketing, CRO, Content Marketing, PPC, YouTube Marketing, Strategy Branding & Design, Content & Film Production, Influencer Marketing, PR & Communications (last four from the brochure)
3. **AI & Intelligent Automation**: Workflow Automation, Conversational AI, Business Intelligence, Multi-Agent Orchestration

## What the website must do

- Present the three practices and their 15 sub-services as SEO-indexable pages.
- Convert visitors through practice-specific CTAs:
  - Development → **Book a discovery workshop**
  - Marketing → **Get a free SEO, PPC, or CRO audit**
  - AI & Automation → **Book a free workflow assessment and ROI estimate** / **Schedule a live agent demo**
- Reinforce the differentiators listed in "Why Inara AI": one partner for all three practices, no rip-and-replace, humans in control, measured outcomes, agile and transparent delivery.
- Client dashboard (logged-in area) is in scope per `CLAUDE.md`. Its requirements are **not yet defined**, so do not build it without a spec.

## Suggested route map

| Route                                     | Content source (services file section)                                 |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| `/`                                     | Intro, three practices, Why Inara AI, CTAs                             |
| `/services/development`                 | §1 overview + delivery process + tech stack                           |
| `/services/development/[service]`       | §1.1–1.5                                                             |
| `/services/digital-marketing`           | §2 overview                                                           |
| `/services/digital-marketing/[service]` | §2.1–2.6                                                             |
| `/services/ai-automation`               | §3 overview, agent loop, foundations, integrations, 4-week deployment |
| `/services/ai-automation/[service]`     | §3.1–3.4                                                             |
| `/about`                                | Brochure: journey, DNA, what we do, why Inara, process, stats, clients, partners (`content/about.ts`) |
| `/contact`                              | Contact details + WhatsApp lead form (`content/forms/contact.ts`)    |
| `/work`, `/work/[slug]`                 | Brochure case studies (`content/projects/`) + creatives gallery (`content/creatives.ts`) |

Confirm this map with the user before scaffolding routes.

## Brand assets

| Asset                               | Path                                        | Use                         |
| ----------------------------------- | ------------------------------------------- | --------------------------- |
| Logo (transparent PNG)              | `content-info/inara-logo-transparent.png` | Primary logo for the site   |
| Logo (JPEG, white bg)               | `content-info/logo.jpeg`                  | Reference only; don't ship  |
| Brand sheet (colors, fonts, footer) | `content-info/color-code.jpeg`            | Source of truth for styling |

Copy any asset that ships into `public/brand/` and don't import it from `content-info/`. See `.claude/STYLE_GUIDE.md` for usage rules.

## Current state (as of 2026-11-05)

- Marketing site built on branch `feat/website-foundation`: home, services index, 3 practice pages, 15 service pages, contact (WhatsApp form), 404, sitemap, robots, all statically prerendered.
- No component library or analytics installed yet.
- **No backend API.** Lead forms open a pre-filled WhatsApp chat (`.claude/BACKEND.md`).
- **Content is file-based.** Type-safe TypeScript content files live in `content/` (`.claude/CONTENT.md`). The values in the business table above are the seed for `content/site.ts`, and once that file exists, it is the source of truth.
- Branches: `main`, `develop`. Work branches off `develop`.

## Open items / need confirmation from the user

- **Track record numbers** come from the brochure (5+ years, 20+ brands, 26+ success stories). Never invent figures; update `content/stats.ts` when they change.
- **Brochure-derived items to confirm:** founder names/roles (the brochure has photos only, so they are not on the site); the new service page copy (brochure gives titles only); original artwork to replace the images cropped from the brochure slides in `public/work/`.
- **Footer copy mismatch:** the brand sheet footer lists "Social Media Marketing | SEO | Performance Marketing | Website Designing" and uses an `https://inara.ai` email, which reflects the older marketing-only positioning. Confirm whether the footer should list the three current practices instead.
- **Production domain** is unknown, so `metadataBase`, canonical URLs, and the sitemap cannot be finalized yet.
- **Client projects:** six brochure case studies are published (Amma's Special, Neotia Getwel, Genome, Dosa Coffee, Calcutta Gin, Bonne Femme). The fictional `sample-*` drafts remain dev-only. Years are unknown for most; add them when available.
- **Boomstad font files** are not in the repo. A licensed web-font file is needed (see STYLE_GUIDE).
- **WhatsApp number for leads:** forms submit through WhatsApp (decided, see `.claude/BACKEND.md`). Confirm which phone number is the WhatsApp Business number, then store it in `content/site.ts`.
- **Client dashboard** scope, auth provider, and backend are undefined.
