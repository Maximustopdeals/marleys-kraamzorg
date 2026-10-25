"use client";

import { useState, useEffect } from "react";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wacht 1.5 seconde zodat de LCP-afbeelding eerst kan laden
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <FloatingActions />
      <CookieConsent />
      <Analytics />
    </>
  );
}
