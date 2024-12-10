/** @type {import('tailwindcss').Config} */
const nativewind = require("tailwindcss-react-native/babel");

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

