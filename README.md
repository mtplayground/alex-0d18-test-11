# myClawTeam

Static landing page for myClawTeam, built with Next.js App Router and exported as a bare static directory.

## Environment Variables

Copy `.env.example` to `.env.local` for local development. Public variables are read at build time through `lib/env.ts` and are baked into the generated static files.

| Variable                       | Required | Description                                                                  |
| ------------------------------ | -------- | ---------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Yes      | Absolute site URL used for canonical URLs, sitemap entries, and OG metadata. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No       | Optional Plausible Analytics domain. Leave blank to keep analytics disabled. |

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The development server listens on `0.0.0.0:8080`.

## Static Export Verification

Run a clean static export verification before deployment:

```bash
NEXT_PUBLIC_SITE_URL="https://example.com" npm run verify:export
```

The verification script removes any existing `out/` directory, runs `next build`, and asserts that the static export contains:

- `out/index.html`
- `out/robots.txt`
- `out/sitemap.xml`
- `out/_next/`

## Bare Directory Deployment

Use the generated `out/` directory as the deployment artifact.

1. Set build-time environment variables in the deployment environment:

```bash
NEXT_PUBLIC_SITE_URL="https://your-domain.example"
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=""
```

2. Build the static export:

```bash
npm ci
npm run verify:export
```

3. Deploy the contents of `out/` to any static host, CDN bucket, or bare web root.

`NEXT_PUBLIC_*` values are injected at build time, so changing `NEXT_PUBLIC_SITE_URL` or `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` requires rebuilding and redeploying `out/`.

For a local production preview after building:

```bash
npm run start
```

The preview server serves `out/` on `0.0.0.0:8080`.
