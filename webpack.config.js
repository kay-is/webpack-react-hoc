const webpack = require('webpack');

module.exports = {

  entry: {
    react: ['react', 'react-dom'],
    app: './src/index.js',
  },

  resolve: {
    modules: ["./src", "node_modules"],
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
          plugins: [
            'syntax-dynamic-import'
          ]
        },
      },
    ],
  },

  plugins: [new webpack.optimize.CommonsChunkPlugin({name: 'react'})],

};
