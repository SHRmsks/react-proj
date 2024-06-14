/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      space: {
        sm: "calc(100% / 12)", // Example value, adjust as needed
        m: "calc(100% / 10)", // Example value, adjust as needed
        l: "calc(100% / 8)", // Example value, adjust as needed
        xl: "calc(100% / 5)", // Example value, adjust as needed
      },
    },
  },
  plugins: [],
};
