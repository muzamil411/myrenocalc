import { Children, isValidElement, type ReactNode } from "react";

function sourceText(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) =>
      typeof child === "string" || typeof child === "number"
        ? String(child)
        : isValidElement<{ children?: ReactNode }>(child)
          ? sourceText(child.props.children)
          : "",
    )
    .join(" ");
}
function SourceChips({ children }: { children: ReactNode }) {
  const text = sourceText(children);
  const sources = [
    {
      match: "Sherwin-Williams",
      name: "Sherwin-Williams · Product data",
      href: "https://sherlink.sherwin.com/sher-link/ViewHearsCountryCodeDoc?language=E&sku=650096506&type=DP",
    },
    {
      match: "KILZ",
      name: "KILZ · PVA primer coverage",
      href: "https://www.kilz.com/primer/kilz-drywall-pva-primer",
    },
    {
      match: "Quikrete",
      name: "QUIKRETE · No. 1101 data sheet",
      href: "https://www.quikrete.com/pdfs/data_sheet-concrete%20mix%201101.pdf",
    },
  ].filter((source) => text.includes(source.match));
  return sources.length > 0 ? (
    <div className="source-chips" aria-label="Manufacturer references">
      {sources.map((source) => (
        <a key={source.href} href={source.href}>
          {source.name} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  ) : null;
}

type Variant = "method" | "limitation" | "note";

const STYLES: Record<Variant, { box: string; label: string }> = {
  method: {
    box: "border-navy-800/30 bg-navy-900/5",
    label: "How the math works",
  },
  limitation: {
    box: "border-accent-600/40 bg-accent-500/10",
    label: "Limitations",
  },
  note: {
    box: "border-slate-300 bg-slate-50",
    label: "Note",
  },
};

/** Callout box for method explanations and limitation statements on calculator pages. */
export default function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const s = STYLES[variant];
  return (
    <aside className={`my-6 rounded-xl border-l-4 px-5 py-4 ${s.box}`}>
      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-navy-900">
        {title ?? s.label}
      </p>
      <div className="text-slate-700 [&>p]:my-2">{children}</div>
      {variant === "method" && <SourceChips>{children}</SourceChips>}
    </aside>
  );
}
