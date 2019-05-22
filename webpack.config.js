const webpack = require('webpack');

module.exports = {
  rules: [
    {
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.js$/,
      options: {
        plugins: [['import', { libraryName: 'antd', style: true }]],
      },
    },
  ],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './',
    hot: true,
  },
};
