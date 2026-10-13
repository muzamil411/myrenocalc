'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, CheckField, HowCalculated, ResultRow } from './fields'
import { roundUpToQuart, formatGallons } from '@/lib/paint-math'

/** Ceiling paint calculator. Textured (popcorn) ceilings use ~25% more paint (estimate). */
export default function CeilingPaintCalculator() {
  const [length, setLength] = useState(12)
  const [width, setWidth] = useState(12)
  const [coats, setCoats] = useState('2')
  const [textured, setTextured] = useState(false)

  const r = useMemo(() => {
    const area = length * width
    const coatsN = Number(coats)
    // Flat ceiling ~350 sq ft/gal; heavily textured uses ~25% more (estimate) -> ~280 effective.
    const coverage = textured ? 280 : 350
    const rawGallons = (area * coatsN) / coverage
    const gallons = roundUpToQuart(rawGallons)
    return { area, coatsN, coverage, rawGallons, gallons }
  }, [length, width, coats, textured])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Ceiling length" value={length} onChange={setLength} unit="ft" min={1} />
        <NumberField label="Ceiling width" value={width} onChange={setWidth} unit="ft" min={1} />
        <SelectField
          label="Coats of paint"
          value={coats}
          onChange={setCoats}
          options={[
            { value: '1', label: '1 coat' },
            { value: '2', label: '2 coats' },
          ]}
        />
        <div className="sm:col-span-2 lg:col-span-3">
          <CheckField
            label="Textured / popcorn ceiling"
            hint="Uses roughly 25% more paint than a flat ceiling (estimate)"
            checked={textured}
            onChange={setTextured}
          />
        </div>
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Ceiling area" value={`${Math.round(r.area)} sq ft`} />
        <ResultRow
          label="Ceiling paint needed"
          value={formatGallons(r.gallons)}
          sub={`${r.gallons.toFixed(2)} gal · ${r.coatsN} coat${r.coatsN > 1 ? 's' : ''} at ~${r.coverage} sq ft/gal${textured ? ' (textured, estimate)' : ''}`}
        />
      </dl>

      <HowCalculated>
        <p>
          Ceiling area = {length} × {width} = <strong>{Math.round(r.area)} sq ft</strong>
        </p>
        <p>
          Paint = {Math.round(r.area)} × {r.coatsN} coats ÷ ~{r.coverage} sq ft/gal ={' '}
          {r.rawGallons.toFixed(2)} gal → <strong>{formatGallons(r.gallons)}</strong> (rounded up
          to the nearest quart)
        </p>
        {textured && (
          <p className="text-xs text-slate-500">
            Textured ceilings trap paint in the texture — we budget ~25% extra (an estimate; very
            heavy texture may need more).
          </p>
        )}
      </HowCalculated>
    </div>
  )
}
