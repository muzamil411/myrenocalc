import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'MyRenoCalc — Home Improvement Calculators',
  description:
    'Free home improvement calculators with the math shown and sources cited. Paint, concrete, flooring, drywall, lumber and more — every project starts with a number.',
  path: '/',
})

type CalcGroup = { name: string; items: string[] }

const GROUPS: CalcGroup[] = [
  {
    name: 'Paint',
    items: [
      'Interior paint calculator',
      'Exterior paint calculator',
      'Primer calculator',
      'Paint cost estimator',
    ],
  },
  {
    name: 'Concrete & Masonry',
    items: ['Concrete slab calculator', 'Concrete bag calculator', 'Gravel calculator'],
  },
  {
    name: 'Flooring',
    items: [
      'Flooring calculator',
      'Tile calculator',
      'Laminate box calculator',
      'Hardwood estimator',
    ],
  },
  {
    name: 'Drywall',
    items: ['Drywall sheet calculator', 'Joint compound estimator'],
  },
  {
    name: 'Lumber & Decking',
    items: ['Board-foot calculator', 'Deck board estimator', 'Fence picket calculator'],
  },
  {
    name: 'Landscaping',
    items: ['Mulch calculator', 'Topsoil calculator', 'Paver calculator'],
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
          We are building these calculators one project type at a time, starting with paint.
          Everything below is honestly labeled — check back as new tools go live.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900">{group.name}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center justify-between gap-3 text-slate-700">
                    <span>{item}</span>
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      Coming soon
                    </span>
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

      {/* Latest guides placeholder */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-bold text-navy-900">Project guides</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Step-by-step guides are on the way — starting with paint quantity: coverage rates,
          measuring rooms, and the mistakes that waste money. Our calculators launch alongside
          the guides that explain them.
        </p>
        <p className="mt-6 text-sm text-slate-500">
          Want to know when the first tools go live?{' '}
          <Link href="/contact/" className="font-semibold text-navy-800 underline decoration-accent-500 decoration-2 underline-offset-2">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </>
  )
}
