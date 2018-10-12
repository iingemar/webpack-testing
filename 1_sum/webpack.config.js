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
            }
        ]
    }
};

module.exports = config;