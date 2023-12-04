const path = require('path')

module.exports = {
  // 配置环境
  mode:'development',

  // 配置入口
  entry:{
    app:'./src/app.js'
  },

  // 配置出口
  output:{
    path: path.join(__dirname,'./dist'),
    filename:'app.js'
  }
}