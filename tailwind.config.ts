import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9A1E61",
          hover: "#7A184E",
          foreground: "#FDF9F4",
        },
        berry: {
          DEFAULT: "#9A1E61",
          hover: "#7A184E",
          dark: "#4A1A3D",
        },
        cream: {
          DEFAULT: "#FDF9F4",
          beige: "#FAF4EE",
        },
        blush: {
          DEFAULT: "#F5C8D8",
          muted: "#D4A5B5",
        },
        starlight: "#E8D5C4",
        whatsapp: "#25D366",
      },
      fontFamily: {
        cinzel: ["Cinzel", "Georgia", "serif"],
        sans: ["Open Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(74, 26, 61, 0.06)",
        "card-hover": "0 8px 32px rgba(74, 26, 61, 0.1)",
        glow: "0 2px 12px rgba(154, 30, 97, 0.25)",
        "glow-hover": "0 4px 20px rgba(154, 30, 97, 0.35)",
        whatsapp: "0 4px 16px rgba(37, 211, 102, 0.3)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-star": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.3" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "float-up": {
          "0%": { transform: "translateY(0)", opacity: "0.15" },
          "100%": { transform: "translateY(-200px)", opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-gentle": "bounce-gentle 1.5s ease-in-out infinite",
        "pulse-star": "pulse-star 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "float-up": "float-up 30s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
