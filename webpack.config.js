var webpack = require('webpack');
var path = require('path');
var sassLoader = 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded&sourceMap'

module.exports = {
  entry: {
      app: ['./src/main']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(path.join(__dirname, 'src')),
    alias: {
        'sinon': 'sinon/pkg/sinon'
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    noParse: [
        /node_modules\/sinon\//,
    ],

    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.sass?$|\.scss?$/,
        loader: sassLoader
      }
    ]
  }
};
