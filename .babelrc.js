//let isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
