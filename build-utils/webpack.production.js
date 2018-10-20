let extractCSS  = require("mini-css-extract-plugin");
let minimizeCSS = require("optimize-css-assets-webpack-plugin");

module.exports = () => ({
    optimization:
    {
        minimizer:
        [
            new minimizeCSS({})
        ]
    },
    module:
    {
        rules:
        [
            { test: /\.scss$/, use: [extractCSS.loader, "css-loader", "sass-loader"] }
        ]
    },
    plugins:
    [
        new extractCSS({ filename: "[name].css" }),
    ]
});
