// 'use strict';

var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    devServer: {
        //        host: "172.16.13.246",
        contentBase: "./",
        noInfo: true,
        hot: true,
        inline: true
    },
    //    devtool: 'source-map',
    entry: ['./entry.js'],
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].bundle.js'
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
                loader: 'url'
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
