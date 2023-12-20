import signinTpl from '../views/signin.art'

const htmlSignin = signinTpl({})

// 点击登录按钮
const _handleSubmit = (router) => {
  return (e)=>{
    e.preventDefault();//阻止表单跳转
    // router.go('/index')

    const data = $('#signin').serialize()
    $.ajax({
      url:'/api/users/signin',
      type:'post',
      dataType:'json',
      data,
      success: function(res,textStatus,jqXHR){
        // console.log(jqXHR);
        const token = jqXHR.getResponseHeader('x-access-token')//取后端传的token
        localStorage.setItem('lg-token',token)//存入浏览器

        if(res.ret){//后端响应ret为真，数据存在
          router.go('/index')
        }
      }
    })
  }
}

// 登录
const signin = (router)=>{
  // TODO函数柯里化
  //一个函数需要接受传参时，再定义一个函数将其返回
  return (req, res, next) => {
    res.render(htmlSignin)
    
    $('#signin').on('submit',_handleSubmit(router))//给表单绑定事件
  }
}

export default signin