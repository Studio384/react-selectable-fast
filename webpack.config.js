const path = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'eval',
  mode: env,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'react-selectable-fast.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  optimization: {
    providedExports: false
  }
}
