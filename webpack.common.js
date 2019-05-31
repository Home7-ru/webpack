const path = require('path');
//для обращения к внутренним данным webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    // точка входа
    entry: './src/index.js',
    // точка выхода
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                //
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `./postcss.config.js` } }
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true}

                    }
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'

        }),
        // с этим модулем были проблемы установился v 2.0.2 и выдовал ошибку
        // сменил на ^1.0.0
        new CleanWebpackPlugin([
            './dist/*.*'
        ])

        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // }),

    ]
}