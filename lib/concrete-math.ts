/** Shared concrete & aggregate math. Figures sourced; see page Method sections for citations. */

export const CUFT_PER_CUYD = 27

/**
 * Quikrete Concrete Mix #1101 spec sheet yields (approximate, per bag):
 * 80 lb -> 0.60 cu ft, 60 lb -> 0.45 cu ft, 50 lb -> 0.375 cu ft.
 */
export const BAG_YIELDS: Record<string, number> = {
  '80': 0.6,
  '60': 0.45,
  '50': 0.375,
}

/**
 * Bulk densities in US tons per cubic yard (loose, dry — vary by quarry and
 * moisture; tons are always an estimate). Sources: aggregate supplier tables.
 */
export const GRAVEL_DENSITIES: Record<string, { tonsPerYard: number; label: string }> = {
  crushedStone: { tonsPerYard: 1.4, label: 'Crushed stone (~1.4 tons/yd³)' },
  gravel: { tonsPerYard: 1.4, label: 'Gravel (~1.4 tons/yd³)' },
  peaGravel: { tonsPerYard: 1.3, label: 'Pea gravel (~1.3 tons/yd³)' },
  crusherRun: { tonsPerYard: 1.55, label: 'Crusher run (~1.55 tons/yd³)' },
  sand: { tonsPerYard: 1.35, label: 'Sand, dry (~1.35 tons/yd³)' },
}

/** Volume of a rectangular slab in cubic feet. */
export function slabCubicFeet(lengthFt: number, widthFt: number, depthIn: number): number {
  return Math.max(0, lengthFt * widthFt * (depthIn / 12))
}

export function cubicYards(cuFt: number): number {
  return cuFt / CUFT_PER_CUYD
}

/** Ready-mix is ordered in quarter-yard increments — always round UP. */
export function roundUpToQuarterYard(yards: number): number {
  return Math.ceil(yards * 4 - 1e-9) / 4
}

/** Bags needed: ALWAYS round up — a short pour is worse than a leftover bag. */
export function bagsNeeded(cuFt: number, bagLb: string): number {
  const yieldCuFt = BAG_YIELDS[bagLb] ?? 0.6
  if (yieldCuFt <= 0) return 0
  return Math.ceil(cuFt / yieldCuFt - 1e-9)
}

export function formatCubicYards(yards: number): string {
  const rounded = Math.round(yards * 100) / 100
  return `${rounded} cubic yard${rounded === 1 ? '' : 's'}`
}

export function formatBags(n: number): string {
  return `${n} bag${n === 1 ? '' : 's'}`
}

/** Estimated tons from cubic yards for a gravel material key. */
export function gravelTons(cuYd: number, materialKey: string, compactionPct: number): number {
  const density = GRAVEL_DENSITIES[materialKey]?.tonsPerYard ?? 1.4
  return cuYd * density * (1 + compactionPct / 100)
}
