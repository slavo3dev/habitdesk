/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind");

module.exports = {
  presets: [nativewind],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

