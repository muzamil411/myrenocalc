import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

// Phase 1: paint cluster (5 calculators + 7 guides). Later phases append their routes here.
const ROUTES: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/about/', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/contact/', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy-policy/', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/terms/', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/disclaimer/', changeFrequency: 'yearly', priority: 0.5 },
  // Paint calculators
  { path: '/tools/interior-paint-calculator/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/tools/exterior-paint-calculator/', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/tools/ceiling-paint-calculator/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tools/primer-calculator/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tools/paint-cost-calculator/', changeFrequency: 'monthly', priority: 0.8 },
  // Paint guides
  { path: '/guides/how-much-paint-for-12x12-room/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/paint-coverage-per-gallon/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/guides/how-to-measure-room-for-paint/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/how-many-coats-of-paint/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/exterior-paint-for-2000-sq-ft-house/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/paint-cost-per-square-foot/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/guides/paint-quantity-mistakes/', changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date('2026-10-13'),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
