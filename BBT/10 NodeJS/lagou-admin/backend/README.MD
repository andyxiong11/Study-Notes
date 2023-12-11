1. yarn init -y
2. yarn add global express-generator 全局安装express生成器(yarn没有安装成功，使用npm，npm install express  -g；npm install express-generator -g；express --version)
3. express -e 添加对 ejs 模板引擎的支持
4. yarn add global nodemon
5. yarn add mongoose 安装mongoose，便于node操作数据库
6. yarn add bcrypt 对前端请求的用户名密码加密
7. yarn add cors -S 安装cors，在app.js中使用，但是此处不使用该方法解决前端请求跨域，避免老系统后端没有使用cors

yarn start 启动
后端接口调试使用apipost localhost:3000/api/users/signup body类型为urlencoded
MongoDB操作命令：
1. show dbs; 查看所有数据库
2. use lagou-adming
3. db.getCollectionNames() 查看数据库的所有集合（发送请求后查看）
4. db.kittens.find() 查看kittens集合下所有数据