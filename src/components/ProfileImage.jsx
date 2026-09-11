import React, { useState, useEffect, useRef } from "react";
import avatarImg from "../assets/ravi_avatar.jpg";

export function ProfileImage() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 960);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate subtle normalized delta, limit to max 6px
    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * 6;
    const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * 6;
    setMouseOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const parallaxTransform = isDesktop
    ? `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
    : "none";

  return (
    <div
      ref={containerRef}
      className="profile-image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Profile photo of Ravi Nishad"
    >
      {/* Layer 1: Entrance */}
      <div className="profile-image-entrance">
        {/* Layer 2: Floating Animation */}
        <div
          className="profile-image-float"
          style={{ transform: parallaxTransform, transition: "transform 200ms ease-out" }}
        >
          {/* Layer 3: Animated Gradient Frame & Layer 4: Hover */}
          <div className="profile-frame-outer">
            <div className="profile-frame-inner">
              <img
                src={avatarImg}
                alt="Ravi Nishad – AI Automation & Full-Stack Developer"
                className="profile-avatar-img"
                loading="eager"
              />
              <div className="profile-status-badge">
                <span className="status-indicator-pulse" aria-hidden="true" />
                <span>Building &amp; Automating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
