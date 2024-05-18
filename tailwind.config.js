/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sansCondensed: ["Encode Sans Semi Condensed", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {},
      animation: {},
    },
    colors: {
      primaryRadialBG: "#0E1216", //#010101
      secondaryRadialBG: "#272E36", //#1a1f25
      secondary: "#1E88C4",
      tertiary: "#72653A",
      white: "#FFFFFF",
      navbarBG: "#9ca3af",
      black: "#000000",
    },
  },
  plugins: [],
};
