import PageShell from '@/components/PageShell'
import Link from 'next/link'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'How to Measure a Room for Paint (Step by Step)',
  description:
    'Measure a room for paint in 8 steps: wall lengths, ceiling height, door and window allowances, ceilings, and trim — with a worked 12x14 example included.',
  path: '/guides/how-to-measure-room-for-paint/',
})

const faqs = [
  {
    question: 'How many square feet is a door or window when measuring for paint?',
    answer:
      'The Hamilton and Hamilton estimating guide uses 20 square feet per door and 15 square feet per window. Some professional estimators use 21 and 16 square feet per csgnetwork.com. Either convention works — pick one and use it consistently across the whole room.',
  },
  {
    question: 'Do I measure the ceiling separately?',
    answer:
      'Yes. The ceiling is simply length times width, and it uses flat ceiling paint rather than wall paint, so keep it as its own line item. A 12x14 ceiling is 168 square feet, which needs about 1 gallon for two coats at 350 square feet per gallon.',
  },
  {
    question: 'Should I subtract baseboards and trim from the wall area?',
    answer:
      'No. Baseboards, crown molding, and window trim are usually painted with separate trim paint (often semi-gloss), but they sit on the wall surface rather than replacing wall area in any meaningful amount. Measure the walls in full and estimate trim paint separately.',
  },
  {
    question: 'What about closets and alcoves?',
    answer:
      'Measure each closet and alcove separately and add its wall area to the total. Decide up front whether the inside of the closet gets painted — if it does, include its walls and ceiling; if not, treat the closet door as a normal door opening and subtract it.',
  },
  {
    question: 'Can I just measure the floor and multiply?',
    answer:
      'No — floor area tells you nothing about wall height. A 12x14 room with 8-foot ceilings has 416 square feet of gross wall; with 10-foot ceilings it has 520. Always measure the actual ceiling height.',
  },
]

export default function HowToMeasureRoomForPaintPage() {
  return (
    <PageShell title={"How to Measure a Room for Paint (Step by Step)"} path="/guides/how-to-measure-room-for-paint/" category="Paint" updated="2026-10-13" sections={[{"id":"section-1","title":"Tools you need"},{"id":"section-2","title":"Step 1 — Sketch the room"},{"id":"section-3","title":"Step 2 — Measure each wall's length"},{"id":"section-4","title":"Step 3 — Measure the ceiling height"},{"id":"section-5","title":"Step 4 — Compute gross wall area"},{"id":"section-6","title":"Step 5 — Subtract doors and windows"},{"id":"section-7","title":"Step 6 — Handle closets and alcoves"},{"id":"section-8","title":"Step 7 — Measure the ceiling separately"},{"id":"section-9","title":"Step 8 — Note the trim, don't subtract it"},{"id":"section-10","title":"Worked example: a 12x14 room"},{"id":"section-11","title":"Measuring tricky rooms"},{"id":"section-12","title":"A simple recording sheet"},{"id":"section-13","title":"Frequently asked questions"},{"id":"section-14","title":"Related"}]}>
      <h1 className="text-4xl font-extrabold text-navy-900">
        How to Measure a Room for Paint (Step by Step)
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />

      <div className="article mt-6">
        <p>
          Measuring a room for paint takes about ten minutes and is the difference between
          buying the right amount and making a second trip to the store. The goal is one number:
          <strong> total paintable wall area in square feet</strong>, with the ceiling and trim
          tracked as separate line items. Here is the full process, followed by a worked
          example.
        </p>

        <h2 id="section-1">Tools you need</h2>
        <ul>
          <li>Tape measure (25 ft is plenty) or a laser measure</li>
          <li>Notebook or phone to record each measurement</li>
          <li>Our <Link href="/tools/interior-paint-calculator/">interior paint
          calculator</Link> for the final math — or a calculator app</li>
        </ul>

        <h2 id="section-2">Step 1 — Sketch the room</h2>
        <p>
          Draw a rough rectangle and label the four walls A, B, C, D. If the room has an alcove,
          a bay window, or an L-shape, sketch those too — you will measure each wall segment
          individually rather than trying to force the room into one rectangle.
        </p>

        <h2 id="section-3">Step 2 — Measure each wall&apos;s length</h2>
        <p>
          Measure every wall at floor level, wall to wall, and write each one down. Measure all
          four walls even if the room looks square — in older homes opposite walls commonly
          differ by an inch or two, and those inches add up across a whole house. For alcoves
          and bump-outs, measure each segment.
        </p>

        <h2 id="section-4">Step 3 — Measure the ceiling height</h2>
        <p>
          Measure floor to ceiling in two or three spots. Standard is 8 feet, but many homes
          have 9- or 10-foot ceilings, and height is the single biggest lever on wall area: a
          12x14 room has 416 sq ft of gross wall at 8 feet but 520 sq ft at 10 feet. Use the
          actual measurement, not the assumed one.
        </p>

        <h2 id="section-5">Step 4 — Compute gross wall area</h2>
        <p>
          For a rectangular room: <strong>2 &times; height &times; (length + width)</strong>.
          For irregular rooms, compute each wall segment (length &times; height) and add them
          up. This is the total wall surface before subtracting anything you won&apos;t paint.
        </p>

        <h2 id="section-6">Step 5 — Subtract doors and windows</h2>
        <p>
          Count every door and window, then subtract the standard allowances: <strong>20 sq ft
          per door and 15 sq ft per window</strong>, per the Hamilton &amp; Hamilton guide
          &ldquo;Estimating How Much Paint to Buy&rdquo; (some pros use 21 and 16 sq ft per
          csgnetwork.com). A standard 3x7 door is actually 21 sq ft and a typical window about
          15 — the allowances are deliberately close to real sizes, not guesses.
        </p>
        <Callout variant="note">
          <p>
            Count <em>every</em> opening: closet doors, pantry doors, and pass-throughs all
            subtract wall area. The most common measuring mistake is counting one door and one
            window when the room actually has two of each.
          </p>
        </Callout>

        <h2 id="section-7">Step 6 — Handle closets and alcoves</h2>
        <p>
          Measure each closet and alcove separately and add its wall area to the total from
          Step 4. Decide before you buy paint whether closet interiors get painted: if yes,
          include their walls and ceiling in your totals; if no, treat each closet door as a
          standard door opening and subtract 20 sq ft.
        </p>

        <h2 id="section-8">Step 7 — Measure the ceiling separately</h2>
        <p>
          Ceiling area is simply <strong>length &times; width</strong> (plus any alcove
          ceilings). Keep it as its own line item because ceilings use flat ceiling paint, not
          wall paint, and the quantity math runs separately: ceiling area &times; coats &divide;
          350, rounded up to the nearest quarter gallon.
        </p>

        <h2 id="section-9">Step 8 — Note the trim, don&apos;t subtract it</h2>
        <p>
          Baseboards, crown molding, door frames, and window trim get painted — usually with a
          separate semi-gloss trim paint — but they don&apos;t meaningfully reduce wall area, so
          don&apos;t subtract them. Estimate trim paint separately: for most rooms, a quart of trim
          paint covers the baseboards and door/window casings (estimate — trim profiles vary
          widely).
        </p>

        <h2 id="section-10">Worked example: a 12x14 room</h2>
        <ol>
          <li>
            <strong>Walls:</strong> two walls at 12 ft, two at 14 ft. Ceiling height 8 ft.
          </li>
          <li>
            <strong>Gross wall area:</strong> 2 &times; 8 &times; (12 + 14) = 416 sq ft.
          </li>
          <li>
            <strong>Openings:</strong> 1 door (20) + 2 windows (30) = 50 sq ft.
          </li>
          <li>
            <strong>Paintable wall:</strong> 416 &minus; 50 = <strong>366 sq ft</strong>.
          </li>
          <li>
            <strong>Wall paint, 2 coats:</strong> 366 &times; 2 &divide; 350 = 2.09 &rarr; round
            up to <strong>2.25 gallons</strong>.
          </li>
          <li>
            <strong>Ceiling:</strong> 12 &times; 14 = 168 sq ft; 168 &times; 2 &divide; 350 =
            0.96 &rarr; <strong>1 gallon</strong> of flat ceiling paint.
          </li>
        </ol>
        <p>
          Compare with the <Link href="/guides/how-much-paint-for-12x12-room/">12x12 room
          example</Link> (2 gallons for walls) to see how 2 extra feet of length adds a quarter
          gallon. Once you have your own measurements, run them through the{' '}
          <Link href="/tools/interior-paint-calculator/">interior paint calculator</Link>.
        </p>

        <h2 id="section-11">Measuring tricky rooms</h2>
        <h3>L-shaped rooms</h3>
        <p>
          Split the L into two rectangles on your sketch and measure each rectangle&apos;s walls
          separately, then add the wall areas together. The inside corner where the two
          rectangles meet has no wall — don&apos;t double-count it. Openings get subtracted once,
          wherever they actually are.
        </p>
        <h3>Vaulted or cathedral ceilings</h3>
        <p>
          The two end walls are rectangles topped with triangles. Measure the wall up to
          where the slope starts (height H1), then measure the rise from there to the peak
          (H2) and the wall&apos;s width (W). Wall area = W &times; H1 + &frac12; &times; W
          &times; H2. The sloped ceiling itself is two rectangles — measure each slope&apos;s
          width and length separately, since sloped drywall usually gets painted with the
          ceiling paint.
        </p>
        <h3>Stairwells and two-story foyers</h3>
        <p>
          Measure each wall in vertical sections you can safely reach, or measure the height
          once with a laser measure from the floor. Tall walls mean tall ladders — if you&apos;re
          not comfortable on an extension ladder, this is the room to get a pro quote for,
          because the labor (not the paint) is what you&apos;re really buying.
        </p>

        <h2 id="section-12">A simple recording sheet</h2>
        <p>
          Copy this into your notebook before you start measuring — it keeps the openings
          from getting lost:
        </p>
        <ul>
          <li>Wall A: ____ ft &times; ____ ft high = ____ sq ft</li>
          <li>Wall B: ____ ft &times; ____ ft high = ____ sq ft</li>
          <li>Wall C: ____ ft &times; ____ ft high = ____ sq ft</li>
          <li>Wall D: ____ ft &times; ____ ft high = ____ sq ft</li>
          <li>Minus doors: ____ &times; 20 = ____ sq ft</li>
          <li>Minus windows: ____ &times; 15 = ____ sq ft</li>
          <li><strong>Paintable wall total: ____ sq ft</strong></li>
          <li>Ceiling: ____ ft &times; ____ ft = ____ sq ft (separate paint)</li>
        </ul>
        <p>
          Then: wall total &times; coats &divide; 350, rounded up to the nearest quarter
          gallon — or skip the arithmetic and enter the totals in the{' '}
          <Link href="/tools/interior-paint-calculator/">interior paint calculator</Link>.
        </p>

        <h2 id="section-13">Frequently asked questions</h2>
        <Faq items={faqs} />

        <h2 id="section-14">Related</h2>
        <ul>
          <li>
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> —
            turn your measurements into gallons.
          </li>
          <li>
            <Link href="/guides/paint-coverage-per-gallon/">Paint coverage per gallon by
            type</Link> — which coverage rate to use for your surface.
          </li>
          <li>
            <Link href="/guides/how-much-paint-for-12x12-room/">How much paint for a 12x12
            room?</Link> — a complete worked example.
          </li>
          <li>
            <Link href="/guides/how-many-coats-of-paint/">How many coats of paint do walls
            need?</Link> — how many coats to plan the math around.
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
