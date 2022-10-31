module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // env: {
  //   production: {
  //     plugins: ['react-native-paper/babel'],
  //   },
  // },
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'], //  This says the root of your project folder
        // To make your imports look better
        // Insert your whatever name to make alias for the imports
        // In this example I'm using @components to referring the components folder
        // That located inside src folder.
        // Note: You can make a lot of aliases in here
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@src': './src',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@reduxs': './src/reduxs',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
