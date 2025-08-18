# WeWandr Beta Waitlist

A single-page beta waitlist site for WeWandr built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Pixel-perfect design** - Matches the reference site exactly
- 📧 **Email capture** - Integrated with Supabase for secure storage
- 🛡️ **Bot protection** - Honeypot fields and timing checks
- ♿ **Accessibility** - WCAG AA compliant with keyboard navigation
- 📱 **Mobile-first** - Responsive design for all devices
- 🚀 **Performance** - Optimized for Lighthouse scores

## Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **UI:** Tailwind CSS + CSS variables
- **Forms:** React Hook Form + Zod validation
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel (recommended)

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd website
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional: Analytics
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

### 3. Supabase Setup

Run this SQL in your Supabase SQL editor:

```sql
-- Create waitlist_signups table
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text default 'wewandr-beta',
  user_agent text,
  ip inet,
  created_at timestamptz not null default now()
);

-- Create unique index for emails (case-insensitive)
create unique index if not exists uniq_waitlist_email on public.waitlist_signups ((lower(email)));

-- Enable Row Level Security
alter table public.waitlist_signups enable row level security;

-- Create policy for service role inserts only
create policy "insert via service role only"
on public.waitlist_signups
for insert
to service_role
with check (true);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── actions/
│   │   └── subscribe.ts          # Server action for email capture
│   ├── api/
│   │   └── health/
│   │       └── route.ts          # Health check endpoint
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main waitlist page
├── components/
│   ├── Button.tsx                # Button component with spinner
│   ├── Input.tsx                 # Email input with validation
│   ├── Notice.tsx                # Success/error message display
│   └── Section.tsx               # Layout container component
└── lib/
    └── disposableDomains.ts      # Disposable email domain list
```

## Components

### Section

Provides consistent width containers and vertical rhythm for layout consistency.

### Button

Primary button component with loading states, accessibility features, and focus management.

### Input

Email input field with proper labeling, validation, and error display.

### Notice

Message display component for success, duplicate, and error states.

## API Endpoints

### `POST /api/subscribe` (Server Action)

Handles email subscription with validation and bot protection.

**Features:**

- Email format validation (RFC-5322)
- Disposable domain rejection
- Honeypot protection
- Timing-based bot detection
- Duplicate email handling

### `GET /api/health`

Returns `{status: "ok"}` for uptime monitoring.

## Bot Protection

The form includes multiple layers of bot protection:

1. **Honeypot Field:** Hidden `company` field that bots often fill
2. **Timing Check:** Rejects submissions faster than 400ms
3. **Disposable Domains:** Blocks common temporary email services

## Accessibility

- WCAG AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA labels and descriptions

## Performance

- Lighthouse score targets: ≥95 Performance, ≥100 Accessibility
- Optimized fonts with `display: swap`
- CSS animations with `will-change` hints
- Minimal JavaScript bundle

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables Required

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (server-side only)

## Testing

### Unit Tests

```bash
npm test
```

### E2E Tests (Playwright)

```bash
npm run test:e2e
```

### Lighthouse

```bash
npm run lighthouse
```

## Customization

### Colors

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-success: #059669;
  --color-error: #dc2626;
}
```

### Fonts

Modify font imports in `src/app/layout.tsx`:

```tsx
import { Inter, Instrument_Sans } from "next/font/google";
```

### Content

Update copy in `src/app/page.tsx` to match your brand.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or issues, please open a GitHub issue or contact the development team.
