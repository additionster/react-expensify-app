//entry -> output

//const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = (env) => {
    console.log(`env = ${env}`);
    console.log(`env.NODE_ENV = ${env.NODE_ENV}`);
    const isProduction = env.NODE_ENV === 'production';
    return {
        mode: "development",
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "style.css"
            })
        ],
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
                    //Use MiniCssExtractPlugin.loader to split (s)css file(s) into separate css file, style-loader for dev
                    //isProduction? MiniCssExtractPlugin.loader: 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        //To trace error for development
        devtool: isProduction? 'source-map' : 'inline-source-map',
        //webpack dev server
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            port: 8080,
            //To feed front-end with resource on every server request
            historyApiFallback: true
        }
    };
}