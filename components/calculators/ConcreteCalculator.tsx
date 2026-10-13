'use client'

import { useMemo, useState } from 'react'
import { NumberField, HowCalculated, ResultRow } from './fields'
import {
  slabCubicFeet,
  cubicYards,
  roundUpToQuarterYard,
  bagsNeeded,
  formatCubicYards,
  formatBags,
  BAG_YIELDS,
} from '@/lib/concrete-math'

/** Concrete slab calculator: L x W x thickness -> cubic yards + 80-lb bag equivalent. */
export default function ConcreteCalculator() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(10)
  const [thickness, setThickness] = useState(4)
  const [waste, setWaste] = useState(5)

  const r = useMemo(() => {
    const cuFt = slabCubicFeet(length, width, thickness)
    const exactYd = cubicYards(cuFt)
    const withWaste = exactYd * (1 + waste / 100)
    const orderYd = roundUpToQuarterYard(withWaste)
    const bags = bagsNeeded(cuFt * (1 + waste / 100), '80')
    return { cuFt, exactYd, withWaste, orderYd, bags }
  }, [length, width, thickness, waste])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Length" value={length} onChange={setLength} unit="ft" min={0.5} step={0.5} />
        <NumberField label="Width" value={width} onChange={setWidth} unit="ft" min={0.5} step={0.5} />
        <NumberField label="Thickness" value={thickness} onChange={setThickness} unit="in" min={1} max={24} step={0.5} />
        <NumberField label="Waste allowance" value={waste} onChange={setWaste} unit="%" min={0} max={25} step={1} />
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Volume" value={`${r.cuFt.toFixed(1)} cu ft`} />
        <ResultRow label="Exact cubic yards" value={formatCubicYards(r.exactYd)} sub="before waste allowance" />
        <ResultRow
          label="Order this much"
          value={formatCubicYards(r.orderYd)}
          sub={`with ${waste}% waste, rounded up to the nearest ¼ yard`}
        />
        <ResultRow
          label="Or in 80-lb bags"
          value={formatBags(r.bags)}
          sub={`each yields ~${BAG_YIELDS['80']} cu ft (Quikrete #1101)`}
        />
      </dl>

      <HowCalculated>
        <p>
          Volume = {length} ft × {width} ft × ({thickness} ÷ 12) in ={' '}
          <strong>{r.cuFt.toFixed(2)} cu ft</strong>
        </p>
        <p>
          Cubic yards = {r.cuFt.toFixed(2)} ÷ 27 = <strong>{r.exactYd.toFixed(2)} yd³</strong>
        </p>
        <p>
          With {waste}% waste: {r.exactYd.toFixed(2)} × {(1 + waste / 100).toFixed(2)} ={' '}
          {r.withWaste.toFixed(2)} yd³ → rounded up to the nearest ¼ yard:{' '}
          <strong>{r.orderYd.toFixed(2)} yd³</strong>
        </p>
        <p>
          Bags (80 lb, 0.60 cu ft each): {(r.cuFt * (1 + waste / 100)).toFixed(2)} ÷ 0.60 ={' '}
          {((r.cuFt * (1 + waste / 100)) / 0.6).toFixed(1)} → always round up:{' '}
          <strong>{r.bags} bags</strong>
        </p>
      </HowCalculated>
    </div>
  )
}
