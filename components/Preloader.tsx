"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setHidden(true);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              sessionStorage.setItem("hasVisited", "true");
              setHidden(true);
            }, 250);
          }, 100);
          return 100;
        }
        return prev + 5;
      });
    }, 15);

    return () => clearInterval(progressInterval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-cream-beige flex flex-col items-center justify-center transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img src="/images/logo.webp" alt="Marley's Kraamzorg" className="h-20 w-auto mb-6" style={{
        animation: "preloaderLogo 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      }} />
      <div className="w-[120px] h-0.5 bg-berry-dark/10 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full origin-left" style={{
          transform: `scaleX(${progress / 100})`,
          transition: "transform 30ms linear",
        }} />
      </div>
      <style>{`
        @keyframes preloaderLogo {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
