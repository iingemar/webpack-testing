const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Path needs to be absolute file system path
// __dirname is node.js constant for the current working directory
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'  // used by url-loader for pre pending file names
    },
    module: {
        // loaders are used for pre processing files before they are added to the webpack bundle
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                // Order is important! Loaders are applied from right to left
                // use: ['style-loader', 'css-loader'],
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/,
            }
        ]
    },
    // plugins
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

// babel-loader: teaches babel how to work with webpack
// babel-core: know how to take in code, parse it and generate some output files
// babel-preset-env: rule set for converting ES2015/16/17 to ES5

// css-loader: teach webpack how to import and parse CSS files
// style-loader: takes CSS and adds them to the HTML document. (Injects them in style tags on head)

// extract-text-webpack-plugin: takes a reference to a loader, takes any text generated by that loader
// and saves it to a separate file in our output directory.

// image-webpack-loader: resize compact images
// url-loader: different depending how big is the image? if small: include in bundle.js as raw data
// is big? include the raw image in the output directory


module.exports = config;