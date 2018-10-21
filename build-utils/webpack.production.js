let extractCSS  = require("mini-css-extract-plugin");
let minimizeCSS = require("optimize-css-assets-webpack-plugin");
let uglifyJS    = require("uglifyjs-webpack-plugin");

module.exports = () => ({
    optimization:
    {
        minimizer:
        [
            new minimizeCSS({}),
            new uglifyJS({
                parallel: true
            })
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
