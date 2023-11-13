当前目录初始化 npm init -y
**npx**
- 调用项目安装的模块:本地环境安装gulp npm i gulp -D,就只能通过./node-modules/.bin/gulp -v查看,不能用gulp -v;npx gulp -v就可以
- 避免全局安装模块:如果没有安装包,npx gulp -v将 gulp 下载到一个临时目录，使用以后再删除.比如写在package.js脚本中
- 强制使用本地模块，不下载远程模块,如果本地不存在该模块，就会报错
  - npx --no-install http-server
- 强制安装使用远程模块
  - npx --ignore-existing http-server