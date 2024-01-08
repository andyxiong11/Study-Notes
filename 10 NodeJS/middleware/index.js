// NodeJS中间件机制
const middleware1 = (req, res, next) => {
  console.log('middleware1 start')
  setTimeout(() => {
    next()
  }, 2000);
}

const middleware2 = (req, res, next) => {
  console.log('middleware2 start')
  next()
}

const middleware3 = (req, res, next) => {
  console.log('middleware3 start')
  next()
}

// 中间件数组
const middlewares = [middleware1, middleware2, middleware3]
function run (req, res) {
  const next = () => {
    // 获取中间件数组中第一个中间件
    const middleware = middlewares.shift()//shift 删除第一个元素并返回
    if (middleware) {
      middleware(req, res, next)
    }
  }
  next()
}
run() // 模拟一次请求发起