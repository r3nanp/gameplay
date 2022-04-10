module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  }
}
