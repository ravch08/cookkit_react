/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all of your template files
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "rgb(98, 174, 30)",
      },
    },
  },
  plugins: [],
};
