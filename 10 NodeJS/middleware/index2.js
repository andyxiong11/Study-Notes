// NodeJS中间件机制2 异步中间件（业务处理后执行）
// KOA2\routes\koa-router\index.js 请求/abc验证KOA中间件机制（洋葱模型）

// 中间件数组
const middlewares = [middleware1, middleware2, middleware3]

const middleware1 = (req, res, next) => {
  console.log('middleware1 start')
  // 所有的中间件都应返回一个Promise对象
  // Promise.resolve()方法接收中间件返回的Promise对象，供下层中间件异步控制
  return next().then(() => {
    console.log('middleware1 end')
  })
}

// async函数自动返回Promise对象
const middleware2 = async (req, res, next) => {
  console.log('middleware2 start')
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  })
  await next()
  console.log('middleware2 end')
}

const middleware3 = async (req, res, next) => {
  console.log('middleware3 start')
  await next()
  console.log('middleware3 end')
}

function run (req, res) {
  const next = () => {
    // 获取中间件数组中第一个中间件
    const middleware = middlewares.shift()//shift 删除第一个元素并返回
    if (middleware) {
      // 将middleware(req, res, next)包装为Promise对象
      return Promise.resolve(middleware(req, res, next))
    }
  }
  next()
}
run() // 模拟一次请求发起