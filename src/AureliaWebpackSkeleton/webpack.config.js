/*eslint-disable */

//suppress all warnings between comments
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');


module.exports = {

	entry: {
		bundle: ['./src/index.js']
	},

	output: {
		path: path.resolve('wwwroot/build/'),
		chunkFilename: '[name]-[chunkhash].js',
		filename: '[name].js',
		publicPath: '/build/'
	},

	plugins: [

		new CleanPlugin('wwwroot/build'),

		new WebpackNotifierPlugin(),


		new AureliaWebpackPlugin({
			src: 'bundle?lazy!' + path.resolve('./src')
		}),

		//new ExtractPlugin('bundle.css', {allChunks: true}),

		new ExtractPlugin('[name].css'),

		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			// (the commons chunk name)

			filename: "commons.js",
			// (the filename of the commons chunk)

			minChunks: 3,
			// (Modules must be shared between 3 entries)

			// chunks: ["pageA", "pageB"],
			// (Only use these entries)
		}),
	],

	resolve: {
		extensions: ['', '.js']
	},

	devtool: 'source-map',
	devServer: {
		contentBase: 'wwwroot'
	},

	module: {

		loaders: [
			{
				test: /\.js?$/,
				include: /src/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					cacheDirectory: true,
					presets: ['es2015-loose', 'stage-1'],
					plugins: ['transform-decorators-legacy']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.scss?$/,
				loader: ExtractPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.html?$/,
				loader: 'html'
			},
			{
				test: /\.(png|gif|jpe?g|svg|woff2|eot|woff|ttf)$/i,
				loader: 'url?limit=10000'
			}
		],
		preLoaders: [
			{
				test: /\.js/,
				loader: 'eslint',
				include: /src/
			}
		]
	}
};

/*eslint-enable */