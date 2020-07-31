module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@styled': './src/styled',
            '@modules': './src/modules',
            '@config': './src/config',
            '@assets': './assets'
          },
        },
      ],
    ]
  };
};
