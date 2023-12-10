import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import usersTpl from '../views/users.art'

const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})

const _handleSubmit = (router) => {
  return (e)=>{
    e.preventDefault();//阻止表单跳转
    router.go('/index')
  }
}

// 注册表单提交事件
const _signup = ()=>{
  const $btnClose = $('#users-close')

  // 提交表单
  const data = $('#users-form').serialize()
  console.log(data);
  $.ajax({
    url:'/api/users/signup',//后端接口地址
    type:'post',
    data,
    success(res){
      console.log(res);
    }
  })

  // 关闭注册弹窗
  $btnClose.click()
}

const signin = (router)=>{
  // TODO函数柯里化
  //一个函数需要接受传参时，再定义一个函数将其返回
  return (req, res, next) => {
    res.render(htmlSignin)
    
    $('#signin').on('submit',_handleSubmit(router))//给表单绑定事件
  }
}

const index = (router)=>{
  return (req, res, next) => {
    res.render(htmlIndex)

    // window resize 让页面高度撑满整个屏幕
    $(window,'.wrapper').resize()

    // 填充用户列表
    /* let users = usersTpl
    console.log(users); */
    $('#content').html(usersTpl())

    // 点击保存，提交表单
    $('#users-save').on('click',_signup)
  }
}

export {
  signin,index
}