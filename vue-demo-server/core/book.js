/**
 * Created by jerry on 2016/10/12.
 */
var dao = require('../dao/book');

var core = {
    search: dao.search,
    get: dao.get,
    delete: dao.delete,
    insert: dao.insert,
    edit: dao.edit
};



module.exports = core;