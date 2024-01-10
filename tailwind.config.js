/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blueColor: "var(--blue-color)",
      blueLightColor: "var(--blue-light-color)",
      brownColor: "var(--brown-color)",
      brownLightColor: "var(--brown-light-color)",
      greyWhiteColor: "var(--grey-white-color)",
      white: "#ffff",
    },
    extend: {},
  },
  plugins: [],
};
