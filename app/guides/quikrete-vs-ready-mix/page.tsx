import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Quikrete vs. Ready-Mix: Bags or Truck? (2026 Costs) | MyRenoCalc',
  description:
    'Bags or a concrete truck? Bag-count tables for common slabs, 2026 cost comparison per yard, and the real break-even point — with the math shown.',
  path: '/guides/quikrete-vs-ready-mix/',
})

const faqs = [
  {
    question: 'How many 80-lb bags of Quikrete equal a cubic yard?',
    answer:
      '45 bags. Each 80-lb bag of Quikrete Concrete Mix #1101 yields about 0.60 cubic feet (per the product spec sheet), and 27 ÷ 0.60 = 45. At roughly $5 per bag, that is about $225 in material alone per yard — before your labor.',
  },
  {
    question: 'Is it cheaper to mix your own concrete or order ready-mix?',
    answer:
      'Below about 1 cubic yard, bags are usually cheaper once you count short-load fees on small truck orders. Above 1 yard, ready-mix almost always wins on material cost alone — roughly $125–$180 per yard delivered in 2026 versus $200+ per yard in bag material — and the labor difference is enormous.',
  },
  {
    question: 'How long does it take to mix 80 bags by hand?',
    answer:
      'Plan on a full brutal day with help. A realistic pace is 8–12 bags per hour with a rented mixer and two people (mixing, hauling, placing, screeding). Eighty bags is 6,400 lb of dry material plus water — this is why the break-even is as much about your back as your wallet.',
  },
  {
    question: 'Can I pour half the slab with bags and half with a truck?',
    answer:
      'Do not. Concrete starts setting within about 90 minutes, and the seam between two pours of different ages — a cold joint — is a permanent weak line. Pick one method for each continuous pour.',
  },
]

export default function QuikreteVsReadyMixPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete guides
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">
        Quikrete vs. Ready-Mix: Bags or Truck?
      </h1>

      <div className="article mt-6">
        <p>
          Every concrete project eventually faces this fork: buy bags and mix it yourself, or
          order a ready-mix truck. The bag aisle makes bags look cheap — five dollars a bag feels
          like nothing — until you multiply by eighty and realize you have signed up to move
          three tons of material by hand.
        </p>
        <p>
          This guide gives you the real comparison: bag-count tables for common slabs, 2026
          cost math on both sides, and the break-even point where the truck wins. Bag yields are
          from the Quikrete #1101 spec sheet (80-lb ≈ 0.60 cu ft); truck prices are 2026 US
          planning ranges from published pricing guides — labeled as estimates throughout.
        </p>

        <h2>Bag counts for common slabs (4 inches thick)</h2>
        <table>
          <thead>
            <tr>
              <th>Slab</th>
              <th>Cubic yards</th>
              <th>80-lb bags</th>
              <th>Bag material ≈</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8 × 10 ft shed pad</td>
              <td>0.99</td>
              <td>45</td>
              <td>$225</td>
            </tr>
            <tr>
              <td>10 × 10 ft patio</td>
              <td>1.23</td>
              <td>56</td>
              <td>$280</td>
            </tr>
            <tr>
              <td>12 × 12 ft patio</td>
              <td>1.78</td>
              <td>80</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>12 × 16 ft patio</td>
              <td>2.37</td>
              <td>107</td>
              <td>$535</td>
            </tr>
            <tr>
              <td>16 × 20 ft slab</td>
              <td>3.95</td>
              <td>178</td>
              <td>$890</td>
            </tr>
          </tbody>
        </table>
        <p>
          Bag counts are rounded up (never round down concrete); material assumes roughly $5 per
          80-lb bag, a typical 2026 big-box price. Check your exact slab with our{' '}
          <Link href="/tools/concrete-bag-calculator/">concrete bag calculator</Link>.
        </p>

        <h2>The truck side of the math</h2>
        <p>
          Ready-mix in 2026 runs roughly <strong>$125–$180 per cubic yard delivered</strong> for
          standard residential mix (planning range from published pricing guides). Against the
          table above:
        </p>
        <ul>
          <li>
            <strong>10 × 10 patio (1.23 yd):</strong> truck ≈ $155–$220 in material — but a
            short-load fee ($30–$60/yd under the truck minimum) can push a 1-yard order toward
            $250+. Bags at $280 are competitive here, <em>if</em> you value your Saturday at
            zero.
          </li>
          <li>
            <strong>12 × 12 patio (1.78 yd):</strong> truck ≈ $225–$320. Bags cost $400 in
            material alone. The truck wins on money <em>and</em> you skip mixing 80 bags.
          </li>
          <li>
            <strong>16 × 20 slab (3.95 yd):</strong> truck ≈ $500–$710. Bags cost $890 — and
            mixing 178 bags (over 7 tons) by hand is not a DIY project, it is a crew job.
          </li>
        </ul>

        <h2>The real break-even: about 1 cubic yard</h2>
        <p>
          On pure material cost, the lines cross near <strong>1 cubic yard (45 eighty-pound
          bags)</strong>. Below that, short-load fees make the truck expensive per yard and bags
          are competitive. Above it, the truck pulls away fast. But material cost is only half
          the equation — the other half is labor:
        </p>
        <ul>
          <li>
            <strong>Mixing pace:</strong> with a rented mixer and two people, expect 8–12 bags
            per hour including placing and screeding (estimate). Forty-five bags is a full day.
            Eighty bags is a very long day.
          </li>
          <li>
            <strong>Consistency:</strong> a truck delivers one uniform batch. Eighty hand-mixed
            bags are eighty chances for the water ratio to drift — and inconsistent mix means
            inconsistent strength.
          </li>
          <li>
            <strong>The haul:</strong> 45 bags is 3,600 lb. Unless you have a trailer, that is
            multiple trips in a pickup.
          </li>
        </ul>

        <h2>When bags are genuinely the right call</h2>
        <ul>
          <li>Post holes, small pads, and repairs under ~1 yard</li>
          <li>Sites a mixer truck cannot reach (steep, soft, or gated access)</li>
          <li>Staged work — a few bags today, a few next weekend (separate pours, not one slab)</li>
          <li>Fast-setting mix for posts (sets in 20–40 minutes — a different product, same math)</li>
        </ul>

        <Callout variant="limitation">
          <p>
            Prices are 2026 US planning ranges from published guides — your market, the mix
            design, and delivery distance move the real numbers, so get a local quote before
            budgeting. Bag counts use Quikrete #1101 yields; other brands vary slightly. Labor
            pace figures are estimates from contractor rules of thumb, not measurements.
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
            <Link href="/tools/concrete-bag-calculator/">Concrete bag calculator</Link> — exact
            bag count for your volume
          </li>
          <li>
            <Link href="/tools/concrete-calculator/">Concrete calculator</Link> — cubic yards with
            waste allowance
          </li>
          <li>
            <Link href="/guides/how-much-does-a-yard-of-concrete-cover/">
              How much does a yard of concrete cover?
            </Link>
          </li>
          <li>
            <Link href="/guides/concrete-curing-time/">Concrete curing timeline</Link> — what
            happens after the pour
          </li>
        </ul>
      </div>
    </div>
  )
}
