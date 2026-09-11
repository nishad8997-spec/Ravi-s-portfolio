import React, { useState } from "react";
import { experimentsData } from "../data/experiments";
import { Sparkles, Video, Workflow, Terminal, FileCode2, CheckCircle2 } from "lucide-react";

export function ContentExperiments() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "AI Automation", "Creative Exploration", "Prompt Architecture", "Developer Tooling"];

  const filteredExperiments =
    selectedTag === "All"
      ? experimentsData
      : experimentsData.filter((item) => item.tag === selectedTag);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "Video":
        return <Video size={22} />;
      case "Workflow":
        return <Workflow size={22} />;
      case "Terminal":
        return <Terminal size={22} />;
      case "FileCode2":
        return <FileCode2 size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <div className="page-container">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <div className="section-eyebrow">
            <Sparkles size={16} />
            <span>Creative AI &amp; Prototyping</span>
          </div>
          <h1 className="section-title">Builds &amp; Experiments</h1>
          <p className="section-desc">
            A creative sandbox exploring generative AI video pipelines, prompt architectures, n8n automation flows, and developer tooling. Video generation and prompt design are showcased here as practical demonstrations of creative AI workflows.
          </p>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            {tags.map((tag) => (
              <button
                key={tag}
                className={`tag-chip ${selectedTag === tag ? "tag-chip-accent" : ""}`}
                style={{ cursor: "pointer", border: "1px solid var(--border-subtle)" }}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>

        <div className="experiments-grid">
          {filteredExperiments.map((item, idx) => (
            <article
              key={item.id}
              className={`experiment-card reveal-on-scroll stagger-${(idx % 4) + 1}`}
              aria-labelledby={`exp-title-${item.id}`}
            >
              <div className="experiment-top">
                <div className="experiment-icon" aria-hidden="true">
                  {renderIcon(item.icon)}
                </div>
                <span className="tag-chip tag-chip-accent">{item.status}</span>
              </div>

              <h3 id={`exp-title-${item.id}`} className="experiment-title">
                {item.title}
              </h3>
              <p className="experiment-desc">{item.description}</p>
              <p className="experiment-details">{item.details}</p>

              <div className="experiment-highlights">
                {item.highlights.map((h, idx) => (
                  <div key={idx} className="experiment-highlight-item">
                    <CheckCircle2 size={13} color="var(--accent-light)" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
