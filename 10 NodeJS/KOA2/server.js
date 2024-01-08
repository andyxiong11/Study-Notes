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

/* // 运行路由
require('./routes/index') 改用三方路由*/

// koa-bodyparser获取前端请求的内容
const bodyParser = require('koa-bodyparser'); 
// 三方路由中间件
const router = require('./routes/koa-router/')
// 加载静态资源
const static = require('koa-static')
// 加载模板引擎
const views = require('koa-views');

koa.use(static('./public',{
  index:'app.html'
}))

koa.use(bodyParser());//需要在路由使用之前使用
koa.use(views('./views',{
  map:{
    ejs: 'ejs', //ejs扩展名文件使用ejs模板引擎渲染
    html: 'ejs' //html扩展名文件使用ejs模板引擎渲染
  },
  extension: 'ejs'//默认扩展名，如果不配置，则需要在products.js文件渲染模板时加上文件扩展名
}))//需要在路由使用之前使用

koa.use(router.routes()).use(router.allowedMethods());

koa.listen(3333)