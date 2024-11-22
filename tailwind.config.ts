import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-success": "var(--accent-success)",
        "accent-warning": "var(--accent-warning)",
        "accent-error": "var(--accent-error)",
      },
      keyframes: {
        "pixel-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      animation: {
        "pixel-float": "pixel-float 3s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
