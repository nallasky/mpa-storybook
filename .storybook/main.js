const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links','@storybook/addon-knobs/register','@storybook/addon-docs/preset'],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [['react-app', { flow: false, typescript: true }]]
              }
            },
            require.resolve('react-docgen-typescript-loader')
          ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};