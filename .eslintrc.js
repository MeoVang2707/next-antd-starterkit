const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'jsx-a11y'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/prefer-stateless-function': 0,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
};
