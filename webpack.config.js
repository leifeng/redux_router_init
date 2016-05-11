var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: false,
    entry: {
        chargepile:'./src/index.js',
        vendor: ['react','react-dom','react-router']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[chunkhash:6].js',
        publicPath: 'dist/'
    },
    externals: {
        
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            filename:'../index.html',
            template:'./app.html'
        })
    ],
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }]
    }
};