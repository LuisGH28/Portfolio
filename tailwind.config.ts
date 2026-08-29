import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090B",
        panel: "#0D0F14",
        line: "rgba(148, 163, 184, 0.18)",
        accent: "#2F80FF"
      },
      boxShadow: {
        glow: "0 0 40px rgba(47, 128, 255, 0.16)",
        panel: "0 24px 70px rgba(0, 0, 0, 0.42)"
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "SFMono-Regular", "Consolas", "Liberation Mono", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
