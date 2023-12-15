const auth = (req,res,next) => {
  if(req.session.username) {//cookie中有当前登录的用户
    next()//继续后续操作
  }else{
    res.render('fail',{//fail.ejs模板
      data:JSON.stringify({
        message:"请登录"
      })
    })
  }
}

exports.auth = auth