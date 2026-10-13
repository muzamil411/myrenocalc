import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'MyRenoCalc — Home Improvement Calculators',
  description:
    'Free home improvement calculators with the math shown and sources cited. Paint, concrete, flooring, drywall, lumber and more — every project starts with a number.',
  path: '/',
})

type CalcItem = { name: string; href?: string }
type CalcGroup = { name: string; items: CalcItem[] }

const GROUPS: CalcGroup[] = [
  {
    name: 'Paint',
    items: [
      { name: 'Interior paint calculator', href: '/tools/interior-paint-calculator/' },
      { name: 'Exterior paint calculator', href: '/tools/exterior-paint-calculator/' },
      { name: 'Ceiling paint calculator', href: '/tools/ceiling-paint-calculator/' },
      { name: 'Primer calculator', href: '/tools/primer-calculator/' },
      { name: 'Paint cost estimator', href: '/tools/paint-cost-calculator/' },
    ],
  },
  {
    name: 'Concrete & Masonry',
    items: [
      { name: 'Concrete slab calculator', href: '/tools/concrete-calculator/' },
      { name: 'Concrete bag calculator', href: '/tools/concrete-bag-calculator/' },
      { name: 'Footing concrete calculator', href: '/tools/footing-concrete-calculator/' },
      { name: 'Gravel calculator', href: '/tools/gravel-calculator/' },
    ],
  },
  {
    name: 'Flooring',
    items: [
      { name: 'Flooring calculator' },
      { name: 'Tile calculator' },
      { name: 'Laminate box calculator' },
      { name: 'Hardwood estimator' },
    ],
  },
  {
    name: 'Drywall',
    items: [{ name: 'Drywall sheet calculator' }, { name: 'Joint compound estimator' }],
  },
  {
    name: 'Lumber & Decking',
    items: [
      { name: 'Board-foot calculator' },
      { name: 'Deck board estimator' },
      { name: 'Fence picket calculator' },
    ],
  },
  {
    name: 'Landscaping',
    items: [
      { name: 'Mulch calculator' },
      { name: 'Topsoil calculator' },
      { name: 'Paver calculator' },
    ],
  },
]

const PRINCIPLES = [
  {
    title: 'We show the formula',
    body: 'No black boxes. Every calculator explains the math in plain English so you can check our work — and trust the number you take to the store.',
  },
  {
    title: 'Every figure is sourced',
    body: 'Coverage rates, bag yields, waste factors — each number traces to a manufacturer tech sheet or industry standard, cited visibly on the page.',
  },
  {
    title: 'Worked examples, real numbers',
    body: 'Each tool walks through a concrete example step by step, so you see exactly how your inputs turn into a result.',
  },
  {
    title: 'Limitations stated up front',
    body: 'Texture, waste, uneven surfaces — we tell you what the calculator does not account for, before you buy materials.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Home improvement calculators
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Every project starts with a number.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            MyRenoCalc builds free calculators for real home projects — how much paint to buy,
            how many bags of concrete you need, what the flooring will cost. We show the math,
            cite our sources, and state the limitations.
          </p>
          <a
            href="#calculators"
            className="mt-8 inline-block rounded-lg bg-accent-500 px-6 py-3 font-semibold text-navy-950 transition hover:bg-accent-400"
          >
            Browse calculators
          </a>
        </div>
      </section>

      {/* Calculator directory */}
      <section id="calculators" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14">
        <h2 className="text-3xl font-bold text-navy-900">Calculator directory</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          We are building these calculators one project type at a time — paint and
          concrete are live. Everything below is honestly labeled — check back as new tools go
          live.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900">{group.name}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-3 text-slate-700">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-navy-800 underline decoration-accent-500 decoration-2 underline-offset-2 hover:text-navy-900"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                    {item.href ? (
                      <span className="shrink-0 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-600">
                        Live
                      </span>
                    ) : (
                      <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                        Coming soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Method transparency */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold text-navy-900">How our calculators work</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Most online calculators give you a number and ask you to trust it. We do it
            differently — four promises on every tool we publish:
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project guides */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-bold text-navy-900">Project guides</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Step-by-step guides that go with our calculators — paint quantity and concrete
          planning: coverage rates, measuring, curing, and the mistakes that waste money.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            { name: 'How much paint for a 12×12 room?', href: '/guides/how-much-paint-for-12x12-room/' },
            { name: 'Paint coverage per gallon by type', href: '/guides/paint-coverage-per-gallon/' },
            { name: 'How to measure a room for paint', href: '/guides/how-to-measure-room-for-paint/' },
            { name: 'How many coats of paint do walls need?', href: '/guides/how-many-coats-of-paint/' },
            { name: 'Exterior paint for a 2,000 sq ft house', href: '/guides/exterior-paint-for-2000-sq-ft-house/' },
            { name: 'Paint cost per square foot (2026)', href: '/guides/paint-cost-per-square-foot/' },
            { name: '7 paint quantity mistakes that waste money', href: '/guides/paint-quantity-mistakes/' },
            { name: 'How much does a yard of concrete cover?', href: '/guides/how-much-does-a-yard-of-concrete-cover/' },
            { name: 'Quikrete vs. ready-mix: bags or truck?', href: '/guides/quikrete-vs-ready-mix/' },
            { name: 'Concrete curing timeline (24h to 28 days)', href: '/guides/concrete-curing-time/' },
            { name: 'How thick should a concrete slab be?', href: '/guides/how-thick-should-concrete-slab-be/' },
          ].map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="block rounded-xl border border-slate-200 bg-white p-4 font-semibold text-navy-800 shadow-sm transition hover:border-accent-500 hover:text-navy-900"
              >
                {g.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
