- 初始化npm  npm init -y
- npm i lodash -S

**模块写完后进行下面**
- https://www.npmjs.com/ 注册
- npm adduser
- 切换npm源为官方，非淘宝镜像
```shell
  - npm config get registry 	# 查看当前包镜像源
  - npm config set registry=http://registry.npmjs.org/ # 切换源头 npm config set registry=http://registry.npm.taobao.org/
  - npm config get registry 	# 检查镜像源是否下载成功
```
- 切换后重新 npm adduser
- 发布包 npm publish（切记删除index-test.js）

**上面是03-modules文件夹在02-tools/02-npm/目录下时学习的笔记**
---
