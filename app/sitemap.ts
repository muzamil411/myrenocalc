import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

// Phase 0: static routes only. Phase 1 extends this with calculator + guide pages.
const ROUTES = ['', '/about/', '/contact/', '/privacy-policy/', '/terms/', '/disclaimer/']

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2026-10-13'),
    changeFrequency: route === '' ? 'weekly' : 'yearly',
    priority: route === '' ? 1 : 0.5,
  }))
}
