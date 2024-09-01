/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#022C22",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
