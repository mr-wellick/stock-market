let analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = () => ({
    plugins:
    [
        new analyzer()
    ]
});
