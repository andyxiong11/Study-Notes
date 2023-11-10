- 全局安装glup npm install gulp -g
- gulp -v
- 全局卸载glup npm uninstall gulp -g
- 当前目录初始化 npm init
- 本地安装开发环境的包 npm install 包名 --save-dev 或者 npm install 包名 -D
- 本地安装生产环境的包(underscore) npm install underscore -S 等同于--save
---
- 本地安装后，gulp -v无效,因为不是全局安装，需要./node_modules/.bin/gulp -v查看
- 解决办法：修改“package.json”文件，然后使用npm run dev查看
```shell
"scripts": {
    # "dev":"./node_modules/.bin/gulp -v",
    # 上面或者下面都可以
    "dev":"gulp -v"
  }
```
---
- 只安装package.json中生产环境的包，npm i --production