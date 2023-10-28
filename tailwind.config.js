/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // extend: {},
    screens: {
      'sm' : '640px',
      'xs' : '200px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px'
    },
  },
  plugins: [],
}