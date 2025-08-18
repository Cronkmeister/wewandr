/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef7ee",
          100: "#fdedd6",
          200: "#fad7ac",
          300: "#f6bb77",
          400: "#f1943d",
          500: "#ed7514",
          600: "#de5a0a",
          700: "#b8440c",
          800: "#943610",
          900: "#782e11",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        "instrument-sans": [
          "var(--font-instrument-sans)",
          "system-ui",
          "sans-serif",
        ],
        knewave: ["var(--font-knewave)", "system-ui"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
