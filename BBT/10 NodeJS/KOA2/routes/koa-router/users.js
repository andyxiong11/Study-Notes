const Router = require('@koa/router')
const {query} = require('../../untils/async-db')

const router = new Router({
  // prefix:'/abc'//该路由前面需要加前缀才能访问
})

function getData (ctx){
  return new Promise((resolve,reject)=>{
    let data = ''
    ctx.req.on('data',(chunk)=>{//监听事件
      data += chunk
    })
    ctx.req.on('end',()=>{//监听事件结束
      resolve(data);
    })
  })
}

router.post('/sigin',async (ctx,next)=>{
  /* let result = ''
  let data = ''
  ctx.req.on('data',(chunk)=>{//监听事件
    data += chunk
  })
  ctx.req.on('end',()=>{//监听事件结束
    console.log(data);
    result = data
  }) 异步，无法将result返回给前端*/
  let result = await getData(ctx)

  ctx.body = result //返回给前端

  // 获取前端传输的内容
  let param = new URLSearchParams(result)
  console.log(param.get('username'),param.get('password'));
})

router.get('/list',async (ctx,next)=>{
  /* // 获取前端传输的内容
  let query = ctx.request.query
  let queryStr = ctx.request.querystring//转成字符串

  // ctx.body = query //返回给前端
  ctx.body = queryStr //返回给前端 */

  cts.session.username = 'abc'//将数据库session表中最新session的username值改为abc

  //数据库操作
  let result = await query('select * from users')
  // let result = await query('select * from users where id=?',[2])//查询id为2的数据u
  ctx.body = result//将前端请求的数据返回给前端
})

router.post('/siginup',async (ctx,next)=>{
  //数据库操作
  const {username,password} = ctx.request.body
  let result = await query('insert into users(username,password) values(?,?)',[username,password])//新增前端传入的数据

  ctx.session = ctx.request.body//将数据存到数据库session表中
  ctx.body = result//将前端请求的数据返回给前端
})

module.exports = router