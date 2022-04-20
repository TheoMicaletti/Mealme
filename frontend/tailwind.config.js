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
      backgroundImage: {
        "bg-bodyfull": "url('./assets/bg.jpg')",
      },
      minWidth: {
        "90%": "90%",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
