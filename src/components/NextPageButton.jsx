import React from "react";
import { ArrowRight, ArrowUp } from "lucide-react";

export function NextPageButton({ currentPage, onNavigate }) {
  const sequenceMap = {
    home: { nextId: "about", eyebrow: "Next Section", label: "About Ravi" },
    about: { nextId: "skills", eyebrow: "Next Section", label: "Technical Capabilities" },
    skills: { nextId: "projects", eyebrow: "Next Section", label: "Featured Projects" },
    projects: { nextId: "content", eyebrow: "Next Section", label: "Builds & Experiments" },
    content: { nextId: "connect", eyebrow: "Next Section", label: "Let's Connect" },
    connect: { nextId: "home", eyebrow: "Start Over", label: "Return to Home", isReturn: true },
  };

  const nextStep = sequenceMap[currentPage] || sequenceMap.home;

  const handleClick = () => {
    onNavigate(nextStep.nextId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="next-page-container">
      <button
        type="button"
        className="next-page-btn"
        onClick={handleClick}
        aria-label={`Navigate to next page: ${nextStep.label}`}
      >
        <div className="next-page-label">
          <span className="next-page-eyebrow">{nextStep.eyebrow}</span>
          <span className="next-page-target-name">{nextStep.label}</span>
        </div>

        <div className="next-page-arrow-circle" aria-hidden="true">
          {nextStep.isReturn ? <ArrowUp size={18} /> : <ArrowRight size={18} />}
        </div>
      </button>
    </div>
  );
}
