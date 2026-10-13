import CalculatorShell from '@/components/CalculatorShell'
import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import PaintCostCalculator from '@/components/calculators/PaintCostCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Paint Cost Calculator — Full Project Budget in Seconds | MyRenoCalc',
  description:
    'What will painting cost? Enter gallons or room size, price per gallon, and supplies — get an itemized paint project budget instantly.',
  path: '/tools/paint-cost-calculator/',
})

const faqs = [
  {
    question: 'How much does it cost to paint a room yourself?',
    answer:
      'For a standard 12×12 room: about 2 gallons of mid-range paint ($35–50/gal) is $70–100, plus $60–90 in supplies (roller covers, tape, brush, drop cloth, tray). Expect roughly $130–200 all-in for DIY. Premium paint ($55–85/gal) pushes it toward $200–260.',
  },
  {
    question: 'What supplies do I need to paint a room?',
    answer:
      'The essentials: roller covers, a roller frame, painter’s tape, an angled brush for cutting in, a drop cloth, and a paint tray with liners. Nice to have: spackle and a putty knife for hole repair, paintable caulk for trim gaps. The calculator above checklists them with typical prices (estimates).',
  },
  {
    question: 'Is it cheaper to buy a 5-gallon bucket?',
    answer:
      'Usually yes per gallon — 5-gallon buckets typically save 10–20% versus single gallons. It makes sense when you need 4+ gallons of one color, e.g. whole-house interiors or exteriors. For a single room, gallons (and quarts for touch-ups) are more practical.',
  },
  {
    question: 'How much does a professional painter charge per room?',
    answer:
      'In 2026, a standard bedroom runs $350–800 professionally painted (walls plus trim), per allbetterapp.com’s interior cost survey. Whole-home interiors (2,000 sq ft) run $4,200–11,500. Labor is usually 60–80% of a pro quote — that is what DIY saves you.',
  },
  {
    question: 'Why do supply prices say "estimate"?',
    answer:
      'Because they genuinely vary by store, brand, and region — a pro-grade brush costs triple a basic one. We use typical US retail prices so the budget is realistic; check your local store for exact numbers before you shop.',
  },
]

export default function PaintCostCalculatorPage() {
  return (
    <PageShell title={"Paint Cost Calculator"} path="/tools/paint-cost-calculator/" category="Paint">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Paint calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Paint Cost Calculator</h1>

      <div className="article mt-6">
        <p>
          Gallons are only half the budget. First-time painters consistently underestimate the
          supplies: tape, roller covers, brushes, drop cloths, trays — the &quot;small
          stuff&quot; routinely adds $60–90 to a single-room job. Then there is the paint itself,
          where the gap between a $25 budget gallon and a $65 premium gallon changes the total
          by more than the supplies do.
        </p>
        <p>
          This calculator builds the full picture. Enter your gallons directly — or let it
          estimate from room dimensions — set your price per gallon, and check off the supplies
          you need. You get an itemized budget: paint cost, supplies cost, and the total. Every
          supply price is labeled as a typical-price estimate, because store prices genuinely
          vary.
        </p>
      </div>

      <div className="mt-8">
        <CalculatorShell><PaintCostCalculator /></CalculatorShell>
      </div>

      <div className="article mt-10">
        <h2 id="section-1">How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Paint cost</strong> = gallons × price per gallon. If you estimate from room
            dimensions, gallons = wall area × coats ÷ 350 sq ft/gal (the standard interior latex
            rate per Sherwin-Williams&apos; product data), rounded up to the quart.
          </p>
          <p>
            <strong>Supplies</strong> = sum of checked items at typical US retail prices —
            <strong>all estimates</strong>: roller covers $9, tape $16, brush $13, drop cloth $22,
            tray $10, spackle kit $12, caulk $7. Uncheck anything you already own.
          </p>
          <p>
            <strong>Price tiers</strong> (2026, per allbetterapp.com and carolinarenew.com): budget
            $20–30, mid-range $35–50, premium $55–85 per gallon.
          </p>
        </Callout>

        <h2 id="section-2">Worked example</h2>
        <p>DIY repaint of a 12 × 12 room, 2 coats, mid-range paint at $45/gal, full supply list:</p>
        <ol>
          <li>Paint: 2 gallons × $45 = <strong>$90</strong></li>
          <li>
            Supplies: $9 + $16 + $13 + $22 + $10 = <strong>$70</strong>
          </li>
          <li>
            Total: <strong>$160</strong>
          </li>
        </ol>
        <p>
          A pro would charge $350–800 for the same room (allbetterapp.com, 2026) — the $200–640
          difference is your labor savings.
        </p>

        <h2 id="section-3">Limitations</h2>
        <Callout variant="limitation">
          <p>
            This is a materials-and-supplies budget, not a contractor quote — it excludes labor,
            which dominates professional pricing. Supply prices are estimates and vary by store.
            Specialty items (scaffolding for tall walls, sprayers, stain-blocking primers) are not
            in the checklist; add them manually for those projects.
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
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> — get
            your gallon count first
          </li>
          <li>
            <Link href="/tools/exterior-paint-calculator/">Exterior paint calculator</Link> —
            bigger jobs, bigger budgets
          </li>
          <li>
            <Link href="/guides/paint-cost-per-square-foot/">Paint cost per square foot (2026)</Link>{' '}
            — materials vs. pro labor, full breakdown
          </li>
          <li>
            <Link href="/guides/paint-quantity-mistakes/">7 paint quantity mistakes</Link> — the
            errors that inflate the bill
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
