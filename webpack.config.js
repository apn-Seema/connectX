var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

module.exports = {

	entry: './components/js/connectx.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'src/app.js'
	},

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: [
					'style',
					'css',
					'autoprefixer?{browsers:["last 5 versions", "Explorer >= 8"]}',
					'sass?outpuStyle=compressed'
				],
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015','stage-0', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},

	devServer: {
		contentBase: './public/'
	},
	
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(process.env.NODE_ENV)
		})
	]

}