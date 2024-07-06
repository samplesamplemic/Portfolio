/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sansCondensed: [
        "Encode Sans Semi Condensed",
        "sans-serif",
      ],
    },
    // fontSize: {
    //   base: "1.04rem",
    //   lg: "1.125rem",
    //   xl: "1.25rem",
    //   "2xl": "1.5rem",
    //   "4xl": "2.25rem",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
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
