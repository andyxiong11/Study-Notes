//演示KOA三方插件路由，server.js运行后，访问
const Router = require('@koa/router');

const router = new Router()

const users = require('./users')
const prodcuts = require('./products')

router
  .get('/',async (ctx,next)=>{
    ctx.body = 'home'
  })

  /* // 路由中间件，鉴权使用
  .param('id', (id, ctx, next) => {//因为有动态路由:id，所以每次都会打印id
    console.log(id);
    next();
  })
  //动态路由
  .get('/:id',async (ctx,next)=>{//:id 随便输
    ctx.body = ctx.params.id
    let result = await next()
    // console.log(result);//获取下一个中间件返回的信息
  },(ctx,next)=>{
    // console.log('0');
    return 'hello'
  }) */
  //嵌套路由
  .use('/users',users.routes(),users.allowedMethods())
  .use('/prodcuts',prodcuts.routes(),prodcuts.allowedMethods())
  // 路由枚举
  .get(['/id','/name'],async (ctx,next)=>{
    ctx.body = ctx.url
  })
  // 路由转发（重定向）
  .get('/id/home',async (ctx,next)=>{
    ctx.redirect('/')
  })
  
  //命名路由
  .get('position','/list/:id',(ctx,next)=>{
    ctx.body = 'position'
  })
  // 生成路由url
  .get('/position_redirect',(ctx,next)=>{
    // console.log(router.url('position',{id:100},{query:{name:'qf'}}));
    ctx.redirect(router.url('position',{id:100},{query:{name:'qf'}}))//跳转/list/100?name=qf
  })

  // 验证KOA异步中间件机制（洋葱模型）
  .get('/abc',async (ctx,next)=>{
    console.log('m1 start');
    await next()
    console.log('m1 end');
  },async (ctx,next)=>{
    console.log('m2 start');
    await next()
    console.log('m2 end');
  },async (ctx,next)=>{
    console.log('m3 start');
    await next()
    console.log('m3 end');
  })

module.exports = router