import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // light_purple: "#6a61d1",
      // light_gray: "#dbdbde",
      // card_white: "#f3f3f3",
      // hover_btn: "#302ba7",
      // body_color: "#e7e7e9",
      // hover_gray: "#eeeeee",
      // dash_nav: "#f5f1fe",
      // purple: "#c3bef0",
      // icon_gray: "#9ba6a5",

      // new edition
      borderColour: "#dbdbde",
      bodyColor: "#f3f3f3",
      primaryHover: " #302ba7",
      primaryColor: "#6a61d1",
      black: "#000000",
      white: " #ffff",
      textSmallGray: "#6B6B6B",
      mainTheme: "#ffffffE6",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
