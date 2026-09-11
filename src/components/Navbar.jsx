import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profile";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar({ activePage, setActivePage, currentTheme, onThemeChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "content", label: "Content" },
    { id: "connect", label: "Connect" },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open, restore on close
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  // Automatically close mobile menu if resized to desktop viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="navbar" role="banner">
        <div className="container nav-container">
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            aria-label="Ravi Nishad Portfolio Home"
          >
            <div className="nav-brand-logo" aria-hidden="true">
              RN
            </div>
            <span>{profileData.name}</span>
          </a>

          {/* Desktop Navigation & Theme Switcher */}
          <div className="nav-center-group">
            <nav className="nav-links-desktop" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-link ${activePage === item.id ? "active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activePage === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <ThemeSwitcher
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}
            />
          </div>

          {/* Mobile Navigation Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer (rendered as sibling to header to prevent backdrop-filter containing block trapping) */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false);
            }
          }}
        >
          <div className="mobile-drawer-content">
            <nav className="mobile-nav-links" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`mobile-nav-link ${activePage === item.id ? "active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={activePage === item.id ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
                </button>
              ))}
            </nav>

            <div className="mobile-drawer-theme-wrapper">
              <ThemeSwitcher
                currentTheme={currentTheme}
                onThemeChange={onThemeChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
