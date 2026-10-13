import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'How Much Does a Yard of Concrete Cover? (4", 5", 6") | MyRenoCalc',
  description:
    'One cubic yard of concrete covers 81 sq ft at 4 inches, 65 at 5 inches, 54 at 6 inches. Coverage tables, 2026 cost per yard, and project examples.',
  path: '/guides/how-much-does-a-yard-of-concrete-cover/',
})

const faqs = [
  {
    question: 'How many square feet does one yard of concrete cover at 4 inches?',
    answer:
      '81 square feet. A cubic yard is 27 cubic feet; at 4 inches thick (one-third of a foot), 27 ÷ 0.333 = 81. At 5 inches it covers about 65 square feet, and at 6 inches about 54.',
  },
  {
    question: 'How much does a cubic yard of concrete cost in 2026?',
    answer:
      'Roughly $125–$180 per cubic yard delivered for standard residential mix, based on 2026 pricing guides (sources vary by region: allbetterapp.com reports $125–$195, buildestimatory.com $125–$160). Small orders under the truck minimum attract short-load fees of roughly $30–$60 per yard extra. Always get a local quote — these are planning ranges, not prices.',
  },
  {
    question: 'How many yards for a 10x10 patio at 4 inches?',
    answer:
      'About 1.25 cubic yards before waste. 10 × 10 ft at 4 inches is 33.33 cubic feet, ÷ 27 = 1.23 yards. With a 5% waste allowance, order 1.5 yards (trucks bill in quarter-yard increments).',
  },
  {
    question: 'Does the coverage math change for footings?',
    answer:
      'No — a cubic yard is a cubic yard. What changes is waste: footing trenches are irregular, so use 10% waste instead of 5%. The volume math (length × width × depth ÷ 27) is identical.',
  },
]

export default function YardOfConcreteCoverPage() {
  return (
    <PageShell title={"How Much Does a Yard of Concrete Cover?"} path="/guides/how-much-does-a-yard-of-concrete-cover/" category="Concrete & masonry" updated="2026-10-13" sections={[{"id":"section-1","title":"Coverage per cubic yard by thickness"},{"id":"section-2","title":"Common projects, translated to yards"},{"id":"section-3","title":"What a yard costs in 2026"},{"id":"section-4","title":"Frequently asked questions"},{"id":"section-5","title":"Related calculators & guides"}]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete guides
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">
        How Much Does a Yard of Concrete Cover?
      </h1>

      <div className="article mt-6">
        <p>
          &ldquo;A yard&rdquo; is the unit every concrete conversation happens in — the truck
          sells by the yard, the price is per yard, the short-load fee kicks in under a few
          yards. But a yard is a volume, and what you actually care about is area: how much
          patio, driveway, or sidewalk does that volume become at your slab thickness?
        </p>
        <p>
          The short answer: <strong>one cubic yard covers 81 square feet at 4 inches thick</strong>.
          That single number answers most residential questions, and the table below extends it
          to every common thickness. The math is simple division — a yard is 27 cubic feet, and
          you divide by the thickness in feet — but getting it wrong means a short load or a
          wasted half-yard, so it is worth seeing the numbers laid out.
        </p>

        <h2 id="section-1">Coverage per cubic yard by thickness</h2>
        <table>
          <thead>
            <tr>
              <th>Slab thickness</th>
              <th>Square feet per yard</th>
              <th>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 in</td>
              <td>108 sq ft</td>
              <td>Thin overlays, mudjacking (rare for new slabs)</td>
            </tr>
            <tr>
              <td>4 in</td>
              <td>81 sq ft</td>
              <td>Patios, walkways, sidewalks, shed pads</td>
            </tr>
            <tr>
              <td>5 in</td>
              <td>65 sq ft</td>
              <td>Residential driveways, garage floors</td>
            </tr>
            <tr>
              <td>6 in</td>
              <td>54 sq ft</td>
              <td>RV pads, heavy loads, commercial work</td>
            </tr>
            <tr>
              <td>8 in</td>
              <td>41 sq ft</td>
              <td>Structural slabs, heavy commercial</td>
            </tr>
          </tbody>
        </table>
        <p>
          Each figure is 27 ÷ (thickness ÷ 12). At 5 inches: 27 ÷ 0.4167 = 64.8, rounded to 65.
          These are exact geometric coverage — always add 5–10% waste on top for the real order.
        </p>

        <h2 id="section-2">Common projects, translated to yards</h2>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Size &amp; thickness</th>
              <th>Yards (exact)</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small patio</td>
              <td>10 × 10 ft, 4 in</td>
              <td>1.23</td>
              <td>1.5 yd</td>
            </tr>
            <tr>
              <td>Walkway</td>
              <td>4 × 30 ft, 4 in</td>
              <td>1.48</td>
              <td>1.75 yd</td>
            </tr>
            <tr>
              <td>2-car driveway</td>
              <td>20 × 20 ft, 5 in</td>
              <td>6.17</td>
              <td>6.5 yd</td>
            </tr>
            <tr>
              <td>Garage floor</td>
              <td>20 × 24 ft, 5 in</td>
              <td>7.41</td>
              <td>8 yd</td>
            </tr>
            <tr>
              <td>Shed pad</td>
              <td>8 × 10 ft, 4 in</td>
              <td>0.99</td>
              <td>1.25 yd</td>
            </tr>
          </tbody>
        </table>
        <p>
          The &ldquo;order&rdquo; column adds roughly 5–10% waste and rounds up to the nearest
          quarter-yard, which is how ready-mix is billed. Check any of these against our{' '}
          <Link href="/tools/concrete-calculator/">concrete calculator</Link> — same math, your
          exact dimensions.
        </p>

        <h2 id="section-3">What a yard costs in 2026</h2>
        <p>
          2026 pricing guides put standard residential ready-mix at roughly{' '}
          <strong>$125–$180 per cubic yard delivered</strong> (allbetterapp.com: $125–$195;
          buildestimatory.com: $125–$160; metalamericaconcrete.com: $120–$165). Treat these as
          planning ranges — your county, the mix design, and diesel prices move the real number.
          Three things that consistently surprise first-time buyers:
        </p>
        <ul>
          <li>
            <strong>Short-load fees.</strong> Order under the supplier&rsquo;s truck minimum
            (often 4–5 yards) and expect roughly $30–$60 extra <em>per yard</em>. A 1-yard order
            can cost nearly double the per-yard rate.
          </li>
          <li>
            <strong>Strength upgrades are cheap.</strong> Going from 3,000 to 4,000 PSI typically
            adds $10–$25 per yard — trivial against the total, and the right call for driveways.
          </li>
          <li>
            <strong>Delivery extras add up.</strong> Saturday delivery, long chute runs, pump
            trucks, and wait time are all separate line items. Ask for the all-in price, not the
            per-yard price.
          </li>
        </ul>

        <Callout variant="limitation">
          <p>
            Coverage figures here are geometric — they assume a perfectly uniform slab. Real
            subgrades vary, forms flex, and edges get thickened. That is what the waste
            allowance is for: 5% on a well-prepared site, 10% on rough ground. Prices are 2026
            US ranges from published guides, labeled as estimates — get a local quote before
            budgeting.
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
            <Link href="/tools/concrete-calculator/">Concrete calculator</Link> — exact yards for
            your slab dimensions
          </li>
          <li>
            <Link href="/tools/concrete-bag-calculator/">Concrete bag calculator</Link> — when the
            job is too small for a truck
          </li>
          <li>
            <Link href="/guides/quikrete-vs-ready-mix/">Quikrete vs. ready-mix</Link> — the full
            cost break-even
          </li>
          <li>
            <Link href="/guides/how-thick-should-concrete-slab-be/">
              How thick should a concrete slab be?
            </Link>
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
