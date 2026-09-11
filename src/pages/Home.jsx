import React from "react";
import { profileData } from "../data/profile";
import { ArrowRight, Code2, Server, Workflow, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { ProfileImage } from "../components/ProfileImage";

export function Home({ setActivePage }) {
  return (
    <div className="page-container">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" aria-labelledby="hero-name">
          <div className="hero-layout-grid">
            {/* Left Column: Narrative */}
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
                <div className="experience-badge">
                  <span className="experience-badge-dot" aria-hidden="true" />
                  <span>{profileData.experienceBadge}</span>
                </div>
              </div>

              <p className="hero-intro-label">{profileData.heroGreeting}</p>
              <h1 id="hero-name" className="hero-name">
                {profileData.name}
              </h1>
              <h2 className="hero-title-role">{profileData.role}</h2>

              <p className="hero-statement">{profileData.heroStatement}</p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setActivePage("projects");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  id="hero-cta-projects"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="https://github.com/nishad8997-spec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  id="hero-cta-github"
                  aria-label="View Ravi Nishad GitHub Profile (opens in new tab)"
                >
                  <GithubIcon size={17} />
                  <span>View GitHub</span>
                </a>
              </div>

              {/* Verified Social Profile Chips on Home (Section 9) */}
              <div className="hero-social-strip">
                <a
                  href="https://github.com/nishad8997-spec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill"
                  aria-label="Ravi Nishad on GitHub @nishad8997-spec"
                >
                  <GithubIcon size={16} />
                  <span>@nishad8997-spec</span>
                  <ExternalLink size={12} opacity={0.6} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ravi-nishad-tx00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill"
                  aria-label="Ravi Nishad on LinkedIn @ravi-nishad-tx00"
                >
                  <LinkedinIcon size={16} />
                  <span>@ravi-nishad-tx00</span>
                  <ExternalLink size={12} opacity={0.6} />
                </a>
              </div>
            </div>

            {/* Right Column: Multi-Layer Animated Profile Image (Section 7 & 8) */}
            <div>
              <ProfileImage />
            </div>
          </div>

          {/* Key Engineering Pillars with Scroll-Reveal Stagger */}
          <div className="hero-pillars">
            <div className="pillar-card reveal-on-scroll stagger-1">
              <div className="pillar-icon" aria-hidden="true">
                <Code2 size={20} />
              </div>
              <h3 className="pillar-title">Web Development</h3>
              <p className="pillar-desc">
                Building responsive interfaces, dynamic client applications, and complete full-stack web solutions.
              </p>
            </div>

            <div className="pillar-card reveal-on-scroll stagger-2">
              <div className="pillar-icon" aria-hidden="true">
                <Server size={20} />
              </div>
              <h3 className="pillar-title">Backend Architecture</h3>
              <p className="pillar-desc">
                Designing server-side systems, data logic, and modular backend routines with Python and Node.js.
              </p>
            </div>

            <div className="pillar-card reveal-on-scroll stagger-3">
              <div className="pillar-icon" aria-hidden="true">
                <Workflow size={20} />
              </div>
              <h3 className="pillar-title">AI Automation</h3>
              <p className="pillar-desc">
                Constructing automated workflows with n8n and AI-assisted pipelines to streamline digital execution.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
