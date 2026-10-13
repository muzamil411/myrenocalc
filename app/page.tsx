import {
  Badge,
  Button,
  Card,
  CtaBand,
  ProcessSteps,
  ProjectIcon,
  SectionHeading,
  StatsBand,
} from "@/components/Design";
import Faq from "@/components/Faq";
import { homeFaqs } from "@/lib/home-faq";
import Link from "next/link";
import { buildMetadata, jsonLdFaq } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MyRenoCalc — Home Improvement Calculators",
  description:
    "Free home improvement calculators with the math shown and sources cited. Paint, concrete, flooring, drywall, lumber and more — every project starts with a number.",
  path: "/",
});

type CalcItem = { name: string; href?: string };
type CalcGroup = { name: string; items: CalcItem[] };

const GROUPS: CalcGroup[] = [
  {
    name: "Paint",
    items: [
      {
        name: "Interior paint calculator",
        href: "/tools/interior-paint-calculator/",
      },
      {
        name: "Exterior paint calculator",
        href: "/tools/exterior-paint-calculator/",
      },
      {
        name: "Ceiling paint calculator",
        href: "/tools/ceiling-paint-calculator/",
      },
      { name: "Primer calculator", href: "/tools/primer-calculator/" },
      { name: "Paint cost estimator", href: "/tools/paint-cost-calculator/" },
    ],
  },
  {
    name: "Concrete & Masonry",
    items: [
      { name: "Concrete slab calculator", href: "/tools/concrete-calculator/" },
      {
        name: "Concrete bag calculator",
        href: "/tools/concrete-bag-calculator/",
      },
      {
        name: "Footing concrete calculator",
        href: "/tools/footing-concrete-calculator/",
      },
      { name: "Gravel calculator", href: "/tools/gravel-calculator/" },
    ],
  },
  {
    name: "Flooring",
    items: [
      { name: "Flooring calculator" },
      { name: "Tile calculator" },
      { name: "Laminate box calculator" },
      { name: "Hardwood estimator" },
    ],
  },
  {
    name: "Drywall",
    items: [
      { name: "Drywall sheet calculator" },
      { name: "Joint compound estimator" },
    ],
  },
  {
    name: "Lumber & Decking",
    items: [
      { name: "Board-foot calculator" },
      { name: "Deck board estimator" },
      { name: "Fence picket calculator" },
    ],
  },
  {
    name: "Landscaping",
    items: [
      { name: "Mulch calculator" },
      { name: "Topsoil calculator" },
      { name: "Paver calculator" },
    ],
  },
];

const PRINCIPLES = [
  {
    title: "We show the formula",
    body: "No black boxes. Every calculator explains the math in plain English so you can check our work — and trust the number you take to the store.",
  },
  {
    title: "Every figure is sourced",
    body: "Coverage rates, bag yields, waste factors — each number traces to a manufacturer tech sheet or industry standard, cited visibly on the page.",
  },
  {
    title: "Worked examples, real numbers",
    body: "Each tool walks through a concrete example step by step, so you see exactly how your inputs turn into a result.",
  },
  {
    title: "Limitations stated up front",
    body: "Texture, waste, uneven surfaces — we tell you what the calculator does not account for, before you buy materials.",
  },
];

const GUIDES = [
  {
    name: "How much paint for a 12×12 room?",
    href: "/guides/how-much-paint-for-12x12-room/",
    excerpt:
      "How much paint for a 12x12 room? Exactly 2 gallons for two coats on the walls — with the math shown, a room-size table, plus ceiling and primer notes.",
  },
  {
    name: "Paint coverage per gallon by type",
    href: "/guides/paint-coverage-per-gallon/",
    excerpt:
      "Interior latex covers about 350 sq ft per gallon per coat, but primer, exterior paint, and textured finishes differ — full coverage table with sources cited.",
  },
  {
    name: "How to measure a room for paint",
    href: "/guides/how-to-measure-room-for-paint/",
    excerpt:
      "Measure a room for paint in 8 steps: wall lengths, ceiling height, door and window allowances, ceilings, and trim — with a worked 12x14 example included.",
  },
  {
    name: "How many coats of paint do walls need?",
    href: "/guides/how-many-coats-of-paint/",
    excerpt:
      "Most interior walls need two coats of paint. Learn when one coat is enough, when new drywall and dark-to-light changes need primer plus two, and ceiling rules.",
  },
  {
    name: "Exterior paint for a 2,000 sq ft house",
    href: "/guides/exterior-paint-for-2000-sq-ft-house/",
    excerpt:
      "How much exterior paint for a 2,000 sq ft house? About 8 gallons for smooth siding, 9 for textured, 11 for brick — full worked example with sources.",
  },
  {
    name: "Paint cost per square foot (2026)",
    href: "/guides/paint-cost-per-square-foot/",
    excerpt:
      "Interior paint costs $0.11–0.49 per sq ft in materials by tier, and 2026 pro labor runs $2–6 per sq ft of floor space (estimate) — full 2026 breakdown.",
  },
  {
    name: "7 paint quantity mistakes that waste money",
    href: "/guides/paint-quantity-mistakes/",
    excerpt:
      "Seven paint quantity mistakes that waste money — from forgetting the second coat to one coverage rate for textured walls — and how to avoid each one.",
  },
  {
    name: "How much does a yard of concrete cover?",
    href: "/guides/how-much-does-a-yard-of-concrete-cover/",
    excerpt:
      "One cubic yard of concrete covers 81 sq ft at 4 inches, 65 at 5 inches, 54 at 6 inches. Coverage tables, 2026 cost per yard, and project examples.",
  },
  {
    name: "Quikrete vs. ready-mix: bags or truck?",
    href: "/guides/quikrete-vs-ready-mix/",
    excerpt:
      "Bags or a concrete truck? Bag-count tables for common slabs, 2026 cost comparison per yard, and the real break-even point — with the math shown.",
  },
  {
    name: "Concrete curing timeline (24h to 28 days)",
    href: "/guides/concrete-curing-time/",
    excerpt:
      "How long does concrete take to cure? Foot traffic at 24-48h, ~70% strength at 7 days, full strength at 28 days — timeline, factors, and practical do’s and don’ts.",
  },
  {
    name: "How thick should a concrete slab be?",
    href: "/guides/how-thick-should-concrete-slab-be/",
    excerpt:
      "4 inches for patios, 5 for driveways, 6 for heavy loads — slab thickness by use case, rebar guidance, and what each extra inch costs. With the math.",
  },
];
const DESCRIPTIONS = [
  "Walls, ceilings, primer, and the cost of a fresh start.",
  "Plan slabs, bag counts, footings, and gravel.",
  "Plan the materials beneath your feet.",
  "A solid foundation for finished walls.",
  "Make every board and every cut count.",
  "Bring your outdoor project into focus.",
];
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq(homeFaqs.slice(0, 5))),
        }}
      />
      <section className="home-hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Free home-project calculators</p>
            <h1>
              Every project starts with <span>a number.</span>
            </h1>
            <p className="hero-description">
              MyRenoCalc builds free calculators for real home projects — how
              much paint to buy, how many bags of concrete you need, what the
              flooring will cost. We show the math, cite our sources, and state
              the limitations.
            </p>
            <div className="hero-actions">
              <Button href="#calculators">Browse calculators</Button>
              <Button href="#method" secondary>
                How we calculate
              </Button>
            </div>
            <p className="hero-microcopy">
              <span aria-hidden="true">✓</span> 9 calculators · 11 guides ·
              every figure sourced
            </p>
          </div>
          <aside className="hero-start" aria-label="Choose a project">
            <p className="eyebrow">Start with your project</p>
            <h2>What are you planning?</h2>
            <div className="quick-projects">
              {[
                {
                  title: "Paint a room",
                  detail: "Wall area, paint quantity, and primer.",
                  href: "/tools/interior-paint-calculator/",
                },
                {
                  title: "Pour a concrete slab",
                  detail: "Cubic yards, waste allowance, and bags.",
                  href: "/tools/concrete-calculator/",
                },
                {
                  title: "Lay a gravel base",
                  detail: "Volume, estimated weight, and compaction.",
                  href: "/tools/gravel-calculator/",
                },
              ].map((project, i) => (
                <Link key={project.href} href={project.href}>
                  <span className="quick-number">0{i + 1}</span>
                  <span>
                    <strong>{project.title}</strong>
                    <small>{project.detail}</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <p className="quick-note">
              Free tools. Clear formulas. No sign-up.
            </p>
          </aside>
        </div>
      </section>
      <section id="calculators" className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="The project library"
            title="Browse by project"
          >
            <p>
              We are building these calculators one project type at a time —
              paint and concrete are live. Everything below is honestly labeled
              — check back as new tools go live.
            </p>
          </SectionHeading>
          <div className="directory-grid">
            {GROUPS.map((group, i) => (
              <Card key={group.name} className="directory-card">
                <div className="card-top">
                  <span className="project-icon">
                    <ProjectIcon index={i} />
                  </span>
                  <span className="card-index">0{i + 1}</span>
                </div>
                <h3>{group.name}</h3>
                <p className="category-description">{DESCRIPTIONS[i]}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      {item.href ? (
                        <Link href={item.href}>{item.name}</Link>
                      ) : (
                        <span>{item.name}</span>
                      )}
                      <Badge live={!!item.href} />
                    </li>
                  ))}
                </ul>
                {group.items.some((item) => item.href) && (
                  <a
                    className="card-bottom-link"
                    href={
                      i === 0
                        ? "/tools/interior-paint-calculator/"
                        : "/tools/concrete-calculator/"
                    }
                  >
                    Start with {i === 0 ? "paint" : "concrete"}{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="method" className="section-space tinted-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="The math behind the confidence"
            title="Why trust our numbers"
          >
            <p>
              Most online calculators give you a number and ask you to trust it.
              We do it differently — four promises on every tool we publish:
            </p>
          </SectionHeading>
          <div className="principles-grid">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="principle">
                <span className="principle-icon">
                  <ProjectIcon index={i} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
      <ProcessSteps />
      <section id="guides" className="section-space tinted-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="A little knowledge goes a long way"
            title="Project guides"
          >
            <p>
              Step-by-step guides that go with our calculators — paint quantity
              and concrete planning: coverage rates, measuring, curing, and the
              mistakes that waste money.
            </p>
          </SectionHeading>
          <div className="guides-grid">
            {GUIDES.map((guide, i) => (
              <Link
                href={guide.href}
                key={guide.href}
                className="premium-card guide-card"
              >
                <span className="guide-category">
                  {i < 7 ? "PAINT" : "CONCRETE & MASONRY"}{" "}
                  <span>GUIDE {String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3>{guide.name}</h3>
                <p>{guide.excerpt}</p>
                <span className="read-more">
                  Read the guide <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container faq-layout">
          <div>
            <SectionHeading
              eyebrow="Before you buy"
              title="Good questions. Clear answers."
            />
            <p className="section-subtitle">
              A few common paint-planning questions, answered with the same math
              you will find in our tools.
            </p>
            <Link className="text-link" href="/faq/">
              See all questions →
            </Link>
          </div>
          <Faq items={homeFaqs.slice(0, 5)} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
