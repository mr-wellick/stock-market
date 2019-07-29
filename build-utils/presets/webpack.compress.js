const compression = require('compression-webpack-plugin');

module.exports = () => ({
  plugins: [new compression()]
});
