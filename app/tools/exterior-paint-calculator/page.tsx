import CalculatorShell from '@/components/CalculatorShell'
import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import ExteriorPaintCalculator from '@/components/calculators/ExteriorPaintCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Exterior Paint Calculator — Gallons for Your Whole House | MyRenoCalc',
  description:
    'How much exterior paint for your house? Enter footprint, stories, siding type and coats — get exact gallons with the math shown.',
  path: '/tools/exterior-paint-calculator/',
})

const faqs = [
  {
    question: 'How much exterior paint do I need for a 2,000 sq ft house?',
    answer:
      'It depends on the footprint and siding, not just floor space. A single-story 50×40 ft house (2,000 sq ft footprint) with 9 ft walls has about 1,335 paintable square feet after windows and doors — roughly 8 gallons for two coats on smooth siding. See our worked guide for the full breakdown.',
  },
  {
    question: 'Does siding type change how much paint I need?',
    answer:
      'Yes, significantly. Smooth siding runs about 350 sq ft per gallon, textured or stucco about 300, and brick or masonry about 250 — these are estimates, since porous surfaces absorb more paint. This calculator adjusts coverage automatically when you pick a siding type.',
  },
  {
    question: 'How many coats of exterior paint are needed?',
    answer:
      'Two coats is the standard for exterior work — UV, rain, and temperature swings punish thin paint jobs. One coat is only realistic for a same-color refresh on paint that is still in good condition.',
  },
  {
    question: 'Should I include gables in the calculation?',
    answer:
      'This calculator does not add gable triangles automatically. If your house has prominent gables, add roughly 10–15% to the result (estimate) or measure each triangle as base × height ÷ 2 and add it to your wall area.',
  },
  {
    question: 'Do I need primer on exterior walls?',
    answer:
      'On bare wood, raw stucco, or chalky old paint — yes. On previously painted siding in sound condition, a quality exterior paint (many are self-priming for repaints) is usually enough. Spot-prime any bare patches regardless.',
  },
]

export default function ExteriorPaintCalculatorPage() {
  return (
    <PageShell title={"Exterior Paint Calculator"} path="/tools/exterior-paint-calculator/" category="Paint">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Paint calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Exterior Paint Calculator</h1>

      <div className="article mt-6">
        <p>
          Exterior paint is the most expensive paint you will buy — premium exterior gallons run
          $55–85 in 2026 — and running short means a second trip while scaffolding sits in your
          yard. Worse, exterior color matching between batches is unforgiving in daylight.
        </p>
        <p>
          This calculator estimates whole-house exterior paint from your home&apos;s footprint:
          width, depth, wall height, and stories give the gross wall area, then windows and doors
          are subtracted using standard allowances. The key difference from interior math is the
          siding adjustment — brick drinks far more paint than smooth siding — so pick your
          siding type and the coverage rate adjusts automatically.
        </p>
      </div>

      <div className="mt-8">
        <CalculatorShell><ExteriorPaintCalculator /></CalculatorShell>
      </div>

      <div className="article mt-10">
        <h2 id="section-1">How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Wall area</strong> = 2 × (width + depth) × wall height × stories − windows × 15
            sq ft − doors × 20 sq ft. The 20/15 allowances are standard estimating figures (Hamilton
            &amp; Hamilton).
          </p>
          <p>
            <strong>Gallons</strong> = wall area × coats ÷ siding coverage. Coverage rates by siding
            are estimates: smooth ~350, textured/stucco ~300, brick/masonry ~250 sq ft/gal. (For
            reference, cypaint.com notes exterior paints generally cover 250–350 sq ft/gal because
            of their thicker formulation.)
          </p>
        </Callout>

        <h2 id="section-2">Worked example</h2>
        <p>A single-story 40 × 30 ft house, 9 ft walls, 12 windows, 3 doors, smooth siding, 2 coats:</p>
        <ol>
          <li>Perimeter = 2 × (40 + 30) = 140 ft</li>
          <li>Gross wall = 140 × 9 = 1,260 sq ft</li>
          <li>Minus openings: 1,260 − (12 × 15) − (3 × 20) = 1,020 sq ft paintable</li>
          <li>Paint = 1,020 × 2 ÷ 350 = 5.83 gallons</li>
          <li>Rounded up: <strong>6 gallons</strong> (5 gal + 4 qt)</li>
        </ol>

        <h2 id="section-3">Limitations</h2>
        <Callout variant="limitation">
          <p>
            Gable triangles are not included — add 10–15% for prominent gables (estimate). Porches,
            shutters, trim, and detached garages need separate calculations. Very rough or
            previously unpainted masonry can exceed even the brick rate; when in doubt, buy one
            extra gallon — exterior leftovers store well for touch-ups.
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
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> — the
            same math for inside walls
          </li>
          <li>
            <Link href="/tools/paint-cost-calculator/">Paint cost calculator</Link> — budget the
            whole exterior job including supplies
          </li>
          <li>
            <Link href="/tools/primer-calculator/">Primer calculator</Link> — for bare wood and
            raw masonry
          </li>
          <li>
            <Link href="/guides/exterior-paint-for-2000-sq-ft-house/">
              How much exterior paint for a 2,000 sq ft house
            </Link>{' '}
            — full worked example with siding variants
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
