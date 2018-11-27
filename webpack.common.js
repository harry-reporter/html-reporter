'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const staticPath = path.resolve(__dirname, 'lib', 'static');

module.exports = {
    entry: './index.tsx',
    context: staticPath,
    output: {
        filename: 'bundle.js',
        path: staticPath
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {minimize: true}
                        }
                    ]
                })
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader')
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('sass-loader')
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].min.css'),
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            files: ['index.html'],
            assets: ['data.js'],
            append: false
        })
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        //     analyzerPort: 8888
        // })
    ]
};
