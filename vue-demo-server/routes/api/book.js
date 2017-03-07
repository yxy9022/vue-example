/**
 * Created by jerry on 2016/10/12.
 */
var bookController = require('../../controllers/book');
var express = require('express');
var router = express.Router();

router.all("/search",bookController.search);
router.all("/get",bookController.get);
router.all("/delete",bookController.delete);
router.all("/set",bookController.set);

module.exports = {
    router: router
};