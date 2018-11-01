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
        // Chunkhash is a hash of the contents of the file.
        filename: '[name].[chunkhash].js'
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
        // Opt-in feature that creates a separate file (known as a chunk), consisting of common modules
        // shared between multiple entry points.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        // The plugin will generate an HTML5 file for you that includes all your webpack bundles
        // in the body using script tags.
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
