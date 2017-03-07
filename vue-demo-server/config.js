/**
 * Created by jerry on 2016/10/12.
 */

var mysql = require('mysql');

//mysql数据库连接配置
exports.pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vue_demo',
    port: 3306
});

