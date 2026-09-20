"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem("cookie-consent"));
  }, []);

  if (consent !== "accepted") return null;

  return (
    <>
      <GoogleTagManager gtmId="GTM-NPFPBCNH" />
      <GoogleAnalytics gaId="G-7E6L5PXENM" />
    </>
  );
}
