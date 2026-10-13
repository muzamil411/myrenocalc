import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata, jsonLdFaq } from '@/lib/seo'
import Faq from '@/components/Faq'
import Callout from '@/components/Callout'

export const metadata = buildMetadata({
  title: 'Concrete Curing Time: Full Timeline (24h to 28 Days) | MyRenoCalc',
  description:
    'How long does concrete take to cure? Foot traffic at 24-48h, ~70% strength at 7 days, full strength at 28 days — timeline, factors, and practical do’s and don’ts.',
  path: '/guides/concrete-curing-time/',
})

const faqs = [
  {
    question: 'How long before you can walk on new concrete?',
    answer:
      '24–48 hours for light foot traffic, under normal conditions. The surface is still vulnerable at this stage — no dragging tools, no heavy point loads. Cold or wet weather extends the wait.',
  },
  {
    question: 'How long before you can drive on a new concrete driveway?',
    answer:
      'About 7 days for light vehicles, 14+ for heavy trucks, and 28 days before the slab reaches full design strength. These track the standard strength-gain curve: roughly 70% at 7 days, 85% at 14 days, 100% at 28 days (per ACI 308R).',
  },
  {
    question: 'Does concrete stop curing after 28 days?',
    answer:
      'No — 28 days is simply the industry benchmark age at which design strength is measured and specified. Hydration continues slowly for months afterward. The first 7 days matter most: that is when the concrete gains the majority of its strength and when curing conditions have the biggest effect.',
  },
  {
    question: 'What happens if concrete dries out instead of curing?',
    answer:
      'It permanently loses strength — concrete that dries out can lose 25–40% of its design strength, per ACI 308R. Curing is not drying; it is keeping moisture in so the chemical hydration reaction can complete. Cover with plastic sheeting, wet burlap, or curing compound for at least 7 days.',
  },
  {
    question: 'Can you pour concrete in cold weather?',
    answer:
      'Yes, with precautions. Below about 50°F (10°C) curing slows significantly; near freezing it nearly stops, and if the mix water freezes the concrete can be permanently damaged. Cold-weather practice (ACI 306) means heated enclosures or insulated blankets and sometimes accelerating admixtures — this is contractor territory, not a casual DIY pour.',
  },
]

export default function ConcreteCuringTimePage() {
  return (
    <PageShell title={"Concrete Curing Time: The Full Timeline"} path="/guides/concrete-curing-time/" category="Concrete & masonry" updated="2026-10-13" sections={[{"id":"section-1","title":"The curing timeline"},{"id":"section-2","title":"What actually moves the timeline"},{"id":"section-3","title":"Practical do s and don ts"},{"id":"section-4","title":"Frequently asked questions"},{"id":"section-5","title":"Related calculators & guides"}]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqs)) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        Concrete guides
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy-900">
        Concrete Curing Time: The Full Timeline
      </h1>

      <div className="article mt-6">
        <p>
          &ldquo;How long does concrete take to dry?&rdquo; is the wrong question — and the
          answer to the wrong question ruins slabs. Concrete does not harden by drying; it
          hardens through <em>hydration</em>, a chemical reaction between cement and water that
          continues for weeks. Letting it &ldquo;dry out&rdquo; is the opposite of what you
          want: concrete that dries prematurely can permanently lose 25–40% of its design
          strength (per ACI 308R, the industry curing guide).
        </p>
        <p>
          The right question is: <em>how strong is it at each age, and what can it handle?</em>{' '}
          The strength-gain curve below — roughly 70% at 7 days, full design strength at 28
          days — is the standard reference (ACI 308R). Everything practical flows from it.
        </p>

        <h2 id="section-1">The curing timeline</h2>
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>≈ % of design strength</th>
              <th>What it can handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24–48 hours</td>
              <td>~15%</td>
              <td>Light foot traffic only</td>
            </tr>
            <tr>
              <td>3 days</td>
              <td>~40–60%</td>
              <td>Remove forms (carefully); keep curing</td>
            </tr>
            <tr>
              <td>7 days</td>
              <td>~65–75%</td>
              <td>Light vehicles with care; patio furniture</td>
            </tr>
            <tr>
              <td>14 days</td>
              <td>~85–90%</td>
              <td>Heavier use; most residential loads</td>
            </tr>
            <tr>
              <td>28 days</td>
              <td>~100%</td>
              <td>Full design strength — driveways, foundations</td>
            </tr>
          </tbody>
        </table>
        <p>
          Strength percentages are approximate and assume proper moist curing at around 70°F —
          the single biggest variable most guides skip. Cold concrete cures dramatically slower;
          hot, dry, windy concrete can crack before it ever gets strong.
        </p>

        <h2 id="section-2">What actually moves the timeline</h2>
        <ul>
          <li>
            <strong>Temperature.</strong> 70°F is the baseline curve. Around 50°F, everything
            takes roughly 1.3× as long; near freezing, hydration nearly stops. Above 90°F,
            concrete gains early strength fast but is prone to shrinkage cracking — shade it and
            keep it wet.
          </li>
          <li>
            <strong>Moisture.</strong> The first 7 days of continuous moist curing are the
            highest-leverage week in the slab&rsquo;s life. Plastic sheeting, wet burlap, or a
            sprayed curing compound all work; letting the surface bake dry does not.
          </li>
          <li>
            <strong>Mix design.</strong> High-early-strength mixes (e.g. Quikrete 5000, rated
            5,000 PSI at 28 days with notably higher 1-day strength per its data sheet) reach
            usable strength faster — at a higher price per bag. Accelerating admixtures do the
            same for ready-mix.
          </li>
          <li>
            <strong>Thickness and mass.</strong> Thick sections cure more evenly; thin sections
            and edges dry fastest and need the most protection.
          </li>
        </ul>

        <h2 id="section-3">Practical do&rsquo;s and don&rsquo;ts</h2>
        <ul>
          <li>
            <strong>Do</strong> keep it moist for 7 days — mist it, cover it, or both. This one
            habit is worth more than any additive.
          </li>
          <li>
            <strong>Do</strong> wait the full 28 days before heavy, concentrated loads
            (dumpsters, loaded trailers) on a new driveway.
          </li>
          <li>
            <strong>Don&rsquo;t</strong> drive on it at day 3 because &ldquo;it feels
            hard.&rdquo; Surface hardness arrives long before internal strength.
          </li>
          <li>
            <strong>Don&rsquo;t</strong> let de-icing salts near new concrete in its first
            winter — scaling damage is the classic rookie mistake.
          </li>
          <li>
            <strong>Don&rsquo;t</strong> pour below 40°F without a cold-weather plan (heated
            blankets or enclosures). If the mix water freezes, the damage is permanent.
          </li>
        </ul>

        <Callout variant="note" title="The 28-day myth, corrected">
          <p>
            &ldquo;Concrete takes 28 days to cure&rdquo; is the most repeated half-truth in home
            improvement. Twenty-eight days is when <em>design strength is measured</em> — it is
            not a waiting period before use. You walk on it at 2 days, park on it at 7, and load
            it fully at 28. Knowing the curve instead of the slogan is what keeps projects on
            schedule.
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
            <Link href="/tools/concrete-calculator/">Concrete calculator</Link> — size the pour
            before you worry about the cure
          </li>
          <li>
            <Link href="/tools/footing-concrete-calculator/">Footing concrete calculator</Link>
          </li>
          <li>
            <Link href="/guides/how-thick-should-concrete-slab-be/">
              How thick should a concrete slab be?
            </Link>
          </li>
          <li>
            <Link href="/guides/quikrete-vs-ready-mix/">Quikrete vs. ready-mix</Link>
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
