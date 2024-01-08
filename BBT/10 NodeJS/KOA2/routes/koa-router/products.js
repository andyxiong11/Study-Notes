const Router = require('@koa/router');

const router = new Router()

router.get('/list',(ctx,next)=>{
  ctx.body = ['t-shit','shoes']
})

router.post('/add',async (ctx,next)=>{
  const data = ctx.request.body
  // console.log(data);
  // ctx.body = data//将前端请求的数据返回给前端
  
  /* await ctx.render('succ',{//succ 模板文件名
    data: JSON.stringify(data)//返回一个字符串对象
  }) */
  await ctx.render('fail.html',{//fail.html 模板文件名
    message: 'fail'
  })
})

module.exports = router