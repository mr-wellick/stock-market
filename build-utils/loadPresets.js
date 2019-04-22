let webpackMerge = require("webpack-merge");

let applyPresets = env => {
    const { presets } = env;
    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(presetName =>
        require(`./presets/webpack.${presetName}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
