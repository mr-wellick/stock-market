//let isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins":
    [
        "@babel/plugin-proposal-class-properties",
        "react-hot-loader/babel",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime"
    ]
}