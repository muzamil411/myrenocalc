import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import PrimerCalculator from '@/components/calculators/PrimerCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Primer Calculator — How Much Primer for Drywall, Wood & More | MyRenoCalc',
  description:
    'How much primer do you need? Pick new drywall, repainted walls, or bare wood — get exact primer gallons with coverage rates cited.',
  path: '/tools/primer-calculator/',
})

const faqs = [
  {
    question: 'How much primer do I need for new drywall?',
    answer:
      'About one gallon per 300 square feet. New drywall is porous, so primer coverage drops to the low end of the range — KILZ PVA drywall primer lists 300–400 sq ft per gallon on its technical data sheet, and we use 300 for raw drywall. A 12×12 room (about 350 sq ft of wall) needs roughly 1.25 gallons: buy 1 gallon plus 1 quart.',
  },
  {
    question: 'Do I need primer on previously painted walls?',
    answer:
      'Usually not, if the existing paint is in good condition and you are staying near the same color. You do need it for drastic color changes (dark to light), glossy surfaces that need scuff-sanding first, patched areas, and any bare spots.',
  },
  {
    question: 'How many coats of primer are needed?',
    answer:
      'One coat is standard for primer — it is a sealer and bonding layer, not the finish. The exception is severe stains or dark colors bleeding through, where a second coat (or a dedicated stain-blocking primer) may be needed.',
  },
  {
    question: 'Can I use paint-and-primer-in-one instead?',
    answer:
      'For repaints in similar colors, yes — those products work well. For new drywall, bare wood, or drastic color changes, a dedicated primer seals and bonds better than any combo product. The calculator above assumes dedicated primer.',
  },
  {
    question: 'What is PVA primer?',
    answer:
      'PVA (polyvinyl acetate) primer is the standard sealer for new drywall — it is inexpensive, seals the porous paper and joint compound evenly, and gives topcoats a uniform surface. That is why this calculator defaults new drywall to PVA coverage rates.',
  },
]

export default function PrimerCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Paint calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Primer Calculator</h1>

      <div className="article mt-6">
        <p>
          Primer is the coat nobody wants to buy and everybody regrets skipping. On new drywall it
          is non-negotiable: raw drywall and joint compound absorb paint at different rates, and
          without primer you get a blotchy finish that no amount of topcoat fully fixes. On bare
          wood it seals tannins and grain so your finish coats sit evenly.
        </p>
        <p>
          How much you need depends almost entirely on the surface. Porous new drywall drinks
          primer at about 300 square feet per gallon; a sealed, previously painted wall stretches
          the same gallon to about 350. Pick your surface type below — or enter room dimensions
          and let the calculator derive the wall area — and get primer gallons rounded up to the
          nearest quart.
        </p>
      </div>

      <div className="mt-8">
        <PrimerCalculator />
      </div>

      <div className="article mt-10">
        <h2>How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Primer gallons</strong> = wall area ÷ coverage for your surface. Coverage rates
            come from KILZ technical data sheets: PVA drywall primer lists 300–400 sq ft/gal (we
            use 300 for porous new drywall), general primers list 300–400 sq ft/gal (we use 350
            for sealed, previously painted walls), and rough surfaces list 200–300 sq ft/gal (we
            use 250 for bare wood — an estimate from that range).
          </p>
          <p>
            Primer is calculated as a <strong>single coat</strong> — that is the standard
            application. Results round up to the nearest quart.
          </p>
        </Callout>

        <h2>Worked example</h2>
        <p>New drywall in a 12 × 12 ft room, 8 ft ceilings, 1 door, 2 windows:</p>
        <ol>
          <li>Wall area = 2 × 8 × (12 + 12) − 20 − 30 = 334 sq ft</li>
          <li>Primer = 334 ÷ 300 = 1.11 gallons</li>
          <li>Rounded up: <strong>1 gallon + 1 quart</strong></li>
        </ol>

        <h2>Limitations</h2>
        <Callout variant="limitation">
          <p>
            Stain blocking (water marks, smoke, tannin bleed) needs a dedicated stain-blocking
            primer, not standard PVA — coverage is similar but the product differs. Glossy
            surfaces should be scuff-sanded first or the primer may not bond. Exterior bare wood
            and masonry have their own primer requirements beyond this calculator&apos;s scope.
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
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> —
            includes a primer estimate for new drywall
          </li>
          <li>
            <Link href="/tools/paint-cost-calculator/">Paint cost calculator</Link> — add primer
            gallons to your budget
          </li>
          <li>
            <Link href="/guides/how-many-coats-of-paint/">How many coats of paint do walls need</Link>{' '}
            — when primer + 2 is the answer
          </li>
        </ul>
      </div>
    </div>
  )
}
