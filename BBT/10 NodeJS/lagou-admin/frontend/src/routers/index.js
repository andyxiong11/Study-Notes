import SMERouter from 'sme-router'
import indexTpl from '../views/index.art'
import siginTpl from '../views/signin.art'

const router = new SMERouter('root') //root为index.html的根节点

const htmlIndex = indexTpl({})
const htmlSignin = siginTpl({})

router.route('/', (req, res, next) => {
  res.render(htmlIndex)

})

router.route('/sigin', (req, res, next) => {
  res.render(htmlSignin)

})

export default router