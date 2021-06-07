- [一、检查系统环境](#一检查系统环境)
- [二、安装Java、Apache、TomCat、Mysql](#二安装javaapachetomcatmysql)
  - [1. 安装Java](#1-安装java)
  - [2. 安装Apache](#2-安装apache)
    - [2.1 yum安装Apache](#21-yum安装apache)
    - [2.2 源码包安装Apache](#22-源码包安装apache)
  - [3. 安装TomCat源码包](#3-安装tomcat源码包)
  - [4. Mysql安装](#4-mysql安装)
    - [4.1.1 yum安装Mysql](#411-yum安装mysql)
    - [4.1.2 yum安装 mysql-server](#412-yum安装-mysql-server)
    - [4.2 RPM安装mysql](#42-rpm安装mysql)
    - [4.3 启动停止](#43-启动停止)
    - [4.4 查看初始密码](#44-查看初始密码)
    - [4.5 外部IP连接数据库](#45-外部ip连接数据库)
  - [5. Nginx安装](#5-nginx安装)
  - [6. Redis安装](#6-redis安装)


> 系统环境：CentOS 7

# 一、检查系统环境

**新系统省略以下步骤**

1. 确认系统版本

> cat /etc/redhat-release

2. 检查是否安装过apache

> rpm -qa | grep httpd

3. 检查是否安装过Mysql

> service mysqld start

4. 清理Mysql

>yum remove mysql
 rm -f /etc/my.cnf

5. 卸载Apache包

> rpm -qa|grep httpd

# 二、安装Java、Apache、TomCat、Mysql

## 1. 安装Java

    1. 首先需要将jdk安装包移动到linux中
    > 建议放到/tmp临时文件目录

    2. 创建Java文件目录
    > mkdir -p /usr/local/java

    3. 解压缩
    > tar -zxvf  [压缩包名称] -C /usr/local/java/

    3. 配置环境变量
    > vim /etc/profile

    ```shell
    export JAVA_HOME=/usr/local/java/jdk1.8.0_291
    export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib/
    export PATH=$PATH:$JAVA_HOME/bin
    ```
    4. 重新加载配置文件
    > source /etc/profile

    5. 验证
    > java -version

## 2. 安装Apache

### 2.1 yum安装Apache

> yum -y install httpd
直到返回

......
Installed:
httpd.x86_64 0:2.4.6-40.el7.centos.4

Dependency Installed:
apr.x86_64 0:1.4.8-3.el7 apr-util.x86_64 0:1.5.2-6.el7
httpd-tools.x86_64 0:2.4.6-40.el7.centos.4 mailcap.noarch 0:2.1.41-2.el7

Complete!
表示安装成功！

### 2.2 源码包安装Apache

查看是否有编译器
> gcc -v

安装gcc和c++
> yum install gcc -y
  yum install gcc-c++ -y

1. 首先需要将apache源码包移动到linux中

> 建议放到/tmp临时文件目录

2. 解压缩

> tar -zxvf  apache-tomcat-7.0.82.tar.gz 

3. 进入解压之后的源码包文件夹

4. 进入之后进行检测操作

> ./configure --prefix=/usr/local/apache2/ --sysconfdir=/usr/local/apache2/etc/ --with-included-apr --enable-so --enable-deflate=shared --enable-expires=shared --enable-rewrite=shared

分解上面命令作用：

./configure       #检查编译环境 执行后将生成MakeFile文件

--prefix=/usr/local/apache2/ #指定安装路径

--sysconfdir=/usr/local/apache2/etc/ #指定在单个机器上使用的只读数据的安装位置.

--with   #with选项来指定具体的软件包地址，通过without选项来指定不使用指定的软件包。

-included-apr#指定C头文件的安装位置.其他语言如C++的头文件也可以使用此选项

--enable#当你想开启某个文件的的时候可以使用它

5. 检测完成之后进行

make 进行编译操作

6. 编译完成之后进行安装操作

make install

7. 安装完成测试 

启动Apache测试：

/usr/local/apache2/bin/apachectl start

ps aux | grep httpd  检测进行

netstat -tlun |grep :80 检测80端口

## 3. 安装TomCat源码包

1. 首先需要将jdk安装包移动到linux中

> 建议放到/tmp临时文件目录

2. 解压缩
   
> tar -zxvf /tmp/apache-tomcat-7.0.82.tar.gz -C /usr/local

3. 重命名
   
> mv /usr/local/apache-tomcat-7.0.82 /usr/local/Tomcat

4. 测试
   
> /usr/local/Tomcat/bin/startup.sh
> /usr/local/Tomcat/bin/shutdown.sh
> localhosts:8080

## 4. Mysql安装

检查是否已经安装 mysql、mariadb

rpm -qa | grep -i mysql 若安装过，会输出相关包名
rpm -qa | grep mariadb

若有安装过 mysql、mariadb，则删除相关文件

rpm -e [–-nodeps] 包名（此处包名是上面命令查出来的名字）
rpm -e --nodeps mariadb-server
rpm -e --nodeps mariadb
rpm -e --nodeps mariadb-libs

### 4.1.1 yum安装Mysql

> yum -y install mysql

7.2版本的Centos已经把mysql更名为mariadb，表示安装成功！

### 4.1.2 yum安装 mysql-server

> yum -y install mysql-server

可能会报错：
CentOS 7+ 版本将MySQL数据库软件从默认的程序列表中移除，用mariadb代替了，entos7配置教程上，大多都是安装mariadb，因为centos7默认将mariadb视作mysql。因为mysql被oracle收购后，原作者担心mysql闭源，所以又写了一个mariadb，这个数据库可以理解为mysql的分支。如果需要安装mariadb，只需通过yum就可。

一是安装mariadb

yum install -y mariadb

二是从官网下载mysql-server

```
wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum install mysql-community-server
```

### 4.2 RPM安装mysql

**安装顺序**

```
rpm -ivh mysql-community-common-5.7.17-1.el7.x86_64.rpm   
rpm -ivh mysql-community-libs-5.7.17-1.el7.x86_64.rpm   
rpm -ivh mysql-community-client-5.7.17-1.el7.x86_64.rpm  
rpm -ivh mysql-community-server-5.7.17-1.el7.x86_64.rpm  
rpm -ivh mysql-community-devel-5.7.17-1.el7.x86_64.rpm  
```

```
PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

/usr/bin/mysqladmin -u root password 'new-password'
/usr/bin/mysqladmin -u root -h andyxiong password 'new-password'

Alternatively you can run:
/usr/bin/mysql_secure_installation

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.

See the manual for more instructions.

Please report any problems with the /usr/bin/mysqlbug script!
```

当安装第二个rpm时，会报出出现依赖冲突，因为CentOS的默认数据库已经不再是MySQL了，而是MariaDB。
查看当前安装的mariadb包：
rpm -qa | grep mariadb
用命令删除
rpm -e --nodeps mariadb-libs-5.5.44-2.el7.centos.x86_64
然后重新按顺序安装.

### 4.3 启动停止

> 启动 mysql 服务：
  service mysql start
  关闭 mysql 服务：
  service mysql stop

### 4.4 查看初始密码

>  cat /var/log/mysqld.log | grep password

### 4.5 外部IP连接数据库

```sql
use mysql;
-- 查询host
select user, authentication_string, host from user;

--输入授权远程访问命令
grant all privileges on *.* to 'root'@'192.168.xxx.xxx' identified by '123456' with grant option;

flush privileges;
```

如果还是连接不上，需要关闭服务器防火墙

1. 首先查看防火墙状态
> service iptables status
> systemctl status firewalld
提示：Unit iptables.service could not be found，

2. 先执行如下两个命令：
   
```
cd /etc/sysconfig
ls -l
```
显示没有iptables文件，但存在ip6tables-config和iptables-config。因为CentOS 7默认没有了iptables文件。

3. 安装iptables-services

> yum install iptables-services

4. 启动iptables

```
systemctl enable iptables
systemctl start iptables
```

5. 关闭iptables防火墙，使用命令
> service iptables stop

6. 打开iptables防火墙，使用命令
> service iptables start（本次有效，下次开机后恢复原设置）

7. 停止firewall防火墙
> systemctl stop firewalld.service

8. 禁止firewall开机自启
> systemctl disable firewalld.service 

## 5. Nginx安装

1. 安装编译工具及库文件
> yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel

2. 解压缩
> tar -zxvf /tmp/nginx-1.8.0.tar.gz -C /usr/local

3. 进入安装包
> cd /usr/local/nginx-1.8.0

4. 编译安装
> ./configure
> make
> make install

5. 测试
  1. 查看Nginx版本
    > usr/local/webserver/nginx/sbin/nginx -v
  2. 启动Nginx
    > cd /usr/local/nginx/sbin/
    > ./nginx
    > 查询nginx进程
    > ps aux|grep nginx

  **注意**：
    执行./nginx启动nginx，这里可以-c指定加载的nginx配置文件
    如下：./nginx -c /usr/local/nginx/conf/nginx.conf
    如果不指定-c，nginx在启动时默认加载conf/nginx.conf文件，此文件的地址也可以在编译安装nginx时指定./configure的参数（--conf-path= 指向配置文件（nginx.conf））

  3. 停止Nginx
    > cd /usr/local/nginx/sbin
    > ./nginx -s quit
  4. 重启Nginx
    > ./nginx -s quit./nginx

6. Nginx配置
   
可选创建用户www
> /usr/sbin/groupadd www
> /usr/sbin/useradd -g www www

默认配置文件
> /usr/local/nginx/conf/nginx.conf

```
user www www;
worker_processes 2; #设置值和CPU核心数一致
error_log /usr/local/webserver/nginx/logs/nginx_error.log crit; #日志位置和日志级别
pid /usr/local/webserver/nginx/nginx.pid;
#Specifies the value for maximum file descriptors that can be opened by this process.
worker_rlimit_nofile 65535;
events
{
  use epoll;
  worker_connections 65535;
}
http
{
  include mime.types;
  default_type application/octet-stream;
  log_format main  '$remote_addr - $remote_user [$time_local] "$request" '
               '$status $body_bytes_sent "$http_referer" '
               '"$http_user_agent" $http_x_forwarded_for';
  
#charset gb2312;
     
  server_names_hash_bucket_size 128;
  client_header_buffer_size 32k;
  large_client_header_buffers 4 32k;
  client_max_body_size 8m;
     
  sendfile on;
  tcp_nopush on;
  keepalive_timeout 60;
  tcp_nodelay on;
  fastcgi_connect_timeout 300;
  fastcgi_send_timeout 300;
  fastcgi_read_timeout 300;
  fastcgi_buffer_size 64k;
  fastcgi_buffers 4 64k;
  fastcgi_busy_buffers_size 128k;
  fastcgi_temp_file_write_size 128k;
  gzip on; 
  gzip_min_length 1k;
  gzip_buffers 4 16k;
  gzip_http_version 1.0;
  gzip_comp_level 2;
  gzip_types text/plain application/x-javascript text/css application/xml;
  gzip_vary on;
 
  #limit_zone crawler $binary_remote_addr 10m;
 #下面是server虚拟主机的配置
 server
  {
    listen 80;#监听端口
    server_name localhost;#域名
    index index.html index.htm index.php;
    root /usr/local/webserver/nginx/html;#站点目录
      location ~ .*\.(php|php5)?$
    {
      #fastcgi_pass unix:/tmp/php-cgi.sock;
      fastcgi_pass 127.0.0.1:9000;
      fastcgi_index index.php;
      include fastcgi.conf;
    }
    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|ico)$
    {
      expires 30d;
  # access_log off;
    }
    location ~ .*\.(js|css)?$
    {
      expires 15d;
   # access_log off;
    }
    access_log off;
  }

}
```

检查配置是否正确
> /usr/local/webserver/nginx/sbin/nginx -t

## 6. Redis安装

1. 安装编译工具
> yum -y install gcc-c++ 

2. 解压缩
> tar -zxvf /tmp/redis-stable.tar.gz -C /usr/local

3. 进入安装包
> cd /usr/local/redis-stable

4. 编译安装
> make
> make install

5. 修改redis配置文件 redis.conf
> vi /usr/local/redis-stable/redis.conf 

daemonize 改成 yes
注释掉 bind 127.0.0.1 （这个是运行那个网络IP访问的设置，注释掉后别的电脑就可以连接本机）

6. 启动Redis
> cd /usr/local/redis-stable/
> ./src/redis-server ./redis.conf ( ./src/redis-server 是底层的启动文件 ， ./redis.conf  是指定的配置文件)

7. 测试

  可以直接到redis 下的 src 目录 ，里面有个直接可以连接 redis的客户端脚本
  > cd /usr/local/redis-stable/src
  > ./redis-cli

  再来个 redis标准的 hello world!
  > set text "hello world!"
  > get text

8. 远程连接

```java

import redis.clients.jedis.Jedis;
 
public class redis {
 
    public static void main(String[] args) {
        //连接本地的 Redis 服务,localhots改成服务器ip
        Jedis jedis = new Jedis("localhost");
        System.out.println("连接成功");
        //设置 redis 字符串数据
        jedis.set("redis", "Hello World!");
        // 获取存储的数据并输出
        System.out.println("redis: "+ jedis.get("redis"));
    }

}
```

可能会报错，原因是redis默认的保护模式为 yes ，改成 no 就好了
> cd /usr/local/redis-stable/src
> ./redis-cli
> config set protected-mode "no"   



