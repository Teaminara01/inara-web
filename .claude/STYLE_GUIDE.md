# Inara AI — Brand & Style Guide

Source of truth: `content-info/color-code.jpeg` (brand sheet). Logo: `content-info/inara-logo-transparent.png`.

## Logo

- Wordmark: lowercase **"inara"** in black (white on dark backgrounds) and **"ai"** in brand yellow `#fed700`. A four-point sparkle sits above the "i".
- Tagline lock-up: **"We make it matter"** in black text on a yellow `#fed700` bar, placed under the wordmark.
- Two approved variants:
  - **Light:** black "inara" on white `#ffffff`
  - **Dark:** white "inara" on black `#000000`
  - "ai" and the tagline bar stay yellow in both.
- Don't recolor, stretch, add effects to, or separate the "ai" from the wordmark. Keep clear space around the logo at least equal to the sparkle's height.
- Ship the logo from `public/brand/` through `next/image` with explicit `width`/`height` and meaningful `alt="Inara AI"`. Prefer an SVG export when one is available. Only the transparent PNG exists today, and it has a lot of padding, so crop it before use.

## Color palette

| Token (suggested)    | Hex       | Role                                                   |
| -------------------- | --------- | ------------------------------------------------------ |
| `--color-white`      | `#ffffff` | Light backgrounds, text on dark                        |
| `--color-black`      | `#000000` | Primary text, dark sections, footer                    |
| `--color-brand`      | `#fed700` | Primary brand yellow: "ai", tagline bar, CTAs, accents |
| `--color-amber`      | `#fec60d` | Hover/secondary yellow                                 |
| `--color-orange-400` | `#fdab01` | Warm accent, gradients, highlights                     |
| `--color-orange-600` | `#ed6100` | Strong accent: badges, emphasis, sparingly             |

**Accessibility rules (WCAG AA)**

- Yellow/amber/orange **backgrounds** take **black text**. Black on `#fed700` has very high contrast.
- **Never** put yellow or `#fec60d`/`#fdab01` **text on white**, because contrast is far below 4.5:1. Yellow text is only acceptable on black.
- White text on `#ed6100` is roughly 3.6:1, which passes for large or bold text (≥ 24px, or ≥ 18.66px bold) only. Use black text on it for body sizes.
- Focus rings must stay visible on both themes. Use black on light sections and `#fed700` on dark sections.

**Tailwind v4 wiring** (`app/globals.css`) uses `@theme` tokens, not a `tailwind.config` file:

```css
@theme {
  --color-brand: #fed700;
  --color-brand-amber: #fec60d;
  --color-brand-orange: #fdab01;
  --color-brand-orange-deep: #ed6100;
  --color-ink: #000000;
  --color-paper: #ffffff;
  --font-display: var(--font-boomstad);
  --font-sans: var(--font-poppins);
}
```

Use these tokens (`bg-brand`, `text-ink`, `font-display`). Don't hard-code hex values in components.

## Dark mode

- **Behaviour:** follows the device setting by default. The header sun/moon toggle stores an explicit choice through `lib/storage/preferences.ts`.
- **Mechanism:**
  - The class `dark` on `<html>` turns dark mode on.
  - An inline script (`lib/theme.ts`) sets it before first paint, so there's no flash.
  - Use the `dark:` variant to style for it.
- **Two kinds of colour tokens** (`app/globals.css`):

  | Kind        | Tokens                                                                 | Use for                                              |
  | ----------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
  | Theme-aware | `canvas`, `fg`, `surface`, `card`, `line`, `muted`, `danger`           | page backgrounds, body text, cards, borders, inputs  |
  | Fixed       | `ink`, `paper`, `brand*`, `muted-dark`, `line-dark`                     | text on yellow (`text-ink`), always-dark bands, footer |

- **Rules:**
  - Don't use `bg-paper` or `text-ink` for page or card surfaces, because they won't switch. Use `bg-canvas`, `bg-card` and `text-fg`.
  - Text on yellow is always `text-ink`.
  - Buttons: `primary` is yellow. `inverse` is theme-aware (black in light mode, white in dark mode). `dark` and `outlineInk` are for use on yellow only.
  - Logo: `<Logo />` swaps automatically. Use `variant="dark"` inside always-dark bands.
  - Hero highlight: in light mode it's a yellow underline bar. In dark mode it's a full yellow block with black text (the logo lock-up).

## Background pattern & cursor glow

- **Dot grid:**
  - Use `<Section pattern>`, or drop `<PatternBackdrop />` into any `relative isolate` element.
  - The dot colour follows `--pattern-dot`, which is theme-aware and lighter inside `.theme-dark`. Override it per element, e.g. `[--pattern-dot:rgb(0_0_0/0.14)]` on yellow.
  - Currently used on: the heroes, the practices section, the "Why" band and the CTA bands. Keep it off dense content such as tables and forms.
- **Cursor glow:**
  - `components/effects/cursor-glow.tsx` is mounted once in the root layout.
  - Radius and colour live in `globals.css` (the `cursor-glow` utility and `--glow-color`, set per theme).
  - It is off on touch devices and with reduced motion, and never blocks clicks.

## Motion: 3D hero sparkle & nav star

- **Hero agent diagram** (`components/effects/hero-agent-orbit.tsx`, home hero):
  - A glossy yellow "AI Agent" tile in the centre, with six capability nodes (Perceive, Reason, Decide, Act, Learn, Integrate) on a dashed ring.
  - It is shown beside the text on lg+ and below it on mobile. Everything is sized in container units, so it scales with its column.
  - **3D:** the centre tile and the nodes sit at different depths (`translateZ`), and the scene tilts toward the mouse.
  - **Motion:**
    - Nodes light up one at a time (`animate-agent-node` and `animate-agent-label`, staggered 1.5s each).
    - The outer ring turns slowly (`animate-spin-slow`).
    - The scene floats (`animate-float-soft`).
    - 13 stars twinkle around it (`animate-star-twinkle`).
  - **Edit:** labels and icons live in `content/home.ts` → `hero.visual`. Star positions, the orbit radius and the tilt strength are constants at the top of the component.
  - If you change the number of nodes, keep `STEP` × node count in line with the `9s` durations in `globals.css`.
  - It pauses off-screen, stays static with reduced motion, and doesn't tilt on touch devices. Screen readers get `visual.ariaLabel`.
  - Active label colour: `--agent-active`, which is deep orange in light mode and yellow in dark mode.
- **Nav star** (`components/ui/nav-star.tsx`):
  - A small glowing sparkle sweeps left → right across a nav label every 4s, twinkling as it goes, and the label gets a soft yellow glow.
  - Turn it on for any nav item with `highlight: true` in `content/site.ts`. It's currently on "AI & Automation".
  - Timing lives in `globals.css`: `--animate-nav-star-sweep` (the 4s loop; the keyframe percentages set the pause) and `--animate-twinkle`.
  - It's hidden for reduced motion.
- Use these effects sparingly: at most one highlighted nav item, and the agent diagram on the home hero only.

## Typography

| Font                         | Role                                            | Notes |
| ---------------------------- | ----------------------------------------------- | ----- |
| **Boomstad** (display)       | Headlines, hero text, section titles            | "Clean, polished, modern + premium without looking overly decorative." Not on Google Fonts: load it with `next/font/local` from a licensed `.woff2` in `app/fonts/`. **File not yet supplied.** Until it is, fall back to Poppins 700. |
| **Poppins**                  | Body, UI, nav, buttons, and subheadings         | Load with `next/font/google` (`subsets: ["latin"]`, weights 400/500/600/700 only). |

- Replace the scaffold's Geist fonts and the `font-family: Arial` rule in `globals.css`.
- Suggested scale: display headings in Boomstad, tight leading (1.1); body text in Poppins 16–18px, leading 1.6.

## Visual language

- High-contrast **black / white / yellow**. Yellow is the accent and should not fill large areas, except for deliberate bands such as the brand sheet's thin yellow section dividers.
- Yellow highlight bars behind short phrases (like the tagline lock-up) are a signature motif. Use them for key phrases and taglines.
- The four-point sparkle can serve as a decorative bullet or icon motif.
- Section dividers: thin full-width `#fed700` rules.
- Alternate light (white) and dark (black) sections to give the page rhythm.

## Footer (from brand sheet)

- Layout: logo on the left, a vertical divider, then the services line and the contact line on the right.
- Contact line: an email icon with the email, then a phone icon with the phone numbers, then a WhatsApp icon/link. Read the values from `content/site.ts` and never hard-code them.
- Services line on the sheet reads "Social Media Marketing | SEO | Performance Marketing | Website Designing". This is **pending confirmation** (see PROJECT.md open items) because it may need to become "Development | Digital Marketing | AI & Automation".
- Use `mailto:` and `tel:` links, plus a `wa.me` link built with `lib/whatsapp.ts`.
