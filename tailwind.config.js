/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "surface-dark": "#0E0E0E",
        "surface-card": "#151517",
        "surface-container": "#1E1E22",
        "surface-container-high": "#27272B",
        "surface-container-low": "#121214",
        "vivid-red": "#D92525",
        "primary": "#D92525",
        "primary-hover": "#B91C1C",
        "telemetry-green": "#10B981",
        "telemetry-cyan": "#06B6D4",
        "telemetry-amber": "#F59E0B",
        "secondary": "#A3A3A3",
        "muted-gray": "#737373",
        "border-dark": "rgba(255,255,255,0.08)",
        "border-glow": "rgba(217,37,37,0.3)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: [],
}
