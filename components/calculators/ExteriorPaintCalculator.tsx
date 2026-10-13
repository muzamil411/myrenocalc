'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, HowCalculated, ResultRow } from './fields'
import { roundUpToQuart, formatGallons, DOOR_SQFT, WINDOW_SQFT } from '@/lib/paint-math'

const SIDING: Record<string, { label: string; coverage: number; note: string }> = {
  smooth: { label: 'Smooth siding', coverage: 350, note: 'estimate' },
  textured: { label: 'Textured / stucco', coverage: 300, note: 'estimate' },
  brick: { label: 'Brick / masonry', coverage: 250, note: 'estimate' },
}

/** Exterior house paint calculator: footprint -> wall area -> gallons. */
export default function ExteriorPaintCalculator() {
  const [width, setWidth] = useState(40)
  const [depth, setDepth] = useState(30)
  const [wallHeight, setWallHeight] = useState(9)
  const [stories, setStories] = useState('1')
  const [windows, setWindows] = useState(12)
  const [doors, setDoors] = useState(3)
  const [siding, setSiding] = useState('smooth')
  const [coats, setCoats] = useState('2')

  const r = useMemo(() => {
    const storiesN = Number(stories)
    const perimeter = 2 * (width + depth)
    const gross = perimeter * wallHeight * storiesN
    const area = Math.max(0, gross - windows * WINDOW_SQFT - doors * DOOR_SQFT)
    const coverage = SIDING[siding]?.coverage ?? 350
    const coatsN = Number(coats)
    const rawGallons = (area * coatsN) / coverage
    const gallons = roundUpToQuart(rawGallons)
    return { storiesN, perimeter, gross, area, coverage, coatsN, rawGallons, gallons }
  }, [width, depth, wallHeight, stories, windows, doors, siding, coats])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="House width" value={width} onChange={setWidth} unit="ft" min={1} />
        <NumberField label="House depth" value={depth} onChange={setDepth} unit="ft" min={1} />
        <NumberField
          label="Wall height (per story)"
          value={wallHeight}
          onChange={setWallHeight}
          unit="ft"
          min={1}
        />
        <SelectField
          label="Stories"
          value={stories}
          onChange={setStories}
          options={[
            { value: '1', label: '1 story' },
            { value: '2', label: '2 stories' },
          ]}
        />
        <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
        <NumberField label="Exterior doors" value={doors} onChange={setDoors} min={0} step={1} />
        <SelectField
          label="Siding type"
          value={siding}
          onChange={setSiding}
          options={Object.entries(SIDING).map(([v, s]) => ({ value: v, label: s.label }))}
        />
        <SelectField
          label="Coats of paint"
          value={coats}
          onChange={setCoats}
          options={[
            { value: '1', label: '1 coat' },
            { value: '2', label: '2 coats (recommended)' },
          ]}
        />
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Paintable wall area" value={`${Math.round(r.area)} sq ft`} />
        <ResultRow
          label="Exterior paint needed"
          value={formatGallons(r.gallons)}
          sub={`${r.gallons.toFixed(2)} gal · ${r.coatsN} coats at ~${r.coverage} sq ft/gal (${SIDING[siding]?.label.toLowerCase()}, estimate)`}
        />
      </dl>

      <HowCalculated>
        <p>
          Perimeter = 2 × ({width} + {depth}) = {r.perimeter} ft; gross wall = {r.perimeter} ×{' '}
          {wallHeight} ft × {r.storiesN} {r.storiesN > 1 ? 'stories' : 'story'} ={' '}
          {Math.round(r.gross)} sq ft
        </p>
        <p>
          Minus {windows} windows × {WINDOW_SQFT} and {doors} doors × {DOOR_SQFT} ={' '}
          <strong>{Math.round(r.area)} sq ft</strong> paintable
        </p>
        <p>
          Paint = {Math.round(r.area)} × {r.coatsN} coats ÷ ~{r.coverage} sq ft/gal ={' '}
          {r.rawGallons.toFixed(2)} gal → <strong>{formatGallons(r.gallons)}</strong> (rounded up
          to the nearest quart)
        </p>
        <p className="text-xs text-slate-500">
          Siding coverage rates are estimates: smooth ~350, textured/stucco ~300, brick/masonry
          ~250 sq ft/gal.
        </p>
      </HowCalculated>
    </div>
  )
}
