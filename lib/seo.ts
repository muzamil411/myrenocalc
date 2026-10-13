import type { Metadata } from 'next'

export const SITE_URL = 'https://myrenocalc.com'
export const SITE_NAME = 'MyRenoCalc'

/** Absolute canonical URL for a site path (path should start with '/'). */
export function canonical(path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '')
  return `${SITE_URL}${clean}/`
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = canonical(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    robots: { index: true, follow: true },
  }
}

export type FaqItem = { question: string; answer: string }

/** JSON-LD FAQPage object for embedding in a page. */
export function jsonLdFaq(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

/** JSON-LD Organization + WebSite for the root layout. */
export function jsonLdSite() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        slogan: 'Every project starts with a number.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }
}
