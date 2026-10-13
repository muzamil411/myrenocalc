import CalculatorShell from '@/components/CalculatorShell'
import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import GravelCalculator from '@/components/calculators/GravelCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Gravel Calculator — Cubic Yards & Tons for Any Area | MyRenoCalc',
  description:
    'How much gravel do you need? Enter area and depth — get cubic yards and estimated tons for crushed stone, pea gravel or crusher run, with the math shown.',
  path: '/tools/gravel-calculator/',
})

const faqs = [
  {
    question: 'How many tons are in a cubic yard of gravel?',
    answer:
      'About 1.4 tons (2,800 lb) for standard crushed stone — but treat it as an estimate. Pea gravel runs a little lighter at about 1.3 tons per yard; crusher run is denser at about 1.5–1.6. Density varies by quarry, stone size, and moisture, so always confirm the conversion with your supplier before ordering by weight.',
  },
  {
    question: 'How deep should gravel be for a driveway?',
    answer:
      '4–6 inches of compacted base is the standard for a residential gravel driveway; walkways and patios need 2–3 inches. French drains typically get 6–8 inches of washed stone. These are the commonly published depth recommendations from aggregate suppliers.',
  },
  {
    question: 'Why does the calculator add a compaction allowance?',
    answer:
      'Loose gravel settles 10–20% once it is driven on or compacted — so a bed that should finish at 4 inches needs more than 4 inches of loose stone on day one. The calculator defaults to 10%; use 15–20% for crusher run or any base that will be mechanically compacted.',
  },
  {
    question: 'Should I order gravel by the yard or by the ton?',
    answer:
      'Whichever your supplier prices in — the calculator gives you both. Bulk suppliers usually sell by the ton; landscape yards often sell by the cubic yard. Because tons depend on density (which varies), the cubic-yard number is the more reliable of the two for planning. Get a quarry quote for anything over a yard: bulk is dramatically cheaper than bagged stone.',
  },
  {
    question: 'How much area does one cubic yard of gravel cover?',
    answer:
      'One cubic yard covers about 162 square feet at 2 inches deep, 108 square feet at 3 inches, or 81 square feet at 4 inches. (A yard is 27 cubic feet; divide by the depth in feet.)',
  },
]

export default function GravelCalculatorPage() {
  return (
    <PageShell title={"Gravel Calculator"} path="/tools/gravel-calculator/" category="Concrete & masonry">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete &amp; masonry calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Gravel Calculator</h1>

      <div className="article mt-6">
        <p>
          Gravel is sold by weight and used by volume, which is exactly the kind of unit
          mismatch that causes under-ordering. The supplier quotes tons, your driveway is square
          feet at 4 inches deep, and somewhere between the two is the number that keeps you
          from paying a second delivery fee.
        </p>
        <p>
          This calculator bridges the gap. Enter your area and depth, pick your material —
          crushed stone, gravel, pea gravel, crusher run, or sand — and it gives you cubic yards
          plus estimated tons, with a compaction allowance built in. Densities are the standard
          published values (about 1.4 tons per yard for crushed stone), and the tons figure is
          clearly labeled an estimate, because real density varies by quarry and moisture.
        </p>
      </div>

      <div className="mt-8">
        <CalculatorShell><GravelCalculator /></CalculatorShell>
      </div>

      <div className="article mt-10">
        <h2 id="section-1">How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Volume</strong> = length × width × (depth ÷ 12) in feet, then ÷ 27 for cubic
            yards. A 20 × 10 ft driveway at 4 inches is 20 × 10 × 0.333 ÷ 27 = 2.47 cubic yards.
          </p>
          <p>
            <strong>Tons</strong> = cubic yards × density × (1 + compaction allowance). Densities
            used: crushed stone and gravel ≈ 1.4 tons/yd³, pea gravel ≈ 1.3, crusher run ≈ 1.55,
            dry sand ≈ 1.35. These are loose, dry published values — wet material weighs more,
            which is why tons are always an estimate.
          </p>
        </Callout>

        <h2 id="section-2">Worked example</h2>
        <p>A 20 × 10 ft driveway, 4 inches of crushed stone, 10% compaction allowance:</p>
        <ol>
          <li>Volume = 20 × 10 × (4 ÷ 12) = 66.67 cu ft</li>
          <li>Cubic yards = 66.67 ÷ 27 = <strong>2.47 yd³</strong></li>
          <li>
            Tons = 2.47 × 1.4 × 1.10 = <strong>~3.8 tons</strong>
          </li>
        </ol>
        <p>
          Enter these exact numbers into the calculator above and you will get the same result —
          that is the point. No black box.
        </p>

        <h2 id="section-3">Limitations</h2>
        <Callout variant="limitation">
          <p>
            The tons figure is an estimate by design: bulk density varies with stone size,
            gradation, quarry, and moisture content. Wet gravel can weigh 20%+ more than dry.
            Confirm the yards-to-tons conversion with your supplier — most will tell you their
            number if you ask. This calculator also assumes a rectangular area; for irregular
            shapes, break the area into rectangles and add the results.
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
            the slab that goes on top of this base
          </li>
          <li>
            <Link href="/tools/concrete-bag-calculator/">Concrete bag calculator</Link> — bag
            counts with total haul weight
          </li>
          <li>
            <Link href="/guides/how-thick-should-concrete-slab-be/">
              How thick should a concrete slab be?
            </Link>{' '}
            — and how much base goes under it
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
