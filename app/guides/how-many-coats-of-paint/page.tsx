import Link from 'next/link'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'How Many Coats of Paint Do Walls Need?',
  description:
    'Most interior walls need two coats of paint. Learn when one coat is enough, when new drywall and dark-to-light changes need primer plus two, and ceiling rules.',
  path: '/guides/how-many-coats-of-paint/',
})

const faqs = [
  {
    question: 'Is one coat of paint ever enough on walls?',
    answer:
      'Yes, when you are refreshing the same color (or a very close one) on previously painted walls in good condition, using a quality paint. The new coat bonds to a sound surface and the color underneath already matches, so a single coat gives full, even color.',
  },
  {
    question: 'Do I need primer if I am already doing two coats?',
    answer:
      'On previously painted walls, usually not. But new drywall, bare wood, patched areas, stains, and dark-to-light color changes need primer first — two finish coats over an unsealed or mismatched surface still show uneven absorption and ghosting. Primer is a separate product with its own coverage rate, not just a thin first coat of paint.',
  },
  {
    question: 'How many coats does a ceiling need?',
    answer:
      'Usually one to two coats of flat ceiling paint. A ceiling in good condition being repainted white often looks fine after one careful coat, but stained ceilings or color changes need a stain-blocking primer plus one to two finish coats. Popcorn or textured ceilings use about 25 percent more paint per coat (estimate).',
  },
  {
    question: 'How long do I wait between coats?',
    answer:
      'Follow the recoat window printed on the product label — it varies by product, temperature, and humidity. Painting the second coat too soon can lift or wrinkle the first coat, which wastes both the paint and the time.',
  },
  {
    question: 'Does the coverage math assume one coat or two?',
    answer:
      'One. Coverage figures like 350 square feet per gallon are always per-coat rates, measured on a prepared surface. Two coats doubles the gallons: a wall needing 349 square feet of coverage needs 2 gallons for two coats, not one.',
  },
]

export default function HowManyCoatsOfPaintPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy-900">
        How Many Coats of Paint Do Walls Need?
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />

      <div className="article mt-6">
        <p>
          <strong>Most interior walls need two coats of paint.</strong> That is the standard
          answer, and it is what every coverage calculation on this site assumes: coverage
          rates like 350 sq ft/gal are per-coat rates, so two coats doubles the gallons. But
          &ldquo;two coats&rdquo; is the middle of a range — one coat is genuinely enough in
          some situations, and new drywall or a dramatic color change needs primer plus two.
          Here is how to tell which situation you are in.
        </p>

        <h2>When one coat is enough</h2>
        <p>One careful coat works when all of these are true:</p>
        <ul>
          <li>
            <strong>Same color or very close to it.</strong> You&apos;re refreshing, not changing —
            the color underneath already matches, so there&apos;s nothing to hide.
          </li>
          <li>
            <strong>Previously painted walls in good condition.</strong> No stains bleeding
            through, no peeling, no bare patches.
          </li>
          <li>
            <strong>A quality paint.</strong> Mid-range and premium paints ($35-85/gal in 2026
            per allbetterapp.com and carolinarenew.com) have higher solids content and hide
            better in one coat than budget paint.
          </li>
        </ul>
        <p>
          Even then, inspect in raking light after the first coat dries — holidays (missed
          spots) and roller stipple differences show up once the paint cures. Touch them up
          rather than automatically rolling a second full coat.
        </p>

        <h2>The standard: two coats</h2>
        <p>
          Two coats is the default for a color change on previously painted walls, for any room
          where you want a uniform, durable finish, and for every estimate on this site. The
          first coat establishes color and the second builds the full film thickness the
          manufacturer designed for — which is also what the durability and washability claims
          on the can are based on. Skimping to one coat on a color change is the single most
          common reason people end up buying more paint mid-project: the old color ghosts
          through, and the &ldquo;saved&rdquo; gallon gets spent anyway on a corrective second
          coat, plus another trip to the store.
        </p>

        <h2>Primer + two coats: new drywall, dark-to-light, patches</h2>
        <p>Three situations need a dedicated primer coat before the two finish coats:</p>
        <ul>
          <li>
            <strong>New, unpainted drywall.</strong> Bare drywall and joint compound are porous
            and absorb paint unevenly — the mudded seams flash through as dull bands. The KILZ
            PVA Drywall Primer technical data sheet lists 300-400 sq ft/gal for this use.
          </li>
          <li>
            <strong>Dark-to-light color changes.</strong> Deep reds, navies, and dark greens
            ghost through light colors even after two finish coats. A tinted primer gets you to
            full hide faster than a third coat of expensive finish paint.
          </li>
          <li>
            <strong>Patched areas, stains, and repairs.</strong> Spackle spots and water stains
            absorb differently than the surrounding paint; primer equalizes the surface so the
            finish coats look uniform.
          </li>
        </ul>
        <p>
          Primer has its own coverage rate — don&apos;t just thin down wall paint and call it
          primer. Use our <Link href="/tools/primer-calculator/">primer calculator</Link> to
          size it: new drywall at 300 sq ft/gal, previously painted walls at 350, bare wood at
          250 (an estimate from the rough-surface range in the KILZ data sheet).
        </p>

        <h2>Ceilings: usually one to two</h2>
        <p>
          A ceiling in good condition being repainted white often needs just one careful coat
          of flat ceiling paint. Stained ceilings, smoke damage, or a color change need a
          stain-blocking primer plus one to two finish coats. Remember that textured or popcorn
          ceilings use about 25% more paint per coat than flat ones (estimate), so size the
          ceiling quantity separately from the walls — see the{' '}
          <Link href="/guides/how-much-paint-for-12x12-room/">12x12 room guide</Link> for a
          worked ceiling calculation.
        </p>

        <Callout variant="method">
          <p>
            <strong>What the coverage math assumes.</strong> Every calculator on this site uses
            per-coat coverage rates (350 sq ft/gal for standard interior latex, per the
            Sherwin-Williams Duration Home product data sheet) multiplied by the number of
            coats you plan. If you change the number of coats, the gallons change proportionally
            — 1 coat halves the paint, a third coat adds 50%. Primer is calculated separately
            at its own rate.
          </p>
        </Callout>

        <h2>Primer vs. paint-and-primer-in-one</h2>
        <p>
          Many paints are marketed as &ldquo;paint and primer in one.&rdquo; These are
          high-solids paints with better-than-average hide — genuinely useful for a
          same-color refresh or a mild color change on previously painted walls. They are
          not a substitute for a dedicated primer on new drywall, bare wood, stains, or
          drastic dark-to-light changes. A dedicated primer (like the KILZ PVA Drywall
          Primer at 300-400 sq ft/gal per its technical data sheet) is formulated to seal
          porous surfaces and bond to bare material; combination products are formulated to
          hide. Different jobs, different products.
        </p>
        <p>
          If you&apos;re unsure, the rule is simple: porous, bare, stained, or drastically
          different color &rarr; real primer. Previously painted, sound, similar color
          &rarr; a quality paint alone (or a paint-and-primer product) is fine.
        </p>

        <h2>How to tell if you need another coat</h2>
        <p>
          Don&apos;t decide while the paint is wet — wet paint always looks uneven. Wait until
          the first coat is fully dry, then check the wall in raking light: stand to one
          side and look along the wall&apos;s surface so light grazes across it. You&apos;re looking
          for three things:
        </p>
        <ul>
          <li>
            <strong>Holidays</strong> — missed spots or thin patches where the old color
            shows through. A few can be touched up; widespread holidays mean another full
            coat.
          </li>
          <li>
            <strong>Flashing</strong> — dull vs. shiny patches, usually where spackle or
            joint compound absorbed paint differently. This is a primer problem; another
            finish coat may not fix it.
          </li>
          <li>
            <strong>Sheen uniformity</strong> — in eggshell and satin, uneven sheen across
            the wall means uneven film thickness. A second coat evens it out.
          </li>
        </ul>
        <p>
          If the wall looks uniform in raking light after one coat on a same-color refresh,
          stop there — extra coats add cost without benefit. If you&apos;re doing a color change
          and planned two coats from the start, apply the second coat regardless; the first
          coat&apos;s job was coverage, the second&apos;s is uniformity and full film thickness.
        </p>

        <h2>What cheap paint does to the coat count</h2>
        <p>
          Budget paint ($20-30/gal in 2026) has less pigment and fewer solids, which means
          weaker hiding. On a color change, budget paint often needs three coats where a
          mid-range paint needs two — and three coats of cheap paint costs more in total than
          two coats of mid-range paint, before you count the extra labor. The per-gallon price
          is not the per-project price. Our <Link href="/tools/paint-cost-calculator/">paint
          cost estimator</Link> lets you compare tiers honestly.
        </p>

        <h2>Frequently asked questions</h2>
        <Faq items={faqs} />

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/tools/primer-calculator/">Primer calculator</Link> — size the primer
            coat for new drywall or color changes.
          </li>
          <li>
            <Link href="/tools/interior-paint-calculator/">Interior paint calculator</Link> —
            run the quantity math for your coat count.
          </li>
          <li>
            <Link href="/guides/paint-coverage-per-gallon/">Paint coverage per gallon by
            type</Link> — the per-coat rates behind the math.
          </li>
          <li>
            <Link href="/guides/paint-quantity-mistakes/">7 paint quantity mistakes that waste
            money</Link> — including forgetting the second coat in the math.
          </li>
        </ul>
      </div>
    </div>
  )
}
