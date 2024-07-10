/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "760px",
        lg: "991px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1620px",
        "4xl": "1900px",
      },
    },
  },
  plugins: [],
};
