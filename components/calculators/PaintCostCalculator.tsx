'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, HowCalculated, ResultRow } from './fields'
import { roomWallArea, roundUpToQuart, formatGallons, DOOR_SQFT, WINDOW_SQFT } from '@/lib/paint-math'

/** Typical supply prices — all estimates (vary by store/brand). */
const SUPPLIES = [
  { id: 'roller', label: '9" roller covers (3-pack)', price: 9, on: true },
  { id: 'tape', label: "Painter's tape (2 rolls)", price: 16, on: true },
  { id: 'brush', label: '2.5" angled brush', price: 13, on: true },
  { id: 'drop', label: 'Canvas drop cloth', price: 22, on: true },
  { id: 'tray', label: 'Paint tray + liners', price: 10, on: true },
  { id: 'spackle', label: 'Spackle + putty knife', price: 12, on: false },
  { id: 'caulk', label: 'Paintable caulk', price: 7, on: false },
]

/** Paint project cost calculator: gallons + price/gal + supplies checklist. */
export default function PaintCostCalculator() {
  const [mode, setMode] = useState('gallons')
  const [gallonsIn, setGallonsIn] = useState(3)
  const [length, setLength] = useState(12)
  const [width, setWidth] = useState(12)
  const [height, setHeight] = useState(8)
  const [doors, setDoors] = useState(1)
  const [windows, setWindows] = useState(2)
  const [coats, setCoats] = useState('2')
  const [price, setPrice] = useState(45)
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(SUPPLIES.map((s) => [s.id, s.on])),
  )

  const r = useMemo(() => {
    const gallons =
      mode === 'gallons'
        ? Math.max(0, gallonsIn)
        : roundUpToQuart((roomWallArea(length, width, height, doors, windows) * Number(coats)) / 350)
    const paintCost = gallons * price
    const supplies = SUPPLIES.filter((s) => checked[s.id])
    const suppliesCost = supplies.reduce((sum, s) => sum + s.price, 0)
    return { gallons, paintCost, supplies, suppliesCost, total: paintCost + suppliesCost }
  }, [mode, gallonsIn, length, width, height, doors, windows, coats, price, checked])

  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }))

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SelectField
          label="How to enter paint quantity"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'gallons', label: 'Enter gallons directly' },
            { value: 'room', label: 'Estimate from room dimensions' },
          ]}
        />
        {mode === 'gallons' ? (
          <NumberField
            label="Paint needed"
            value={gallonsIn}
            onChange={setGallonsIn}
            unit="gal"
            min={0}
            step={0.25}
          />
        ) : (
          <>
            <NumberField label="Room length" value={length} onChange={setLength} unit="ft" min={1} />
            <NumberField label="Room width" value={width} onChange={setWidth} unit="ft" min={1} />
            <NumberField label="Ceiling height" value={height} onChange={setHeight} unit="ft" min={1} />
            <NumberField label="Doors" value={doors} onChange={setDoors} min={0} step={1} />
            <NumberField label="Windows" value={windows} onChange={setWindows} min={0} step={1} />
            <SelectField
              label="Coats"
              value={coats}
              onChange={setCoats}
              options={[
                { value: '1', label: '1 coat' },
                { value: '2', label: '2 coats' },
              ]}
            />
          </>
        )}
        <NumberField
          label="Price per gallon"
          value={price}
          onChange={setPrice}
          unit="$"
          min={0}
          step={1}
        />
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-semibold text-navy-900">
          Supplies <span className="font-normal text-slate-500">(typical prices — estimates)</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {SUPPLIES.map((s) => (
            <label
              key={s.id}
              className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-2.5 text-sm"
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={!!checked[s.id]}
                  onChange={() => toggle(s.id)}
                  className="h-4 w-4 accent-accent-600"
                />
                <span className="text-slate-700">{s.label}</span>
              </span>
              <span className="font-semibold text-navy-900">${s.price}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow
          label={`Paint (${formatGallons(r.gallons)} × $${price}/gal)`}
          value={`$${r.paintCost.toFixed(2)}`}
        />
        <ResultRow
          label={`Supplies (${r.supplies.length} items)`}
          value={`$${r.suppliesCost.toFixed(2)}`}
          sub="typical prices — your store may vary"
        />
        <ResultRow label="Estimated project total" value={`$${r.total.toFixed(2)}`} />
      </dl>

      <HowCalculated>
        <p>
          Paint cost = {r.gallons.toFixed(2)} gal × ${price} = <strong>${r.paintCost.toFixed(2)}</strong>
        </p>
        <p>
          Supplies = {r.supplies.map((s) => `$${s.price}`).join(' + ') || '$0'} ={' '}
          <strong>${r.suppliesCost.toFixed(2)}</strong>
        </p>
        {mode === 'room' && (
          <p className="text-xs text-slate-500">
            Room estimate: wall area = 2 × {height} × ({length} + {width}) − {doors} × {DOOR_SQFT}{' '}
            − {windows} × {WINDOW_SQFT}, × {coats} coats ÷ 350 sq ft/gal, rounded up to the quart.
          </p>
        )}
        <p className="text-xs text-slate-500">
          Supply prices are typical US retail estimates (2026) — check your local store for exact
          prices.
        </p>
      </HowCalculated>
    </div>
  )
}
