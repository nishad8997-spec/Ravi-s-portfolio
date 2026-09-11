import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { FolderGit2 } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page-container">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <div className="section-eyebrow">
            <FolderGit2 size={16} />
            <span>Verified Work &amp; Implementations</span>
          </div>
          <h1 className="section-title">Projects</h1>
          <p className="section-desc">
            Production-oriented systems and web builds focusing on verified capabilities, modular architecture, and direct repository access.
          </p>
        </header>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={project.id} className={`reveal-on-scroll stagger-${(idx % 3) + 1}`}>
              <ProjectCard
                project={project}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}
