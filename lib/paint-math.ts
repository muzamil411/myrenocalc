/** Shared paint math. Figures sourced; see page Method sections for citations. */

/** Standard allowances (Hamilton & Hamilton estimating guide). */
export const DOOR_SQFT = 20
export const WINDOW_SQFT = 15

/** Round up to the nearest quart (0.25 gal) — standard buying practice. */
export function roundUpToQuart(gallons: number): number {
  return Math.ceil(gallons * 4 - 1e-9) / 4
}

/** "2.5" -> "2 gal + 2 qt" style display. */
export function formatGallons(gallons: number): string {
  const whole = Math.floor(gallons + 1e-9)
  const quarts = Math.round((gallons - whole) * 4)
  if (quarts === 0) return whole === 1 ? '1 gallon' : `${whole} gallons`
  const parts: string[] = []
  if (whole > 0) parts.push(whole === 1 ? '1 gal' : `${whole} gal`)
  parts.push(quarts === 1 ? '1 qt' : `${quarts} qt`)
  return parts.join(' + ')
}

/** Paintable wall area for a rectangular room. */
export function roomWallArea(
  lengthFt: number,
  widthFt: number,
  heightFt: number,
  doors: number,
  windows: number,
): number {
  return Math.max(0, 2 * heightFt * (lengthFt + widthFt) - doors * DOOR_SQFT - windows * WINDOW_SQFT)
}
