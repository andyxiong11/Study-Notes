## 问题

node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported

>这是node.js 的版本问题，因为 node.js V17开始版本中发布的是OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响。故此以前的项目在使用 nodejs V17以上版本后会报错。

## 解决方法

解决方法1（推荐）：
修改package.json，在相关构建命令之前加入

SET NODE_OPTIONS=--openssl-legacy-provider 

解决方法2：
每次启动项目输入启动命令时，先在命令行输入SET NODE_OPTIONS=–openssl-legacy-provider， 回车后输入 再npm启动命令npm start

NODE_OPTIONS=--openssl-legacy-provider
npm start

解决方法3：
就是nodejs版本回退到16版本，这样就可以直接运行了。

————————————————
版权声明：本文为CSDN博主「今夜來看雪」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44442366/article/details/129730071