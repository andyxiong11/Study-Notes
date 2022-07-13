## 问题

> ssh: connect to host github.com port 22: Connection refused

## 解决方法

1. 使用GitHub的443端口
   
   > 前提：执行命令ssh -T -p 443 git@ssh.github.com后不再提示connection refused

    在ssh配置文件（/user/用户名/.ssh/config）中添加如下内容：
    ```shell
    Host github.com
    Hostname ssh.github.com
    Port 443
    ```
    添加后依然报错，继续步骤2

2. 切换https协议连接GitHub
   1. 查看连接远程仓库的协议
        ```shell
        git remote -v
        origin  git@github.com:andyxiong11/Study-Notes.git (fetch)
        origin  git@github.com:andyxiong11/Study-Notes.git (push)
        ```
    2. 移除远程仓库配置
        ```shell
        git remote rm origin
        ```
    3. 重新添加远程仓库
        ```shell
        git remote add origin https://github.com/ndyxiong11/Study-Notes.git
        ```
