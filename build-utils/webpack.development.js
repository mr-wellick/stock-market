module.exports = () => ({
    devServer:
    {
        historyApiFallback: true,
        stats: "errors-only",
        overlay:
        {
            errors: true,
            warnings: true
        }
    },
    module:
    {
        rules:
        [
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    }
});
