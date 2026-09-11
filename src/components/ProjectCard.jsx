import React from "react";
import { CheckCircle2, Terminal, Globe } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectCard({ project, onOpenDetails }) {
  return (
    <article className="project-card" aria-labelledby={`proj-heading-${project.id}`}>
      {/* Content Column */}
      <div className="project-content">
        <div className="project-meta-row">
          <span className="tag-chip tag-chip-accent">{project.type}</span>
          {project.featured && (
            <span className="tag-chip" style={{ color: "#fbbf24", borderColor: "rgba(251, 191, 36, 0.3)" }}>
              Featured Build
            </span>
          )}
        </div>

        <h3 id={`proj-heading-${project.id}`} className="project-title">
          {project.title}
        </h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        {project.capabilities && (
          <div>
            <h4 className="project-capabilities-title">Key Capabilities</h4>
            <ul className="project-capabilities-list">
              {project.capabilities.map((cap, idx) => (
                <li key={idx} className="project-capability-item">
                  <CheckCircle2 size={15} />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-footer">
          <div className="skill-tag-group">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-accent"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <GithubIcon size={15} />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => onOpenDetails(project)}
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Visual Preview Column */}
      <div className="project-visual">
        {project.visualType === "terminal-studio" ? (
          <div className="mockup-window" aria-label="AI Content Studio Visual Preview">
            <div className="mockup-bar">
              <span className="mockup-dot mockup-dot-red"></span>
              <span className="mockup-dot mockup-dot-yellow"></span>
              <span className="mockup-dot mockup-dot-green"></span>
              <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                ai-content-studio
              </span>
            </div>
            <div className="mockup-body">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Terminal size={14} color="var(--accent-light)" />
                <span className="mockup-command">python generate_content.py --mode=script</span>
              </div>
              <div style={{ padding: "0.6rem", background: "rgba(0,0,0,0.3)", borderRadius: "4px" }}>
                <div style={{ color: "#38bdf8", marginBottom: "4px" }}>[Workflow Active] Prompt Pipeline:</div>
                <div style={{ color: "#cbd5e1", fontSize: "0.78rem" }}>
                  • Creator Script Outline<br />
                  • SEO Title &amp; Description<br />
                  • Hook &amp; High-Retention Captions
                </div>
              </div>
              <div className="mockup-chip-preview">
                <span className="tag-chip tag-chip-accent" style={{ fontSize: "0.72rem" }}>
                  5 Content Modes
                </span>
                <span className="tag-chip" style={{ fontSize: "0.72rem" }}>
                  Prompt Calibration
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mockup-window" aria-label="Personal Website Build Visual Preview">
            <div className="mockup-bar">
              <span className="mockup-dot mockup-dot-red"></span>
              <span className="mockup-dot mockup-dot-yellow"></span>
              <span className="mockup-dot mockup-dot-green"></span>
              <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                custom-client-web
              </span>
            </div>
            <div className="mockup-body" style={{ minHeight: "130px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <Globe size={32} color="var(--accent-light)" style={{ marginBottom: "0.5rem" }} />
              <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>
                Bespoke Digital Identity
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", maxWidth: "240px" }}>
                Clean semantic layout, structured sections, and responsive UI engineering.
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
