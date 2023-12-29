var express = require('express');
var router = express.Router();

const {add,list,remove,update} = require('../controllers/positions.js')
const uploadMiddleware = require('../middlewares/upload.js')

// router.post('/add',upload.single('companyLogo'),add)//upload.single('companyLogo') multer中间件
router.post('/add',uploadMiddleware,add)//改造中间件uploadMiddleware

router.get('/list',list)

router.delete('/remove',remove)

router.patch('/update',uploadMiddleware,update)//uploadMiddleware中间件 上传图片

module.exports = router