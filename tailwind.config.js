/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  mode: "jit",
  content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xl: "1296px",
      },
      colors: {
        primary: "#030303",
        yellow: "#FBFF22",
        pink: "#C96464",
        olive: "#9C9E18",
      },
      fontSize: {
        "3xl": ["32px", "48px"],
        "5xl": ["48px", "60px"],
        "6xl": ["64px", "96px"],
      },
      fontFamily: {
        sans: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
      },
      rotate: {
        2: "2deg",
        3: "3deg",
        4: "4deg",
      },
      spacing: {
        15: "60px",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
