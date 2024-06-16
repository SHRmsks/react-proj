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
      screen: {
        mobile: "480px",
        mobile2: "768px",
        tablet: "834px",
        tablet2: "1024px",
        laptop: "1040px",
        desktop: "1040px",
      },
    },
  },
  plugins: [],
};
