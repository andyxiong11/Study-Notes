const Koa = require('koa');
const koa = new Koa();
const logger = require('./middlewares/logger-async')

/* //演示 KOA中间件
koa.use(logger)

koa.use((context,next) => {
  // console.log(context);
  context.body = 'hello koa'
});

koa.listen(3333);
//yarn start运行;使用apipost访问端口 */

// 运行路由
require('./routes/index')