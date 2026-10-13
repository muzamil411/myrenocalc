import Link from "next/link";
const GROUPS = [
  {
    title: "Calculators",
    links: [
      ["Paint", "/tools/interior-paint-calculator/"],
      ["Concrete & masonry", "/tools/concrete-calculator/"],
      ["Gravel", "/tools/gravel-calculator/"],
      ["All project categories", "/#calculators"],
    ],
  },
  {
    title: "Project guides",
    links: [
      ["Paint coverage", "/guides/paint-coverage-per-gallon/"],
      ["Measure a room", "/guides/how-to-measure-room-for-paint/"],
      ["Concrete planning", "/guides/how-much-does-a-yard-of-concrete-cover/"],
      ["All guides", "/#guides"],
      ["Common questions", "/faq/"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Home", "/"],
      ["About", "/about/"],
      ["Contact", "/contact/"],
      ["Privacy Policy", "/privacy-policy/"],
      ["Terms of Use", "/terms/"],
      ["Disclaimer", "/disclaimer/"],
    ],
  },
];
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              My<span className="brand-accent">Reno</span>Calc
            </Link>
            <p>
              Every project starts with a number. Free home improvement
              calculators with the math shown and sources cited.
            </p>
            <span className="footer-note">
              Built for better project planning.
            </span>
          </div>
          {GROUPS.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title}`}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            All calculators provide estimates for planning purposes. Verify
            quantities and costs with your contractor or supplier before
            purchasing materials.
          </p>
          <p>© 2026 MyRenoCalc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
