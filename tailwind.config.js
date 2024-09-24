/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#21D19F",
        tertiary: "#1E212D",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};