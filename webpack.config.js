const webpack = require('webpack')

module.exports = {

  entry: {
    react: ["react", "react-dom"],
    app: './src/index.js',
  },

  resolve: {
    modules: ["./src", "node_modules"],
  },

  output: {
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
    ],
  },

  plugins: [new webpack.optimize.CommonsChunkPlugin({name: 'react'})],

}