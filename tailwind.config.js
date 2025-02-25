/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FEC0AA",
        red: "#EC4E20",
        bwhite: "#F4F8F1",
        tblack: "#000100",
      },
    },
  },
  plugins: [],
};
