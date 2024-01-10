/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      blueColor: "var(--blue-color)",
      blueLightColor: "var(--blue-light-color)",
      brownColor: "var(--brown-color)",
      brownLightColor: "var(--brown-light-color)",
      greyWhiteColor: "var(--grey-white-color)",
      white: "#ffff",
      "white-200": "#ffffff4e",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
