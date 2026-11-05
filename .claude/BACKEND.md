# Backend & Form Handling

## Decision: no backend API (for now)

- There is **no server, database, API, Route Handler, or Server Action** for data submission. Don't create `app/api/*`, `route.ts`, or `'use server'` actions for forms.
- The site is fully static. Every page is prerendered from the file-based content in `content/` (see `.claude/CONTENT.md`).
- Lead capture happens on **WhatsApp**: the visitor fills a form, the site builds a pre-filled WhatsApp message, and the visitor sends it from their own WhatsApp.
- Revisit this only if the user explicitly asks for an API, CRM, or email integration.

## How a form submission works

```
Visitor fills form ─► client-side validation ─► build message from template
      ─► open https://wa.me/<number>?text=<encoded message> in a new tab
      ─► visitor presses "Send" inside WhatsApp (web, desktop, or app)
```

- Nothing is stored or sent by the website itself, so no data leaves the browser until the visitor presses Send in WhatsApp.
- The visitor sees what will be sent and can edit it before sending.

## Implementation rules

**Configuration comes from content files, never hard-coded.** Keep these settings in `content/site.ts` and `content/forms/*.ts`:

- the WhatsApp number: digits only in international format, without `+`, spaces, or a leading `0` (e.g. `"919674341297"`)
- the message template
- field labels and options

**URL format:**

```ts
`https://wa.me/${number}?text=${encodeURIComponent(message)}`
```

Use `wa.me` and not `api.whatsapp.com` or `web.whatsapp.com`, because `wa.me` routes correctly on mobile and desktop.

**Utility: one pure function in `lib/whatsapp.ts`.**

- `buildWhatsAppUrl(number, message)`
- `fillTemplate(template, values)`

These are framework-free and unit-testable. UI components must not build URLs inline.

**Form component:**

- It is a `"use client"` leaf component, such as `components/forms/WhatsAppLeadForm.tsx`. The page around it stays a Server Component and passes the form config in as props.
- On submit:
  1. `preventDefault`
  2. validate
  3. call `window.open(url, "_blank", "noopener,noreferrer")` inside the submit handler. A user gesture is needed to avoid popup blockers.
- Add a visible fallback link, "Or message us directly on WhatsApp", in case the popup is blocked.

**Validation:**

- Use native HTML constraints (`required`, `type="email"`, `type="tel"`, `maxLength`) plus a small TS check.
- Show accessible inline errors (`aria-invalid`, `aria-describedby`).
- Don't add a form or validation library without approval.

**Message hygiene:**

- Trim values, strip empty optional fields from the message, and cap the total message at about 1,500 characters so the URL stays well under browser limits.
- The template should include which page or service the lead came from, e.g. `Service: {{service}}`.

**Storage:** don't persist form data in `localStorage` or `sessionStorage`. If drafts are ever needed, they must go through `SecureStorage` (see CLAUDE.md).

**Direct contact CTAs:** "Chat on WhatsApp" buttons, the footer, and the floating button also use `buildWhatsAppUrl` with a short default message taken from content.

## Lead-form types (configured in `content/forms/`)

| Form                       | Used on                      | Extra fields                          |
| -------------------------- | ---------------------------- | ------------------------------------- |
| `contact.ts`               | `/contact`, footer CTA band  | name, company, email/phone, service, message |
| Practice CTA forms (optional) | practice and service pages | prefilled `service`, preferred date/time |

All forms share one component and differ only in their content config.

## Not available without a backend (call it out if requested)

- server-side spam protection
- lead storage
- auto-reply emails
- CRM sync
- analytics on completed sends (the site only sees the "WhatsApp opened" click, not the send)
