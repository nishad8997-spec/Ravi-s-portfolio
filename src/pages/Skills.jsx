import React from "react";
import { skillsData } from "../data/skills";
import { SkillCard } from "../components/SkillCard";
import { Layers } from "lucide-react";

export function Skills() {
  return (
    <div className="page-container">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <div className="section-eyebrow">
            <Layers size={16} />
            <span>Structured Capabilities</span>
          </div>
          <h1 className="section-title">Skills &amp; Architecture</h1>
          <p className="section-desc">
            Organized into dedicated capability domains representing foundational web engineering, backend logic, and emerging AI automation workflows.
          </p>
        </header>

        <div className="skills-matrix">
          {skillsData.map((skill, idx) => (
            <div key={skill.id} className={`reveal-on-scroll stagger-${(idx % 4) + 1}`}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
