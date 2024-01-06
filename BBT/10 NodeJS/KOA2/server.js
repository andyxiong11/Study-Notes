const Koa = require('koa');
const koa = new Koa();

koa.use((context,next) => {
  // console.log(context);
  context.body = 'hello koa'
});

koa.listen(3333);
//yarn start运行;使用apipost访问端口