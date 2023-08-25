const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//以下为自定义
module.exports = {
  lintOnSave : false,//关闭语法检查
}