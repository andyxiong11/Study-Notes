const Koa = require('koa');
const koa = new Koa();
const logger = require('./middlewares/logger-async')

/* //演示 KOA中间件
koa.use(logger)

koa.use((context,next) => {
  // console.log(context);
  context.body = 'hello koa'//返回给前端
});

koa.listen(3333);
//yarn start运行;使用apipost访问端口 */

// koa-bodyparser获取前端请求的内容
const bodyParser = require('koa-bodyparser'); 
koa.use(bodyParser());//需要在路由使用之前使用

/* // 运行路由
require('./routes/index') */
// 三方路由中间件
const router = require('./routes/koa-router/')
koa.use(router.routes()).use(router.allowedMethods());
koa.listen(3333)