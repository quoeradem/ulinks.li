var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: { path: __dirname + '/inc/', filename: 'bundle.js' },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-runtime','transform-decorators-legacy'],
                presets: ['es2015', 'stage-0', 'react']
            },
        }]
    },
};
