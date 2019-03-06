let path               = require("path");
let webpack            = require("webpack");
let merge              = require("webpack-merge");
let template           = require("html-webpack-plugin");
let cleanBuildDir      = require("clean-webpack-plugin");
const CssCleanupPlugin = require('css-cleanup-webpack-plugin');

// Development, production, and presets
let configType   = (env) => require(`./build-utils/webpack.${env}`)(env);
let configPreset =          require("./build-utils/loadPresets.js");

// common webpack configuration
module.exports = ( { mode, presets } = { mode: "production", presets: undefined } ) => {
    return merge(
        {
            mode,
            entry: path.join(__dirname, "./src/js/index.js"),
            output:
            {
                path: path.join(__dirname, "build"),
                filename: "[name].js"
            },
            plugins:
            [
                new template({ template: "src/index.html" }),
                new webpack.ProgressPlugin(),
                new cleanBuildDir(["build"]),
                new CssCleanupPlugin()
            ]
        },
        configType(mode),
        presets !== undefined ? configPreset({ mode, presets }) : null
    );
};
