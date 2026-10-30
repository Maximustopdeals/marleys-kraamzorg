import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    nextScriptWorkers: false, // ← Tijdelijk uitgezet
    optimizeCss: false,       // ← Tijdelijk uitgezet
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.marleyskraamzorg.nl",
      },
    ],
  },
};

export default nextConfig;
