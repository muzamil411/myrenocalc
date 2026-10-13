import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import InteriorPaintCalculator from '@/components/calculators/InteriorPaintCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Interior Paint Calculator — Exact Gallons for Any Room | MyRenoCalc',
  description:
    'How many gallons of paint do you need? Enter room dimensions, doors, windows and coats — get exact gallons plus primer, with the math shown.',
  path: '/tools/interior-paint-calculator/',
})

const faqs = [
  {
    question: 'How many square feet does a gallon of interior paint cover?',
    answer:
      'Most interior latex paints cover 350–400 square feet per gallon per coat, per Sherwin-Williams’ Duration Home product data sheet. This calculator defaults to 350 — the conservative end — so you are less likely to run short. Porous surfaces, heavy texture, and drastic color changes all reduce real-world coverage.',
  },
  {
    question: 'Should I subtract doors and windows from the wall area?',
    answer:
      'Yes. The standard estimating practice (Hamilton & Hamilton estimating guide) subtracts 20 square feet per door and 15 square feet per average window. Some pros use 21 and 16 — the difference is small, and this calculator uses 20/15.',
  },
  {
    question: 'How much paint do I need for one coat versus two?',
    answer:
      'Double the one-coat number. Two coats is the standard for most repaints: the first coat builds color, the second evens it out. One coat is only realistic for same-color refreshes with a quality paint.',
  },
  {
    question: 'Do I need primer too?',
    answer:
      'On new, unpainted drywall — yes, always. Drywall and joint compound are porous and will drink finish paint unevenly. Check the "new drywall" box and the calculator adds one coat of PVA primer at about 300 square feet per gallon (KILZ PVA drywall primer technical data sheet: 300–400). On previously painted walls in good condition, primer is usually unnecessary.',
  },
  {
    question: 'Should I round up when buying paint?',
    answer:
      'Yes — this calculator rounds up to the nearest quart automatically. Paint stores cannot mix a fraction of a quart, and a little extra covers touch-ups later. Running out mid-wall risks a visible color mismatch between batches.',
  },
]

export default function InteriorPaintCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Paint calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Interior Paint Calculator</h1>

      <div className="article mt-6">
        <p>
          You are standing in the paint aisle with a cart, and the only question that matters is:
          how many gallons do I actually need? Buy too little and you are back at the store
          mid-project — possibly with a slightly different tint batch. Buy too much and you have
          paid $45+ per gallon for paint that will sit in the garage for five years.
        </p>
        <p>
          This calculator answers that question with real math. Enter your room dimensions, the
          number of doors and windows, and how many coats you plan to apply. It subtracts the
          standard allowances for doors and windows, divides by a realistic coverage rate, and
          rounds up to the nearest quart — the smallest unit a paint store will sell you. If
          your walls are new drywall, check the primer box and it will add a primer coat too.
        </p>
      </div>

      <div className="mt-8">
        <InteriorPaintCalculator />
      </div>

      <div className="article mt-10">
        <h2>How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Wall area</strong> = 2 × ceiling height × (length + width) − doors × 20 sq ft −
            windows × 15 sq ft. The 20/15 allowances are the standard estimating figures from the
            Hamilton &amp; Hamilton painting guide.
          </p>
          <p>
            <strong>Gallons</strong> = wall area × coats ÷ coverage per gallon. Coverage defaults
            to 350 sq ft/gal — the conservative end of the 350–400 range published in
            Sherwin-Williams’ Duration Home interior latex product data sheet.
          </p>
          <p>
            <strong>Primer</strong> (new drywall only) = wall area ÷ 300 sq ft/gal, based on the
            KILZ PVA drywall primer technical data sheet (300–400 sq ft/gal; we use 300 because
            raw drywall is porous).
          </p>
        </Callout>

        <h2>Worked example</h2>
        <p>A 12 × 14 ft bedroom with 8 ft ceilings, 1 door, 2 windows, 2 coats:</p>
        <ol>
          <li>Wall area = 2 × 8 × (12 + 14) = 416 sq ft</li>
          <li>Minus openings: 416 − (1 × 20) − (2 × 15) = 366 sq ft paintable</li>
          <li>Paint = 366 × 2 ÷ 350 = 2.09 gallons</li>
          <li>Rounded up to the nearest quart: <strong>2 gallons + 1 quart</strong></li>
        </ol>
        <p>
          Enter these exact numbers into the calculator above and you will get the same result —
          that is the point. No black box.
        </p>

        <h2>Limitations</h2>
        <Callout variant="limitation">
          <p>
            This calculator assumes smooth to lightly textured walls. Heavily textured walls,
            brick, or raw plaster drink more paint — budget 10–25% extra (estimate). It does not
            include ceilings, trim, or doors themselves; use our{' '}
            <Link href="/tools/ceiling-paint-calculator/">ceiling paint calculator</Link> for the
            ceiling. Drastic color changes (dark to light) may need a third coat or a tinted
            primer beyond what is calculated here.
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
            <Link href="/tools/primer-calculator/">Primer calculator</Link> — primer by surface
            type, with or without room dimensions
          </li>
          <li>
            <Link href="/tools/paint-cost-calculator/">Paint cost calculator</Link> — turn gallons
            into a full project budget with supplies
          </li>
          <li>
            <Link href="/tools/ceiling-paint-calculator/">Ceiling paint calculator</Link> — do not
            forget the fifth wall
          </li>
          <li>
            <Link href="/tools/exterior-paint-calculator/">Exterior paint calculator</Link> — same
            math for the outside of the house
          </li>
          <li>
            <Link href="/guides/how-much-paint-for-12x12-room/">How much paint for a 12×12 room</Link>{' '}
            — quick answers for common room sizes
          </li>
          <li>
            <Link href="/guides/paint-coverage-per-gallon/">Paint coverage per gallon by type</Link>{' '}
            — why 350 is not always 350
          </li>
        </ul>
      </div>
    </div>
  )
}
