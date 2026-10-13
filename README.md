# MyRenoCalc

Home improvement calculators for a US audience. Every project starts with a number —
this site gives you the right one, with the math shown, sources cited, and limitations stated.

**Live:** https://myrenocalc.com

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Static export (`output: 'export'`) → deployed on Cloudflare via Workers Builds
- Tailwind CSS v4, MDX for content pages (`remark-frontmatter` yaml + `remark-gfm`)
- Path alias `@/*`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in out/
npm run typecheck
npm run lint
```

## Deploy

Pushes to the `myrenocalc` repo trigger a Cloudflare Workers Build using `wrangler.jsonc`
(assets directory `./out`). DNS for myrenocalc.com is managed in the same Cloudflare
account; no DNS changes needed for routine content deploys.

## Content

Phase-1 MDX conventions (frontmatter fields, FAQ blocks) are documented in
`content/README.md`. The site currently has 9 calculators, 11 guides, the homepage, 5 company/policy pages,
and a FAQ page. Paint is implemented, concrete/masonry is partially expanded, and
future categories remain honestly marked Coming soon.

## Premium presentation

Shared page layouts preserve calculator formulas and existing page copy/SEO.
The homepage uses project cards, trust principles, factual library counts, process steps,
guides, FAQs and a CTA. Tool pages use CalculatorShell; guides use anchored
tables of contents and real content-update dates. Fonts are served locally with licenses.

Automatic Cloudflare builds require the Cloudflare Workers and Pages GitHub app
to include this repository in its selected repository access. If pushes do not
start builds, inspect Settings > Builds for a disconnected-account warning and
verify the app installation before changing build or deployment commands.
