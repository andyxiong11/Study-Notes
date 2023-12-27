// 图片上传中间件
const path = require('path')
const multer = require('multer')

const upload = multer({
  dest: path.join(__dirname,'../public/uploads')
})

module.exports = upload