# XLAI — AI Consulting & Integration

Landing page for [xlai.live](https://xlai.live) — built with Next.js 15 (App Router).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deploy

This project is ready to deploy to [Vercel](https://vercel.com) or any Node.js host.

### Calendly Setup
In `src/app/components/utils.ts`, replace the Calendly URL with your real event link:
```ts
window.Calendly.initPopupWidget({ url: 'https://calendly.com/YOUR-USERNAME' });
```

## Stack
- Next.js 15 (App Router)
- TypeScript
- CSS Custom Properties (no Tailwind)
- Syne + DM Mono fonts
- Calendly popup widget
