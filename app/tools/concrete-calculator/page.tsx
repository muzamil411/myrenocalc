import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import ConcreteCalculator from '@/components/calculators/ConcreteCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Concrete Calculator — Cubic Yards & Bags for Any Slab | MyRenoCalc',
  description:
    'How many cubic yards of concrete do you need? Enter slab dimensions and thickness — get exact yards plus the 80-lb bag count, with the math shown.',
  path: '/tools/concrete-calculator/',
})

const faqs = [
  {
    question: 'How many cubic feet are in a cubic yard of concrete?',
    answer:
      'Exactly 27. A cubic yard is a 3 ft × 3 ft × 3 ft cube. This calculator divides your slab volume in cubic feet by 27 to get cubic yards — the unit ready-mix trucks sell by.',
  },
  {
    question: 'How many 80-lb bags of concrete are in a cubic yard?',
    answer:
      '45 bags. An 80-lb bag of Quikrete Concrete Mix #1101 yields about 0.60 cubic feet (per the product spec sheet), and 27 ÷ 0.60 = 45. For 60-lb bags (0.45 cu ft yield) it is 60 bags per yard; for 50-lb bags (0.375 cu ft) it is 72.',
  },
  {
    question: 'Should I add a waste allowance to my concrete order?',
    answer:
      'Yes — 5% is the standard for a well-formed slab, 10% if the subgrade is uneven or the forms are rough. This calculator defaults to 5%. Running short mid-pour is far worse than having a little extra: a cold joint where fresh concrete meets concrete that started setting is a permanent weak spot.',
  },
  {
    question: 'When should I order ready-mix instead of bags?',
    answer:
      'Roughly above 1 cubic yard (about 45 eighty-pound bags), a ready-mix truck is usually cheaper and dramatically less labor. Below that, bags win — but watch for short-load fees: most suppliers charge $30–$60 extra per yard on orders under their truck minimum (per 2026 pricing guides).',
  },
  {
    question: 'Does this calculator include the gravel base under the slab?',
    answer:
      'No — this is concrete only. A 4-inch compacted gravel base is standard under residential slabs. Use our gravel calculator to size that separately.',
  },
]

export default function ConcreteCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete &amp; masonry calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Concrete Calculator</h1>

      <div className="article mt-6">
        <p>
          The concrete truck is scheduled for Thursday and the supplier is asking how many yards
          you want. Guess low and the crew stands around while you panic-order more — and the
          seam where the second load meets the first never fully disappears. Guess high and you
          have paid roughly $150 per yard for concrete that hardens in the truck.
        </p>
        <p>
          This calculator answers with real math. Enter your slab length, width, and thickness,
          add a waste allowance, and it gives you cubic yards rounded up to the nearest
          quarter-yard (how ready-mix is actually sold) plus the equivalent number of 80-lb
          bags if you are mixing by hand. Every figure traces to a manufacturer spec sheet,
          and the formula is shown with your own numbers below the results.
        </p>
      </div>

      <div className="mt-8">
        <ConcreteCalculator />
      </div>

      <div className="article mt-10">
        <h2>How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Volume</strong> = length × width × (thickness ÷ 12), all in feet. A 10 × 10
            ft slab at 4 inches is 10 × 10 × 0.333 = 33.33 cubic feet.
          </p>
          <p>
            <strong>Cubic yards</strong> = cubic feet ÷ 27. Ready-mix is sold by the cubic yard,
            and trucks bill in quarter-yard increments — so the calculator applies your waste
            allowance, then rounds <em>up</em> to the nearest 0.25 yard.
          </p>
          <p>
            <strong>Bags</strong> = cubic feet ÷ yield per bag. Yields are from the Quikrete
            Concrete Mix #1101 product spec sheet: 80-lb bag ≈ 0.60 cu ft, 60-lb ≈ 0.45 cu ft,
            50-lb ≈ 0.375 cu ft. Bags are always rounded up — never down.
          </p>
        </Callout>

        <h2>Worked example</h2>
        <p>A 10 × 10 ft patio slab, 4 inches thick, 5% waste allowance:</p>
        <ol>
          <li>Volume = 10 × 10 × (4 ÷ 12) = 33.33 cu ft</li>
          <li>Cubic yards = 33.33 ÷ 27 = 1.23 yd³</li>
          <li>With 5% waste: 1.23 × 1.05 = 1.30 yd³ → order <strong>1.5 cubic yards</strong></li>
          <li>Or in bags: 33.33 × 1.05 ÷ 0.60 = 58.3 → <strong>59 eighty-pound bags</strong></li>
        </ol>
        <p>
          Enter these exact numbers into the calculator above and you will get the same result —
          that is the point. No black box.
        </p>

        <h2>Limitations</h2>
        <Callout variant="limitation">
          <p>
            This calculator assumes a rectangular slab of uniform thickness. It does not account
            for thickened edges, footings poured monolithically with the slab, or sloped
            surfaces — add those volumes separately. Subgrade matters more than the math: an
            uncompacted base can swallow extra concrete, which is what the waste allowance is
            for. For structural work (foundations, retaining walls), have the mix and
            reinforcement specified by your local code or an engineer — a volume calculator is
            not engineering advice.
          </p>
        </Callout>

        <h2>Frequently asked questions</h2>
      </div>

      <div className="mt-4">
        <Faq items={faqs} />
      </div>

      <div className="article mt-10">
        <h2>Related calculators &amp; guides</h2>
        <ul>
          <li>
            <Link href="/tools/concrete-bag-calculator/">Concrete bag calculator</Link> — bags by
            volume or slab size, all three bag weights
          </li>
          <li>
            <Link href="/tools/footing-concrete-calculator/">Footing concrete calculator</Link> —
            volume for foundation and post footings
          </li>
          <li>
            <Link href="/tools/gravel-calculator/">Gravel calculator</Link> — size the compacted
            base under your slab
          </li>
          <li>
            <Link href="/guides/quikrete-vs-ready-mix/">Quikrete vs. ready-mix</Link> — bag-count
            tables and the real break-even point
          </li>
          <li>
            <Link href="/guides/how-much-does-a-yard-of-concrete-cover/">
              How much does a yard of concrete cover?
            </Link>{' '}
            — coverage at 4, 5, and 6 inches
          </li>
        </ul>
      </div>
    </div>
  )
}
