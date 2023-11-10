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
- 查看已安装的包，npm list 
- 只安装package.json中生产环境的包，npm i --production
- 查看可安装jquery的版本 npm view jquery versions
- 安装指定jquery版本，npm i jquery@2.2.4 -S
- 安装jquery 1.x.x最新版本，npm i jquery@1 -S

**node package versions**
- 13.4.6 
- major:13,minor:4,patch:6

- 检查包是否已经过时，npm outdated
- 更新包，npm update
**npm版本符号**
- "dependencies": {"md5": "^2.1.0"}  ^ 表示 如果 直接npm install或undate 将会安md5 2.\*.*  	最新版本
- "dependencies": {"md5": "~2.1.0"  }  ~ 表示 如果 直接npm install或undatel 将会 安装md5 2.1.*  最新版本
- "dependencies": {"md5": "*"}  * 表示 如果 直接npm install或undate 将会 安装 md5  最新版本

- 强制清理缓存，npm cache clean --force