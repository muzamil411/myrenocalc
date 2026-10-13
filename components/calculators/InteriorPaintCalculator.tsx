'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, CheckField, HowCalculated, ResultRow } from './fields'
import { roomWallArea, roundUpToQuart, formatGallons, DOOR_SQFT, WINDOW_SQFT } from '@/lib/paint-math'

/** Interior wall paint calculator: room dims -> paintable area -> gallons + primer. */
export default function InteriorPaintCalculator() {
  const [length, setLength] = useState(12)
  const [width, setWidth] = useState(12)
  const [height, setHeight] = useState(8)
  const [doors, setDoors] = useState(1)
  const [windows, setWindows] = useState(2)
  const [coats, setCoats] = useState('2')
  const [coverage, setCoverage] = useState(350)
  const [newDrywall, setNewDrywall] = useState(false)

  const r = useMemo(() => {
    const area = roomWallArea(length, width, height, doors, windows)
    const coatsN = Number(coats)
    const rawGallons = (area * coatsN) / Math.max(1, coverage)
    const gallons = roundUpToQuart(rawGallons)
    // Primer: one coat on new drywall at ~300 sq ft/gal (KILZ PVA drywall primer TDS: 300-400).
    const primerGallons = newDrywall ? roundUpToQuart(area / 300) : 0
    return { area, coatsN, rawGallons, gallons, primerGallons }
  }, [length, width, height, doors, windows, coats, coverage, newDrywall])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Room length" value={length} onChange={setLength} unit="ft" min={1} />
        <NumberField label="Room width" value={width} onChange={setWidth} unit="ft" min={1} />
        <NumberField label="Ceiling height" value={height} onChange={setHeight} unit="ft" min={1} />
        <NumberField label="Doors" value={doors} onChange={setDoors} min={0} step={1} />
        <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
        <SelectField
          label="Coats of paint"
          value={coats}
          onChange={setCoats}
          options={[
            { value: '1', label: '1 coat' },
            { value: '2', label: '2 coats (recommended)' },
          ]}
        />
        <NumberField
          label="Coverage per gallon"
          value={coverage}
          onChange={setCoverage}
          unit="sq ft"
          min={100}
          max={500}
          step={10}
        />
        <div className="sm:col-span-2 lg:col-span-2">
          <CheckField
            label="New / unpainted drywall"
            hint="Adds one coat of primer at ~300 sq ft per gallon (porous surface)"
            checked={newDrywall}
            onChange={setNewDrywall}
          />
        </div>
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Paintable wall area" value={`${Math.round(r.area)} sq ft`} />
        <ResultRow
          label="Paint needed"
          value={formatGallons(r.gallons)}
          sub={`${r.gallons.toFixed(2)} gal · ${r.coatsN} coat${r.coatsN > 1 ? 's' : ''} at ${coverage} sq ft/gal`}
        />
        {newDrywall && (
          <ResultRow
            label="Primer needed (1 coat)"
            value={formatGallons(r.primerGallons)}
            sub="PVA drywall primer, ~300 sq ft/gal"
          />
        )}
      </dl>

      <HowCalculated>
        <p>
          Wall area = 2 × {height} ft × ({length} + {width} ft) − {doors} × {DOOR_SQFT} (doors) −{' '}
          {windows} × {WINDOW_SQFT} (windows) = <strong>{Math.round(r.area)} sq ft</strong>
        </p>
        <p>
          Paint = {Math.round(r.area)} × {r.coatsN} coats ÷ {coverage} sq ft/gal ={' '}
          {r.rawGallons.toFixed(2)} gal → rounded up to the nearest quart:{' '}
          <strong>{formatGallons(r.gallons)}</strong>
        </p>
        {newDrywall && (
          <p>
            Primer = {Math.round(r.area)} ÷ 300 sq ft/gal = {(r.area / 300).toFixed(2)} gal →{' '}
            <strong>{formatGallons(r.primerGallons)}</strong>
          </p>
        )}
      </HowCalculated>
    </div>
  )
}
