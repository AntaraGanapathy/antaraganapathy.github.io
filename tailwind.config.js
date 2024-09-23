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
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      // boxShadow: {
      //   card: "0px 35px 120px -15px #FFFFFF",
      // },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};