import CalculatorShell from '@/components/CalculatorShell'
import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import CeilingPaintCalculator from '@/components/calculators/CeilingPaintCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Ceiling Paint Calculator — How Much for the Fifth Wall | MyRenoCalc',
  description:
    'How much paint for your ceiling? Enter length and width — get exact gallons for flat or textured ceilings, with the math shown.',
  path: '/tools/ceiling-paint-calculator/',
})

const faqs = [
  {
    question: 'How much paint do I need for a ceiling?',
    answer:
      'A 12×12 ft ceiling is 144 square feet — under half a gallon per coat at 350 sq ft per gallon. Most ceilings need about one gallon per coat for an average bedroom, two for a large living room. Use the calculator above with your exact dimensions.',
  },
  {
    question: 'Does a textured or popcorn ceiling need more paint?',
    answer:
      'Yes — budget roughly 25% more than a flat ceiling of the same size (an estimate; very heavy texture may need more). Texture traps paint, and you cannot stretch it the way you can on a smooth wall. Check the textured box in the calculator and it adjusts automatically.',
  },
  {
    question: 'What kind of paint should I use on a ceiling?',
    answer:
      'Flat ceiling paint — it hides imperfections and does not reflect light unevenly. Ceiling-specific paints are also formulated to spatter less when rolled overhead. Standard wall paint works, but flat finish looks better up there.',
  },
  {
    question: 'How many coats does a ceiling need?',
    answer:
      'Usually one to two. A previously white ceiling in good shape often covers in one coat; stained, patched, or color-changed ceilings need two, sometimes over a stain-blocking primer.',
  },
  {
    question: 'Should I paint the ceiling before or after the walls?',
    answer:
      'Ceiling first, then walls, then trim — the standard pro order. Any roller spatter from the ceiling lands on unpainted walls, where the wall coats will cover it.',
  },
]

export default function CeilingPaintCalculatorPage() {
  return (
    <PageShell title={"Ceiling Paint Calculator"} path="/tools/ceiling-paint-calculator/" category="Paint">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Paint calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Ceiling Paint Calculator</h1>

      <div className="article mt-6">
        <p>
          The ceiling is the wall everyone forgets. It is also the easiest surface to estimate —
          a flat rectangle, no doors or windows to subtract. Yet people routinely buy a whole
          extra gallon &quot;just in case&quot; for a 144-square-foot ceiling that needs less
          than half a gallon per coat.
        </p>
        <p>
          Enter your ceiling&apos;s length and width and pick your coats. If it is a popcorn or
          heavily textured ceiling, check the box — texture drinks paint, and the calculator
          budgets roughly 25% extra for it. The result rounds up to the nearest quart, because
          that is the smallest unit worth buying.
        </p>
      </div>

      <div className="mt-8">
        <CalculatorShell><CeilingPaintCalculator /></CalculatorShell>
      </div>

      <div className="article mt-10">
        <h2 id="section-1">How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Ceiling area</strong> = length × width. No subtractions — unlike walls, there
            are no doors or windows.
          </p>
          <p>
            <strong>Gallons</strong> = area × coats ÷ coverage. Flat ceilings use ~350 sq ft/gal
            (the standard interior latex rate per Sherwin-Williams&apos; product data). Textured
            ceilings use an effective ~280 sq ft/gal — roughly 25% more paint, which is an
            estimate based on how texture increases surface area.
          </p>
        </Callout>

        <h2 id="section-2">Worked example</h2>
        <p>A 15 × 20 ft living room ceiling, flat, 2 coats:</p>
        <ol>
          <li>Area = 15 × 20 = 300 sq ft</li>
          <li>Paint = 300 × 2 ÷ 350 = 1.71 gallons</li>
          <li>Rounded up: <strong>1 gallon + 3 quarts</strong></li>
        </ol>
        <p>
          Same ceiling with popcorn texture: 300 × 2 ÷ 280 = 2.14 gallons →{' '}
          <strong>2 gallons + 1 quart</strong>. That extra quart is the texture tax.
        </p>

        <h2 id="section-3">Limitations</h2>
        <Callout variant="limitation">
          <p>
            Vaulted or tray ceilings have more surface than length × width — measure each plane
            separately. Water stains and smoke damage need a stain-blocking primer first; paint
            alone will let stains bleed through within weeks. This calculator covers the ceiling
            field only, not crown molding or trim.
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
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> — walls
            for the same room
          </li>
          <li>
            <Link href="/tools/paint-cost-calculator/">Paint cost calculator</Link> — add the
            ceiling gallons to your budget
          </li>
          <li>
            <Link href="/tools/primer-calculator/">Primer calculator</Link> — for stained ceilings
            that need sealing first
          </li>
          <li>
            <Link href="/guides/how-much-paint-for-12x12-room/">How much paint for a 12×12 room</Link>{' '}
            — walls + ceiling together
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
