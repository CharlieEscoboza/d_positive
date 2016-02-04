var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		App: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			'./entry.js'
		]
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: 'http://localhost:8080/build/'
	},

	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets : ['es2015'] } },
			{ test: /\.jsx$/, loader: 'babel', exclude: /node_modules/, query: { presets : ['react'] } }
		]
	},

	plugins: [
		new webpack.NoErrorsPlugin()
	]
};