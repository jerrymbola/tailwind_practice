/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ['./public/index.html', './day_29_index.html'] - two HTML paths in the public folder
  //content: ["./public/index.html"] - initial path (only one HTML file in public folder)
  content: ['./public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
