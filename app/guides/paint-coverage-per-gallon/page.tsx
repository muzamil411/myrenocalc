import PageShell from '@/components/PageShell'
import Link from 'next/link'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Paint Coverage Per Gallon by Type',
  description:
    'Interior latex covers about 350 sq ft per gallon per coat, but primer, exterior paint, and textured finishes differ — full coverage table with sources cited.',
  path: '/guides/paint-coverage-per-gallon/',
})

const faqs = [
  {
    question: 'Why does my paint cover less than the label says?',
    answer:
      'Label coverage rates are measured on smooth, sealed test panels under ideal conditions. Real walls are porous, textured, or previously unpainted, and rollers and sprayers apply paint at different film thicknesses — all of which pull real-world coverage below the printed number. This is why estimators use 350 square feet per gallon instead of the top of the 350-400 range.',
  },
  {
    question: 'Does primer cover as much as paint?',
    answer:
      'Roughly. The KILZ PVA Drywall Primer technical data sheet lists 300-400 square feet per gallon on new drywall, and 200-300 square feet per gallon on rough surfaces — essentially the same band as finish paint, slightly lower on porous or rough material.',
  },
  {
    question: 'Does sprayed paint cover more or less than rolled paint?',
    answer:
      'Sprayers lay paint down fast but lose some to overspray, and they tend to apply a thinner film per pass, so you may need an extra pass to build the same coverage a roller gives in one. Treat the coverage table as a planning figure either way and check the product data sheet for the specific product.',
  },
  {
    question: 'How much does textured paint or a texture additive change coverage?',
    answer:
      'Heavily textured finishes are listed at 150-250 square feet per gallon by cypaint.com — roughly half the coverage of smooth interior latex. Even light orange-peel or knockdown texture on otherwise normal walls adds about 25% more paint usage (estimate).',
  },
]

export default function PaintCoveragePerGallonPage() {
  return (
    <PageShell title={"Paint Coverage Per Gallon by Type"} path="/guides/paint-coverage-per-gallon/" category="Paint" updated="2026-10-13" sections={[{"id":"section-1","title":"Coverage table by paint type"},{"id":"section-2","title":"What the coverage number assumes"},{"id":"section-3","title":"Four factors that change your real coverage"},{"id":"section-4","title":"How to read a product data sheet"},{"id":"section-5","title":"Why two brands' 350 aren't equal"},{"id":"section-6","title":"How to use these numbers"},{"id":"section-7","title":"Frequently asked questions"},{"id":"section-8","title":"Related"}]}>
      <h1 className="text-4xl font-extrabold text-navy-900">
        Paint Coverage Per Gallon by Type
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />

      <div className="article mt-6">
        <p>
          <strong>Paint coverage</strong> is the wall area one gallon covers in one coat, measured
          in square feet per gallon. The headline number everyone uses — <strong>350 sq ft per
          gallon</strong> — is the rule of thumb for standard interior latex on previously
          painted walls. But primer, exterior paint, semi-gloss, and textured finishes all live
          in different bands, and using the wrong rate is the most common reason paint
          estimates come up short. Every rate below is sourced; the per-texture splits are
          labeled estimates.
        </p>

        <h2 id="section-1">Coverage table by paint type</h2>
        <table>
          <thead>
            <tr>
              <th>Paint type</th>
              <th>Coverage (sq ft/gal)</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Interior flat latex</td>
              <td>350&ndash;400</td>
              <td>Sherwin-Williams Duration Home Interior Latex product data sheet</td>
            </tr>
            <tr>
              <td>Interior eggshell / satin latex</td>
              <td>350&ndash;400</td>
              <td>Sherwin-Williams Duration Home Interior Latex product data sheet</td>
            </tr>
            <tr>
              <td>Interior semi-gloss</td>
              <td>~300&ndash;350</td>
              <td>cypaint.com coverage guide</td>
            </tr>
            <tr>
              <td>Primer (new drywall)</td>
              <td>300&ndash;400</td>
              <td>KILZ PVA Drywall Primer technical data sheet</td>
            </tr>
            <tr>
              <td>Primer (rough surfaces)</td>
              <td>200&ndash;300</td>
              <td>KILZ technical data sheet</td>
            </tr>
            <tr>
              <td>Exterior siding paint</td>
              <td>250&ndash;350</td>
              <td>cypaint.com coverage guide</td>
            </tr>
            <tr>
              <td>Exterior, smooth siding (estimate)</td>
              <td>~350</td>
              <td>Estimate from the cypaint.com 250&ndash;350 range</td>
            </tr>
            <tr>
              <td>Exterior, textured siding (estimate)</td>
              <td>~300</td>
              <td>Estimate from the cypaint.com 250&ndash;350 range</td>
            </tr>
            <tr>
              <td>Exterior, brick / stucco (estimate)</td>
              <td>~250</td>
              <td>Estimate from the cypaint.com 250&ndash;350 range</td>
            </tr>
            <tr>
              <td>Textured finishes</td>
              <td>150&ndash;250</td>
              <td>cypaint.com coverage guide</td>
            </tr>
          </tbody>
        </table>

        <Callout variant="method">
          <p>
            <strong>Why 350, not 400?</strong> The Sherwin-Williams Duration Home Interior Latex
            product data sheet lists 350-400 sq ft/gal. Estimators use the bottom of the range —
            350 — because real walls are never the smooth, sealed test panels the lab rate is
            measured on. Using 400 is how you end up a half-gallon short on a Sunday when the
            store is closed.
          </p>
        </Callout>

        <h2 id="section-2">What the coverage number assumes</h2>
        <p>
          Every figure in the table is a <strong>per-coat</strong> rate on a properly prepared
          surface. Two coats doubles the paint — the 350 figure does not mean one gallon does
          700 sq ft of wall. And &ldquo;properly prepared&rdquo; is doing real work in that
          sentence: the manufacturer rates are measured on smooth, sealed panels. Anything that
          deviates from that panel pulls your actual coverage down.
        </p>

        <h2 id="section-3">Four factors that change your real coverage</h2>
        <h3>1. Porosity of the surface</h3>
        <p>
          New drywall, bare wood, and fresh plaster are thirsty — they soak the first coat into
          the surface instead of leaving it as a film. That is why the KILZ technical data sheet
          drops from 300-400 sq ft/gal on drywall to 200-300 on rough surfaces. A coat of primer
          seals the surface so the finish coats behave closer to the label rate, which is why
          primer pays for itself on new drywall.
        </p>
        <h3>2. Texture</h3>
        <p>
          Texture adds surface area the square-footage math doesn&apos;t see. A popcorn ceiling can
          use about 25% more paint than a flat one (estimate), and heavily textured finishes
          sit at 150-250 sq ft/gal per cypaint.com — roughly half of smooth latex. Light
          orange-peel or knockdown texture falls in between; budget the extra 25% and you will
          rarely be caught short.
        </p>
        <h3>3. Application method</h3>
        <p>
          Brushes, rollers, and sprayers all hit the label rate differently in practice.
          Sprayers are fastest but lose paint to overspray and tend to lay a thinner film per
          pass, so large spray jobs often need an extra pass to build full coverage. Rollers are
          the middle ground most DIY estimates assume. There is no universal multiplier — check
          the product data sheet and, for big jobs, do a test section and measure what you
          actually used.
        </p>
        <h3>4. Color change</h3>
        <p>
          Coverage rates assume the new color can hide the old one in the stated number of
          coats. A drastic dark-to-light change breaks that assumption: the old color ghosts
          through, and you end up needing primer plus a full extra finish coat. The paint
          quantity math stays the same — you just run it with an extra coat, which is exactly
          what our <Link href="/tools/interior-paint-calculator/">interior paint
          calculator</Link> lets you do.
        </p>

        <h2 id="section-4">How to read a product data sheet</h2>
        <p>
          The coverage table above gives you planning figures, but the authoritative number
          for the exact can in your hand is always the manufacturer&apos;s product data sheet
          (PDS) or technical data sheet (TDS) — usually a PDF on the brand&apos;s website. Here&apos;s
          what to look for:
        </p>
        <ul>
          <li>
            <strong>Spread rate / coverage:</strong> given as a range (e.g. 350-400 sq ft/gal).
            Plan with the bottom of the range.
          </li>
          <li>
            <strong>Recommended film thickness:</strong> sometimes listed in mils (thousandths
            of an inch) wet and dry. The coverage rate assumes you apply the paint this thick
            — thin it or stretch it and coverage per coat drops.
          </li>
          <li>
            <strong>Surface preparation:</strong> the data sheet states what the rate assumes
            (e.g. previously painted, primed, or sealed surfaces). New drywall or bare wood
            without primer won&apos;t hit the printed number.
          </li>
          <li>
            <strong>Recoat window:</strong> how long to wait between coats. It doesn&apos;t change
            the quantity, but rushing it ruins the first coat&apos;s film and wastes paint.
          </li>
        </ul>

        <h2 id="section-5">Why two brands&apos; &ldquo;350&rdquo; aren&apos;t equal</h2>
        <p>
          Two paints can both claim 350 sq ft/gal yet behave differently on your wall. The
          printed spread rate is about <em>area covered</em>, not about <em>hide</em> — how
          well one coat obscures what&apos;s underneath. Hide comes from pigment and solids
          content, which is why premium paints ($55-85/gal in 2026) typically cover a color
          change in two coats while budget paints ($20-30/gal) need three. The data sheet
          sometimes lists &ldquo;solids by volume&rdquo; — higher generally means better hide
          and a thicker dry film per coat.
        </p>
        <p>
          Practical takeaway: when comparing two paints at the same spread rate, the one with
          better hide needs fewer coats, and coats — not the per-gallon rate — are what
          determine your total gallons. That&apos;s also why the cheapest gallon is rarely the
          cheapest project, as our <Link href="/guides/paint-cost-per-square-foot/">2026 cost
          breakdown</Link> shows.
        </p>

        <h2 id="section-6">How to use these numbers</h2>
        <p>
          The formula is always the same: <strong>(area &times; coats) &divide; coverage per
          gallon, rounded up to the nearest quarter gallon</strong>. Pick the coverage rate for
          your surface from the table — 350 for standard interior walls, 300 for new drywall
          primer, 250 for brick — and run the math. Worked examples: a{' '}
          <Link href="/guides/how-much-paint-for-12x12-room/">12x12 room</Link>,{' '}
          <Link href="/guides/exterior-paint-for-2000-sq-ft-house/">a 2,000 sq ft house
          exterior</Link>, and a room measured from scratch in our{' '}
          <Link href="/guides/how-to-measure-room-for-paint/">measuring guide</Link>.
        </p>

        <h2 id="section-7">Frequently asked questions</h2>
        <Faq items={faqs} />

        <h2 id="section-8">Related</h2>
        <ul>
          <li>
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> —
            plug in your room and get gallons instantly.
          </li>
          <li>
            <Link href="/tools/exterior-paint-calculator/">Exterior paint calculator</Link> —
            uses the exterior coverage rates from this table.
          </li>
          <li>
            <Link href="/guides/how-many-coats-of-paint/">How many coats of paint do walls
            need?</Link> — because coverage is per coat.
          </li>
          <li>
            <Link href="/guides/paint-quantity-mistakes/">7 paint quantity mistakes that waste
            money</Link> — the classic ways these rates get misapplied.
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
