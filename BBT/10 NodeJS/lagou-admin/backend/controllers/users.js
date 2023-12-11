const usersModel = require('../mopdels/user')

// 注册用户接口请求的内容
const signup = (req, res, next) => {
  const { username,password } = req.body//前端请求的数据

  usersModel.signup({//将前端请求的数据存入数据库
    username,
    password
  })

  // res.send('respond with a resource');
  res.render('succ',{//使用succ模板渲染
    // data: JSON.stringify({x:0})
    data: JSON.stringify({
      username,
      password
    })
  })
}

exports.signup = signup