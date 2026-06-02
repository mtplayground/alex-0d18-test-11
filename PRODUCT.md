# myClawTeam Product Contract

myClawTeam is a static marketing landing page for an agent team for founders. It presents the brand promise, core benefits, operating model, feature set, and footer links in a responsive single-page experience.

## Current Product

- Brand: `myClawTeam`
- Headline: `Agent Team for Founders`
- Tagline: `You just talk, we handle the rest`
- Positioning: founder conversations become planned, built, deployed, and operated software inside the customer's own repository.
- Page sections, in order: Hero, Value Proposition, How It Works, Features, Footer.

## Key Features

- GitHub-native positioning focused on code ownership in the customer's repo.
- Autonomous SDLC story: Plan, Build, Deploy, Operate.
- Production-ready and security-aware messaging.
- Responsive landing page with semantic sections and accessible headings.
- SEO foundation with metadata, canonical URLs, sitemap, robots, Open Graph image generation, and Organization JSON-LD.
- Static export deployment through the generated `out/` directory.

## Architecture

- Framework: Next.js App Router with TypeScript.
- Styling: Tailwind CSS design tokens plus shadcn/ui primitives.
- UI primitives live in `components/ui/`; landing sections live in `components/sections/`.
- Shared environment access lives in `lib/env.ts`; SEO helpers live in `lib/seo.ts`.
- `next.config.js` uses `output: "export"` for static builds.
- Public environment variables are injected at build time:
  - `NEXT_PUBLIC_SITE_URL` is required for canonical URLs and SEO output.
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is optional and left blank to keep analytics disabled.

## Validation And Deployment

- Local dev server: `npm run dev`, listening on `0.0.0.0:8080`.
- Static preview server: `npm run start`, serving `out/` on `0.0.0.0:8080`.
- Export verification: `NEXT_PUBLIC_SITE_URL="https://example.com" npm run verify:export`.
- Unit tests: Vitest + React Testing Library.
- End-to-end tests: Playwright desktop and mobile smoke tests.
- Accessibility checks: Playwright + axe-core; latest verified Lighthouse scores were Accessibility 100 and SEO 100.

## Conventions

- Keep PRODUCT.md aligned with what is actually merged into the default branch.
- Use the product name from this contract and project issues; do not substitute agent names or placeholders.
- Do not hardcode deployment URLs in code; use build-time environment variables.
- Keep new landing-page sections semantic, responsive, and covered by tests when behavior or copy changes.
