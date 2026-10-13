'use client'

import type { ReactNode } from 'react'

/** Labeled numeric input with unit suffix. */
export function NumberField({
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 1,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  unit?: string
  min?: number
  max?: number
  step?: number
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-navy-900">{label}</span>
      <span className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-navy-900 shadow-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
        />
        {unit && <span className="shrink-0 text-sm text-slate-500">{unit}</span>}
      </span>
    </label>
  )
}

/** Labeled select input. */
export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-navy-900">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-navy-900 shadow-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}

/** Labeled checkbox row. */
export function CheckField({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string
  hint?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 accent-accent-600"
      />
      <span>
        <span className="block text-sm font-semibold text-navy-900">{label}</span>
        {hint && <span className="block text-xs text-slate-500">{hint}</span>}
      </span>
    </label>
  )
}

/** Collapsible "how we calculate" block showing the formula with real numbers. */
export function HowCalculated({ children }: { children: ReactNode }) {
  return (
    <details className="mt-5 rounded-lg bg-navy-900/5 px-4 py-3 text-sm text-slate-700">
      <summary className="cursor-pointer font-semibold text-navy-900">
        How we calculate this (with your numbers)
      </summary>
      <div className="mt-2 space-y-1.5 [&>p]:my-1.5">{children}</div>
    </details>
  )
}

/** Highlighted result row. */
export function ResultRow({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub?: string
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 py-2.5 last:border-0">
      <dt className="text-sm text-slate-600">{label}</dt>
      <dd className="text-right">
        <span className="text-lg font-extrabold text-navy-900">{value}</span>
        {sub && <span className="block text-xs text-slate-500">{sub}</span>}
      </dd>
    </div>
  )
}
