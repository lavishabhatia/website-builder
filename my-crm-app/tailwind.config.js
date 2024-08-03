/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themecolor: "#684df4",
        accentcolor: "#407360",
      },
      keyframes: {
        "dash-animation": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "100% 0" },
        },
      },
      animation: {
        "dash-animation": "dash-animation 2s linear infinite",
        bounce: "bounce 2s infinite",
        pulse: "pulse 3s infinite",
        spin: "spin 5s linear infinite",
      },
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
