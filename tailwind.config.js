/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      signatra: ["Signatra"],
    },

    extend: {
      fontFamily: { Montserrat: [("Montserrat", "sans-serif")] },
      colors: { black: "rgba(0, 0, 0, 0.87)" },
    },
  },
  plugins: [],
};
