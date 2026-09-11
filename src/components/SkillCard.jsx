import React from "react";
import { Layers, Code2, Workflow, Server, Sparkles } from "lucide-react";

export function SkillCard({ skill }) {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Layers":
        return <Layers size={22} />;
      case "Code2":
        return <Code2 size={22} />;
      case "Workflow":
        return <Workflow size={22} />;
      case "Server":
        return <Server size={22} />;
      case "Sparkles":
        return <Sparkles size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  return (
    <article className="skill-card" aria-labelledby={`skill-title-${skill.id}`}>
      <div className="skill-card-top">
        <div className="skill-icon-wrapper" aria-hidden="true">
          {renderIcon(skill.icon)}
        </div>
        {skill.badge && <span className="tag-chip tag-chip-accent">{skill.badge}</span>}
      </div>

      <h3 id={`skill-title-${skill.id}`} className="skill-card-title">
        {skill.category}
      </h3>
      <p className="skill-card-desc">{skill.description}</p>

      <div className="skill-tag-group">
        {skill.technologies.map((tech, idx) => (
          <span key={idx} className="tag-chip">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
