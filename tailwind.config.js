const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      cyan: colors.cyan,
      orange: colors.orange,
      amber: colors.amber,
      bluegray: colors.blueGray,
      black: colors.black,
      white: colors.white,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple
    },
    screens: {
      xs: { min: "280px", max: "359px" },
      sm: { min: "360px", max: "1023px" },
      xl: { min: "1024px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
