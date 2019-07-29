module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    overlay: {
      errors: true,
      warnings: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
});
