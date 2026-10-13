"use client";
import Link from "next/link";
import { useState } from "react";
const NAV = [
  { href: "/#calculators", label: "Calculators" },
  { href: "/#guides", label: "Guides" },
  { href: "/about/", label: "Our methodology" },
  { href: "/contact/", label: "Contact" },
];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="MyRenoCalc home"
          onClick={() => setOpen(false)}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="9" fill="#F59E0B" />
            <path
              d="M8 24V13l8-6 8 6v11H8z M13 24v-8h6v8"
              stroke="#0F2A43"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            My<span className="brand-accent">Reno</span>Calc
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav
          id="primary-nav"
          aria-label="Primary"
          className={open ? "primary-nav is-open" : "primary-nav"}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-action"
            href="/#calculators"
            onClick={() => setOpen(false)}
          >
            Plan a project <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
