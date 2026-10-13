import CalculatorShell from '@/components/CalculatorShell'
import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import FootingCalculator from '@/components/calculators/FootingCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Footing Concrete Calculator — Yards & Bags for Footings | MyRenoCalc',
  description:
    'How much concrete for footings? Enter length, width and depth — get cubic yards and bag counts for foundation, deck and post footings, with the math shown.',
  path: '/tools/footing-concrete-calculator/',
})

const faqs = [
  {
    question: 'How deep and wide should concrete footings be?',
    answer:
      'It depends on your frost line, soil, and what the footing carries — there is no universal number, and local building code governs. As very rough context, residential deck footings are commonly 12 inches wide and dug below the local frost line (often 24–48 inches deep in cold climates). Always check your local code before digging: an undersized footing is a structural problem, not a math problem.',
  },
  {
    question: 'Do concrete footings need rebar?',
    answer:
      'Structural footings (foundations, retaining walls, anything carrying a building) almost always require rebar per code, and usually an inspection before the pour. Simple post footings for a fence or mailbox often do not. When in doubt, ask your local building department — this calculator sizes the concrete, not the steel.',
  },
  {
    question: 'How long before I can build on new footings?',
    answer:
      'Concrete reaches roughly 70% of its design strength at 7 days (per ACI 308R strength-gain curves) and full design strength at about 28 days. Light framing can typically proceed after a few days; heavy loads should wait. Keep the concrete moist for the first week — curing matters more than most DIYers expect.',
  },
  {
    question: 'How many bags of concrete per fence post?',
    answer:
      'Usually one to two 80-lb bags. A typical hand-dug hole (about 10 inches across, 24 inches deep) needs roughly 0.9 cubic feet of concrete after the post itself displaces its share — and an 80-lb bag yields about 0.60 cubic feet (Quikrete #1101 spec sheet). Wider augered holes need more. Buy one extra bag per few posts; dry bags keep for the next project.',
  },
  {
    question: 'Should I add waste to a footing calculation?',
    answer:
      'Yes — this calculator adds 5% automatically. Footing trenches are never perfectly rectangular: the excavator over-digs, the soil crumbles, and bell-shaped hole bottoms eat extra concrete. For hand-dug post holes in rocky soil, consider 10%.',
  },
]

export default function FootingCalculatorPage() {
  return (
    <PageShell title={"Footing Concrete Calculator"} path="/tools/footing-concrete-calculator/" category="Concrete & masonry">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete &amp; masonry calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Footing Concrete Calculator</h1>

      <div className="article mt-6">
        <p>
          Footings are the part of the project nobody sees and everybody depends on. Whether it
          is a continuous foundation footing, a row of deck post footings, or a dozen fence
          posts, the question is the same: how much concrete goes in the hole? Under-order and
          you are mixing emergency bags while the first batch starts setting.
        </p>
        <p>
          This calculator treats a footing as what it is — a rectangular prism — and gives you
          cubic yards (rounded up to the nearest quarter-yard, with 5% waste built in) plus the
          bag count for 80, 60, or 50-lb bags. Bag yields come from the Quikrete spec sheet.
          One important note: this tool sizes <em>concrete volume only</em>. Footing dimensions,
          depth, and rebar are code questions — check your local building department before you
          dig.
        </p>
      </div>

      <div className="mt-8">
        <CalculatorShell><FootingCalculator /></CalculatorShell>
      </div>

      <div className="article mt-10">
        <h2 id="section-1">How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Volume</strong> = length (ft) × (width in ÷ 12) × (depth in ÷ 12). A footing
            24 ft long, 16 in wide, 12 in deep is 24 × 1.333 × 1 = 32 cubic feet.
          </p>
          <p>
            <strong>Cubic yards</strong> = cubic feet ÷ 27, then × 1.05 for the built-in 5% waste
            allowance, rounded up to the nearest quarter-yard.
          </p>
          <p>
            <strong>Bags</strong> = cubic feet ÷ yield per bag (Quikrete #1101 spec sheet: 80-lb
            ≈ 0.60 cu ft, 60-lb ≈ 0.45, 50-lb ≈ 0.375), always rounded up.
          </p>
        </Callout>

        <h2 id="section-2">Worked example</h2>
        <p>A footing 24 ft long, 16 in wide, 12 in deep, using 80-lb bags:</p>
        <ol>
          <li>Volume = 24 × (16 ÷ 12) × (12 ÷ 12) = 24 × 1.333 × 1 = <strong>32 cu ft</strong></li>
          <li>Cubic yards = 32 ÷ 27 = 1.19 yd³ → with 5% waste = 1.24 → order{' '}
            <strong>1.25 cubic yards</strong>
          </li>
          <li>Bags = 32 ÷ 0.60 = 53.3 → <strong>54 eighty-pound bags</strong></li>
        </ol>
        <p>
          Enter these exact numbers into the calculator above and you will get the same result —
          that is the point. No black box.
        </p>

        <h2 id="section-3">Limitations</h2>
        <Callout variant="limitation">
          <p>
            Real footing excavations are not perfect rectangles — bell bottoms, caved walls, and
            over-digging all consume extra concrete, which is why the calculator builds in 5%
            waste (use 10% for hand-dug holes in difficult soil). This tool does not design
            footings: width, depth, frost protection, and rebar are governed by local code and,
            for structural work, by an engineer. Many jurisdictions require a footing inspection
            <em>before</em> you pour — schedule it before the truck arrives.
          </p>
        </Callout>

        <h2 id="section-4">Frequently asked questions</h2>
      </div>

      <div className="mt-4">
        <Faq items={faqs} />
      </div>

      <div className="article mt-10">
        <h2 id="section-5">Related calculators &amp; guides</h2>
        <ul>
          <li>
            <Link href="/tools/concrete-calculator/">Concrete calculator</Link> — cubic yards for
            slabs and flatwork
          </li>
          <li>
            <Link href="/tools/concrete-bag-calculator/">Concrete bag calculator</Link> — bag
            counts by volume or dimensions
          </li>
          <li>
            <Link href="/guides/concrete-curing-time/">Concrete curing timeline</Link> — when you
            can build on it, drive on it, load it
          </li>
          <li>
            <Link href="/guides/how-thick-should-concrete-slab-be/">
              How thick should a concrete slab be?
            </Link>{' '}
            — 4 vs 5 vs 6 inches by use case
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
