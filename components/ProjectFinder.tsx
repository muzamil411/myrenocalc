"use client";
import Link from "next/link";
import { useState } from "react";
const projects = [
  {
    name: "Paint",
    tools: [
      ["Interior paint", "/tools/interior-paint-calculator/"],
      ["Exterior paint", "/tools/exterior-paint-calculator/"],
      ["Ceiling paint", "/tools/ceiling-paint-calculator/"],
      ["Primer", "/tools/primer-calculator/"],
      ["Paint cost", "/tools/paint-cost-calculator/"],
    ],
  },
  {
    name: "Concrete & masonry",
    tools: [
      ["Concrete slab", "/tools/concrete-calculator/"],
      ["Concrete bags", "/tools/concrete-bag-calculator/"],
      ["Foundation footing", "/tools/footing-concrete-calculator/"],
    ],
  },
  {
    name: "Gravel",
    tools: [["Gravel & base material", "/tools/gravel-calculator/"]],
  },
];
export default function ProjectFinder() {
  const [project, setProject] = useState(0);
  const [tool, setTool] = useState(0);
  return (
    <div className="project-finder">
      <label>
        <span className="finder-icon" aria-hidden="true">
          ⌂
        </span>
        <span className="finder-field">
          <span className="finder-label">YOUR PROJECT</span>
          <select
            aria-label="Project type"
            value={project}
            onChange={(e) => {
              setProject(Number(e.target.value));
              setTool(0);
            }}
          >
            {projects.map((p, i) => (
              <option key={p.name} value={i}>
                {p.name}
              </option>
            ))}
          </select>
        </span>
      </label>
      <label>
        <span className="finder-icon" aria-hidden="true">
          ▦
        </span>
        <span className="finder-field">
          <span className="finder-label">CHOOSE A CALCULATOR</span>
          <select
            aria-label="Calculator"
            value={tool}
            onChange={(e) => setTool(Number(e.target.value))}
          >
            {projects[project].tools.map(([name], i) => (
              <option key={name} value={i}>
                {name}
              </option>
            ))}
          </select>
        </span>
      </label>
      <Link className="finder-submit" href={projects[project].tools[tool][1]}>
        Calculate my project <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
