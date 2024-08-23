const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
// const { generate } = require('@storybook/react-native/scripts/generate');


// generate({
//     configPath: path.resolve(__dirname, './.storybook'),
//   });

const config = getDefaultConfig(__dirname);

// config.transformer.unstable_allowRequireContext = true;

module.exports = withNativeWind(config, { input: "./global.css" });
