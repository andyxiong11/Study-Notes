var express = require('express');
var router = express.Router();

const {signup,list,remove,signin,signout,isAuth} = require('../controllers/users.js')
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

router.delete('/',auth,remove)//将请求路径统一，前端通过请求不同的方法调不同的接口

router.post('/signin',signin)//登录

router.get('/signout',auth,signout)//退出登录（清空cookie，仅供测试接口auth鉴权使用）

// router.get('/isAuth',auth)
router.get('/isAuth',isAuth)


module.exports = router;
