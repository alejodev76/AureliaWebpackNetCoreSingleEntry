/*eslint-disable no-var*/

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

// Karma configuration
// Generated on Fri Feb 26 2016 14:25:47 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-babel-preprocessor',
        'babel-plugin-transform-decorators-legacy',
        "babel-core",
        "babel-eslint",
        "babel-loader",
        "babel-plugin-transform-decorators-legacy",
        "babel-preset-es2015",
        "babel-preset-es2015-loose",
        "babel-preset-stage-1",
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'src/**/*.js',
        'test/unit/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/**/*.js': ['babel']
    },
    'babelPreprocessor': {
        options: {
            sourceMap: 'inline',
            presets: ['es2015-loose', 'stage-1'],
            plugins: [
                'syntax-flow',
                'transform-decorators-legacy',
                'transform-flow-strip-types'
            ]
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing test whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the test and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
