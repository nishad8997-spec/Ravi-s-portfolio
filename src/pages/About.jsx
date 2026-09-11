import React from "react";
import { profileData } from "../data/profile";
import { GraduationCap, ArrowRight, Code2, Cpu } from "lucide-react";

export function About({ setActivePage }) {
  const { about, education } = profileData;

  return (
    <div className="page-container">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <div className="section-eyebrow">
            <Code2 size={16} />
            <span>Background &amp; Philosophy</span>
          </div>
          <h1 className="section-title">About Ravi Nishad</h1>
          <p className="section-desc">{about.lead}</p>
        </header>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-narrative reveal-on-scroll stagger-1">
            {about.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div style={{ marginTop: "1.5rem" }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActivePage("skills");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span>View Technical Capabilities</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar Column: Education & Core Highlights */}
          <div className="about-sidebar">
            {/* Education Card */}
            <div className="education-card reveal-on-scroll stagger-2">
              <div className="education-header">
                <div className="education-icon" aria-hidden="true">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="education-degree">{education.degree}</h3>
                  <p className="education-institution">{education.institution}</p>
                </div>
              </div>

              <div className="education-status">Current Academic Stage: {education.status}</div>

              <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                {education.notes}
              </p>
            </div>

            {/* Development Journey Focus */}
            <div className="card reveal-on-scroll stagger-3">
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Cpu size={18} color="var(--accent-light)" />
                <span>Development Orientation</span>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {about.highlights.map((h, idx) => (
                  <div key={idx} style={{ fontSize: "0.9rem" }}>
                    <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.2rem" }}>
                      {h.title}
                    </strong>
                    <span style={{ color: "var(--text-secondary)", lineHeight: 1.45, display: "block" }}>
                      {h.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
