// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        readux: ['Readux Pro', 'sans-serif'],
      },
    },
  },
  variants: {
    dark: {},
    light: {},
  },
  plugins: [],
}