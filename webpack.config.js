const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const template = require("html-webpack-plugin");
const cleanBuildDir = require("clean-webpack-plugin");
const purgeCSSPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

// Development, production, and presets
const configType = env => require(`./build-utils/webpack.${env}`)(env);
const configPreset = require("./build-utils/loadPresets.js");

// common webpack configuration
module.exports = ({ mode, presets } = { mode: "production", presets: undefined }) => {
  return merge(
    {
      mode,
      entry: path.join(__dirname, "./src/js/index.js"),
      output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
      },
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom"
        }
      },
      module: {
        rules: [
          {
            test: /\.(ttf)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          },
          {
            test: /\.(png|jpg|svg)$/,
            use: {
              loader: "url-loader",
              options: { limit: 500 }
            }
          },
          {
            test: /\.ts$/,
            use: ["ts-loader"]
          },
          {
            test: /\.js$/,
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ]
      },
      plugins: [
        new template({
          template: "src/index.html",
          favicon: "src/_assets/logo.png"
        }),
        new webpack.ProgressPlugin(),
        new cleanBuildDir(),
        new purgeCSSPlugin({
          paths: glob.sync(`${path.join(__dirname, "./src/")}/**/*`, {
            nodir: true
          })
        })
      ]
    },
    configType(mode),
    presets !== undefined ? configPreset({ mode, presets }) : null
  );
};
