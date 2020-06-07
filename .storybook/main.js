const webpackConfig = require('../webpack.config');

module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config
    config.resolve.extensions.push(...webpackConfig.resolve.extensions);
    config.module.rules.push(webpackConfig.module.rules[0]);

    return config;
  },
};
