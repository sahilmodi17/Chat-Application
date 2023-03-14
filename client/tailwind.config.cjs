/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens :{
        'b9' : '900px'
      }
    },
  },
  plugins: [],
};
