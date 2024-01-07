const Router = require('@koa/router')

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

module.exports = router