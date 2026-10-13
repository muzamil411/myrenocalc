import PageShell from '@/components/PageShell'
import Link from 'next/link'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'How Much Paint for a 12x12 Room? (Exact Answer)',
  description:
    'How much paint for a 12x12 room? Exactly 2 gallons for two coats on the walls — with the math shown, a room-size table, plus ceiling and primer notes.',
  path: '/guides/how-much-paint-for-12x12-room/',
})

const faqs = [
  {
    question: 'Does the 2 gallons include the ceiling?',
    answer:
      'No. The 2-gallon figure covers the walls only. A 12x12 ceiling is 144 square feet; two coats at 350 square feet per gallon needs 144 times 2 divided by 350, or 0.82 gallons, which rounds up to 1 gallon of ceiling paint.',
  },
  {
    question: 'What if my 12x12 room has 9-foot ceilings?',
    answer:
      'Taller ceilings add wall area. With 9-foot ceilings the walls total 397 square feet after the door and window allowances, and two coats at 350 square feet per gallon needs 2.27 gallons, which rounds up to 2.5 gallons.',
  },
  {
    question: 'Do I need primer for a 12x12 room?',
    answer:
      'If the walls are new drywall, are being changed from a dark color to a light one, or have patched areas, yes. New drywall covers about 300 square feet per gallon of primer per the KILZ PVA Drywall Primer technical data sheet, so 349 square feet needs about 1.16 gallons, rounded up to 1.25 gallons.',
  },
  {
    question: 'Can I get away with just 1 gallon?',
    answer:
      'One gallon covers roughly 350 square feet for a single coat, and a 12x12 room has 349 square feet of wall. So one gallon gives you exactly one coat — fine only for a same-color refresh in good condition. For a color change or new drywall, plan on two coats and buy 2 gallons.',
  },
  {
    question: 'Should I buy exactly the calculated amount?',
    answer:
      'Buy the rounded-up amount plus one extra quart for touch-ups. Paint from a different batch can vary slightly in tint, so leftover paint from the same cans is the only reliable way to touch up scuffs and nail holes later.',
  },
]

export default function HowMuchPaint12x12Page() {
  return (
    <PageShell title={"How Much Paint for a 12x12 Room? (Exact Answer)"} path="/guides/how-much-paint-for-12x12-room/" category="Paint" updated="2026-10-13" sections={[{"id":"section-1","title":"The 12x12 calculation, step by step"},{"id":"section-2","title":"Paint needed by room size (8-ft ceilings, 1 door + 1 window, 2 coats)"},{"id":"section-3","title":"Don't forget the ceiling"},{"id":"section-4","title":"Primer: when you need it and how much"},{"id":"section-5","title":"Buy an extra quart beyond the calculation"},{"id":"section-6","title":"What changes the answer"},{"id":"section-7","title":"What if only one wall is an accent color?"},{"id":"section-8","title":"Does sheen change the quantity?"},{"id":"section-9","title":"Frequently asked questions"},{"id":"section-10","title":"Related"}]}>
      <h1 className="text-4xl font-extrabold text-navy-900">
        How Much Paint for a 12x12 Room? (Exact Answer)
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />

      <div className="article mt-6">
        <p>
          <strong>A 12x12 room with standard 8-foot ceilings needs 2 gallons of wall paint for
          two coats</strong> — assuming one standard 3x7 door and one window, painted with
          interior latex at the industry-standard coverage of 350 square feet per gallon per
          coat. That is the short answer. The rest of this guide shows the math, a table for
          other common room sizes, and what to add for the ceiling and primer.
        </p>

        <Callout variant="method">
          <p>
            <strong>Wall area</strong> = 2 &times; ceiling height &times; (length + width) &minus;
            door allowance (20 sq ft) &minus; window allowance (15 sq ft).
          </p>
          <p>
            <strong>Gallons</strong> = wall area &times; coats &divide; 350, rounded <em>up</em>{' '}
            to the nearest quarter gallon. The 350 sq ft/gal figure comes from the
            Sherwin-Williams Duration Home Interior Latex product data sheet, which lists 350-400
            sq ft/gal, and 350 is the widely used rule of thumb from the Hamilton &amp; Hamilton
            estimating guide. Door and window allowances of 20 and 15 sq ft come from the same
            Hamilton &amp; Hamilton guide.
          </p>
        </Callout>

        <h2 id="section-1">The 12x12 calculation, step by step</h2>
        <ol>
          <li>
            <strong>Wall area:</strong> 2 &times; 8 &times; (12 + 12) = 384 sq ft of gross wall.
          </li>
          <li>
            <strong>Subtract openings:</strong> 384 &minus; 20 (door) &minus; 15 (window) ={' '}
            <strong>349 sq ft</strong> of paintable wall.
          </li>
          <li>
            <strong>Two coats:</strong> 349 &times; 2 = 698 sq ft of coverage needed.
          </li>
          <li>
            <strong>Gallons:</strong> 698 &divide; 350 = 1.99 gallons &rarr; round up to{' '}
            <strong>2 gallons</strong>.
          </li>
        </ol>
        <p>
          Rounding up to the nearest quarter gallon (0.25 gal) is standard estimating practice,
          again per the Hamilton &amp; Hamilton guide — it builds in a small buffer for roller
          absorption, cut-in waste, and the paint left in the tray.
        </p>

        <h2 id="section-2">Paint needed by room size (8-ft ceilings, 1 door + 1 window, 2 coats)</h2>
        <table>
          <thead>
            <tr>
              <th>Room size</th>
              <th>Wall area (sq ft)</th>
              <th>Raw gallons</th>
              <th>Buy (rounded up)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 &times; 10</td>
              <td>285</td>
              <td>1.63</td>
              <td><strong>1.75 gal</strong></td>
            </tr>
            <tr>
              <td>12 &times; 12</td>
              <td>349</td>
              <td>1.99</td>
              <td><strong>2 gal</strong></td>
            </tr>
            <tr>
              <td>12 &times; 15</td>
              <td>397</td>
              <td>2.27</td>
              <td><strong>2.5 gal</strong></td>
            </tr>
            <tr>
              <td>15 &times; 20</td>
              <td>525</td>
              <td>3.00</td>
              <td><strong>3 gal</strong></td>
            </tr>
            <tr>
              <td>20 &times; 20</td>
              <td>605</td>
              <td>3.46</td>
              <td><strong>3.5 gal</strong></td>
            </tr>
          </tbody>
        </table>
        <p>
          You can verify any row: wall area = 2 &times; 8 &times; (L + W) &minus; 35, then
          &times; 2 &divide; 350, rounded up to the nearest 0.25. For example, the 15 &times; 20
          room: 2 &times; 8 &times; 35 = 560, minus 35 = 525 sq ft; 525 &times; 2 &divide; 350 =
          exactly 3.0 gallons. For a room that is not on this list, use our{' '}
          <Link href="/tools/interior-paint-calculator/">interior paint calculator</Link> or
          follow the steps in our guide to{' '}
          <Link href="/guides/how-to-measure-room-for-paint/">measuring a room for paint</Link>.
        </p>

        <h2 id="section-3">Don&apos;t forget the ceiling</h2>
        <p>
          The table above is walls only. A 12x12 ceiling is 12 &times; 12 = 144 sq ft. Two coats
          at 350 sq ft/gal need 144 &times; 2 &divide; 350 = 0.82 gallons, which rounds up to{' '}
          <strong>1 gallon</strong> of flat ceiling paint. Buy it in flat white — ceilings are
          almost always painted flat so they don&apos;t reflect light unevenly.
        </p>
        <p>
          If your ceiling has popcorn or heavy texture, budget about 25% more paint than a flat
          ceiling (estimate — textured surfaces drink paint). For the 12x12 example: 144 &times;
          2 &times; 1.25 &divide; 350 = 1.03 gallons &rarr; round up to <strong>1.25
          gallons</strong>.
        </p>

        <h2 id="section-4">Primer: when you need it and how much</h2>
        <p>
          Previously painted walls in decent shape usually don&apos;t need primer — but three common
          situations do: new (unpainted) drywall, a dark-to-light color change, and patched or
          repaired areas. Primer coverage depends on the surface: the KILZ PVA Drywall Primer
          technical data sheet lists 300-400 sq ft/gal, and we use 300 for new drywall, 350 for
          previously painted walls, and 250 for bare wood (an estimate from the rough-surface
          range of 200-300 sq ft/gal in the KILZ data sheet).
        </p>
        <p>
          For our 12x12 room with new drywall: 349 &divide; 300 = 1.16 gallons &rarr; round up
          to <strong>1.25 gallons</strong> of primer. See our{' '}
          <Link href="/tools/primer-calculator/">primer calculator</Link> and the guide to{' '}
          <Link href="/guides/how-many-coats-of-paint/">how many coats of paint walls
          need</Link> for the full picture.
        </p>

        <h2 id="section-5">Buy an extra quart beyond the calculation</h2>
        <p>
          The round-up-to-the-nearest-quart rule already gives you a small buffer, but keep one
          extra quart of each wall color on hand for touch-ups. Scuffs, nail holes from hanging
          pictures, and kids&apos; fingerprints are inevitable, and paint mixed on a different day
          can be a slightly different tint. A quart costs a few dollars; repainting a whole wall
          to match costs far more. Store it sealed, at room temperature, and it will keep for
          years.
        </p>

        <h2 id="section-6">What changes the answer</h2>
        <ul>
          <li>
            <strong>9-foot ceilings:</strong> 2 &times; 9 &times; 24 &minus; 35 = 397 sq ft of
            wall &rarr; 397 &times; 2 &divide; 350 = 2.27 &rarr; <strong>2.5 gallons</strong>.
          </li>
          <li>
            <strong>Textured walls:</strong> knockdown or orange-peel texture adds roughly 25%
            more paint (estimate). 349 &times; 1.25 &times; 2 &divide; 350 = 2.49 &rarr;{' '}
            <strong>2.5 gallons</strong>.
          </li>
          <li>
            <strong>Extra doors or windows:</strong> a closet door or a second window subtracts
            another 20 or 15 sq ft of wall — measure each opening rather than assuming one of
            each.
          </li>
          <li>
            <strong>Dark-to-light color change:</strong> add a coat of primer (1.25 gal for this
            room) before the two finish coats.
          </li>
        </ul>

        <h2 id="section-7">What if only one wall is an accent color?</h2>
        <p>
          One 12-foot wall at 8-foot ceilings is 12 &times; 8 = 96 sq ft. If that wall has no
          door or window, two coats need 96 &times; 2 &divide; 350 = 0.55 gallons, which rounds
          up to 0.75 gallons — in practice, most buyers just get 1 gallon since it&apos;s the
          standard can size. If the accent wall has a window, subtract 15 sq ft first: 81
          &times; 2 &divide; 350 = 0.46 &rarr; 0.5 gallons. The other three walls use the
          normal calculation minus the accent wall&apos;s area.
        </p>

        <h2 id="section-8">Does sheen change the quantity?</h2>
        <p>
          Slightly. The coverage table in our{' '}
          <Link href="/guides/paint-coverage-per-gallon/">paint coverage guide</Link> lists
          interior semi-gloss at ~300-350 sq ft/gal (per cypaint.com), a touch lower than flat
          or eggshell at 350-400. Using the midpoint of 325: 349 &times; 2 &divide; 325 = 2.15
          &rarr; <strong>2.25 gallons</strong> instead of 2. In practice, most people paint
          walls in flat/eggshell/satin and reserve semi-gloss for trim — where you buy it
          separately by the quart anyway.
        </p>

        <h2 id="section-9">Frequently asked questions</h2>
        <Faq items={faqs} />

        <h2 id="section-10">Related</h2>
        <ul>
          <li>
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> —
            get an exact quantity for your own room dimensions.
          </li>
          <li>
            <Link href="/tools/primer-calculator/">Primer calculator</Link> — how much primer
            new drywall or a color change needs.
          </li>
          <li>
            <Link href="/guides/how-to-measure-room-for-paint/">How to measure a room for
            paint</Link> — step-by-step measuring with a worked example.
          </li>
          <li>
            <Link href="/guides/how-many-coats-of-paint/">How many coats of paint do walls
            need?</Link> — when one coat is enough and when it isn&apos;t.
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
