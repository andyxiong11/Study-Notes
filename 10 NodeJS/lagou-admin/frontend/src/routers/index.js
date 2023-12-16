import SMERouter from 'sme-router'
/* import indexTpl from '../views/index.art'
import siginTpl from '../views/signin.art' */

const router = new SMERouter('root') //root为index.html的根节点

/* const htmlIndex = indexTpl({})
const htmlSignin = siginTpl({}) */

import {signin,index} from '../controllers'

router.use((req)=>{//给sme-router路由守卫增加鉴权
  // 第一次打开的页面鉴权，从app.js文件移入
  $.ajax({
    url:'/api/users/isAuth',
    dataType:'json',
    success(result){
      console.log(result);
      if(result.ret){//鉴权通过，是登录状态
        router.go('/index')
      }else{
        router.go('/signin')
      }
    }
  })
})
router.route('/',()=>{})

/* router.route('/', (req, res, next) => {
  res.render(htmlSignin)
}) */
router.route('/signin', signin(router))//传参router，方便登录页面调用路由方法跳转

router.route('/index',index(router))

/* router.route('/sigin', (req, res, next) => {
  res.render(htmlSignin)
}) */
// router.route('/sigin',signin(router))

export default router