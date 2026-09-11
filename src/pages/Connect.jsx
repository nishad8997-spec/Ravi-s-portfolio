import React, { useState } from "react";
import { ExternalLink, MessageSquare, Mail, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export function Connect() {
  const [copied, setCopied] = useState(false);

  // Note: Only verified contact channels are displayed.
  // Direct communication is coordinated securely via LinkedIn.

  const handleCopy = () => {
    // If copied, trigger the animated feedback
    navigator.clipboard?.writeText("https://www.linkedin.com/in/ravi-nishad-tx00/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="connect-wrapper">
          <header className="section-header">
            <div className="section-eyebrow">
              <MessageSquare size={16} />
              <span>Digital Presence &amp; Profiles</span>
            </div>
            <h1 className="section-title">Let's Connect</h1>
            <p className="section-desc">
              Explore my work, follow what I'm building, or connect with me online through my verified developer profiles.
            </p>
          </header>

          <div className="connect-profiles-grid">
            {/* GitHub Card */}
            <a
              href="https://github.com/nishad8997-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-profile-card reveal-on-scroll stagger-1"
              aria-label="Open Ravi Nishad's GitHub profile in a new tab"
            >
              <div className="connect-profile-header">
                <div className="connect-icon-box">
                  <GithubIcon size={26} />
                </div>
                <ExternalLink size={18} color="var(--text-muted)" />
              </div>

              <h2 className="connect-profile-name">GitHub</h2>
              <div className="connect-profile-handle">@nishad8997-spec</div>
              <p className="connect-profile-desc">
                Browse repositories, codebases, automation scripts, and full-stack experiments.
              </p>

              <div className="connect-action-row">
                <span>View Profile &amp; Repositories</span>
                <ExternalLink size={15} />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/ravi-nishad-tx00/"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-profile-card reveal-on-scroll stagger-2"
              aria-label="Open Ravi Nishad's LinkedIn profile in a new tab"
            >
              <div className="connect-profile-header">
                <div className="connect-icon-box">
                  <LinkedinIcon size={26} />
                </div>
                <ExternalLink size={18} color="var(--text-muted)" />
              </div>

              <h2 className="connect-profile-name">LinkedIn</h2>
              <div className="connect-profile-handle">/in/ravi-nishad-tx00</div>
              <p className="connect-profile-desc">
                Connect for professional networking, tech discussions, and updates on ongoing builds.
              </p>

              <div className="connect-action-row">
                <span>Connect on LinkedIn</span>
                <ExternalLink size={15} />
              </div>
            </a>
          </div>

          {/* Structured Email & Direct Contact Card (Section 18) */}
          <div className="email-card-section reveal-on-scroll stagger-3">
            <div className="email-info-group">
              <div className="email-icon-box" aria-hidden="true">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="email-title">Direct Professional Communication</h3>
                <p className="email-desc">
                  Open for technical collaboration, full-stack builds, and workflow automation.
                </p>
              </div>
            </div>

            <div className="email-actions-group">
              <button
                type="button"
                className={`btn btn-secondary btn-sm ${copied ? "copy-btn-feedback" : ""}`}
                onClick={handleCopy}
                title="Copy LinkedIn Connection URL"
                aria-label="Copy connection link to clipboard"
              >
                {copied ? <Check size={15} color="var(--accent)" /> : <Copy size={15} />}
                <span>{copied ? "Link Copied!" : "Copy Connect Link"}</span>
              </button>

              <a
                href="https://www.linkedin.com/in/ravi-nishad-tx00/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-sm"
              >
                <span>Message on LinkedIn</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="connect-note-box reveal-on-scroll stagger-4">
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              Communication Guidelines
            </h3>
            <p>
              To maintain authenticity and privacy, direct outreach is coordinated via <strong>LinkedIn</strong>. If you require email correspondence for technical proposals or repository review, please message directly through LinkedIn to receive verified contact details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
