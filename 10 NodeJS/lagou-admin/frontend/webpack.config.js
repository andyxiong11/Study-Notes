const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 配置环境
  mode:'development',

  devtool:'source-map',

  // 配置入口
  entry:{
    app:'./src/app.js'
  },

  // 配置出口
  output:{
    path: path.join(__dirname,'./dist'),
    filename:'app.js'
  },

  // 配置插件
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./public/index.html'),//需要打包的模板文件
      filename: 'index.html',//打包后的文件名
      inject: 'head'//将打包后的script标签的js放到head标签中
    }),
    new CopyPlugin({
      patterns: [//此处官网文档没有更新写法，参考npm的copy-webpack-plugin文档
        {
          from: './public/favicon.ico', 
          to: path.join(__dirname,'./dist')
        }
      ]
    })
  ],

  // 配置server
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,//是否压缩
    port: 8080,
  }
}