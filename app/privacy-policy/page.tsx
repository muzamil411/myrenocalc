import PageShell from '@/components/PageShell'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'MyRenoCalc privacy policy — what data we collect, how analytics works, and your rights.',
  path: '/privacy-policy/',
})

export default function PrivacyPolicyPage() {
  return (
    <PageShell title={"Privacy Policy"} path="/privacy-policy/">
      <h1 className="text-4xl font-extrabold text-navy-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 13, 2026</p>

      <div className="article mt-6">
        <h2 id="section-1">The short version</h2>
        <p>
          MyRenoCalc is a free calculator site. We do not require accounts, we do not sell
          personal data, and our calculators run entirely in your browser — the numbers you
          type into a tool are never sent to our servers.
        </p>

        <h2 id="section-2">What we collect</h2>
        <ul>
          <li>
            <strong>Analytics:</strong> we use privacy-conscious web analytics to understand
            which pages are useful (pages visited, approximate location at country/city level,
            device type). This data is aggregated and never tied to your identity.
          </li>
          <li>
            <strong>Contact emails:</strong> if you email us, we keep your message and address
            only to reply. We do not add you to any mailing list.
          </li>
        </ul>

        <h2 id="section-3">Cookies</h2>
        <p>
          We use a minimal set of cookies for analytics and, in the future, advertising. You
          can block cookies in your browser settings; the calculators will still work.
        </p>

        <h2 id="section-4">Advertising</h2>
        <p>
          We plan to show display ads to keep the site free. Ad providers may use cookies to
          serve relevant ads. When advertising goes live, this policy will name the providers
          and link their opt-out pages.
        </p>

        <h2 id="section-5">Your rights</h2>
        <p>
          You may request a copy or deletion of any personal data we hold about you by
          contacting us via the <a href="/contact/">contact page</a>. We will respond within
          30 days.
        </p>

        <h2 id="section-6">Changes</h2>
        <p>
          If this policy changes materially, we will update the date above. Continued use of
          the site after changes means you accept the updated policy.
        </p>
      </div>
    </PageShell>
  )
}
