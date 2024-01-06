//演示KOA原生路由，server.js运行后，访问
const Koa = require('koa');
const koa = new Koa();
const fs = require('fs')
const path = require('path')

/**
 * 用Promise封装异步读取文件方法
 */
function render( page ) {
  return new Promise(( resolve, reject ) => {
    let viewUrl = path.resolve(__dirname,`./views/${page}`)
    fs.readFile(viewUrl, "binary", ( err, data ) => {
      if ( err ) {
        reject( err )
      } else {
        resolve( data )
      }
    })
  })
}

/**
 * 根据URL获取HTML内容
 */
async function route( url ) {
  let view = '404.html'
  switch ( url ) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  let html = await render( view )
  return html
}

koa.use( async ( ctx ) => {
  let url = ctx.request.url
  let html = await route( url )
  ctx.body = html //返回给前端
})

koa.listen(3000)