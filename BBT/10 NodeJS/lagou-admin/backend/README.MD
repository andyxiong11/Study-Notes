1. yarn init -y
2. yarn add global express-generator 全局安装express生成器(yarn没有安装成功，使用npm，npm install express  -g；npm install express-generator -g；express --version)
3. express -e 添加对 ejs 模板引擎的支持
4. yarn add global nodemon
5. yarn add mongoose 安装mongoose，便于node操作数据库
6. yarn add bcrypt 对前端请求的用户名密码加密
7. yarn add cors -S 安装cors，在app.js中使用，但是此处不使用该方法解决前端请求跨域，避免老系统后端没有使用cors
8. yarn add randomstring -S 随机生成字符串，此处仅作演示。实际使用cookie-session插件操作cookie
9. yarn add cookie-session -S 操作cookie
10. 安装 jsonwebtoken yarn add jsonwebtoken -S
11. 安装moment  yarn add moment -S 时间戳
12. 安装multer yarn add multer -S 接收前端上传的图片
13. 安装mime yarn add mime -S 根据文件类型获取文件扩展名，或根据文件扩展名获取文件类型;mime4及以上版本不支持require直接导入
14. 安装socket.io yarn add socket.io -S

yarn start 启动
后端接口调试使用apipost localhost:3000/api/users/signup body类型为urlencoded
MongoDB操作命令：
1. show dbs; 查看所有数据库
2. use lagou-adming
3. db.getCollectionNames() 查看数据库的所有集合（发送请求后查看）
4. db.kittens.find() 查看kittens集合下所有数据

**使用cookie避免同源网页重复http请求**