/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{cshtml,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
