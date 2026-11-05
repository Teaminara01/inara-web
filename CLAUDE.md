# Inara Web

## Project Overview

- **Brand:** Inara AI. Tagline: "We make it matter". Positioning: **Build. Grow. Automate.**
- **What it is:** Corporate/agency website (and future client dashboard) for an India-based agency with three practices:
  1. **Development:** web, web apps, mobile, e-commerce, SaaS
  2. **Digital Marketing:** SEO, social media, CRO, content, PPC, YouTube
  3. **AI & Intelligent Automation:** workflow automation, conversational AI, BI, multi-agent orchestration
- **Brand look:** black / white with yellow `#fed700` as the accent. Fonts: Boomstad (display) and Poppins (body).
- **Contact details:** kept only in `content\site.ts` (email, phones, WhatsApp number). Don't copy them into docs or code.
- **Stack:** Next.js 16.4 (App Router, `cacheComponents` + `partialPrefetching` enabled), React 19.3, Tailwind CSS v4, TypeScript strict.
- **Backend:** **None.** The site is fully static. Forms submit by opening a pre-filled **WhatsApp** chat (`wa.me`). See `.claude\BACKEND.md`.
- **Content:** file-based, type-safe TypeScript content files in `content\` (imported via `@/content`). See `.claude\CONTENT.md`.
- **Status:** Fresh `create-next-app` scaffold. See open items in `.claude\PROJECT.md`.

## Scope

- Work **only on the Inara Web** (agency/corporate web application and client dashboard).
- Do not touch unrelated brand repositories or stores unless explicitly instructed.

## Reference Context (read before starting any task)

| What                        | Path                              |
| --------------------------- | --------------------------------- |
| Overall Project Specs       | `.claude\PROJECT.md`            |
| Front-end Guidelines & Arch | `.claude\CONTEXT-NEXT-JS-FE.md` |
| Services & Capability Copy  | `.claude\services.md`           |
| Brand Guidelines & Styling  | `.claude\STYLE_GUIDE.md`        |
| Backend & Forms (WhatsApp)  | `.claude\BACKEND.md`            |
| Content Management (TS)     | `.claude\CONTENT.md`            |
| Next.js agent rules         | `AGENTS.md`                     |

## Source Content

- **`content\` (TypeScript content files) is what the site renders.** Edit it to change live information.
- **`content-info\` is the original brief.** It is read-only reference used to seed `content\` and wins over the `.claude\` summaries.

| What                                   | Path                                       |
| -------------------------------------- | ------------------------------------------ |
| Site content store (TS)                | `content\`                                 |
| Full services copy (brief)             | `content-info\inara-ai-services.md`        |
| Brand sheet (colors, fonts, footer)    | `content-info\color-code.jpeg`             |
| Logo (transparent, use this)           | `content-info\inara-logo-transparent.png`  |
| Logo (white background, reference)     | `content-info\logo.jpeg`                   |


## Code Locations

| What                           | Path                 |
| ------------------------------ | -------------------- |
| Agency Web Front-end (Next.js) | `.` (Root)         |
| Documentation & Context        | `.claude\`         |
| Content store (TS + schema)    | `content\`         |
| Route builders                 | `lib
outes.ts`    |
| WhatsApp URL builder           | `lib\whatsapp.ts`  |
| Generated PR Descriptions      | `PR-Descriptions\` |

## Workflow (mandatory)

1. **Plan first:** Before making any code modification, present a concise implementation plan:
   - Target files to create/edit.
   - Front-end, UI/UX, or state impact.
   - Data-fetching and SEO implications.
2. **Wait for approval:** Do not touch or write code until explicit approval is granted.
3. **Stick to the plan:** Implement only what was agreed upon. If an edge case or scope change emerges mid-way, stop and confirm before proceeding.

## Git & Branching Strategy

- Always create and switch to a descriptive branch before writing code:
  - Allowed prefixes: `feat/`, `fix/`, `refactor/`, `chore/` (e.g., `feat/ai-automation-section`)
  - Target base branch: `develop` (or `main` if production hotfix)
- Commits must follow conventional commit naming (`feat: ...`, `fix: ...`, `style: ...`).

## Architecture Principles

- **Zero Fake Implementations:** Write production-ready, accessible, and performant code.
- **Strict Separation of Concerns:** Keep presentation, business logic, analytics tracking, and API communications completely decoupled.
- **No Backend:** Don't create API routes, Route Handlers, Server Actions, or databases for data submission. All forms go through WhatsApp (`.claude\BACKEND.md`) unless the user explicitly changes this.
- **Content in Files, Not JSX:** All user-visible copy, contact details, nav, CTAs, and SEO metadata come from `content\*.ts` through `@/content`. Never hard-code them in components (`.claude\CONTENT.md`).
- **Content Alignment:** Keep all service definitions, agency copy, and tech stacks aligned with `content-info\inara-ai-services.md` (see `.claude\services.md`). Never invent stats, clients, or testimonials. Track-record numbers are placeholders until the user supplies them.
- **Brand Alignment:** Use only the palette and fonts in `.claude\STYLE_GUIDE.md`, exposed as Tailwind v4 tokens (no hard-coded hex in components). Never put yellow text on white.
- **Dark Mode:** Every surface and text colour must use the theme-aware tokens (`bg-canvas`, `bg-card`, `text-fg`, `border-line`, `text-muted`). `ink`/`paper` are fixed colours, for text on yellow and always-dark bands only. Check new UI in both modes.

## Front-end Rules (Next.js App Router)

- **Server-First Mindset:** All public-facing marketing, landing, and service pages must be **Server Components** (`RSC`) for optimal Core Web Vitals and SEO.
- **Client Components (`"use client"`):** Restricted strictly to interactive leaf-nodes (e.g., interactive calculators, mobile drawers, contact forms, animated toggles). Never mark an entire page or large container as client-side.
- **Data Fetching:**
  - Public marketing pages & static content → `'use cache'` + `cacheLife()` / `cacheTag()` (Cache Components is enabled). **Do not** export `revalidate` / `dynamic` / `fetchCache` or use `fetch(..., { next: { revalidate } })`, because these error or are ignored under `cacheComponents`. Wrap request-time data in `<Suspense>`.
  - Interactive dashboards / dynamic client queries → TanStack Query or client data utilities.
- **File & Component Hygiene:**
  - Avoid bloated monolithic files. Break complex UI blocks into sub-components under `_components/` or `@/components`.
  - Maintain reusable, atomic UI design patterns (Tailwind / shadcn / designated component system).
  - Extract constants, micro-copy, navigation menus, and metadata configs into dedicated config files.

## Local Storage & Client State

- Any sensitive client-side session information stored in `localStorage` or `sessionStorage` must go through a dedicated wrapper service (e.g., `SecureStorage`).
- Never access raw browser storage APIs directly inside UI components.

## PR Description

Whenever any task, bugfix, or feature is completed, generate a Markdown file documenting the changes and save it directly under the `PR-Descriptions/` directory (e.g., `PR-Descriptions/feat-service-catalog.md`).

**Structure:**

- **Summary:** Concise high-level overview of the task or fix.
- **Key Changes:** Concrete bullet points covering files touched and architectural adjustments.
- **Context / Verification:** Testing steps, responsive validation, and reviewers' notes.
- **Tone:** Technical, direct, and concise (no fluff).
