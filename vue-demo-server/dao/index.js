/**
 * Created by jerry on 2016/10/12.
 */
var mysqlPool = require('../config').pool;
var SCErrorCode = require('../SCErrorCode');

/**
 * mysql基本方法调用
 * @param sql 待执行的sql语句
 * @param params 参数
 * @param fn 回调函数
 */
exports.mysqlQuery = function (sql, params, fn) {
    if (typeof params === 'function') {
        fn = params;
        params = [];
    }
    mysqlPool.getConnection(function (err, conn) {
        if (err) {
            console.log("ERR( _query ) ==> " + err);
            return fn(SCErrorCode.SERVER_ERROR, null);
        }
        //console.log('---sql_query---');
        //console.log(sql);
        conn.query(sql, params, function (err, rows) {
            if (err) {
                console.log('---sql_query_err---');
                console.log(err);
                conn.release();
                return fn(SCErrorCode.SERVER_ERROR, null);
            }
            conn.release();
            fn(null, rows);
        });
    });
};

/**
 * mysql主要用于分页查询，返回结果集的同时返回总数记录
 * @param sql 待执行的sql语句
 * @param params 参数
 * @param fn 回调函数
 */
exports.mysqlQueryPage = function (sql, params, fn) {
    if (typeof params === 'function') {
        fn = params;
        params = [];
    }
    mysqlPool.getConnection(function (err, conn) {
        if (err) {
            console.log("ERR( _query_page ) ==> " + err);
            return fn(SCErrorCode.SERVER_ERROR, null);
        }
        //console.log('---sql_query_page---');
        //console.log(sql);
        conn.query(sql, params, function (err, rows) {
            if (err) {
                console.log('---sql_query_page_err---');
                console.log(err);
                conn.release();
                return fn(SCErrorCode.SERVER_ERROR, null);
            }
            conn.query("select found_rows() as num", function (err, count) {
                //console.log('---count---');
                //console.log(count);
                var result = {
                    total: count[0].num,
                    items: rows
                };
                conn.release();
                fn(null, result);
            })
        });
    });
};