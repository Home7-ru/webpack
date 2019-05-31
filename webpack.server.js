const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool:"source-map",
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        //выводим ошибки в браузер
        overlay: {
            warnings: true,
            errors: true
        }
    }

});