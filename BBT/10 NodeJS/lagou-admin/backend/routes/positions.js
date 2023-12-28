var express = require('express');
var router = express.Router();

const {add,list,remove} = require('../controllers/positions.js')
const uploadMiddleware = require('../middlewares/upload.js')

// router.post('/add',upload.single('companyLogo'),add)//upload.single('companyLogo') multer中间件
router.post('/add',uploadMiddleware,add)//改造中间件uploadMiddleware

router.get('/list',list)

router.delete('/remove',remove)

module.exports = router