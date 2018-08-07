// Development Server Configuration
// ----------------------------------
exports.development_server = ( {host, port} = {} ) => (
    {
        devServer:
        {
            historyApiFallback: true,
            stats: "errors-only",
            host,
            port,
            overlay:
            {
                errors: true,
                warnings: true
            }
        }
    }
);

// CSS Configurationion
// -----------------------

// CSS Mini Extract Plugin
const css_extract = require("mini-css-extract-plugin");

// Vendor prefixer for CSS
let autoprefixer = () => (
    {
        loader: "postcss-loader",
        options:
        {
            plugins: () => ([ require("autoprefixer")() ])
        }
    }
);

// Main CSS configuration
exports.load_css = ( {include, exclude} = {} ) => (
    {
        module:
        {
            rules:
            [
                {
                    test: /\.scss$/,
                    include,
                    exclude,
                    use: [css_extract.loader, "css-loader", autoprefixer(), "sass-loader"]
                }
            ]
        }
    }
);

// Image Loader Configuration
// -----------------------------
exports.load_images = ( {include, exclude, options} = {} ) => (
    {
        module:
        {
            rules:
            [
                {
                    test: /\.(png|jpg|svg)$/,
                    include,
                    exclude,
                    use:
                    {
                        loader: "url-loader",
                        options
                    }
                }
            ]
        }
    }
);

// JavaScript Configuration
// --------------------------
exports.load_javascript = ( {include, exclude} = {} ) => (
    {
        module:
        {
            rules:
            [
                {
                    test: /\.js$/,
                    include,
                    exclude,
                    loader: "babel-loader",
                    query:
                    {
                        presets: ["react", "env", "stage-2"]
                    }
                }
            ]
        }
    }
);
