var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// The names of the libraries we want. The same as package.json dependencies
const VENDOR_LIBS = [
    'faker',
    'lodash',
    'react',
    'react-dom',
    'react-input-range',
    'react-redux',
    'react-router',
    'redux',
    'redux-form',
    'redux-thunk'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        // Create another bundle file called 'vendor.js'
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        // Save with the key from the entry section. Ie bundle.js, vendor.js
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
