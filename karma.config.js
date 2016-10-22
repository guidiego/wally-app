var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');

webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
    loader: 'babel-loader'
  },
  {
    test: /\.sass?$|\.scss?$/,
    loader: 'style!css?modules&sourceMap&localIdentName=[local]!sass?outputStyle=expanded&sourceMap'
  }
];

webpackConfig.module.preLoaders = [{
    test: /\.js$/,
    include: path.resolve('src/'),
    loader: 'isparta'
}]

webpackConfig.externals = {
  "jsdom": "window",
  "cheerio": "window",
  "react/lib/ExecutionEnvironment": true,
  "react/lib/ReactContext": true,
  "react/addons": true
}

module.exports = function (config) {
  config.set({
    frameworks: [ 'mocha' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/isparta.js'
    ],
    plugins: [
      webpack, 
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    logLevel: config.LOG_DISABLE,
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/isparta.js': ['webpack'],
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ],
      check: {
        global: {
          statements: 95,
          branches: 95,
          functions: 95,
          lines: 95,
        },
        each: {
          statements: 95,
          branches: 95,
          functions: 95,
          lines: 95,
        }
      }
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
