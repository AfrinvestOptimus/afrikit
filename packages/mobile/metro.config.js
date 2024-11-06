/* eslint-disable */
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path');
// const { generate } = require('@storybook/react-native/scripts/generate');

// generate({
//     configPath: path.resolve(__dirname, './.storybook'),
//   });
/* eslint-disable */

const config = getDefaultConfig(__dirname)

config.resolver.assetExts = [
    ...config.resolver.assetExts,
    'png',
    'jpg',
    'jpeg',
    'gif',
    'svg',
    'webp',
];

config.watchFolders = [
    path.resolve(__dirname, '../assets'),
];

module.exports = withNativeWind(config, { input: './global.css' })
