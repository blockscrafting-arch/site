/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        84: "21rem", // для фоновых SVG в заголовках (sm:w-84 sm:h-84)
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        display: ['"Manrope Variable"', "Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          muted: "var(--color-accent-muted)",
          glow: "var(--color-accent-glow)",
        },
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-cyan) 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, var(--color-accent-glow) 0%, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px var(--color-accent-glow)",
        "glow-sm": "0 0 20px -5px var(--color-accent-glow)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [(await import('@tailwindcss/typography')).default],
};
