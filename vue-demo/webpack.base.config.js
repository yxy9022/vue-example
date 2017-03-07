/**
 * Created by jerry on 16/9/27.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        main: './src/main.js',
        vendors: ['vue','vue-router','vue-resource']
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist')
    },
    //模块
    module: {
        //模块加载器。
        //Webpack将所有静态资源都认为是模块。为此Webpack引入了加载器的概念，除了纯JavaScript之外，
        // 每一种资源都可以通过对应的加载器处理成模块。和大多数包管理器不一样的是，Webpack的加载器之间可以进行串联
        // ，一个加载器的输出可以成为另一个加载器的输入。比如LESS文件先通过less-load处理成css，
        // 然后再通过css-loader加载成css模块，最后由style-loader加载器对其做最后的处理，从而运行时可以通过style标签将其应用到最终的浏览器环境。

        //例如：
        //{
        //    test: /\.less$/, //类似如正则表达式匹配.less文件
        //    loader: "style!css!less"
                //这是三个加载器 style-loader，css-loader,less-loader简写形式,
                // 也可以用全名 loader: "style-loader!css-loader!less-loader"
        //     //从右到左，链式执行，通过感叹号链接，也可以通过数组分割，如
        //    loader:["style","css","less"]
        //},
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /vux.src.*?js$/,
                loader: 'babel'
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
                //exclude是排除的目录或文件，使用正则
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
                //要启用sourceMap必须加上参数sourceMap
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    // 转es5
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue',".es6","css","less","less","png","jpg","jpeg"],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    plugins: []
};