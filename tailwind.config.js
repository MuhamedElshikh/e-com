/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "main-clore": "#0aad0a",
        "light-clore": "#f0f3f2",
      },
      fontFamily: {
        mainFont: "Encode Sans Expanded",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
