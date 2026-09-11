import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NextPageButton } from "./components/NextPageButton";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { ContentExperiments } from "./pages/ContentExperiments";
import { Connect } from "./pages/Connect";

export function App() {
  const [activePage, setActivePage] = useState("home");

  // 1. Theme State & LocalStorage Persistence (Midnight, Sunset, Forest)
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("ravi_portfolio_theme");
      if (savedTheme && ["midnight", "sunset", "forest"].includes(savedTheme)) {
        return savedTheme;
      }
    } catch {
      // Fallback
    }
    return "midnight";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("ravi_portfolio_theme", theme);
    } catch {
      // Ignore storage errors
    }
  }, [theme]);

  // 2. Sync with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const validPages = ["home", "about", "skills", "projects", "content", "connect"];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // 3. Scroll Reveal IntersectionObserver
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || prefersReducedMotion) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activePage]);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case "home":
        return <Home setActivePage={navigateTo} />;
      case "about":
        return <About setActivePage={navigateTo} />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "content":
        return <ContentExperiments />;
      case "connect":
        return <Connect />;
      default:
        return <Home setActivePage={navigateTo} />;
    }
  };

  return (
    <>
      <div className="ambient-bg" aria-hidden="true" />
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
        currentTheme={theme}
        onThemeChange={setTheme}
      />

      <main className="main-content" id="main-content">
        <div key={activePage} className="page-transition-wrapper">
          {renderCurrentPage()}
        </div>

        {/* Mandatory Next Page Button immediately before footer */}
        <div className="container">
          <NextPageButton currentPage={activePage} onNavigate={navigateTo} />
        </div>
      </main>

      <Footer setActivePage={navigateTo} />
    </>
  );
}

export default App;
