# app_6

Next.js 14 (App Router) + TypeScript + Tailwind design foundation: Manrope, FundSteward-style color tokens, Material Symbols, utility classes (`editorial-shadow`, `gold-gradient`, etc.).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- `tailwind.config.ts` — extended colors and `fontFamily.sans` → `var(--font-manrope)`
- `app/globals.css` — Material Symbols import + utility classes
- `app/layout.tsx` — `html` uses Manrope CSS variable; `body` is `min-h-screen font-sans antialiased`

Remote: `origin` → GitHub (see `git remote -v`).
