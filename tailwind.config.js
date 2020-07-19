module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    extend: {},
    spacing: {
      '7': '7px',
      '16': '16px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '28': '28px',
      '40': '40px',
      '240': '240px',
    },
    fontSize: {
      logo: '22px'
    },
    colors: {
      blue: '#202a35',
      cloud: '#5099FF',
      white: '#fff'
    }
  },
  variants: {},
  plugins: []
};
