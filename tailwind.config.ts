import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e316b",
          950: "#14204a",
        },
        accent: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        ink: {
          DEFAULT: "#111827",
          muted: "#4b5563",
          subtle: "#6b7280",
          inverse: "#f9fafb",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f4f6f8",
          raised: "#ffffff",
          inverse: "#0a0f1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1", letterSpacing: "0" }],
        "display-sm": ["2.5rem", { lineHeight: "1.05", letterSpacing: "0" }],
        lead: ["1.125rem", { lineHeight: "1.75" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
        gutter: "1.5rem",
      },
      maxWidth: {
        content: "72rem",
        readable: "42rem",
      },
      borderRadius: {
        control: "0.5rem",
      },
      boxShadow: {
        soft: "0 18px 60px rgb(15 23 42 / 0.08)",
      },
    },
  },
} satisfies Config;

export default config;
