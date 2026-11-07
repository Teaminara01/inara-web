# Inara Web — Project Specs

> Source material lives in `content-info/`. This file summarizes it for day-to-day work; when the two disagree, `content-info/` wins.

## The business

| Item             | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| Brand name       | **Inara AI** (wordmark renders as lowercase "inara ai")        |
| Tagline (logo)   | **We make it matter**                                          |
| Positioning line | **Build. Grow. Automate.**                                     |
| AI practice line | **AI handles the analysis. Your people keep the judgment.**    |
| Contact email    | admin@https://inara.ai                                             |
| Contact phones   | +91 96743 41297 · +91 9030 73304                                    |
| Market           | India-based agency (+91), selling to startups, SMBs, and enterprises |

**One-line pitch:** Inara AI designs and builds digital products, grows them with performance marketing, and runs them with AI agents that work alongside your team inside the systems you already use.

## Three practices (site information architecture)

Full copy: `content-info/inara-ai-services.md` (see `.claude/services.md` for how to use it).

1. **Development**: Web Development, Web App Development, Mobile App Development, E-commerce Development, SaaS Development
2. **Digital Marketing**: SEO & Search Marketing, Social Media Marketing, CRO, Content Marketing, PPC, YouTube Marketing
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
| `/contact`                              | Contact details + WhatsApp lead form (`content/forms/contact.ts`)    |
| `/work`, `/work/[slug]`                 | Client projects (`content/projects/`), linked in nav only once a real project is published |

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

- **Track record numbers** are placeholders in the services file (`[Projects delivered] · [Clients served] · …`). Never invent figures. Leave the section out or keep it as a visible TODO until real numbers are supplied.
- **Footer copy mismatch:** the brand sheet footer lists "Social Media Marketing | SEO | Performance Marketing | Website Designing" and uses an `https://inara.ai` email, which reflects the older marketing-only positioning. Confirm whether the footer should list the three current practices instead.
- **Production domain** is unknown, so `metadataBase`, canonical URLs, and the sitemap cannot be finalized yet.
- **Client projects:** only fictional `draft` samples exist (dev-only). Needed for each real project: client name (with permission), industry, year, services, challenge, solution, real results, stack, an optional testimonial, and a cover image or screenshots.
- **Boomstad font files** are not in the repo. A licensed web-font file is needed (see STYLE_GUIDE).
- **WhatsApp number for leads:** forms submit through WhatsApp (decided, see `.claude/BACKEND.md`). Confirm which phone number is the WhatsApp Business number, then store it in `content/site.ts`.
- **Client dashboard** scope, auth provider, and backend are undefined.
