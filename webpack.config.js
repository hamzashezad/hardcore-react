const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/react/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/env'
					]
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [
			'*', '.js', '.jsx'
		]
	},
	output: {
		path: path.resolve(__dirname, 'public/react/'),
		publicPath: '/public/react/',
		filename: 'index.js'
	}
};
