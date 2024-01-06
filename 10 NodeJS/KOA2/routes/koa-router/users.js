const Router = require('@koa/router')

const router = new Router()

router.get('/sigin',(ctx,next)=>{
  ctx.body = 'sigin' //返回给前端
})

module.exports = router