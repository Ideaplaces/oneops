# OneOps — oneops.cloud

> Make your company one cohesive technological system. Code where possible, AI where necessary, agents for the outliers.

Marketing + manifesto site for OneOps, built with Next.js 16 (App Router), TypeScript, and Tailwind v4.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind v4, design tokens in `app/globals.css` `@theme` block
- **Typography**: Satoshi (Fontshare), Roboto Slab (Google Fonts), Fira Mono (Google Fonts)
- **Analytics**: PostHog (shared IdeaPlaces project with `app`/`environment` super-properties)

## Design system

Palette and typography were generated with [styleguide.ideaplaces.com](https://styleguide.ideaplaces.com) (an IdeaPlaces product — dogfood).

Palette: **Substrate Indigo — Indigo Outlined**.
- Indigo primary (`#4338CA`) with lime accent (`#A3E635`) used functionally for focus rings, success states, and interactive highlights.
- Dark substrate background (`#121624`) for manifesto tone.
- Indigo-outlined secondary buttons to preserve hierarchy.

Content pulls from the living OneOps thesis in [docs.ideaplaces.com/oneops](https://docs.ideaplaces.com/oneops).

## Local development

```bash
npm install
npm run dev       # http://localhost:8421
```

Other scripts:

```bash
npm run build      # production build
npm run typecheck  # TypeScript without emit
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://oneops.cloud`) |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key (shared IdeaPlaces project id 311691) |
| `NEXT_PUBLIC_POSTHOG_HOST` | Defaults to `https://us.posthog.com` |
| `NEXT_PUBLIC_ENVIRONMENT` | `local`, `dev`, or `production` (super-property) |

Pull the PostHog key from Azure Key Vault at deploy time:

```bash
az keyvault secret show --vault-name kv-ideaplaces --name posthog-project-api-key-monday2github --query value -o tsv
```

## Routes

| Path | Purpose |
|---|---|
| `/` | Landing page / hero / manifesto opener |
| `/thesis` | 10 axioms |
| `/method` | 4 layers + where AI lives |
| `/agents` | Agentic investigation layer |
| `/catalog` | Verified tool catalog with evidence paths |
| `/proof` | Claims backed by evidence |
| `/case-studies` | Case studies index |
| `/case-studies/ideaplaces` | IdeaPlaces case study |
| `/faq` | Common objections, answered |
| `/contact` | Book a call / email |

## Contributing

Per IdeaPlaces conventions:

- Feature branches from `develop` (not `main`)
- PRs target `develop`
- Production deploys via fast-forward merge `develop` → `main`

## License

Proprietary, Ideaplaces.
