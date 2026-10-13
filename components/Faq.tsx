'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/seo'

/** Accessible FAQ accordion. Client component (used inside MDX pages too). */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900 hover:bg-slate-50"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-xl text-accent-600">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
              className="px-5 pb-5 text-slate-700"
            >
              <p className="m-0">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
