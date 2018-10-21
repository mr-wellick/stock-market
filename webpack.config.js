// Base webpack config
let path          = require("path");
let webpack       = require("webpack");
let merge         = require("webpack-merge");
let template      = require("html-webpack-plugin");
let cleanBuildDir = require("clean-webpack-plugin");

// Development, production, and presets
let configType   = (env) => require(`./build-utils/webpack.${env}`)(env);
let configPreset =          require("./build-utils/loadPresets.js");

// Final webpack configuration
module.exports = ( { mode, presets } = { mode: "production", presets: null } ) => {
    return merge(
        {
            mode,
            entry: path.join(__dirname, "./src/js/index.js"),
            output:
            {
                path: path.join(__dirname, "build"),
                filename: "[name].js"
            },
            module:
            {
                rules:
                [
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
                new template({ template: "src/index.html" }),
                new webpack.ProgressPlugin(),
                new cleanBuildDir(["build"])
            ]
        },
        configType(mode),
        presets !== null ? configPreset({ mode, presets }) : null
    );
};