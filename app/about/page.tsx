import PageShell from '@/components/PageShell'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About',
  description:
    'MyRenoCalc is an independent project building honest home improvement calculators — every figure sourced, every formula shown, limitations stated up front.',
  path: '/about/',
})

export default function AboutPage() {
  return (
    <PageShell title={"About MyRenoCalc"} path="/about/">
      <h1 className="text-4xl font-extrabold text-navy-900">About MyRenoCalc</h1>

      <div className="article mt-6">
        <p>
          MyRenoCalc is an independent project run by <strong>Muzamil Ali</strong>. It started
          from a simple frustration: most online project calculators hand you a number and ask
          you to trust it. When you are standing in a paint aisle or ordering concrete, that is
          not good enough.
        </p>

        <h2 id="section-1">Our methodology</h2>
        <p>Every calculator we publish follows the same four rules:</p>
        <ol>
          <li>
            <strong>The math is shown.</strong> Each tool explains its formula in plain English,
            so you can verify the result yourself.
          </li>
          <li>
            <strong>Every figure is sourced.</strong> Coverage rates, bag yields, waste factors —
            each number traces to a manufacturer technical sheet or an established industry
            standard, cited visibly on the page. Numbers we cannot source are labeled as
            estimates, never stated as facts.
          </li>
          <li>
            <strong>Worked examples use real numbers.</strong> Each tool walks through a concrete
            example step by step.
          </li>
          <li>
            <strong>Limitations are stated up front.</strong> Wall texture, material waste, uneven
            ground — we tell you what the calculator does not account for before you spend money.
          </li>
        </ol>

        <h2 id="section-2">What we are not</h2>
        <p>
          We are not contractors, and our calculators are planning tools — not professional
          advice. Always verify quantities and costs with your contractor or supplier before
          purchasing materials. See our <Link href="/disclaimer/">disclaimer</Link> for the
          full statement.
        </p>

        <h2 id="section-3">Contact</h2>
        <p>
          Found a wrong number, a missing source, or a calculator you wish existed?{' '}
          <Link href="/contact/">Tell us</Link> — corrections are the fastest way we improve.
        </p>
      </div>
    </PageShell>
  )
}
