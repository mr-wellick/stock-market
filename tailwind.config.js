/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.ts'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cyberpunk'],
  },
  plugins: [require('daisyui')],
};
