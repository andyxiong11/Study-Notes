// 图片上传中间件
const path = require('path')
const multer = require('multer')
const mime = require ('mime')

let filename = ''//存储的文件名

/* const upload = multer({
  dest: path.join(__dirname,'../public/uploads')
}) */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {//cb callback回调函数
    cb(null, path.join(__dirname,'../public/uploads'))//null表示没有报错
  },
  filename: function (req, file, cb) {//定义存储的文件名
    // console.log(mime.getType('png')); //获取文件类型
    // console.log(file.mimetype); //文件类型
    let ext = mime.getExtension(file.mimetype)//获取文件扩展名
    filename = file.fieldname + '-' + Date.now() + '.' + ext
    cb(null, filename)
  }
})

const limit = {
  fileSize: 200000,//文件大小
  files:1//文件数量
}

const upload = multer({ 
  storage,
  limit
 })

module.exports = upload