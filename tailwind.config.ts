import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#081120",
        ink: "#0E1A2F",
        gold: "#D4A017",
        cream: "#F7F0DC"
      },
      boxShadow: {
        glow: "0 0 46px rgba(212, 160, 23, 0.28)",
        premium: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(circle at center, rgba(212,160,23,.28), transparent 46%)",
        "navy-grid": "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["Inter", "Aptos", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Aptos Display", "Inter", "Segoe UI", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
