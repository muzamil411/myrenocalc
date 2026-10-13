import type { Metadata } from 'next'
import { jsonLdSite, SITE_NAME } from '@/lib/seo'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://myrenocalc.com'),
  title: {
    default: `${SITE_NAME} — Home Improvement Calculators`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Free home improvement calculators with the math shown and sources cited. Paint, concrete, flooring, drywall, lumber and more — plan every project with the right numbers.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Home Improvement Calculators`,
    description:
      'Free home improvement calculators with the math shown and sources cited. Plan every project with the right numbers.',
    url: 'https://myrenocalc.com/',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSite()) }}
        />
      </head>
      <body className="bg-white font-sans text-slate-800 antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
