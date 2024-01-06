function log(ctx) {
  console.log(ctx.method,ctx.header.host,ctx.url);
}

async function logger(ctx,next){//中间件
  log(ctx)
  await next()
}

module.exports = logger