import type { ReactNode } from "react";
export default function CalculatorShell({ children }: { children: ReactNode }) {
  return (
    <section className="calculator-shell" aria-label="Project calculator">
      <div className="calculator-caption">
        <span className="eyebrow">Your project, calculated</span>
        <span>Instant results · Math shown</span>
      </div>
      {children}
    </section>
  );
}
