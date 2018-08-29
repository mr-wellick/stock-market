let webpackMerge = require("webpack-merge");

let applyPresets = (env) => {
    let { presets }   = env;
    let mergedPresets = [].concat(...[presets]);
    let mergedConfigs = mergedPresets.map(
        (presetName) => require(`./presets/webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
