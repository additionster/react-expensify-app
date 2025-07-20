//entry -> output

//const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
//const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// if (process.env.NODE_ENV === 'test')
// {
//     require('dotenv').config({
//         path: './.env.test'
//     });
// }
// else if (process.env.NODE_ENV === 'dev')
// {
//     require('dotenv').config({
//         path: ['./.env.dev']
//     });
// }

module.exports = (env) => {
    console.log(`path = ${env}`);
    env.NODE_ENV = env.NODE_ENV || 'dev';
    console.log(`env.NODE_ENV = ${env.NODE_ENV}`);
    console.log(`env.FIREBASE_API_KEY = ${process.env.FIREBASE_API_KEY}`);
    const isProduction = env.NODE_ENV === 'production';
    return {
        mode: "development",
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'dist/bundle.js'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "dist/styles.css"
            }),
            //use dotenv-webpack to load env variables from file instead of mapping 1 by 1 using DefinePlugin
            new Dotenv({
                path: `./.env.${env.NODE_ENV}`
            })
            // new webpack.DefinePlugin({
            //     'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            //     'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            //     'process.env.FIREBASE_DB_URL': JSON.stringify(process.env.FIREBASE_DB_URL),
            //     'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            //     'process.env.FIREBASE_STORE_BUCKET': JSON.stringify(process.env.FIREBASE_STORE_BUCKET),
            //     'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            //     'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
            //     'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            // })
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
            static: [
                {
                    directory: path.join(__dirname, 'public')
                }   
            ],
            port: 8080,
            //To feed front-end with resource on every server request
            historyApiFallback: true
        }
    };
}