# Julius Dsouza — Portfolio

Personal portfolio site for Julius Dsouza — Software Engineer at Meta.
Built as a small, polished, fully responsive single-author site with light/dark themes, scroll-driven animations, and a data-driven content layer.

Live sections:

- **Home** (`/`) — hero card with title pills, animated tagline highlight, animated stat counters, CTAs, and an "About me" info panel.
- **Experience** (`/experience`) — a unified, chronologically-sorted timeline that interleaves work experience and education into a single TracingBeam-animated column.
- **Skills** (`/skills`) — a bento-grid of skill categories with per-category accent theming and pop-in pill animations.

## Tech stack

| Area | Choice |
|---|---|
| Framework | **Next.js 16.2** (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI runtime | React 19 |
| Styling | **Tailwind CSS v4** (configured entirely in `app/globals.css`) |
| Animation | framer-motion 12 |
| Theming | next-themes (`class` strategy, dark default) |
| Icons | lucide-react |
| Utilities | clsx + tailwind-merge (wrapped as `cn()`) |
| Package manager | pnpm |

## Getting started

```bash
pnpm install
pnpm dev          # → http://localhost:3000
```

Other scripts:

```bash
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # eslint (flat config)
```

## Architecture

The site is intentionally small but uses a few non-obvious patterns worth knowing:

### Persistent shell + per-route content

`app/layout.tsx` mounts `<ClientShell>` once. The shell renders the gradient background, animated drift orbs (light mode), `StarBackground` + `ShootingStars` (dark mode), the floating `Navbar`, and the footer. It then renders `{children}` inside `<main>`, which means the chrome **never remounts on navigation** — the navbar's active-route pill slides between sections via framer-motion `layoutId` shared layout animation rather than fading in and out.

`app/template.tsx` wraps the route subtree in a `motion.div` that fades + slides up on every navigation, so route content gets a fresh entrance animation without disturbing the shell.

### Data-driven content

Everything user-facing lives in `lib/data.ts`:

- `profileTitles` — the colored pill labels on the hero (e.g. "Software Engineer", "Fullstack Engineer", "AI Engineer").
- `profileInfo` — name, bio, current role, focus card, stack card, "open to" callout, social links, and a three-part `taglineParts` (lead / highlight / trail) for the animated tagline highlight.
- `experiences`, `education` — both are surfaced on `/experience` as one chronologically-sorted timeline.
- `skillCategories` — each entry carries a `category`, `skills[]`, an `icon` key (matches a map in `SkillsSection`), and an `accent` key (matches the per-color token map in `SkillsSection`).

To edit content, change `lib/data.ts`. No JSX needs to be touched for the usual case.

### Theming

Tailwind v4 is configured purely via `app/globals.css`:

- `@import "tailwindcss";`
- `@custom-variant dark (&:is(.dark *));`
- Custom keyframes (`drift`, `twinkle`, `shooting`, `float`) and design tokens declared in `@theme inline { ... }`.

There is no `tailwind.config.ts`. Add new tokens, keyframes, or variants in `globals.css`.

`next-themes` toggles a `.dark` class on `<html>` with `defaultTheme="dark"` and `enableSystem`.

### Responsive home page

`HomeSection` locks to exactly `100dvh` on mobile and lets the inner `GlassCard` scroll, so the floating bottom navbar always sits in its own reserved gap. The right-column info cards (Currently / Focus / Stack / Open-to) are hidden below `md`; a compact `<CurrentlyCard compact />` is rendered inline under the tagline on mobile instead. From `md+` upward the layout switches to a two-column grid with natural height.

## Project layout

```
app/
  layout.tsx          # Root layout — fonts, ThemeProvider, ClientShell
  template.tsx        # Per-navigation fade/slide of the route subtree
  page.tsx            # /         → HomeSection
  experience/page.tsx # /experience → ExperienceSection (work + education timeline)
  skills/page.tsx     # /skills    → SkillsSection
  globals.css         # Tailwind v4 import, dark variant, keyframes, tokens

components/
  ClientShell.tsx     # Persistent chrome (background, navbar, footer)
  Navbar.tsx          # Desktop top pill + mobile bottom pill with layoutId animation
  sections/           # One file per route — HomeSection / ExperienceSection / SkillsSection
  ui/                 # Reusable building blocks — GlassCard, TracingBeam,
                      # ThemeToggle, StarBackground, ShootingStars, hero-highlight

lib/
  data.ts             # Single source of truth for all rendered content
  utils.ts            # cn() — clsx + tailwind-merge

public/
  me.png              # Hero avatar
  resume.pdf          # "View Resume" target
```

## Customizing for your own use

1. Replace `public/me.png` and `public/resume.pdf`.
2. Edit `lib/data.ts` — change `profileInfo`, `profileTitles`, `experiences`, `education`, `skillCategories`.
3. Update the site metadata in `app/layout.tsx` (`metadata.title`, `metadata.description`).
4. Update the footer credit in `components/ClientShell.tsx`.

To add a new skill accent color, add an entry to `accentStyles` in `components/sections/SkillsSection.tsx` matching the existing shape, then reference it as `accent: '<key>'` on the relevant `skillCategories` entry.

To add a new route, drop a `app/<route>/page.tsx` that renders a section component, then add a corresponding entry to `navItems` in `components/Navbar.tsx` so the active-pill animation includes it.

## Deployment

The site is a standard Next.js 16 build and deploys cleanly on Vercel with no additional configuration. `pnpm build && pnpm start` works for any Node host.
