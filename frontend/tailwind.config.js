module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        18: "4.5rem",
      },
      width: {
        50: "12.5rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
