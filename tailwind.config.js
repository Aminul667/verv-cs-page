/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        colorTextPrimary: "#314660",
        colorTextSecondary: "#56677D",
        colorTextLime: "#449A2B",
        colorButton: "#50B533",
        colorHover: "#90B3B7",
      },
    },
  },
  plugins: [require("daisyui")],
};
