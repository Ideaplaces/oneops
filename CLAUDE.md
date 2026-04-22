@AGENTS.md

# OneOps — Marketing site for oneops.cloud

Manifesto + marketing landing for **OneOps** — "make your company one cohesive technological system". Next.js 16 App Router, TypeScript, Tailwind CSS v4, Satoshi/Roboto Slab/Fira Mono typography, deployed to `oneops.cloud`.

## Design system

The design system was generated via [styleguide.ideaplaces.com](https://styleguide.ideaplaces.com) — the IdeaPlaces style guide product (dogfood). Palette: **Substrate Indigo — Indigo Outlined**. Conversation: `03432249-d88e-47a7-9d86-6b5bf89da3ca`, active version `89337b30-37c8-4017-bc75-2ed9c9c9b2a5`.

Tokens live in `app/globals.css` under `@theme { ... }` (Tailwind v4 approach, no tailwind.config).

To regenerate or iterate the palette, hit the styleguide chat API with the Key Vault secret `styleguide-api-key-claude` and re-export:

```bash
SG=$(az keyvault secret show --vault-name kv-ideaplaces --name styleguide-api-key-claude --query value -o tsv)
curl -s -H "Authorization: Bearer $SG" "https://styleguide.ideaplaces.com/api/v1/conversations/03432249-d88e-47a7-9d86-6b5bf89da3ca/export/css"
```

## Content

All copy is pulled from `ideaplaces-docs/docs/oneops/` (the living thesis/method/catalog/proof docs). Shared content (10 axioms, 4 method layers, verified catalog rows) lives in `lib/content.ts`. When the living docs in ideaplaces-docs are updated, the content here should be re-synced.

## Port

Local dev port: **8421** (in the 5000-9999 range per IdeaPlaces port policy).

## Scripts

```bash
npm run dev       # Dev server on http://localhost:8421
npm run build     # Production build (verify before commit)
npm run start     # Production server on 8421
npm run typecheck # Run TypeScript without emitting
```

## Analytics

PostHog provider wired via `components/PostHogProvider.tsx`. Uses the shared IdeaPlaces PostHog project (id `311691`) with super-properties:
- `app = "oneops"`
- `environment = "production" | "dev" | "local"`

Set `NEXT_PUBLIC_POSTHOG_KEY` and (optionally) `NEXT_PUBLIC_POSTHOG_HOST`, `NEXT_PUBLIC_ENVIRONMENT` via environment variables at build/runtime.

Public project key is in Key Vault: `posthog-project-api-key-monday2github` (shared across the portfolio — rename to `-shared` once multiple apps use it if the naming gets confusing).

## SEO

- `app/sitemap.ts` — all 10 routes with priorities
- `app/robots.ts` — allow all + sitemap pointer
- `components/JsonLd.tsx` — Organization + WebSite schema in the root layout
- Metadata defaults in `app/layout.tsx` (OG, Twitter, canonical)

When adding a new page, also add it to `app/sitemap.ts` and set a page-level `metadata` export.

## Deployment

Target: **oneops.cloud** (Cloudflare zone, currently in Chip's personal Cloudflare account — **TODO**: migrate to IdeaPlaces Cloudflare account and move from Vercel to Azure Container Apps to match the rest of the portfolio).

Until the migration, the simplest path is Vercel (the existing DNS already points there). Once moved, a GitHub Actions workflow building a Docker image and deploying to Azure Container Apps matching the ciprianrarau.com pattern is the right shape.

## Branching

Per IdeaPlaces rules: feature branches from `develop`, PRs target `develop`, `main` is production. Initial scaffold lands on `main` directly.
