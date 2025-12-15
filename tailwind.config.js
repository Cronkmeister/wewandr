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
        cream: "#fbf9ef",
        periwinkle: "#CEDAFA",
        blue: "#5E85EE",
        darkblue: "#0b078d",
        // darkblue: "#0604453",
      },
      fontFamily: {
        sans: ["var(--font-pt-serif)", "system-ui", "serif"],
        "instrument-sans": [
          "var(--font-instrument-sans)",
          "system-ui",
          "sans-serif",
        ],
        knewave: ["var(--font-knewave)", "system-ui"],
        "dm-serif-display": ["var(--font-dm-serif-display)", "serif"],
        "pt-serif": ["var(--font-pt-serif)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
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
