const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve('tailwindcss-react-native/babel'), // Make sure this path is correct
  };

  config.resolver = {
    ...config.resolver,
    sourceExts: [...config.resolver.sourceExts, 'cjs'], // Handle .cjs extensions
  };

  return config;
})();
