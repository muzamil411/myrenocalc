'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, HowCalculated, ResultRow } from './fields'
import {
  slabCubicFeet,
  cubicYards,
  roundUpToQuarterYard,
  bagsNeeded,
  formatCubicYards,
  formatBags,
  BAG_YIELDS,
} from '@/lib/concrete-math'

/** Footing calculator: length x width x depth -> cubic yards + bags, with code guidance. */
export default function FootingCalculator() {
  const [length, setLength] = useState(24)
  const [width, setWidth] = useState(16)
  const [depth, setDepth] = useState(12)
  const [bag, setBag] = useState('80')

  const r = useMemo(() => {
    // Reuse slab math: footing is a rectangular prism; width/depth entered in inches.
    const cuFt = slabCubicFeet(length, width / 12, depth)
    const yd = cubicYards(cuFt)
    const orderYd = roundUpToQuarterYard(yd * 1.05)
    const bags = bagsNeeded(cuFt, bag)
    return { cuFt, yd, orderYd, bags }
  }, [length, width, depth, bag])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Footing length" value={length} onChange={setLength} unit="ft" min={0.5} step={0.5} />
        <NumberField label="Footing width" value={width} onChange={setWidth} unit="in" min={4} step={1} />
        <NumberField label="Footing depth" value={depth} onChange={setDepth} unit="in" min={4} max={48} step={1} />
        <SelectField
          label="Bag size (for bag estimate)"
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
        <ResultRow label="As ready-mix" value={formatCubicYards(r.orderYd)} sub="with 5% waste, rounded up to ¼ yard" />
        <ResultRow
          label={`Or in ${bag}-lb bags`}
          value={formatBags(r.bags)}
          sub={`each yields ~${BAG_YIELDS[bag] ?? 0.6} cu ft (Quikrete #1101)`}
        />
      </dl>

      <HowCalculated>
        <p>
          Volume = {length} ft × ({width} ÷ 12) ft × ({depth} ÷ 12) ft ={' '}
          <strong>{r.cuFt.toFixed(2)} cu ft</strong>
        </p>
        <p>
          Cubic yards = {r.cuFt.toFixed(2)} ÷ 27 = {r.yd.toFixed(2)} yd³ → with 5% waste and
          rounding up: <strong>{r.orderYd.toFixed(2)} yd³</strong>
        </p>
        <p>
          Bags = {r.cuFt.toFixed(2)} ÷ {BAG_YIELDS[bag] ?? 0.6} ={' '}
          {(r.cuFt / (BAG_YIELDS[bag] ?? 0.6)).toFixed(1)} → rounded up:{' '}
          <strong>{r.bags} bags</strong>
        </p>
      </HowCalculated>
    </div>
  )
}
