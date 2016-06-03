var webpack = require('webpack');

module.exports = {
    entry: './js/confirm.js',
    output: {
        path: './dist',
        filename: 'confirm.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    }
};
