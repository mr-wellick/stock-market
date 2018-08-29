let extractCSS = require("mini-css-extract-plugin");

module.exports = () => ({
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
