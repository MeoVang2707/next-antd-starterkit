module.exports = {
  rules: [
    {
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.js$/,
      options: {
        plugins: [['import', { libraryName: 'antd', style: true }]]
      }
    }
  ];
}
