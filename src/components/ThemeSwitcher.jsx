import React from "react";

export function ThemeSwitcher({ currentTheme, onThemeChange }) {
  const themes = [
    { id: "midnight", label: "Midnight", dotClass: "theme-dot-midnight" },
    { id: "sunset", label: "Sunset", dotClass: "theme-dot-sunset" },
    { id: "forest", label: "Forest", dotClass: "theme-dot-forest" },
  ];

  return (
    <div
      className="theme-switcher-wrapper"
      role="radiogroup"
      aria-label="Color Theme Selector"
    >
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          role="radio"
          aria-checked={currentTheme === t.id}
          className={`theme-pill-btn ${currentTheme === t.id ? "active" : ""}`}
          onClick={() => onThemeChange(t.id)}
          title={`Switch to ${t.label} theme`}
        >
          <span className={`theme-indicator-dot ${t.dotClass}`} aria-hidden="true" />
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}
