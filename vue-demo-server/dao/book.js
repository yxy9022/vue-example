/**
 * Created by jerry on 2016/10/12.
 */
var moment = require('moment');
var baseDao = require('./');

var bookDao = {};

bookDao.format = function (item) {
    if (item) {
        return {
            id: item.id,
            name: item.name || '',
            intro: item.intro,
            author: item.author || '',
            create_at: moment(item.create_at).format('YYYY-MM-DD HH:mm:ss'), //创建时间
            update_at: item.update_at ? moment(item.update_at).format('YYYY-MM-DD HH:mm:ss') : '' //上次更新时间
        };
    }
    else {
        return null;
    }
};

bookDao.formatItems = function (items) {
    var that = this;
    if (items) {
        var data = [];
        items.forEach(function (item) {
            data.push(that.format(item));
        });
        return data;
    }
    else {
        return [];
    }
};


/**
 * 书籍查询
 * @param name
 * @param fn
 */
bookDao.search = function (name, fn) {
    var sqlStr = 'select * from book';
    baseDao.mysqlQuery(sqlStr, function (err, data) {
        var items = [];
        if (data) {
            items = bookDao.formatItems(data);
        }
        fn(err, items);
    });
};

/**
 * 获取一本书的信息
 * @param id
 * @param fn
 */
bookDao.get = function (id, fn) {
    var sqlStr = 'select * from book where id=' + id;
    baseDao.mysqlQuery(sqlStr, function (err, rows) {
        var result = null;
        if (rows && rows.length > 0) {
            result = bookDao.format(rows[0]);
        }
        fn(err, result);
    });
};

/**
 * 根据id删除一本书
 * @param id
 * @param fn
 */
bookDao.delete = function (id, fn) {
    var sqlStr = 'delete from book where id=?';
    var params = [id];
    baseDao.mysqlQuery(sqlStr, params, function (err, packet) {
        //console.log('---err---');
        //console.log(err);
        //console.log('---packet---');
        //console.log(packet);
        //OkPacket {
        //    fieldCount: 0,
        //    affectedRows: 0, //受影响的行数
        //    insertId: 0,
        //    serverStatus: 2,
        //    warningCount: 0,
        //    message: '',
        //    protocol41: true,
        //    changedRows: 0
        // }
        fn(err, packet);
    });
};

/**
 * 增加一本书
 * @param name 书名
 * @param intro 简介
 * @param author 作者
 * @param fn
 */
bookDao.insert = function (name, intro, author, fn) {
    var sql = 'insert into book(name,intro,author) value(?,?,?)';
    var params = [
        name, intro, author
    ];
    baseDao.mysqlQuery(sql, params, function (err, packet) {
        //console.log('---err---');
        //console.log(err);
        //console.log('---packet---');
        //console.log(packet);
        //{
        //    "fieldCount":0,
        //    "affectedRows":1,//受影响的行数
        //    "insertId":4,  //添加成功的数据的id
        //    "serverStatus":2,
        //    "warningCount":0,
        //    "message":"",
        //    "protocol41":true,
        //    "changedRows":0
        //}
        fn(err, packet);
    });
};

bookDao.edit = function (id, name, intro, author, fn) {
    var sql = 'update book set name=?,intro=?,author=?,update_at=? where id=?';
    var params = [
        name,
        intro,
        author,
        new Date(),
        id
    ];
    baseDao.mysqlQuery(sql, params, function (err, packet) {
        //console.log('---err---');
        //console.log(err);
        //console.log('---packet---');
        //console.log(packet);
        //{"fieldCount":0,
        // "affectedRows":1,//受影响的行数
        // "insertId":0,
        // "serverStatus":2,
        // "warningCount":0,
        // "message":"(Rows matched: 1  Changed: 1  Warnings: 0",
        // "protocol41":true,
        // "changedRows":1
        // }
        fn(err, packet);
    });
};

module.exports = bookDao;