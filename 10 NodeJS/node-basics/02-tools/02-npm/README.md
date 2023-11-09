- 全局安装 npm install gulp -g
- gulp -v
- 全局卸载 npm uninstall gulp -g
- 当前目录初始化 npm init
- 本地安装 npm install 包名 --save-dev
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