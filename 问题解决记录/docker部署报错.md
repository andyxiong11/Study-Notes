## 问题

ERROR: for mysql  Cannot start service db: Ports are not available: exposing port TCP 0.0.0.0:3306 -> 0.0.0.0:0: listen tcp 0.0.0.0:3306: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted.

## 解决办法

1. 方法一：停止主机的mysql服务或更换主机的mysql端口
2. 方法二：更换docker端口映射。docker run --name MYSQL -e MYSQL_ROOT_PASSWORD=123456 -p 3309:3306 -itd mysql:latest /bin/bash