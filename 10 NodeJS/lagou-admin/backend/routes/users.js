var express = require('express');
var router = express.Router();

const {signup,list,remove,signin} = require('../controllers/users.js')
const {auth} = require('../middlewares/auth.js')

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

// 发送请求
/* router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
}); */
router.post('/', signup);//抽离中间件;将请求路径统一，前端通过请求不同的方法调不同的接口

router.get('/',auth,list)//将请求路径统一，前端通过请求不同的方法调不同的接口;中间键auth鉴权

router.delete('/',remove)//将请求路径统一，前端通过请求不同的方法调不同的接口

router.post('/signin',signin)

module.exports = router;
