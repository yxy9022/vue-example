/**
 * Created by jerry on 2016/10/12.
 */

var fruitController = require('../../controllers/fruit');
var express = require('express');
var router = express.Router();

router.all("/search",fruitController.search);

module.exports = {
    router: router
};