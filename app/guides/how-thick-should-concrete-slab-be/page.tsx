import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'How Thick Should a Concrete Slab Be? (4" vs 5" vs 6") | MyRenoCalc',
  description:
    '4 inches for patios, 5 for driveways, 6 for heavy loads — slab thickness by use case, rebar guidance, and what each extra inch costs. With the math.',
  path: '/guides/how-thick-should-concrete-slab-be/',
})

const faqs = [
  {
    question: 'Is 4 inches of concrete thick enough for a driveway?',
    answer:
      'For occasional passenger-car use, 4 inches works — but most pros recommend 5 inches for a working residential driveway. Bending strength scales with the square of thickness, so going from 4 to 5 inches adds about 56% load capacity for 25% more concrete. The IRC code minimum for floor slabs is 3.5 inches, which tells you 4 inches is a floor, not a road.',
  },
  {
    question: 'How thick should a concrete patio be?',
    answer:
      '4 inches is the standard for residential patios, walkways, and shed pads. It handles foot traffic, furniture, and grills with room to spare, provided it sits on 4 inches of compacted gravel base. Go thicker only if vehicles will cross it.',
  },
  {
    question: 'Does a thicker slab need rebar?',
    answer:
      'Thickness and reinforcement answer different questions: thickness resists bending, steel controls cracking. Wire mesh or rebar is recommended for driveways and anything 5+ inches, and required by code in many places for structural slabs. For a simple 4-inch patio, fiber-reinforced mix or wire mesh is common practice — check what your local code expects.',
  },
  {
    question: 'How much more does each extra inch cost?',
    answer:
      'Each inch on a 400 sq ft slab is 400 ÷ 12 ÷ 27 ≈ 1.23 cubic yards — roughly $155–$220 in material at 2026 ready-mix prices. Going from 4 to 6 inches on that slab adds about 2.5 yards, or roughly $310–$445. Cheap insurance against the most expensive concrete problem there is: tearing out and re-pouring.',
  },
  {
    question: 'Can I pour a slab thinner than 4 inches?',
    answer:
      'Not for anything structural. Below 4 inches you are in topping/overlay territory (1–2 inches over existing sound concrete, with bonding agents) — not a standalone slab. A 2-inch "slab" will crack under its own ambition.',
  },
]

export default function SlabThicknessPage() {
  return (
    <PageShell title={"How Thick Should a Concrete Slab Be?"} path="/guides/how-thick-should-concrete-slab-be/" category="Concrete & masonry" updated="2026-10-13" sections={[{"id":"section-1","title":"Thickness by use case"},{"id":"section-2","title":"What each extra inch actually buys"},{"id":"section-3","title":"The base matters as much as the slab"},{"id":"section-4","title":"Two traps to avoid"},{"id":"section-5","title":"Frequently asked questions"},{"id":"section-6","title":"Related calculators & guides"}]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete guides
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">
        How Thick Should a Concrete Slab Be?
      </h1>

      <div className="article mt-6">
        <p>
          Thickness is the cheapest structural decision in the whole project — and the only one
          you cannot change later. An extra inch of concrete costs a little over a dollar per
          square foot in material. Tearing out a cracked slab and re-pouring costs ten times
          that. So the question deserves a real answer, not a shrug.
        </p>
        <p>
          The short version: <strong>4 inches for patios and walkways, 5 inches for
          driveways, 6 inches for heavy loads.</strong> The rest of this guide explains why,
          what each inch buys you in strength, and where the code minimums sit.
        </p>

        <h2 id="section-1">Thickness by use case</h2>
        <table>
          <thead>
            <tr>
              <th>Thickness</th>
              <th>Use for</th>
              <th>Typical PSI</th>
              <th>Reinforcement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4 in</td>
              <td>Patios, walkways, sidewalks, shed pads, basement floors</td>
              <td>3,000</td>
              <td>Wire mesh or fiber (common practice)</td>
            </tr>
            <tr>
              <td>5 in</td>
              <td>Residential driveways, garage floors, pool surrounds</td>
              <td>3,000–4,000</td>
              <td>Rebar or mesh recommended</td>
            </tr>
            <tr>
              <td>6 in</td>
              <td>RV pads, heavy trucks, commercial driveways, farm yards</td>
              <td>4,000</td>
              <td>Rebar required by most codes</td>
            </tr>
            <tr>
              <td>8 in+</td>
              <td>Industrial floors, loading docks</td>
              <td>4,000+</td>
              <td>Engineered design</td>
            </tr>
          </tbody>
        </table>
        <p>
          The 4/5/6 split above reflects standard residential practice cited across contractor
          guides and municipal specs (which commonly require 4 in for walks and 6 in where
          walks cross driveways). The IRC sets the absolute floor at 3.5 inches for concrete
          floor slabs (R506.1) — anything thinner is not a slab.
        </p>

        <h2 id="section-2">What each extra inch actually buys</h2>
        <p>
          Concrete fails in bending, and bending strength scales with the <em>square</em> of
          thickness. That is the key fact most thickness guides bury:
        </p>
        <ul>
          <li>
            <strong>4 → 5 inches:</strong> about 56% more load capacity for 25% more concrete.
          </li>
          <li>
            <strong>4 → 6 inches:</strong> about 125% more capacity for 50% more concrete.
          </li>
        </ul>
        <p>
          On a 400 sq ft slab, each inch is 400 ÷ 12 ÷ 27 ≈ 1.23 cubic yards — roughly $155–$220
          in material at 2026 prices. The jump from a 4-inch to a 6-inch driveway costs a few
          hundred dollars and more than doubles the slab&rsquo;s bending strength. There is no
          better value in the project.
        </p>

        <h2 id="section-3">The base matters as much as the slab</h2>
        <p>
          A 6-inch slab on mud performs worse than a 4-inch slab on properly compacted base.
          The standard residential build is <strong>4 inches of compacted gravel</strong> under
          the slab (use our <Link href="/tools/gravel-calculator/">gravel calculator</Link> to
          size it). Compact in lifts, keep water away from the subgrade, and the thickness you
          paid for is the thickness that works.
        </p>

        <h2 id="section-4">Two traps to avoid</h2>
        <ul>
          <li>
            <strong>The 2×4 trap.</strong> A slab formed with standard 2×4 lumber is only 3.5
            inches thick — the bare code minimum. A true 4-inch slab needs 2×6 forms, or the
            grade dug a half-inch below the form bottoms.
          </li>
          <li>
            <strong>The &ldquo;it&rsquo;ll be fine&rdquo; driveway.</strong> A 4-inch driveway
            survives parked cars; it suffers under daily traffic. Flexing is what starts edge
            and corner cracks, and cracks are forever. Five inches is the honest residential
            driveway spec.
          </li>
        </ul>

        <Callout variant="limitation">
          <p>
            Thickness guidance here reflects standard residential practice, not engineering.
            Structural slabs, slabs on poor soils, and anything with unusual loads should be
            sized per local code or by an engineer. Reinforcement requirements vary by
            jurisdiction — this guide describes common practice, not your code.
          </p>
        </Callout>

        <h2 id="section-5">Frequently asked questions</h2>
      </div>

      <div className="mt-4">
        <Faq items={faqs} />
      </div>

      <div className="article mt-10">
        <h2 id="section-6">Related calculators &amp; guides</h2>
        <ul>
          <li>
            <Link href="/tools/concrete-calculator/">Concrete calculator</Link> — yards for your
            slab at any thickness
          </li>
          <li>
            <Link href="/tools/gravel-calculator/">Gravel calculator</Link> — size the base under
            the slab
          </li>
          <li>
            <Link href="/tools/footing-concrete-calculator/">Footing concrete calculator</Link>
          </li>
          <li>
            <Link href="/guides/how-much-does-a-yard-of-concrete-cover/">
              How much does a yard of concrete cover?
            </Link>
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
