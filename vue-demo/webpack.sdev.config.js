/**
 * Created by jerry on 2016/10/17.
 */
var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var path = require('path');


config.output.path = path.resolve(__dirname, '../vue-demo-server/public/dist'); //文件生成路径
config.output.publicPath = 'http://127.0.0.1:8500/dist/'; // 资源路径
config.output.filename = '[name].js';  // 入口js命名
config.output.chunkFilename = '[name].chunk.js';  // 路由js命名

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader?sourceMap",
            {
                publicPath: "http://127.0.0.1:8500/dist/"
            }
        ),
        less: ExtractTextPlugin.extract(
            'vue-style-loader',
            'css-loader!less-loader'
        ),
        sass: ExtractTextPlugin.extract(
            'vue-style-loader',
            'css-loader!sass-loader'
        )
    }
};

config.plugins = (config.plugins || []).concat([

    new ExtractTextPlugin("[name].css",{
        allChunks : true,
        resolve : ['modules']
    }),   // 提取CSS

    new webpack.optimize.CommonsChunkPlugin({
        name: "vendors", //name是配置文件里面入口文件的键名
        filename: "vendors.js", //filename 是输出的文件名
        minChunks: Infinity
    }),  // 提取第三方库

    new HtmlWebpackPlugin({                                                                     // 构建html文件
        filename: path.resolve(__dirname, '../vue-demo-server/index.html'),
        template: './src/template/index.ejs',
        inject: false
    })
]);

// 写入环境变量
fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'export default "severdevelop";';
    fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
});

module.exports = config;