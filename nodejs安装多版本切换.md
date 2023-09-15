**下载**

   [Releases · coreybutler/nvm-windows · GitHub](https://github.com/coreybutler/nvm-windows/releases) 

**查看nvm安装版本**

``````
nvm v
``````

**设置镜像**

nvm的安装目录，有个settings.txt

```
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

**查看所有可安装 Node 版本号**

```
nvm list available
```

**查看已安装node版本**

```
nvm list
```

**安装**

```
nvm install 14.8.0
```

**卸载**

```
nvm uninstall 14.8.0
```

**使用指定版本node**

```
nvm use 14.8.0
```

8. 可能存在问题
        执行vnm install时node安装成功了，但是切换版本后使用时npm没成功，这是因为默认镜像没有下载安装npm，执行第4步后，卸载对应版本重新安装一遍即可。
   在nvm安装目录有node对应版本的目录，可以打开看看里面有没有npm。