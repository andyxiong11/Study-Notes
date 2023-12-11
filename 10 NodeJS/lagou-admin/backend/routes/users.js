var express = require('express');
var router = express.Router();

const {signup,list} = require('../controllers/users.js')

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

// 发送请求
/* router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
}); */
router.post('/signup', signup);//抽离中间件

router.get('/list',list)

module.exports = router;
