import React from "react";
import { profileData } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer({ setActivePage }) {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "content", label: "Content" },
    { id: "connect", label: "Connect" },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-identity">
            <h3>{profileData.name}</h3>
            <p>{profileData.role}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="footer-link"
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a
              href="https://github.com/nishad8997-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Ravi Nishad on GitHub (opens in a new tab)"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-nishad-tx00/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Ravi Nishad on LinkedIn (opens in a new tab)"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          <p>{profileData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
