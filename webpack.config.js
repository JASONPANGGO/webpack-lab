const path = require("path");
const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 打包⼊入口文件
    entry: "./src/index.js",
    // 输出结构
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    // 打包环境
    mode: "production",
    // loader模块处理
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // 插件配置
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack-lab',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // 告诉服务器内容的来源。仅在需要提供静态文件时才进行配置,默认情况下，它将使用当前的工作目录来提供内容
        contentBase: "./dist",
        port: 8080,
        open: true,
        hot: true
    }
};
