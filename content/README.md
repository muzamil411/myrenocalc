# Content conventions (Phase 1)

MDX pages live under `app/` (routes) with content colocated, or under `content/`
for shared snippets. This documents the frontmatter contract every calculator and
guide page must follow.

## Frontmatter fields

```yaml
---
title: "Interior Paint Calculator"
description: "How many gallons of paint do you need? Enter room dimensions, doors and windows — get exact gallons, primer, and cost."
updated: "2026-11-02"      # bump on substantive revisions
category: "paint"          # paint | concrete | flooring | drywall | lumber | landscaping
---
```

| Field         | Required | Notes                                                        |
|---------------|----------|--------------------------------------------------------------|
| `title`       | yes      | Page H1; also used for `<title>` via `buildMetadata`         |
| `description` | yes      | Meta description, 150–160 chars, unique per page             |
| `updated`     | yes      | ISO date; bump only on substantive changes, never cosmetically|
| `category`    | yes      | Must match one of the directory groups on the homepage       |

## FAQ blocks

FAQs render via the `<Faq>` component with **plain-text answers (no links)** — write
the source name visibly into the answer text:

```mdx
<Faq items={[
  { question: "How many square feet does a gallon cover?",
    answer: "Most interior latex paints cover 350–400 sq ft per gallon per coat (Sherwin-Williams tech data). ..." },
]} />
```

Each calculator page also embeds matching `jsonLdFaq()` output from `@/lib/seo`
(see `lib/seo.ts`) so FAQ schema stays in sync with visible content.

## Page anatomy (AdSense-safe template)

1. Intro — what the tool answers, when you need it (150+ words)
2. The interactive tool (client component under `components/calculators/`)
3. `<Callout variant="method">` — formula in plain English + cited figures
4. Worked example with real numbers
5. `<Callout variant="limitation">` — what the tool does not account for
6. `<Faq>` — 4–6 real questions
7. Internal links to 2–3 cluster siblings

Target: 800–1,500 indexable words per tool page; 1,200–2,000 per guide.
