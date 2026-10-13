import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">
              My<span className="text-accent-500">Reno</span>Calc
            </p>
            <p className="mt-2 text-sm">
              Every project starts with a number. Free home improvement calculators with the
              math shown and sources cited.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-white">Site</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/" className="hover:text-accent-500">Home</Link></li>
              <li><Link href="/#calculators" className="hover:text-accent-500">Calculators</Link></li>
              <li><Link href="/about/" className="hover:text-accent-500">About</Link></li>
              <li><Link href="/contact/" className="hover:text-accent-500">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/privacy-policy/" className="hover:text-accent-500">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-accent-500">Terms of Use</Link></li>
              <li><Link href="/disclaimer/" className="hover:text-accent-500">Disclaimer</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs">
          <p>
            All calculators provide estimates for planning purposes. Verify quantities and
            costs with your contractor or supplier before purchasing materials.
          </p>
          <p className="mt-2">© 2026 MyRenoCalc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
