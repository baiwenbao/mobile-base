// 'use strict';

var path = require('path'),
    webpack = require('webpack'),
    glob = require('glob'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: "./",
        noInfo: true,
        hot: true,
        inline: true
    },

    entry: './entry.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].bundle.js'
            //        chunkFilename: '[id]_[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
			}
		]
    },
    plugins: [
		new ExtractTextPlugin('[name].bundle.css'),
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
		new webpack.HotModuleReplacementPlugin()
	]
}
