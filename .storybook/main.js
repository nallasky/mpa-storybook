/*
const fs = require('fs');
const path = require('path');

function getPackageDir(filepath) {
    let currDir = path.dirname(require.resolve(filepath));
    while (true) {
        if (fs.existsSync(path.join(currDir, 'package.json'))) {
            return currDir;
        }
        const { dir, root } = path.parse(currDir);
        if (dir === root) {
            throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
        }
        currDir = dir;
    }
}
*/
const path = require('path');
const fixBabelImports = require("customize-cra").fixBabelImports;

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
	"@storybook/addon-jest",
    {
      "name": "@storybook/preset-create-react-app",
      "options": {
        "craOverrides": {
          "fileLoaderExcludes": ["less"]
        }
      }
    }
  ],
  /*
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          "emotion-theming": getPackageDir("@emotion/react")
        }
      }
    };
  }
  */
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', { loader: 'less-loader', options:{ lessOptions: {javascriptEnabled : true }}}],
      include: path.resolve(__dirname, '../'),
    });
	
    fixBabelImports('antd', {
      libraryDirectory: 'es',
      style: true,
    })(config);

    return config;
  },
}