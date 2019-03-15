const extractCSS   = require("mini-css-extract-plugin");
const minimizeCSS  = require("optimize-css-assets-webpack-plugin");
//const terserPlugin = require("terser-webpack-plugin");

module.exports = () => ({
    optimization:
    {
        minimizer:
        [
            new minimizeCSS({}),
            //new terserPlugin({
            //    parallel: true
            //})
        ]
    },
    module:
    {
        rules:
        [
            {
                test: /\.(scss|css)$/,
                use: [ extractCSS.loader, "css-loader","postcss-loader", "sass-loader" ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use:
                {
                    loader: "url-loader",
                    options: { limit: 500 }
                }
            },
            {
                test: /\.ts$/, use: [ "ts-loader" ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                query:
                {
                    presets: [ "@babel/preset-react", "@babel/preset-env" ]
                }
            }
        ]
    },
    plugins:
    [
        new extractCSS({ filename: "[name].css" }),
    ]
});
