/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'scarlet': '#AB1E3D',
        'ocean': ' #0077BE',
        'deepblue': '#013D5E',
        'skyblue': '#A9D7E9',
        'deepbrown': '#5E493B',
        'turtle': '#76B041',
        'sand': '#EFD9A9'
      },
      height: {
        '128': '480px'
      }

    },
  },
  plugins: [],
}
