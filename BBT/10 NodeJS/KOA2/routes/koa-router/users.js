const Router = require('@koa/router')

const router = new Router({
  prefix:'/abc'//该路由前面需要加前缀才能访问
})

router.get('/sigin',(ctx,next)=>{
  ctx.body = 'sigin' //返回给前端
})

module.exports = router