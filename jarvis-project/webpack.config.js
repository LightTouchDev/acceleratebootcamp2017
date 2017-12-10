var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  target: 'node',
  entry: './js/app.js',
  output: {
    path: __dirname,
    filename: './app/js/bundle.js'
  }
};
