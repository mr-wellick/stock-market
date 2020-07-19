module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    extend: {},
    spacing: {
      '20': '20px',
      '24': '24px'
    },
    fontSize: {
      logo: '22px'
    },
    screens: {
      lg: [{ min: '240px' }]
    }
  },
  variants: {},
  plugins: []
};
