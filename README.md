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
`content/README.md`. Phase 0 ships the foundation only — no calculator pages yet.
