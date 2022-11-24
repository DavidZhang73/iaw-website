/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#173098',
        secondary: '#fbcd17',
        tertiary: '#1b252f',
      }
    }
  },
  plugins: []
}
