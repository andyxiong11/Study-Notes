import indexTpl from '../views/index.art'
import siginTpl from '../views/signin.art'

const htmlIndex = indexTpl({})
const htmlSignin = siginTpl({})

const _handleSubmit = (router) => {
  return (e)=>{
    e.preventDefault();//阻止表单跳转
    router.go('/index')
  }
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
  }
}

export {
  signin,index
}