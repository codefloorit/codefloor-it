/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0C0A1D",
        secondary: "#13102A",
        card: "#1C1838",
        accent: "#8B5CF6",
        accent2: "#C4A962",
        ink: "#F4F2FA",
        muted: "#9890B3",
        line: "rgba(228,220,255,0.08)",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(139,92,246,0.2) 0%, rgba(12,10,29,0) 70%)",
        "accent-gradient": "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 55%, #C4A962 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.5)",
        card: "0 8px 30px -12px rgba(0,0,0,0.55)",
        "card-hover": "0 20px 45px -15px rgba(139,92,246,0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
