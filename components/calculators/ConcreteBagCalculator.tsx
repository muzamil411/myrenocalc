'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, HowCalculated, ResultRow } from './fields'
import {
  slabCubicFeet,
  cubicYards,
  bagsNeeded,
  formatCubicYards,
  formatBags,
  BAG_YIELDS,
} from '@/lib/concrete-math'

/** Concrete bag calculator: volume (or slab dims) + bag size -> bags, always rounded up. */
export default function ConcreteBagCalculator() {
  const [mode, setMode] = useState('volume')
  const [volume, setVolume] = useState(48)
  const [length, setLength] = useState(12)
  const [width, setWidth] = useState(12)
  const [thickness, setThickness] = useState(4)
  const [bag, setBag] = useState('80')

  const r = useMemo(() => {
    const cuFt = mode === 'volume' ? volume : slabCubicFeet(length, width, thickness)
    const bags = bagsNeeded(cuFt, bag)
    const bagLb = Number(bag)
    const totalLb = bags * bagLb
    const yd = cubicYards(cuFt)
    const yieldCuFt = BAG_YIELDS[bag] ?? 0.6
    return { cuFt, bags, totalLb, yd, yieldCuFt }
  }, [mode, volume, length, width, thickness, bag])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SelectField
          label="How do you know the volume?"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'volume', label: 'I know the cubic feet' },
            { value: 'slab', label: 'Slab dimensions' },
          ]}
        />
        {mode === 'volume' ? (
          <NumberField label="Volume needed" value={volume} onChange={setVolume} unit="cu ft" min={0.1} step={0.5} />
        ) : (
          <>
            <NumberField label="Length" value={length} onChange={setLength} unit="ft" min={0.5} step={0.5} />
            <NumberField label="Width" value={width} onChange={setWidth} unit="ft" min={0.5} step={0.5} />
            <NumberField label="Thickness" value={thickness} onChange={setThickness} unit="in" min={1} max={24} step={0.5} />
          </>
        )}
        <SelectField
          label="Bag size"
          value={bag}
          onChange={setBag}
          options={[
            { value: '80', label: '80 lb (~0.60 cu ft)' },
            { value: '60', label: '60 lb (~0.45 cu ft)' },
            { value: '50', label: '50 lb (~0.375 cu ft)' },
          ]}
        />
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Volume" value={`${r.cuFt.toFixed(1)} cu ft`} />
        <ResultRow
          label="Bags needed"
          value={formatBags(r.bags)}
          sub={`${bag}-lb bags, always rounded up — never round down concrete`}
        />
        <ResultRow
          label="Total dry weight"
          value={`${r.totalLb.toLocaleString()} lb`}
          sub={`about ${(r.totalLb / 2000).toFixed(1)} tons to haul`}
        />
        <ResultRow
          label="As ready-mix"
          value={formatCubicYards(r.yd)}
          sub="for price comparison with a truck"
        />
      </dl>

      <HowCalculated>
        <p>
          {mode === 'slab' ? (
            <>
              Volume = {length} ft × {width} ft × ({thickness} ÷ 12) in ={' '}
            </>
          ) : (
            <>Volume = </>
          )}
          <strong>{r.cuFt.toFixed(2)} cu ft</strong>
        </p>
        <p>
          Bags = {r.cuFt.toFixed(2)} ÷ {r.yieldCuFt} cu ft per {bag}-lb bag ={' '}
          {(r.cuFt / r.yieldCuFt).toFixed(1)} → rounded <strong>up</strong>:{' '}
          <strong>{r.bags} bags</strong>
        </p>
        <p>
          Ready-mix equivalent = {r.cuFt.toFixed(2)} ÷ 27 = <strong>{r.yd.toFixed(2)} yd³</strong>
        </p>
      </HowCalculated>
    </div>
  )
}
