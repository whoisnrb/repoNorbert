/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        primary: "#22d3ee",
        secondary: "#60a5fa",
        glass: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 20px 50px rgba(34, 211, 238, 0.35)"
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
