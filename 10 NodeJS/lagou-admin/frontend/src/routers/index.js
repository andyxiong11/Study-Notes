import SMERouter from 'sme-router'
/* import indexTpl from '../views/index.art'
import siginTpl from '../views/signin.art' */

const router = new SMERouter('root') //root为index.html的根节点

/* const htmlIndex = indexTpl({})
const htmlSignin = siginTpl({}) */

// import {signin,index} from '../controllers'
import index from '../controllers/index'
import signin from '../controllers/signin'

// sme-router路由守卫
router.use((req)=>{
  // 第一次打开的页面鉴权，从app.js文件移入
  $.ajax({
    url:'/api/users/isAuth',
    // TODO此处不能使用json 20231216长时间阻塞
    // dataType:'json', 
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端
    },
    success(result){
      // console.log(result);
      if(result.ret){//鉴权通过，是登录状态
        router.go('/index')
      }else{
        router.go('/signin')
      }
    }
    /* error: (e) => {
      console.log(e);
    } */
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