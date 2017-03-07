/**
 * Created by jerry on 2016/10/12.
 */
var SCErrorCode = require('../SCErrorCode');
var bookCore = require('../core/book');

var bookController = {};

/**
 * 查询书籍
 * @param req
 * @param res
 */
bookController.search = function (req, res) {
    var name = req.query.name || '';
    bookCore.search(name, function (err, rlt) {
        res.json(rlt);
    });
};

bookController.get = function (req, res) {
    var id = req.query.id || req.body.id;
    if (!id || isNaN(id)) {
        return res.json(SCErrorCode.INVALID_PARA);
    }
    bookCore.get(id, function (err, rlt) {
        if (err) {
            return res.json(err);
        }
        res.json(rlt);
    })
};

bookController.delete = function (req, res) {
    var id = req.query.id || req.body.id;
    if (!id || isNaN(id)) {
        return res.json(SCErrorCode.INVALID_PARA);
    }
    bookCore.delete(id, function (err, rlt) {
        if (err) {
            return res.json(err);
        }
        res.json(SCErrorCode.OK);
    })
};

bookController.set = function (req, res) {
    var id = req.query.id || req.body.id || 0;
    var name = req.query.name || req.body.name || '';
    var intro = req.query.intro || req.body.intro || '';
    var author = req.query.author || req.body.author || '';
    if (name.length == 0 || author.length == 0) {
        return res.json(SCErrorCode.INVALID_PARA);
    }
    if (id) {
        //修改
        bookCore.edit(id, name, intro, author, function (err, rlt) {
            if (err) {
                return res.json(err);
            }
            res.json(SCErrorCode.OK);
        })
    } else {
        //新增
        bookCore.insert(name, intro, author, function (err, rlt) {
            if (err) {
                return res.json(err);
            }
            res.json(SCErrorCode.OK);
        })
    }
};

module.exports = bookController;