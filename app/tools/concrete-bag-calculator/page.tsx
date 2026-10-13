import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import ConcreteBagCalculator from '@/components/calculators/ConcreteBagCalculator'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Concrete Bag Calculator — How Many Bags Do I Need? | MyRenoCalc',
  description:
    'How many bags of concrete for your project? Enter volume or slab dimensions — get exact 80, 60 or 50-lb bag counts, total weight, and ready-mix comparison.',
  path: '/tools/concrete-bag-calculator/',
})

const faqs = [
  {
    question: 'How many 80-lb bags of concrete make a cubic yard?',
    answer:
      '45 bags. Each 80-lb bag of Quikrete Concrete Mix #1101 yields about 0.60 cubic feet (per the product spec sheet), and a cubic yard is 27 cubic feet: 27 ÷ 0.60 = 45.',
  },
  {
    question: 'How many 60-lb bags are in a cubic yard?',
    answer:
      '60 bags. The 60-lb bag yields about 0.45 cubic feet per the same spec sheet: 27 ÷ 0.45 = 60. For 50-lb bags (0.375 cu ft yield), it is 72 bags per yard.',
  },
  {
    question: 'Why does the calculator always round bags up?',
    answer:
      'Because running out mid-pour is the worst outcome in concrete work. Fresh concrete starts setting within about 90 minutes; a second batch mixed later creates a cold joint — a visible, weaker seam. One leftover bag costs a few dollars; a short pour can ruin a slab.',
  },
  {
    question: 'How heavy is all that concrete to haul?',
    answer:
      'An 80-lb bag is 80 lb, obviously — but it adds up fast. Eighty bags (one cubic yard) is 6,400 lb, over 3 tons. Most half-ton pickups are rated for roughly 1,000–1,500 lb of payload, so a full yard of bagged concrete is multiple trips or a delivery. The calculator shows total dry weight so you can plan the haul.',
  },
  {
    question: 'At what point is ready-mix cheaper than bags?',
    answer:
      'Roughly above 1 cubic yard (45 eighty-pound bags). Bagged concrete runs about $4.50–$6.00 per 80-lb bag in 2026 (buildestimatory.com 2026 price guide), which works out to roughly $200+ per cubic yard in material alone — versus $125–$180 per yard delivered for ready-mix. Bags win on small jobs where short-load fees would punish a truck order.',
  },
]

export default function ConcreteBagCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete &amp; masonry calculators
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">Concrete Bag Calculator</h1>

      <div className="article mt-6">
        <p>
          You are at the home center staring at a pallet of 80-lb bags, doing mental math you do
          not trust. The bag says it yields 0.6 cubic feet, your slab is some number of cubic
          feet, and division under fluorescent lights is how people end up making three trips.
        </p>
        <p>
          This calculator does the division honestly. Enter your volume directly, or enter slab
          dimensions and let it compute the volume first. Pick your bag size — 80, 60, or 50 lb
          — and it tells you exactly how many bags to buy, always rounded <em>up</em>, plus the
          total weight you will haul and what the same job would be as ready-mix. Bag yields
          come straight from the Quikrete spec sheet, and the formula is shown with your numbers
          below the results.
        </p>
      </div>

      <div className="mt-8">
        <ConcreteBagCalculator />
      </div>

      <div className="article mt-10">
        <h2>How the math works</h2>
        <Callout variant="method">
          <p>
            <strong>Volume</strong> = length × width × (thickness ÷ 12) in feet, or entered
            directly in cubic feet.
          </p>
          <p>
            <strong>Bags</strong> = volume ÷ yield per bag, rounded up. Yields are from the
            Quikrete Concrete Mix #1101 product spec sheet: 80-lb ≈ 0.60 cu ft, 60-lb ≈ 0.45 cu
            ft, 50-lb ≈ 0.375 cu ft. These are approximate — the sheet says so itself — which is
            one more reason to round up.
          </p>
          <p>
            <strong>Ready-mix equivalent</strong> = volume ÷ 27, for comparing against truck
            pricing.
          </p>
        </Callout>

        <h2>Worked example</h2>
        <p>A 12 × 12 ft shed pad, 4 inches thick, using 80-lb bags:</p>
        <ol>
          <li>Volume = 12 × 12 × (4 ÷ 12) = 48 cu ft</li>
          <li>Bags = 48 ÷ 0.60 = 80 → <strong>80 bags exactly</strong></li>
          <li>Total dry weight = 80 × 80 = <strong>6,400 lb (3.2 tons)</strong></li>
          <li>Ready-mix equivalent = 48 ÷ 27 = <strong>1.78 cubic yards</strong></li>
        </ol>
        <p>
          At 80 bags you are well past the point where a ready-mix truck is cheaper — see the
          break-even math in our Quikrete vs. ready-mix guide.
        </p>

        <h2>Limitations</h2>
        <Callout variant="limitation">
          <p>
            Bag yields are approximate per the manufacturer — actual yield varies slightly with
            how much water you add and how the bag was stored. This calculator does not add a
            waste allowance automatically: for formed work, add 5–10% yourself by entering a
            slightly larger volume. And remember the haul: 80 bags will not fit in a sedan, and
            most half-ton trucks need multiple trips.
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
            <Link href="/tools/concrete-calculator/">Concrete calculator</Link> — cubic yards for
            slabs, with waste allowance
          </li>
          <li>
            <Link href="/tools/footing-concrete-calculator/">Footing concrete calculator</Link> —
            volume for footings and posts
          </li>
          <li>
            <Link href="/guides/quikrete-vs-ready-mix/">Quikrete vs. ready-mix</Link> — full
            cost-per-yard comparison with bag tables
          </li>
          <li>
            <Link href="/guides/how-much-does-a-yard-of-concrete-cover/">
              How much does a yard of concrete cover?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
