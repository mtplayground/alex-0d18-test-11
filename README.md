# alex-0d18-test-11

## Environment Variables

Copy `.env.example` to `.env.local` for local development. Public variables are read at build time through `lib/env.ts`.

| Variable                       | Required | Description                                       |
| ------------------------------ | -------- | ------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Yes      | Absolute site URL used for canonical public URLs. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No       | Plausible Analytics domain when analytics is on.  |
