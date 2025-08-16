# Cursor Task: Build “WeWandr” Waitlist (identical to reference)

## Goal

Recreate a single-page beta waitlist site for **WeWandr** that looks and behaves **identically** to [we-wandr-beta.lovable.app](https://we-wandr-beta.lovable.app/) — same layout, spacing, type, colors, copy, and animations — with a working email capture integrated with Supabase.

---

## Tech & Conventions

- **Framework:** Next.js 14+ (App Router, TypeScript, Server Actions)
- **UI:** Tailwind CSS + CSS variables; mobile-first; no external UI kit
- **State/Forms:** React Hook Form + Zod validation
- **Email storage:** Supabase (Row Level Security ON)
- **Analytics (optional, behind feature flag):** Vercel Analytics
- **Accessibility:** WCAG AA, keyboard nav, visible focus, semantic HTML
- **SEO:** Open Graph + Twitter cards, favicon, robots, sitemap

---

## Pages & Routes

- `/` – the only visible page (hero, short product value prop, email form, success/error messaging, footer).
- `/api/health` – returns `{status:"ok"}` for uptime checks.
- 404 should redirect to `/`.

---

## Design Replication

- Pixel-match the reference: font sizes, line heights, letter spacing, paddings, section max-widths, button sizes, hover/focus states, breakpoints, and animations.
- If fonts are custom in the reference, approximate with **Inter** and **Instrument Sans** (or closest Google Fonts). Use CSS variables for palette and spacing.

---

## Email Capture UX

- Single input for email, **required**.
- Button label: “Join waitlist”.
- Client-side + server-side validation:
  - Email must be RFC-5322 compliant.
  - Reject disposable email domains list (simple array, easy to extend).
- Bot protection:
  - Hidden honeypot input (e.g., `company`); if filled, silently discard.
  - Time-to-submit check (reject < 400ms from mount).
- Post-submit states:
  - Pending: button shows spinner, disabled.
  - Success: inline non-modal success message (no page nav), clears field.
  - Duplicate: friendly “You’re already on the list.”
  - Error: generic “Something went wrong—please try again.”

---

## Supabase Setup

### Table

```sql
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text default 'wewandr-beta',
  user_agent text,
  ip inet,
  created_at timestamptz not null default now()
);

create unique index if not exists uniq_waitlist_email on public.waitlist_signups ((lower(email)));

alter table public.waitlist_signups enable row level security;

create policy "insert via service role only"
on public.waitlist_signups
for insert
to service_role
with check (true);
```
