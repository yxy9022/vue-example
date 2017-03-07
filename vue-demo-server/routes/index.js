var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/e', function(req, res) {
  res.render('index',{'title':'Express'});
});

/** vue项目可以访问的地址*/
router.get(['/','/book/list','/fruit/list'], function(req, res) {
  var f = path.resolve(__dirname, '..')+ '/index.html';
  if(fs.existsSync(f)){
    return res.sendFile(f);
  }else {
    return res.send('页面还没有上传');
  }
});

router.use('/api',require('./api').router);

module.exports = router;
