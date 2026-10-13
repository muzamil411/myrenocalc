import Link from "next/link";
import type { ReactNode } from "react";
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="section-subtitle">{children}</div>}
    </div>
  );
}
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`premium-card ${className}`}>{children}</div>;
}
export function Badge({ live }: { live: boolean }) {
  return (
    <span className={`badge ${live ? "badge-live" : ""}`}>
      {live ? "Live" : "Coming soon"}
    </span>
  );
}
export function ProjectIcon({ index = 0 }: { index?: number }) {
  const paths = [
    "M5 4h14v7H5z M12 11v9 M8 20h8",
    "M3 6h18v12H3z M3 12h18 M9 6v6 M15 12v6",
    "M4 4h16v16H4z M4 12h16 M12 4v16",
    "M4 3h16v18H4z M8 7h8 M8 12h8 M8 17h8",
    "M4 4v16 M9 4v16 M14 4v16 M19 4v16 M2 8h20 M2 16h20",
    "M12 21v-9 M12 15C2 15 3 4 3 4s9 0 9 11 M12 12c0-9 9-9 9-9s1 9-9 9",
  ];
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[index % paths.length]} />
    </svg>
  );
}
export function StatsBand() {
  return (
    <section className="stats-band" aria-label="Our library in numbers">
      <div className="site-container stats-grid">
        {[
          ["09", "Free calculators"],
          ["11", "Project guides"],
          ["02", "Live project categories"],
          ["00", "Black-box answers"],
        ].map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ProcessSteps() {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="A clearer way to plan"
          title="From measurements to materials in 4 steps"
        />
        <ol className="process-grid">
          {[
            "Enter your measurements",
            "We apply verified formulas",
            "Get your planning quantities",
            "Buy with confidence",
          ].map((title, i) => (
            <li key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>
                {
                  [
                    "Start with the dimensions of your room or project.",
                    "Coverage rates and material yields, with the sources shown.",
                    "See the result, the rounding, and the math behind it.",
                    "Check the stated limitations with your contractor or supplier.",
                  ][i]
                }
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="site-container">
        <div>
          <p className="eyebrow">Measure. Calculate. Make it happen.</p>
          <h2>Start your project with the right numbers.</h2>
        </div>
        <Button href="/#calculators">Browse calculators</Button>
      </div>
    </section>
  );
}
