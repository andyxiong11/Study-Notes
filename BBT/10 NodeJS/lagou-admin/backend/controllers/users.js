// 接口文件

const usersModel = require('../models/user')
const {hash} = require('../utils/tools')

// 注册用户接口请求的内容
const signup = async (req, res, next) => {
  res.set('content-type','application/json;charset=utf-8')//修改响应数据类型为json

  const { username,password } = req.body//前端请求的数据

  const bcryptPassword = await hash(password)//将password加密

  // 判断用户是否存在
  let findResult = await usersModel.findUser(username)
  console.log(findResult);//存在则为数据库中已有的数据，否则为null

  if(findResult){
    res.render('fail',{
      data: JSON.stringify({
        message: '用户名存在'
      })
    })//将fail模板渲染到页面上
  }else{
    // 用户不存在,将用户入库
    let result = await usersModel.signup({//将前端请求的数据存入数据库
      username,
      password:bcryptPassword//将password加密
    })//等待入库后再render
    console.log(result);//数据库中存入的数据
  
    // res.send('respond with a resource');
    res.render('succ',{//使用succ模板渲染
      // data: JSON.stringify({x:0})
     /*  data: JSON.stringify({
        username,
        password//不能直接给前端返回明文密码
      }) */
      data: JSON.stringify({
        message: '注册成功！'
      })
    })
  }
}

// 用户登录接口请求的内容
const signin = async (req,res,next) => {
  const {username,password} = req.body

  let result = await usersModel.findUser(username)
  console.log(result);
}

// 用户列表接口请求的内容
const list = async (req,res,next) => {
  res.set('content-type','application/json;charset=utf-8')//修改响应数据类型为json
  
  const listResult = await usersModel.findList()//查回数据库中的数据
  res.render('succ',{
    data:JSON.stringify(listResult)
  })
}

// 删除用户接口请求的内容
const remove = async (req,res,next) => {
  res.set('content-type','application/json;charset=utf-8')//修改响应数据类型为json

  const {id} = req.body
  let result = await usersModel.remove(id)
  // console.log(result);
  if(result){
    res.render('succ',{
      data:JSON.stringify({
        message:"用户删除成功"
      })
    })
  }else{
    res.render('fail',{
      data:JSON.stringify({
        message:"用户删除失败"
      })
    })
  }
}

exports.signup = signup
exports.list = list
exports.remove = remove
exports.signin = signin