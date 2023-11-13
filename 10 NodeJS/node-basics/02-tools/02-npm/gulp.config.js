/* package.json中
"scripts": {
  gulp -f 设置gulpfile文件的路径
  "dev": "cross-env NODE_ENV=development gulp -f gulp.config.js",
  "prod": "cross-env NODE_ENV=production gulp -f gulp.config.js",
} */

// 该文件用于演示cross-env 使用
// npm run dev或者npm run prod运行，以判断开发环境和生产环境打包
// 安装cross-env支持 NODE_ENV=production的设置方式，npm install --save-dev cross-env

const { src,dest,series } = require('gulp')

const node_env = process.env.NODE_ENV
console.log(node_env);

function scripts(){
return src('./03-scripts/app.js',{sourcemaps:true })
  .pipe(dest('./03-scripts/dist/'))
}
var build = series(scripts)
exports.default = build
