# ANTI.AI — Website 4.0 (React)

A pixel-faithful React + Vite rebuild of the ANTI.AI marketing site, ready to deploy on Vercel.

## Stack

- React 19 + Vite 8
- React Router (client-side routing across all 6 pages)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll reveals, line-reveal headlines, accordion)
- lucide-react (icon set)
- Self-hosted fonts via `@fontsource`: Syne (display), Space Grotesk (body), JetBrains Mono (mono/labels)

## Pages

- `/` — Home (hero, marquee, stats, projects, capabilities bento, success stories, CTA)
- `/capabilities` — Services matrix, why-us, process timeline, portfolio
- `/story` — Genesis, focus pillars, manifesto accordion
- `/makers` — Leadership grid, engineering ethos
- `/careers` — Filterable open positions, benefits
- `/collaborate` — Contact form + direct channels

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Vite (build command `npm run build`, output dir `dist`).
3. `vercel.json` already includes the SPA rewrite so client-side routes (e.g. `/capabilities`) don't 404 on refresh.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Design tokens

| Token       | Value      |
|-------------|------------|
| Background  | `#0A0A0A`  |
| Text        | `#EDEDED`  |
| Heading     | `#F5F5F5`  |
| Muted       | `#9E9E9E`  |
| Accent red  | `#D62828`  |
| Accent dark | `#A31D1D`  |

Fonts: **Syne** (headlines), **Space Grotesk** (body), **JetBrains Mono** (uppercase labels/mono UI).
