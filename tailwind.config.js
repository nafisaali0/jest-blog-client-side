import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light_purple: "#6a61d1",
      light_gray: "#dbdbde",
      white: "#FFFFFF",
      black: "#000000",
      card_white: "#f3f3f3",
      hover_btn: "#302ba7",
      body_color: "#e7e7e9",
      hover_gray: "#eeeeee",
      dash_nav: "#f5f1fe",
      purple: "#c3bef0",
      icon_gray: "#9ba6a5",
    },
    extend: {},
  },
  // plugins: [require("daisyui")],
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
