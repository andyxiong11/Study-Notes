import SMERouter from 'sme-router'
/* import indexTpl from '../views/index.art'
import siginTpl from '../views/signin.art' */

const router = new SMERouter('root') //root为index.html的根节点

/* const htmlIndex = indexTpl({})
const htmlSignin = siginTpl({}) */

import {signin,index} from '../controllers'

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