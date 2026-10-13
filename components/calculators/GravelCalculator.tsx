'use client'

import { useMemo, useState } from 'react'
import { NumberField, SelectField, HowCalculated, ResultRow } from './fields'
import {
  slabCubicFeet,
  cubicYards,
  gravelTons,
  GRAVEL_DENSITIES,
} from '@/lib/concrete-math'

/** Gravel calculator: area x depth -> cubic yards + estimated tons by material. */
export default function GravelCalculator() {
  const [length, setLength] = useState(20)
  const [width, setWidth] = useState(10)
  const [depth, setDepth] = useState(4)
  const [material, setMaterial] = useState('crushedStone')
  const [compaction, setCompaction] = useState(10)

  const r = useMemo(() => {
    const cuFt = slabCubicFeet(length, width, depth)
    const yd = cubicYards(cuFt)
    const tons = gravelTons(yd, material, compaction)
    const density = GRAVEL_DENSITIES[material]?.tonsPerYard ?? 1.4
    return { cuFt, yd, tons, density }
  }, [length, width, depth, material, compaction])

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Length" value={length} onChange={setLength} unit="ft" min={0.5} step={0.5} />
        <NumberField label="Width" value={width} onChange={setWidth} unit="ft" min={0.5} step={0.5} />
        <NumberField label="Depth" value={depth} onChange={setDepth} unit="in" min={0.5} max={24} step={0.5} />
        <SelectField
          label="Material"
          value={material}
          onChange={setMaterial}
          options={Object.entries(GRAVEL_DENSITIES).map(([value, d]) => ({
            value,
            label: d.label,
          }))}
        />
        <NumberField
          label="Compaction allowance"
          value={compaction}
          onChange={setCompaction}
          unit="%"
          min={0}
          max={30}
          step={5}
        />
      </div>

      <dl className="mt-6 rounded-lg bg-slate-50 px-5 py-2">
        <ResultRow label="Volume" value={`${r.cuFt.toFixed(1)} cu ft`} />
        <ResultRow
          label="Cubic yards"
          value={`${(Math.round(r.yd * 100) / 100).toFixed(2)} yd³`}
          sub="suppliers sell bulk by the yard or the ton"
        />
        <ResultRow
          label="Estimated weight"
          value={`~${r.tons.toFixed(1)} tons`}
          sub={`at ~${r.density} tons/yd³ — confirm with your supplier`}
        />
      </dl>

      <HowCalculated>
        <p>
          Volume = {length} ft × {width} ft × ({depth} ÷ 12) in ={' '}
          <strong>{r.cuFt.toFixed(2)} cu ft</strong>
        </p>
        <p>
          Cubic yards = {r.cuFt.toFixed(2)} ÷ 27 = <strong>{r.yd.toFixed(2)} yd³</strong>
        </p>
        <p>
          Tons = {r.yd.toFixed(2)} yd³ × {r.density} tons/yd³ × {(1 + compaction / 100).toFixed(2)}{' '}
          ({compaction}% compaction) = <strong>~{r.tons.toFixed(2)} tons</strong>
        </p>
        <p className="text-slate-500">
          Density varies by quarry, stone size and moisture — treat tons as an estimate and
          confirm the conversion with whoever delivers it.
        </p>
      </HowCalculated>
    </div>
  )
}
