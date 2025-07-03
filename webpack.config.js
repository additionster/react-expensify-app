//entry -> output

const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        //Load babel module for JSX syntax
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        //To enable css and scss syntax in webpack
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //To trace error for development
    devtool: 'eval-cheap-module-source-map',
    //webpack dev server
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 8080,
        //To feed front-end with resource on every server request
        historyApiFallback: true
    }
}