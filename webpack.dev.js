const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
       mode: 'development',
       devtool:"source-map",
       //включает отслеживание изменения в файлах без devServer
       watch: true,
       //интервал через который производится анализ
       watchOptions:{
              aggregateTimeout:100,
              ignored: /node_modules/
       },
       //выводит файлы сурс меп в отдельный фаил
       // plugins: [
       //        new webpack.SourceMapDevToolPlugin({
       //               filename: '1.map'
       //        })
       // ]
});

