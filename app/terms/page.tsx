import PageShell from '@/components/PageShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description:
    'MyRenoCalc terms of use — how you may use our calculators and content.',
  path: '/terms/',
})

export default function TermsPage() {
  return (
    <PageShell title={"Terms of Use"} path="/terms/">
      <h1 className="text-4xl font-extrabold text-navy-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 13, 2026</p>

      <div className="article mt-6">
        <h2 id="section-1">1. What this site provides</h2>
        <p>
          MyRenoCalc provides free home improvement calculators and guides for planning
          purposes. All results are estimates. They are not professional, engineering, or
          contracting advice.
        </p>

        <h2 id="section-2">2. Your responsibility</h2>
        <p>
          You are responsible for verifying quantities, measurements, and costs with your
          contractor, supplier, or a qualified professional before purchasing materials or
          starting work. We are not liable for over- or under-ordering, project delays, or
          costs arising from reliance on our estimates.
        </p>

        <h2 id="section-3">3. Acceptable use</h2>
        <p>
          You may use the calculators for personal and commercial project planning. You may
          not scrape the site at a rate that degrades service for others, misrepresent our
          content as your own, or use the site for unlawful purposes.
        </p>

        <h2 id="section-4">4. Intellectual property</h2>
        <p>
          Site design, text, and code are owned by MyRenoCalc unless stated otherwise. You may
          link to our pages and quote brief excerpts with attribution. Systematic republication
          of our content is not permitted without written consent.
        </p>

        <h2 id="section-5">5. No warranties</h2>
        <p>
          The site is provided &ldquo;as is&rdquo; without warranties of any kind, express or
          implied, including accuracy or fitness for a particular purpose. We work hard to keep
          numbers correct and cited, but errors can occur — please report them via the{' '}
          <a href="/contact/">contact page</a>.
        </p>

        <h2 id="section-6">6. Changes</h2>
        <p>
          We may update these terms as the site grows (for example, when advertising or
          affiliate programs launch). Continued use after changes means you accept the updated
          terms.
        </p>
      </div>
    </PageShell>
  )
}
