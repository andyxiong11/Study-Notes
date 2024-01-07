const Router = require('@koa/router');

const router = new Router()

router.get('/list',(ctx,next)=>{
  ctx.body = ['t-shit','shoes']
})

router.post('/add',(ctx,next)=>{
  const data = ctx.request.body
  // console.log(data);
  ctx.body = data//将前端请求的数据返回给前端
})

module.exports = router