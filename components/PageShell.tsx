import Link from "next/link";
import { Children, isValidElement, type ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
type Section = { id: string; title: string };
export default function PageShell({
  children,
  title,
  path,
  category,
  sections = [],
  updated,
}: {
  children: ReactNode;
  title: string;
  path: string;
  category?: string;
  updated?: string;
  sections?: Section[];
}) {
  const guide = path.startsWith("/guides/");
  const parts = Children.toArray(children);
  const bodyStart = parts.findIndex(
    (child) =>
      isValidElement<{ className?: string }>(child) &&
      child.props.className?.split(" ").includes("article"),
  );
  const header = bodyStart >= 0 ? parts.slice(0, bodyStart) : [];
  const body = bodyStart >= 0 ? parts.slice(bodyStart) : parts;
  const hasEyebrow = header.some(
    (child) => isValidElement(child) && child.type === "p",
  );
  return (
    <div className={`page-shell ${guide ? "guide-shell" : ""}`}>
      <div className="site-container">
        <Breadcrumbs title={title} path={path} category={category} />
        {guide && (
          <div className="guide-hero">
            {!hasEyebrow && (
              <p className="eyebrow">{category} · Project guide</p>
            )}
            {header}
            {updated && (
              <p className="guide-updated">
                Content updated <time dateTime={updated}>{updated}</time>
              </p>
            )}
          </div>
        )}
        <div className={guide ? "guide-layout" : "content-layout"}>
          {guide && (
            <aside className="guide-sidebar">
              <nav aria-label="On this page">
                <p className="eyebrow">In this guide</p>
                <ol>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.title}</a>
                    </li>
                  ))}
                </ol>
                <Link className="sidebar-cta" href="/#calculators">
                  Find a calculator ↗
                </Link>
              </nav>
            </aside>
          )}
          <div className="page-content">{guide ? body : children}</div>
        </div>
      </div>
    </div>
  );
}
