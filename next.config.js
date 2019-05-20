const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js');

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
  }),
);
