找到git的安装目录, 并打开 bin/bash.bashrc 文件.在内容最下面, 另起一行, 并添加如下代码

```shell
# 个人手动添加, 用于解决中文编码问题
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```