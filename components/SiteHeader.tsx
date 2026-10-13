import Link from 'next/link'

const NAV = [
  { href: '/#calculators', label: 'Calculators' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="MyRenoCalc home">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="24" height="24" rx="6" fill="#f59e0b" />
            <path
              d="M8 20 L20 8 M11 20 L14 20 L14 17 M17 11 L17 8 L20 8"
              stroke="#16324f"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-tight">
            My<span className="text-accent-500">Reno</span>Calc
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-200 transition hover:text-accent-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
