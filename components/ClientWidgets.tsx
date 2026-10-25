"use client";

import { useState, useEffect } from "react";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
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
