import React, { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: "0.5rem" }}>
          <span className="tag-chip tag-chip-accent">{project.type}</span>
        </div>

        <h2 id="modal-project-title" style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>
          {project.title}
        </h2>
        <p style={{ color: "var(--accent-light)", fontWeight: 600, marginBottom: "1.25rem" }}>
          {project.tagline}
        </p>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          {project.description}
        </p>

        {project.capabilities && (
          <div style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Confirmed Capabilities
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {project.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.92rem",
                    color: "#cbd5e1",
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-light)" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: "1.5rem" }}>
          <h4
            style={{
              fontSize: "0.85rem",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--text-muted)",
              marginBottom: "0.75rem",
            }}
          >
            Confirmed Technologies
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.note && (
          <div
            style={{
              padding: "0.85rem 1rem",
              background: "var(--bg-surface-2)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
            }}
          >
            {project.note}
          </div>
        )}

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <GithubIcon size={16} />
              <span>View Repository on GitHub</span>
            </a>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
