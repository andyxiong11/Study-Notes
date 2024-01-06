//演示KOA三方插件路由，server.js运行后，访问
const Router = require('@koa/router');

const router = new Router()

const users = require('./users')

router
  .get('/',async (ctx,next)=>{
    ctx.body = 'home'
  })
  //动态路由
  .get('/:id',async (ctx,next)=>{//:id 随便输
    ctx.body = ctx.params.id
    let result = await next()
    console.log(result);//获取下一个中间件返回的信息
  },(ctx,next)=>{
    console.log('0');
    return 'hello'
  })
  //嵌套路由
  .use('/users',users.routes(),users.allowedMethods())

module.exports = router