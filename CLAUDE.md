# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack & version caveats

- **Next.js 16.2** with the App Router, **React 19**, **Tailwind CSS v4**, **framer-motion 12**, **next-themes**, **TypeScript 5**. All of these have breaking changes vs. typical training data — when in doubt, read the relevant guide in `node_modules/next/dist/docs/` before changing routing, metadata, image, or font APIs.
- Tailwind v4 is configured purely via `app/globals.css` (`@import "tailwindcss";`, `@custom-variant dark (&:is(.dark *))`, `@theme inline { ... }`). There is no `tailwind.config.ts`. Add new design tokens / keyframes / variants inside `globals.css`.
- Package manager is **pnpm** (`pnpm-lock.yaml`, `pnpm-workspace.yaml`). Use `pnpm` for installs.

## Commands

```bash
pnpm dev            # next dev (Turbopack)
pnpm build          # next build
pnpm start          # next start
pnpm lint           # eslint (flat config in eslint.config.mjs)
```

No test runner is configured.

## Persistent-shell architecture (important)

The app deliberately separates **always-mounted chrome** from **per-route content** so the navbar, animated background, and starfield never remount when navigating:

- `app/layout.tsx` — sets up fonts, `ThemeProvider` (next-themes, `class` strategy, `dark` default), and wraps everything in `<ClientShell>`.
- `components/ClientShell.tsx` — renders the gradient background, drift orbs, `StarBackground`, `ShootingStars`, the global `Navbar`, and the footer. Everything inside lives in `<main>{children}</main>` so it stays mounted across nav.
- `app/template.tsx` — fades/slides the route subtree (`opacity` + `y`) on every navigation. **Anything that should re-animate on each nav goes inside the template's subtree; anything that should persist (navbar pill, background) goes in `ClientShell`.**
- `components/Navbar.tsx` — uses framer-motion `layoutId` (`desktop-active-pill`, `mobile-active-pill`) so the active-route pill slides between nav items rather than remounting. The mobile navbar is `fixed bottom-5`; the desktop one is `fixed top-5`.

Adding a new route: create `app/<route>/page.tsx` that returns a single Section component from `components/sections/`. Add the entry to `Navbar.tsx`'s `navItems` array so the pill animation includes it.

## Data layer

Everything user-facing comes from `lib/data.ts`:

- `profileTitles`, `profileInfo` (with `taglineParts.{lead,highlight,trail}` for the hero), `experiences`, `education`, `skillCategories`.
- `Experience.period` and `Education.period` follow the format `"Mon YYYY – Mon YYYY"` or `"Mon YYYY – Present"`. `ExperienceSection.tsx` has a `periodStartKey` parser that turns this into `YYYYMM` for chronological sort; if you change the format, update that parser and `periodToDateTime`.
- `SkillCategory.accent` must match a key in `accentStyles` in `SkillsSection.tsx` (`blue`, `violet`, `emerald`, `amber`, `rose`, `cyan`, `slate`, `indigo`). Adding a new accent requires both a `lib/data.ts` entry and a new entry in `accentStyles`.
- `SkillCategory.icon` must match a key in `iconMap` in `SkillsSection.tsx`.

## Section conventions

- All section components live in `components/sections/` and are client components.
- Reusable building blocks are in `components/ui/` (`GlassCard`, `TracingBeam`, `ThemeToggle`, `StarBackground`, `ShootingStars`, `hero-highlight`).
- `cn()` from `lib/utils.ts` (clsx + tailwind-merge) is the only className helper — use it for conditional classes.
- Entrance animation pattern is framer-motion variants with `initial="hidden" whileInView="visible" viewport={{ once: true }}`. The `stagger` / `fadeUp` / `fadeLeft` variant trio in `HomeSection.tsx` is the canonical example.
- Decorative icons should get `aria-hidden="true"`. Date pills use `<time dateTime="YYYY-MM">` semantics.

## Two pieces of subtle code worth knowing

- **`components/ui/TracingBeam.tsx`** — measures `contentRef` via a `ResizeObserver` (not a one-shot `offsetHeight`) and drives the dot's `boxShadow`/`backgroundColor`/`borderColor` through `useTransform` + `useMotionTemplate` so they react live to scroll. Do **not** read `scrollYProgress.get()` inside an `animate={{...}}` prop — that captures a snapshot at render time and the dot will freeze on the initial state.
- **`components/sections/ExperienceSection.tsx`** — builds a single `timeline` array that interleaves `experiences` and `education` items sorted by start date descending, then renders each via a discriminated `kind: 'experience' | 'education'` branch inside the shared `TracingBeam`. Education cards are visually distinguished by an amber tint and omit description/tech rows.

## Responsive home page

`HomeSection.tsx` locks to **exactly the viewport height on mobile** (`h-[100dvh]` + `overflow-hidden`) and lets the inner `GlassCard` scroll (`overflow-y-auto`) so the floating bottom navbar always stays in its gap. On `md+` it reverts to natural-height + `min-h-screen`. The right-column info cards (Focus / Stack / Open-to) are `hidden md:flex` — a compact `<CurrentlyCard compact />` is rendered inline under the tagline on mobile instead. Changes to the hero spacing usually need to be checked at three breakpoints: mobile (locked viewport), `sm` (still single-column), and `md+` (two-column grid).
