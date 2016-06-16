var devConfig = require('./webpack.config');

var PurifyCss = require("purifycss-webpack-plugin");
var WebpackStrip = require('strip-loader');
var webpack = require('webpack');
var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');

devConfig.output ={
    path: path.resolve('wwwroot/dist/'),
        chunkFilename: '[name]-[chunkhash].js',
        filename: 'bundle.js',
        publicPath:'/dist/',
}


var stripLoader = {
    test:[/\.js$/],
    exclude:/node_modules/,
    loader:WebpackStrip.loader('console.log', 'debugger;', 'debugger')
}

devConfig.devtool = '';

devConfig.module.loaders.push(stripLoader);


// This plugin looks for similar chunks and files
// and merges them for better caching by the user
var plugins = devConfig.plugins;

// clean distrubution folder
var cleanup = new CleanPlugin('wwwroot/dist');
plugins.push(cleanup);

var dedupe = new webpack.optimize.DedupePlugin();
plugins.push(dedupe);

var orderPlugin = new webpack.optimize.OccurenceOrderPlugin();
plugins.push(orderPlugin);

var purifyCss = new PurifyCss({
	output: '[name].css',
	basePath: __dirname,
	paths: [
		"wwwroot/.html",
	],
	minify:true
});
plugins.push(purifyCss);

var commons = new webpack.optimize.CommonsChunkPlugin({
		name: "commons",
		// (the commons chunk name)

		filename: "commons.js",
		// (the filename of the commons chunk)

		minChunks: 3,
		// (Modules must be shared between 3 entries)

		// chunks: ["pageA", "pageB"],
		// (Only use these entries)
	})
plugins.push(commons);

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
var minChunk = new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200, // ~50kb
    })
plugins.push(minChunk);

module.exports = devConfig;