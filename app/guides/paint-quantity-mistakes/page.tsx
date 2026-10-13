import Link from 'next/link'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'

export const metadata = buildMetadata({
  title: '7 Paint Quantity Mistakes That Waste Money',
  description:
    'Seven paint quantity mistakes that waste money — from forgetting the second coat to one coverage rate for textured walls — and how to avoid each one.',
  path: '/guides/paint-quantity-mistakes/',
})

const faqs = [
  {
    question: 'What is the most common paint quantity mistake?',
    answer:
      'Forgetting the second coat in the math. Coverage rates like 350 square feet per gallon are per-coat figures, so a 349-square-foot room needs 2 gallons for two coats, not 1. Buying half the paint you need means a second trip and a visible lap line where the new batch meets the old.',
  },
  {
    question: 'How much extra paint should I buy beyond the calculation?',
    answer:
      'Round up to the nearest quarter gallon as standard practice, then keep one extra quart of each wall color for touch-ups. Paint mixed on a different day can vary slightly in tint, so leftover paint from the original cans is the only reliable touch-up supply.',
  },
  {
    question: 'Does cheap paint really end up costing more?',
    answer:
      'It can. Budget paint at $20-30 per gallon in 2026 often needs three coats on a color change where mid-range paint at $35-50 needs two — and three coats of cheap paint plus the extra labor frequently exceeds two coats of mid-range paint. Compare cost per finished square foot, not per gallon.',
  },
  {
    question: 'Do I need a different coverage rate for textured walls?',
    answer:
      'Yes. Smooth interior latex covers about 350 square feet per gallon, but heavily textured finishes are rated 150-250 square feet per gallon per cypaint.com, and even light knockdown or orange-peel texture adds about 25 percent more paint usage (estimate). Using the smooth-wall rate on textured walls is a classic way to run short.',
  },
]

export default function PaintQuantityMistakesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy-900">
        7 Paint Quantity Mistakes That Waste Money
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />

      <div className="article mt-6">
        <p>
          Paint is cheap compared to labor — but buying the wrong <em>amount</em> wastes both.
          Too little means a mid-project store run and visible lap lines where batches meet;
          too much means gallons of custom-tinted paint you can&apos;t return. These are the seven
          mistakes we see most often, each with what it costs and how to avoid it.
        </p>

        <h2>Mistake 1 — Forgetting the second coat in the math</h2>
        <p>
          <strong>What happens:</strong> coverage rates (350 sq ft/gal) are per-coat figures.
          People divide their wall area by 350 once and buy that — exactly half the paint they
          need for the standard two coats.
        </p>
        <p>
          <strong>What it costs:</strong> a second trip to the store mid-project, and often a
          visible difference where the new batch meets paint that has already started curing.
          For a <Link href="/guides/how-much-paint-for-12x12-room/">12x12 room</Link>, it&apos;s the
          difference between buying 1 gallon and needing 2.
        </p>
        <p>
          <strong>How to avoid it:</strong> always multiply wall area by your planned number
          of coats <em>before</em> dividing by the coverage rate. Our{' '}
          <Link href="/tools/interior-paint-calculator/">interior paint calculator</Link> does
          this automatically — and our <Link href="/guides/how-many-coats-of-paint/">coats
          guide</Link> helps you pick the right number.
        </p>

        <h2>Mistake 2 — Ignoring new-drywall porosity</h2>
        <p>
          <strong>What happens:</strong> bare drywall and joint compound soak up the first coat
          like a sponge. The mudded seams flash through as dull bands, and the finish coat
          goes on unevenly no matter how carefully you roll.
        </p>
        <p>
          <strong>What it costs:</strong> without primer you&apos;ll burn extra finish paint trying
          to build hide — often an entire extra coat of the expensive topcoat across the room.
        </p>
        <p>
          <strong>How to avoid it:</strong> prime new drywall first at 300 sq ft/gal (per the
          KILZ PVA Drywall Primer technical data sheet), then run two finish coats. Size it
          with our <Link href="/tools/primer-calculator/">primer calculator</Link>. Primer is
          cheaper per gallon than finish paint and exists precisely for this job.
        </p>

        <h2>Mistake 3 — Skipping primer on dark-to-light color changes</h2>
        <p>
          <strong>What happens:</strong> deep reds, navies, and dark greens ghost through light
          colors even after two finish coats, leaving a patchy, unprofessional result.
        </p>
        <p>
          <strong>What it costs:</strong> the &ldquo;saved&rdquo; primer gallon gets replaced
          by a third coat of finish paint at $35-85/gal (2026 prices per allbetterapp.com) —
          more expensive than the primer would have been, plus the extra labor of another full
          coat.
        </p>
        <p>
          <strong>How to avoid it:</strong> one coat of primer (tinted toward the new color if
          the store offers it), then two finish coats. Previously painted walls going
          light-to-dark or same-color usually don&apos;t need primer — reserve it for the drastic
          changes.
        </p>

        <h2>Mistake 4 — Buying the exact calculated amount with no buffer</h2>
        <p>
          <strong>What happens:</strong> the math says 1.99 gallons, you buy exactly 2 gallons,
          and then cut-in waste, roller absorption, and the paint left in the tray eat the
          margin. You run dry with half a wall left.
        </p>
        <p>
          <strong>What it costs:</strong> another store trip, and a fresh gallon that may be a
          hair off in tint from the first batch — visible on the wall in the right light.
        </p>
        <p>
          <strong>How to avoid it:</strong> round <em>up</em> to the nearest quarter gallon as
          standard estimating practice (per the Hamilton &amp; Hamilton guide), then keep one
          extra quart of each color for touch-ups. Leftover paint from the original batch is
          the only reliable touch-up supply.
        </p>

        <h2>Mistake 5 — Forgetting the ceiling</h2>
        <p>
          <strong>What happens:</strong> the wall math is perfect, and then you realize the
          ceiling needs paint too — in a different product (flat ceiling paint, not wall
          paint).
        </p>
        <p>
          <strong>What it costs:</strong> a 12x12 ceiling is 144 sq ft, needing a full extra
          gallon for two coats (144 &times; 2 &divide; 350 = 0.82 &rarr; 1 gal). Discovering
          this mid-project means another trip; discovering it after returning &ldquo;extra&rdquo;
          wall paint is worse.
        </p>
        <p>
          <strong>How to avoid it:</strong> measure the ceiling as length &times; width and
          keep it as a separate line item from the start — see Step 7 of our{' '}
          <Link href="/guides/how-to-measure-room-for-paint/">measuring guide</Link>. If the
          ceiling is popcorn or heavily textured, add about 25% more paint (estimate).
        </p>

        <h2>Mistake 6 — One coverage rate for every surface</h2>
        <p>
          <strong>What happens:</strong> the 350 sq ft/gal rule gets applied to textured walls,
          brick, and exteriors where it doesn&apos;t belong. Smooth interior latex and stucco are
          not the same surface.
        </p>
        <p>
          <strong>What it costs:</strong> on brick at ~250 sq ft/gal (estimate within the
          cypaint.com 250-350 exterior range), using the 350 rate buys about 30% too little
          paint — on a whole <Link href="/guides/exterior-paint-for-2000-sq-ft-house/">house
          exterior</Link>, that&apos;s 3+ missing gallons.
        </p>
        <p>
          <strong>How to avoid it:</strong> match the rate to the surface using our{' '}
          <Link href="/guides/paint-coverage-per-gallon/">coverage-per-gallon table</Link>:
          350 for smooth interior walls, ~300 for textured siding, ~250 for brick/stucco
          (estimates), 150-250 for heavily textured finishes.
        </p>

        <h2>Mistake 7 — Cheap paint that needs three coats</h2>
        <p>
          <strong>What happens:</strong> budget paint ($20-30/gal in 2026) has less pigment and
          weaker hiding. On a color change it often needs three coats where mid-range paint
          ($35-50/gal) needs two.
        </p>
        <p>
          <strong>What it costs:</strong> three gallons of budget paint ($60-90) plus a third
          coat of your time frequently exceeds two gallons of mid-range paint ($70-100). The
          per-gallon price lied; the per-project price told the truth.
        </p>
        <p>
          <strong>How to avoid it:</strong> compare cost per finished square foot, not per
          gallon — our <Link href="/guides/paint-cost-per-square-foot/">2026 cost
          breakdown</Link> and <Link href="/tools/paint-cost-calculator/">paint cost
          estimator</Link> run the real comparison. For color changes, mid-range paint in two
          coats is usually the cheapest total.
        </p>

        <Callout variant="note">
          <p>
            <strong>The pattern:</strong> six of these seven mistakes are the same error in
            different clothes — planning the quantity around ideal conditions instead of your
            actual walls, coats, and surfaces. Measure the real room, count the real coats, use
            the rate for the real surface, and round up. That discipline is the entire game.
          </p>
        </Callout>

        <h2>The one-trip checklist</h2>
        <p>
          Run through this before you leave for the store and you&apos;ll dodge all seven
          mistakes at once:
        </p>
        <ol>
          <li>Measure every wall and the ceiling height — don&apos;t guess either.</li>
          <li>Count every door and window; subtract 20 sq ft per door, 15 per window.</li>
          <li>Decide your coat count honestly (new drywall or dark-to-light = primer + 2).</li>
          <li>Use the coverage rate for your actual surface, not the generic 350.</li>
          <li>Multiply area &times; coats &divide; coverage, round <em>up</em> to the nearest
          quarter gallon.</li>
          <li>Size the ceiling and trim as separate line items, in their own products.</li>
          <li>Add one extra quart of each wall color for touch-ups.</li>
        </ol>

        <h2>Frequently asked questions</h2>
        <Faq items={faqs} />

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> —
            get the quantity right the first time.
          </li>
          <li>
            <Link href="/tools/primer-calculator/">Primer calculator</Link> — for mistakes 2
            and 3.
          </li>
          <li>
            <Link href="/tools/exterior-paint-calculator/">Exterior paint calculator</Link> —
            for mistake 6 on siding, brick, and stucco.
          </li>
          <li>
            <Link href="/guides/paint-coverage-per-gallon/">Paint coverage per gallon by
            type</Link> — the right rate for every surface.
          </li>
        </ul>
      </div>
    </div>
  )
}
