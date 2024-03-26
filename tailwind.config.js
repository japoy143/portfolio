/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins"],
      },
      gridTemplateRows: {
        custom: `80px, 1fr`,
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
