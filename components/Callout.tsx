import type { ReactNode } from 'react'

type Variant = 'method' | 'limitation' | 'note'

const STYLES: Record<Variant, { box: string; label: string }> = {
  method: {
    box: 'border-navy-800/30 bg-navy-900/5',
    label: 'How the math works',
  },
  limitation: {
    box: 'border-accent-600/40 bg-accent-500/10',
    label: 'Limitations',
  },
  note: {
    box: 'border-slate-300 bg-slate-50',
    label: 'Note',
  },
}

/** Callout box for method explanations and limitation statements on calculator pages. */
export default function Callout({
  variant = 'note',
  title,
  children,
}: {
  variant?: Variant
  title?: string
  children: ReactNode
}) {
  const s = STYLES[variant]
  return (
    <aside className={`my-6 rounded-xl border-l-4 px-5 py-4 ${s.box}`}>
      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-navy-900">
        {title ?? s.label}
      </p>
      <div className="text-slate-700 [&>p]:my-2">{children}</div>
    </aside>
  )
}
