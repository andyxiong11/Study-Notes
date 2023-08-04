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
  lintOnSave : false//关闭语法检查
}