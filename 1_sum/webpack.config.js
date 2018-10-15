const path = require('path');

// Path needs to be absolute file system path
// __dirname is node.js constant for the current working directory
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                // Order is important! Loaders are applied from right to left
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            }
        ]
    }
};

// babel-loader: teaches babel how to work with webpack
// babel-core: know how to take in code, parse it and generate some output files
// babel-preset-env: rule set for converting ES2015/16/17 to ES5

// css-loader: teach webpack how to import and parse CSS files
// style-loader: takes CSS and adds them to the HTML document. (Injects them in style tags on head)

module.exports = config;