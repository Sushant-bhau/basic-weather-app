/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          customGreen: "#387478",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
