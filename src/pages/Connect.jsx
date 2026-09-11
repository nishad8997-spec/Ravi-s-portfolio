import React, { useState } from "react";
import { ExternalLink, MessageSquare, Mail, Copy, Check, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export function Connect() {
  const [copied, setCopied] = useState(false);

  const EMAIL_ADDRESS = "nishad8997@gmai.com";

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(EMAIL_ADDRESS);
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
              Explore my work, follow what I'm building, or connect with me online.
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

            {/* Live Portfolio Card */}
            <a
              href="https://ravi-s-portfolio-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-profile-card reveal-on-scroll stagger-3"
              aria-label="Open Ravi Nishad's Live Portfolio in a new tab"
            >
              <div className="connect-profile-header">
                <div className="connect-icon-box">
                  <Globe size={26} />
                </div>
                <ExternalLink size={18} color="var(--text-muted)" />
              </div>

              <h2 className="connect-profile-name">Live Portfolio</h2>
              <div className="connect-profile-handle">ravi-s-portfolio-mu.vercel.app</div>
              <p className="connect-profile-desc">
                Explore the deployed production portfolio application with theme switches and interactive builds.
              </p>

              <div className="connect-action-row">
                <span>View Live Portfolio</span>
                <ExternalLink size={15} />
              </div>
            </a>
          </div>

          {/* Confirmed Real Email Component */}
          <div className="email-card-section reveal-on-scroll stagger-4" id="email-section">
            <div className="email-info-group">
              <div className="email-icon-box" aria-hidden="true">
                <Mail size={22} />
              </div>
              <div className="email-text-details">
                <h3 className="email-title">Email</h3>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="email-address-link"
                  aria-label={`Send email to ${EMAIL_ADDRESS}`}
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            <div className="email-actions-group">
              <button
                type="button"
                className={`btn btn-secondary btn-sm copy-email-btn ${copied ? "copy-btn-feedback" : ""}`}
                onClick={handleCopyEmail}
                title="Copy Email"
                aria-label="Copy email address to clipboard"
                id="btn-copy-email"
              >
                {copied ? <Check size={15} color="var(--accent-light)" /> : <Copy size={15} />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="btn btn-accent btn-sm email-mail-btn"
                aria-label={`Send email to ${EMAIL_ADDRESS}`}
                id="btn-send-email"
              >
                <Mail size={14} />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
