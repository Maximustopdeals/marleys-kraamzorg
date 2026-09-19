"use client";

import dynamic from "next/dynamic";

const WhatsAppFAB = dynamic(() => import("./WhatsAppFAB"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });
const CookieConsent = dynamic(() => import("./CookieConsent"), { ssr: false });

export default function BottomWidgets() {
  return (
    <>
      <WhatsAppFAB />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
