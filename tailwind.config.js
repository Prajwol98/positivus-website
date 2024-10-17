/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        green: "#B9FF66",
        black: "#191A23",
        grey: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
