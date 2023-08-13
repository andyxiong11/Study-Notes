//下面为脚手架默认生成
const { defineConfig } = require('@vue/cli-service')
  module.exports = defineConfig({
    transpileDependencies: true
})

//以下为自定义
module.exports = { //common.js的暴露
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',//不能注释掉默认配置
      //可以改为 entry: 'src/peiqi.js',
    }
  },
  lintOnSave : false,//关闭语法检查

  //开启代理服务器（方式一），将本地服务请求不到的资源转发给代理服务器去请求
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        //将url中的“/atguigu”替换为空，不然在localhost:5000中找不到/atguigu/students
        pathRewrite:{"^/atguigu":''},
        ws: true, //用于支持Websocket
        changeOrigin: true //用于控制请求头中的host值，模拟成从“localhost:5000”请求
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{"^/demo":''},
        ws: true, //用于支持Websocket
        changeOrigin: true //用于控制请求头中的host值
      },
    }
  }
}