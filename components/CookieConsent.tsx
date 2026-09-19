"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    localStorage.setItem("cookieConsent", value);
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[700] max-w-[400px] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-cream/95 backdrop-blur-xl border border-berry-dark/[0.08] rounded-2xl p-6 shadow-[0_8px_32px_rgba(74,26,61,0.1)]">
        <p className="text-berry-dark text-sm font-body mb-4">
          Wij gebruiken cookies voor een optimale ervaring.
        </p>
        <div className="flex gap-3">
          <button onClick={() => handleConsent("accepted")} className="btn-primary h-10 px-5 text-xs flex-1">
            Accepteren
          </button>
          <button onClick={() => handleConsent("declined")} className="btn-outline h-10 px-5 text-xs flex-1">
            Weigeren
          </button>
        </div>
      </div>
    </div>
  );
}
