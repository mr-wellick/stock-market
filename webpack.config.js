// Application paths
// -------------------
const path  = require("path");
const paths = {
    src: path.join(__dirname, "/src/js"),
    build: path.join(__dirname, "build")
};

// Merge utility and webpack.parts.js
// -----------------------------------
const merge = require("webpack-merge");
const parts = require("./webpack.parts.js");

// HTML template and remove build/ dir each time webpack runs
// -----------------------------------------------------------
const template        = require("html-webpack-plugin");
const clean_build_dir = require("clean-webpack-plugin");

// Extract CSS into own file
// ----------------------------
const css_extract = require("mini-css-extract-plugin");

// Common Configuration: Includes entry, output, and HTML template
// -----------------------------------------------------------------
const common_configuration = merge(
    [
        // Configurations for entry and output paths for our application
        {
            entry: paths.src,
            output:
            {
                path: paths.build,
                filename: "[name].js"
            },
            plugins:
            [
                new template({ template: "src/index.html" }),
                new clean_build_dir(["build"]),
                new css_extract({ filename: "[name].css" })
            ]
        },
        // Sass to CSS transpilation process
        parts.load_css(
            {
                exclude: /node_modules/
            }
        ),
        // ES6 & JSX to vanilla JavaScript
        parts.load_javascript(
            {
                include: paths.src,
                exclude: /node_modules/
            }
        )
    ]
);

// Development configuration
// ----------------------------
const development_configuration = merge(
    [
        parts.development_server({
            host: process.env.HOST,
            port: process.env.port
        }),
        parts.load_images()
    ]
);

// Production configuration
// ---------------------------
const production_configuration = merge(
    [
        parts.load_images()
    ]
);

// Should we use production or development configuration
// -------------------------------------------------------
module.exports = (env) =>
{

    // Return either dev or prod configurations
    if(env === "development")
        return merge(common_configuration, development_configuration);
    else
        return merge(common_configuration, production_configuration);
};
