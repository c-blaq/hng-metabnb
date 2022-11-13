/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#434343",
        primary: "#A02279",
        footerBg: " #1D1D1E",
        modalBg: "rgba(64, 64, 64, 0.3)",
      },
    },
  },
  plugins: [],
};
