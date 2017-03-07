/**
 * Created by jerry on 2016/10/12.
 */
var moment = require('moment');
var baseDao = require('./');

var fruitDao = {};

fruitDao.format = function (item) {
    if (item) {
        return {
            id: item.id,
            name: item.name || '',
            englishname: item.englishname,
            effect: item.effect || '',
            create_at: moment(item.create_at).format('YYYY-MM-DD HH:mm:ss'), //创建时间
            update_at: item.update_at ? moment(item.update_at).format('YYYY-MM-DD HH:mm:ss') : '' //上次更新时间
        };
    }
    else {
        return null;
    }
};

fruitDao.formatItems = function (items) {
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
 * 水果查询
 * @param key
 * @param fn
 */
fruitDao.search = function (key, fn) {
    var sqlStr = 'select * from fruit';
    if (key && key.length > 0) {
        sqlStr += ' where name like \'%' + key + '%\' or englishname like \'%' + key + '%\' or effect like \'%' + key + '%\'';
    }
    baseDao.mysqlQuery(sqlStr, function (err, data) {
        var items = [];
        if (data) {
            items = fruitDao.formatItems(data);
        }
        fn(err, items);
    });
};

module.exports = fruitDao;