/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0 5px 10px rgba(255,26,26,0.22)",
        playControll: "0 10px 20px rgba(255,26,26,0.22)",
        middum: "0 10px 60px rgba(255,26,26,0.22)",
      },
    },
  },
  plugins: [],
};
