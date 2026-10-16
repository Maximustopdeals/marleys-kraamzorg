"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);

    // Data Layer push voor GTM Consent Mode v2
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        consent_status: value === "accepted" ? "granted" : "denied",
      });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[700] max-w-[420px] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="rounded-2xl border border-berry-dark/[0.08] bg-white p-6 shadow-[0_8px_32px_rgba(74,26,61,0.15)]">
        {/* Klein label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-primary text-xs">✦</span>
          <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-primary">
            Cookies
          </span>
        </div>

        {/* Tekst */}
        <p className="mb-2 font-sans text-sm leading-relaxed text-berry-dark/85">
          Wij gebruiken cookies om onze website te verbeteren en uw ervaring
          persoonlijk te maken.
        </p>
        <p className="mb-5 font-sans text-xs leading-relaxed text-berry-dark/60">
          Lees meer in ons{" "}
          <Link
            href="/cookie-policy/"
            className="font-semibold text-primary hover:underline"
          >
            cookiebeleid
          </Link>
          .
        </p>

        {/* Knoppen */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-primary px-5 font-cinzel text-[11px] uppercase tracking-[0.15em] text-white shadow-glow transition-all duration-300 hover:bg-primary-hover"
          >
            Accepteren
          </button>
          <button
            type="button"
            onClick={() => handleConsent("declined")}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-berry-dark/20 px-5 font-cinzel text-[11px] uppercase tracking-[0.15em] text-berry-dark transition-all duration-300 hover:border-berry-dark hover:bg-berry-dark hover:text-white"
          >
            Weigeren
          </button>
        </div>
      </div>
    </div>
  );
}
