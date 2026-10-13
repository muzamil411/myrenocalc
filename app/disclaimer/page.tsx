import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Disclaimer',
  description:
    'MyRenoCalc disclaimer — our calculators provide planning estimates, not professional advice. Verify with your contractor or supplier.',
  path: '/disclaimer/',
})

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-navy-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 13, 2026</p>

      <div className="article mt-6">
        <h2>Estimates, not professional advice</h2>
        <p>
          Every calculator on MyRenoCalc produces an <strong>estimate for planning
          purposes</strong>. It is not engineering, contracting, or professional advice. Real
          projects vary — wall texture, material waste, uneven ground, local prices, and building
          codes all affect the final numbers.
        </p>

        <h2>Verify before you buy</h2>
        <p>
          Always verify quantities and costs with your contractor or supplier before purchasing
          materials or starting work. When in doubt, buy a little extra and keep receipts —
          most suppliers accept returns on unopened materials.
        </p>

        <h2>Sources and accuracy</h2>
        <p>
          We cite the source of each figure we use and show our math so you can check it. If
          you spot an error or an outdated figure, please{' '}
          <a href="/contact/">tell us</a> — corrections make the site better for everyone.
        </p>

        <h2>Affiliate disclosure</h2>
        <p>
          In the future, some pages may contain affiliate links to retailers. If you buy through
          them, we may earn a commission at no extra cost to you. This will never affect our
          calculations or recommendations — the math does not care where you shop.
        </p>
      </div>
    </div>
  )
}
