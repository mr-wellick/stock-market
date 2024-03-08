/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cyberpunk'],
  },
  plugins: [require('daisyui')],
};
