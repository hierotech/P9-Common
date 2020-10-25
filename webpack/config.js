const {resolve} = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const CONFIG_BASE = {
  mode: isProduction ? 'production' : 'development',
  output: {
    path: resolve(__dirname, '..', 'dist'),
    library: 'P9Common',
    libraryTarget: 'umd'
  },
  externals: [
    'amqplib',
    'big.js',
    'decimal.js',
    'http-terminator',
    'lodash.merge'
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js?$/,
        parallel: true,
        terserOptions: {
          ie8: true,
          ecma: 5,
          warnings: true
        }
      })
    ]
  },
  devtool: 'source-map'
};

module.exports = [{
  ...CONFIG_BASE,
  entry: './src/index.browser.js',
  target: 'web',
  output: {
    ...CONFIG_BASE.output,
    filename: 'index.browser.js'
  },
  externals: [...CONFIG_BASE.externals, 'react', 'react-dom']
}, {
  ...CONFIG_BASE,
  entry: './src/index.node.js',
  target: 'node',
  output: {
    ...CONFIG_BASE.output,
    filename: 'index.node.js'
  },
  externals: [...CONFIG_BASE.externals, 'axios']
}];
