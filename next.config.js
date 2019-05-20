const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './antd/antd-custom.less'), 'utf8'),
);
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withCSS(
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    distDir: 'build',
    pageExtensions: ['jsx', 'js'],
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];

      return config;
    },
  }),
);
