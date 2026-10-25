"use client";

import { useState, useEffect } from "react";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // ✅ 3000ms zorgt voor een lagere Total Blocking Time (TBT)
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 3000); 

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
