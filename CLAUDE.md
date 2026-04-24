# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Workflow

**Never commit directly to `main`.** Every feature and bugfix must be on its own branch (e.g. `feat/claude-integration`, `fix/xss-email-template`). All commits go on the branch; merge to `main` only after the user reviews and approves.

## Commands

```bash
# Development
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run lint       # ESLint check
npm run start      # Start production server
```

No test suite is configured yet.

> **Note:** `next.config.mjs` currently silences TypeScript and ESLint errors during builds (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`). Run `npm run lint` manually to surface linting issues.

## Environment Variables

Copy to `.env.local` before running locally:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_FROM=
EMAIL_TO=
NEXT_PUBLIC_CALENDAR_URL=   # Google Calendar scheduling link shown in the contact section
NEXT_PUBLIC_API_URL=        # FastAPI backend URL (e.g. https://portfolio-api.railway.app)
                             # Omit to use local TypeScript constants as fallback
REVALIDATE_SECRET=          # Token for POST /api/revalidate (on-demand ISR cache flush, optional)
```

reCAPTCHA and email are optional — the contact form degrades gracefully if these are absent.
`NEXT_PUBLIC_API_URL` is also optional — all pages fall back to local TypeScript constants when it is absent.

## Architecture

**Framework:** Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS, shadcn/ui.

### Content is data-driven

All portfolio content lives in `constants/` — never hardcoded in components:
- `skills.ts`, `projects.ts`, `experience.ts`, `courses.ts`, `certificates.ts` — typed data arrays
- `text.ts` — all UI copy (i18n-ready)
- `metadata.ts` / `seo.ts` — page metadata and JSON-LD structured data

Each file exports both real data and a `*Mock` variant (e.g. `projectsMock`) for development. Only the real exports are re-exported from `constants/index.ts`.

### Page → Section → Component pattern

`app/page.tsx` and sub-pages (`/about`, `/projects`, `/courses`, `/certifications`, `/contact`) compose *Section* components inside `<SectionWrapper variant="default|muted">` for alternating background bands.

Section components (`hero-section.tsx`, `projects-section.tsx`, etc.) own layout and data fetching from constants. UI primitives live in `components/ui/` (shadcn/ui). Both layers barrel-export through `components/index.ts`.

### Theming

Dark/light mode via `next-themes` with `attribute="class"`. All colors are CSS variables in HSL format defined in `globals.css` — Tailwind tokens (`background`, `foreground`, `primary`, etc.) reference these variables. The primary accent is teal (`#14b8a6`).

### Contact form flow

`ContactForm` (client component) → `POST /api/contact` (route handler) → reCAPTCHA verification → Nodemailer SMTP. The API checks env vars at runtime; if reCAPTCHA keys are missing it skips verification rather than failing.

### API layer (`lib/api.ts`)

Server-only module (imports `server-only`). When `NEXT_PUBLIC_API_URL` is set, all portfolio content is fetched from the FastAPI backend at build/request time with ISR revalidation (1-hour TTL). Falls back to local constants if the env var is missing or the request fails. Never import `lib/api.ts` in a `'use client'` component.

### Image handling

`images: { unoptimized: true }` in `next.config.mjs` — images are served as-is, intended for static hosting (Vercel/Netlify). Profile and project images are in `/public/`.
