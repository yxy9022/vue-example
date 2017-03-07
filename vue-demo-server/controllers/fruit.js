/**
 * Created by jerry on 2016/10/12.
 */
var SCErrorCode = require('../SCErrorCode');
var fruitCore = require('../core/fruit');

var fruitController = {};

/**
 * 查询书籍
 * @param req
 * @param res
 */
fruitController.search = function (req, res) {
    var searchkey = req.query.key || req.body.key || '';
    fruitCore.search(searchkey, function (err, rlt) {
        res.json(rlt);
    });
};

module.exports = fruitController;