'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, HowCalculated, ResultRow } from './fields'
import { roomWallArea, roundUpToQuart, formatGallons, DOOR_SQFT, WINDOW_SQFT } from '@/lib/paint-math'

/** Coverage per surface type (KILZ technical data sheets; bare wood is an estimate). */
const SURFACES: Record<string, { label: string; coverage: number; note: string }> = {
  drywall: {
    label: 'New / unpainted drywall',
    coverage: 300,
    note: 'KILZ PVA drywall primer TDS: 300–400 sq ft/gal; we use the conservative end for porous drywall',
  },
  repaint: {
    label: 'Previously painted walls',
    coverage: 350,
    note: 'Sealed surface; primer stretches to ~350 sq ft/gal (KILZ general primer TDS range)',
  },
  wood: {
    label: 'Bare wood',
    coverage: 250,
    note: 'Estimate based on KILZ rough-surface range (200–300 sq ft/gal)',
  },
}

/** Primer calculator: wall area (direct or room shortcut) -> primer gallons. */
export default function PrimerCalculator() {
  const [mode, setMode] = useState('area')
  const [area, setArea] = useState(400)
  const [length, setLength] = useState(12)
  const [width, setWidth] = useState(12)
  const [height, setHeight] = useState(8)
  const [doors, setDoors] = useState(1)
  const [windows, setWindows] = useState(2)
  const [surface, setSurface] = useState('drywall')

  const r = useMemo(() => {
    const wallArea =
      mode === 'area' ? Math.max(0, area) : roomWallArea(length, width, height, doors, windows)
    const coverage = SURFACES[surface]?.coverage ?? 300
    // Primer is a single coat.
    const rawGallons = wallArea / coverage
    const gallons = roundUpToQuart(rawGallons)
    return { wallArea, coverage, rawGallons, gallons }
  }, [mode, area, length, width, height, doors, windows, surface])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SelectField
          label="How to enter the area"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'area', label: 'Enter wall area directly' },
            { value: 'room', label: 'Calculate from room dimensions' },
          ]}
        />
        <SelectField
          label="Surface type"
          value={surface}
          onChange={setSurface}
          options={Object.entries(SURFACES).map(([v, s]) => ({ value: v, label: s.label }))}
        />
        {mode === 'area' ? (
          <NumberField label="Wall area" value={area} onChange={setArea} unit="sq ft" min={0} />
        ) : (
          <>
            <NumberField label="Room length" value={length} onChange={setLength} unit="ft" min={1} />
            <NumberField label="Room width" value={width} onChange={setWidth} unit="ft" min={1} />
            <NumberField label="Ceiling height" value={height} onChange={setHeight} unit="ft" min={1} />
            <NumberField label="Doors" value={doors} onChange={setDoors} min={0} step={1} />
            <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
          </>
        )}
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Wall area" value={`${Math.round(r.wallArea)} sq ft`} />
        <ResultRow
          label="Primer needed (1 coat)"
          value={formatGallons(r.gallons)}
          sub={`${r.gallons.toFixed(2)} gal at ~${r.coverage} sq ft/gal (${SURFACES[surface]?.label.toLowerCase()})`}
        />
      </dl>

      <HowCalculated>
        <p>
          Primer = {Math.round(r.wallArea)} sq ft ÷ ~{r.coverage} sq ft/gal = {r.rawGallons.toFixed(2)}{' '}
          gal → <strong>{formatGallons(r.gallons)}</strong> (rounded up to the nearest quart)
        </p>
        <p className="text-xs text-slate-500">{SURFACES[surface]?.note}.</p>
        {mode === 'room' && (
          <p className="text-xs text-slate-500">
            Room wall area = 2 × {height} × ({length} + {width}) − {doors} × {DOOR_SQFT} −{' '}
            {windows} × {WINDOW_SQFT}.
          </p>
        )}
      </HowCalculated>
    </div>
  )
}
