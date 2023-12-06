const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // 配置环境
  mode:'development',

  devtool:'source-map',

  // 配置入口
  entry:{
    // app:'./src/app.js'
    'js/app':'./src/app.js'
  },

  // 配置出口
  output:{
    path: path.join(__dirname,'./dist'),
    // filename:'app.js'
    filename:'[name]-[hash:6].js' //[name]这样就会将入口文件js/app拿过来，将app打包放在js文件夹中；[hash:6]每次打包生成一个新的文件名，防止浏览器缓存
  },

  module:{
    rules:[
      {
        test: /\.art$/,
        use: {
          loader:'art-template-loader'
        }
      }
    ]
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
        },
        {
          from: './public/libs', 
          to: path.join(__dirname,'./dist/libs')
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],

  // 配置server
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,//是否压缩
    port: 8080,
  }
}