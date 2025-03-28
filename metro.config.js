// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
const { resolver } = config;

config.resolver = {
	...resolver,
	assetExts: [...resolver.assetExts, 'glb', 'gltf', 'png', 'jpg'],
	sourceExts: [
		...resolver.sourceExts,
		'js',
		'jsx',
		'json',
		'ts',
		'tsx',
		'cjs',
		'mjs',
	],
};

module.exports = withNativeWind(config, { input: './global.css' });
