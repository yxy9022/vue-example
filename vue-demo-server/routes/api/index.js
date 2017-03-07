/**
 * Created by jerry on 2016/10/12.
 */
var express = require('express');
var router = express.Router();

var fs = require('fs');

//先检查登录
//router.use(index.checkSignin);

router.all('/', function (req, res) {
    res.send("vue接口跟地址=> /api");
});

//轮询当前目录下的子模块，并挨个加载其路由配置
fs.readdir(__dirname, function (err, files) {
    files.forEach(function (file) {
        if (file !== 'index.js') {
            router.use('/' + file.replace('.js', ''), require('./' + file).router);
        }
    });
});

var indexRouter = {
    router: router
};

module.exports = indexRouter;