// 图片上传中间件
const path = require('path')
const multer = require('multer')
const mime = require ('mime')
const fs = require('fs')

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

const limits = {
  fileSize: 200000,//文件大小 200K
  files:1//文件数量
}

function fileFilter (req, file, cb) {
  // 指示是否应接受该文件
  const acceptType = [//允许上传的文件类型
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif'
  ]

  if(!acceptType.includes(file.mimetype)){
    // 如果有问题，你可以总是这样发送一个错误:
    cb(new Error('文件类型必须是.png,.jpg,.jpeg,.gif'))
  }else{
    // 接受这个文件，使用`true`，像这样:
    cb(null, true)
  }
}

const upload = multer({ 
  storage,//存储文件
  limits,//上传文件大小数量
  fileFilter//上传文件类型
 }).single('companyLogo')

//  错误处理机制
const uploadMiddleware = (req,res,next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // 发生错误
      console.log(err);
      res.render('fail',{//succ.ejs模板
        data: JSON.stringify({
          message: '文件超出200k'
        })
      })
    } else if (err) {
      // 发生错误
      console.log(err.message);
      res.render('fail',{//succ.ejs模板
        data: JSON.stringify({
          message: err.message
        })
      })
    }else{
      // 上传图片非空时，删除已有的图片
      const {companyLogo_old} = req.body
      if(filename !== '' && companyLogo_old){
        try {
          fs.unlinkSync(path.join(__dirname,`../public/uploads/${companyLogo_old}`))//删除已有的图片
        } catch (error) {
          console.log(error);
        }
      }
      req.companyLogo = filename//文件名放在请求体传给下个中间件
      // 一切都好
      next()
    }
  })
}

module.exports = uploadMiddleware