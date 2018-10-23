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
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"] 
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
    }
});
