var express = require('express');
var router = express.Router();

const {add,list,remove} = require('../controllers/positions.js')
const upload = require('../middlewares/upload.js')

router.post('/add',upload.single('companyLogo'),add)//upload.single('companyLogo') multer中间键

router.get('/list',list)

router.delete('/remove',remove)

module.exports = router