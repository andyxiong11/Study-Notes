# linux基本环境配置
- [linux基本环境配置](#linux基本环境配置)
- [一、检查系统环境](#一检查系统环境)
  - [1. 检查Apache环境](#1-检查apache环境)
  - [2. 检查Mysql环境](#2-检查mysql环境)
  - [3. 更换系统源](#3-更换系统源)
- [二、安装Java、Apache、TomCat、Mysql、Nginx、Redis](#二安装javaapachetomcatmysqlnginxredis)
  - [1. 安装Java](#1-安装java)
  - [2. 安装Apache](#2-安装apache)
    - [2.1 yum安装Apache](#21-yum安装apache)
    - [2.2 源码包安装Apache](#22-源码包安装apache)
  - [3. 安装TomCat源码包](#3-安装tomcat源码包)
  - [4. Mysql安装](#4-mysql安装)
    - [4.1 Yum安装](#41-yum安装)
      - [4.1.1 yum安装Mysql](#411-yum安装mysql)
    - [4.2 RPM安装mysql](#42-rpm安装mysql)
    - [4.3 启动停止MySql](#43-启动停止mysql)
    - [4.4 查看初始密码](#44-查看初始密码)
    - [4.5 修改密码](#45-修改密码)
    - [4.6 开放远程登陆权限](#46-开放远程登陆权限)
    - [4.7 临时开放防火墙端口](#47-临时开放防火墙端口)
    - [完全关闭防火墙](#完全关闭防火墙)
    - [4.8 密码策略管理](#48-密码策略管理)
      - [4.8.1 对密码相关参数的修改](#481-对密码相关参数的修改)
      - [4.8.2 关于 mysql 密码策略相关参数](#482-关于-mysql-密码策略相关参数)
      - [4.8.3 修改密码策略](#483-修改密码策略)
    - [4.9 跳过密码验证](#49-跳过密码验证)
  - [5. Nginx安装](#5-nginx安装)
  - [6. Redis安装](#6-redis安装)
- [三、基础工具](#三基础工具)
  - [1. 文件上传下载](#1-文件上传下载)
  - [2. 安装ifconfig](#2-安装ifconfig)
  - [3. 安装wget](#3-安装wget)
- [四、Gnome和KDE](#四gnome和kde)
- [五、 远程连接开启SSH](#五-远程连接开启ssh)


> 系统环境：CentOS 7

# 一、检查系统环境

**新系统省略以下步骤**

1. 确认系统版本

> cat /etc/redhat-release

## 1. 检查Apache环境

1. 检查是否安装过apache

> rpm -qa | grep httpd

3. 卸载Apache包

> rpm -qa|grep httpd

## 2. 检查Mysql环境

1. 查看系统中是否以rpm包安装的mysql：
检查是否已经安装 mysql、mariadb

rpm -qa | grep -i mysql 若安装过，会输出相关包名
rpm -qa | grep mariadb

2. 卸载mysql
若有安装过 mysql、mariadb，则删除相关文件

rpm -e [–-nodeps] 包名（此处包名是上面命令查出来的名字）
rpm -e --nodeps mariadb-server
rpm -e --nodeps mariadb
rpm -e --nodeps mariadb-libs

3. 删除分散mysql文件夹
删除已有配置文件
find / -name mysql 将找到的相关东西delete掉(rm -rf /var/lib/mysql)；
rm /etc/my.cnf

## 3. 更换系统源

**现在已经无需配置yum软件源，yum有新模块会自动寻找最近的软件源**

1. 备份原来的repo文件
> mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

2. 下载新的CentOS-Base.repo到/etc/yum.repos.d/
> wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo

3. 运行
> yum clean all
> yum makecache

4. 更新
> yum -y update

# 二、安装Java、Apache、TomCat、Mysql、Nginx、Redis
## 1. 安装Java

 1. 首先需要将jdk安装包移动到linux中

 2. 创建Java文件目录
 > mkdir -p /usr/local/java

 3. 解压缩
 > tar -zxvf [压缩包名称] -C /usr/local/java/

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

### 2.2 源码包安装Apache

查看是否有编译器
> gcc -v

安装gcc和c++
> yum install gcc -y
> yum install gcc-c++ -y

1. 首先需要将apache源码包移动到linux中

2. 解压缩

> tar -zxvf  apache-tomcat-7.0.82.tar.gz 

3. 进入解压之后的源码包文件夹

4. 进入之后进行检测操作

> ./configure --prefix=/usr/local/apache2/ --sysconfdir=/usr/local/apache2/etc/ --with-included-apr --enable-so --enable-deflate=shared --enable-expires=shared --enable-rewrite=shared

分解上面命令作用：
```
./configure       #检查编译环境 执行后将生成MakeFile文件

--prefix=/usr/local/apache2/ #指定安装路径

--sysconfdir=/usr/local/apache2/etc/ #指定在单个机器上使用的只读数据的安装位置.

--with   #with选项来指定具体的软件包地址，通过without选项来指定不使用指定的软件包。

-included-apr#指定C头文件的安装位置.其他语言如C++的头文件也可以使用此选项

--enable#当你想开启某个文件的的时候可以使用它
```

5. 检测完成之后进行make编译操作

6. 编译完成之后进行安装操作make install

7. 测试 

启动Apache测试：
```
/usr/local/apache2/bin/apachectl start

ps aux | grep httpd  检测进行

netstat -tlun |grep :80 检测80端口
```

## 3. 安装TomCat源码包

1. 首先需要将jdk安装包移动到linux中

2. 解压缩
   
> tar -zxvf /tmp/apache-tomcat-7.0.82.tar.gz -C /usr/local

3. 重命名
   
> mv /usr/local/apache-tomcat-7.0.82 /usr/local/Tomcat

4. 测试
   
```
/usr/local/Tomcat/bin/startup.sh
/usr/local/Tomcat/bin/shutdown.sh
localhosts:8080
```

5. 配置环境变量

打开Tomcat目录下bin文件夹，catalina.sh文件

```
export TOMCAT_HOME=/usr/local/Tomcat
export CATALINA_HOME=/usr/local/Tomcat
export JRE_HOME=/usr/local/java/jdk1.8.0_291/jre
export JAVA_HOME=/usr/local/java/jdk1.8.0_291
```

打开 /etx/profile
```
export CATALINA_HOME=/home/java/apache-tomcat-7.0.69 
export CLASSPATH=.:$JAVA_HOME/lib:$CATALINA_HOME/lib
export PATH=$PATH:$CATALINA_HOME/bin
```
刷新
source /etc/profile 

## 4. Mysql安装
### 4.1 Yum安装
#### 4.1.1 yum安装Mysql

> yum -y install mysql
> yum -y install mysql-server

7.2版本的Centos已经把mysql更名为mariadb，表示安装成功！

可能会报错：
CentOS 7+ 版本将MySQL数据库软件从默认的程序列表中移除，用mariadb代替了，Centos7配置教程上，大多都是安装mariadb，因为centos7默认将mariadb视作mysql。因为mysql被oracle收购后，原作者担心mysql闭源，所以又写了一个mariadb，这个数据库可以理解为mysql的分支。如果需要安装mariadb，只需通过yum就可。

一是安装mariadb

> yum install -y mariadb

二是从官网下载mysql-server

```
wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum install mysql-community-server
```

### 4.2 RPM安装mysql

**安装顺序**

```
rpm -ivh mysql-community-common-8.0.25-1.el7.x86_64  
rpm -ivh mysql-community-client-plugins-8.0.25-1.el7.x86_64
rpm -ivh mysql-community-libs-8.0.25-1.el7.x86_64   
rpm -ivh mysql-community-client-8.0.25-1.el7.x86_64.rpm  
rpm -ivh mysql-community-server-8.0.25-1.el7.x86_64.rpm  
```

安装rpm时，可能会报出出现依赖冲突，因为CentOS的默认数据库已经不再是MySQL了，而是MariaDB。

查看当前安装的mariadb包：
> rpm -qa | grep mariadb

用命令删除
> rpm -e --nodeps 包名
> 
然后重新按顺序安装.

### 4.3 启动停止MySql

启动MySQL8.0、5.7
> systemctl start mysqld

查看MySQL状态
> systemctl status mysqld

----
mysql老版本

启动 mysql 服务：
> service mysql start

关闭 mysql 服务
> service mysql stop

### 4.4 查看初始密码

>  cat /var/log/mysqld.log | grep password

### 4.5 修改密码

> ALTER user 'root'@'localhost' IDENTIFIED BY 'Root.xxxxxx';

注：**如果开放了权限为%，'root'@'%'**

### 4.6 开放远程登陆权限

```sql
use mysql;

-- 查询host
select user, authentication_string, host from user;

--输入授权远程访问命令
grant all privileges on *.* to 'root'@'192.168.xxx.xxx<%>' identified by 'xxxxxx' with grant option;

--8.0用以下命令
update user set host='%' where user ='root';

--刷新
flush privileges;
```

如果还是连接不上，需要关闭服务器防火墙

### 4.7 临时开放防火墙端口

> firewall-cmd --query-port=3306/tcp
开启3306

> firewall-cmd --zone=public --add-port=3306/tcp --permanent
重新加载防火墙

firewall-cmd --reload

### 完全关闭防火墙

1. 首先查看防火墙状态
> service iptables status
> systemctl status firewalld

2. 关闭iptables防火墙
   1. 永久性生效，重启后不会复原
    开启：
    > chkconfig iptables on

    关闭：
    > chkconfig iptables off
   2. 即时生效，重启后复原
    开启：
    > service iptables start
    
    关闭：
    > service iptables stop
   3. 设置后重启：
   reboot

3. 停止firewall防火墙
> systemctl stop firewalld.service

4. 禁止firewall开机自启
> systemctl disable firewalld.service 

### 4.8 密码策略管理

在 mysql 8.0 中新增了三个变量，用于对密码的管理：

1. 新密码不能和前面三次的密码相同
password_history = 3 ; 
 
2. 新密码不能和前面九十天内使用的密码相同
password_reuse_interval = 90 ; 
 
3. 默认为off；为on 时 修改密码需要用户提供当前密码 (开启后修改密码需要验证旧密码，root 用户不需要)
password_require_current = on ;

**查看密码管理策略**
```sql
mysql> show variables like 'password%';
+--------------------------+-------+
| Variable_name            | Value |
+--------------------------+-------+
| password_history         | 0     |
| password_require_current | OFF   |
| password_reuse_interval  | 0     |
+--------------------------+-------+
```

#### 4.8.1 对密码相关参数的修改

1. 全局设置

第一种方式：修改 mysql 的配置文件，全局生效

> vi /etc/my.cnf
 
添加password_history=6

第二种方式：使用 命令 set persist password_history=6

2. 对指定用户设置

**查看权限**
>  select host, user, Password_reuse_history from mysql.user;

```sql
+-----------+------------------+------------------------+
| host      | user             | Password_reuse_history |
+-----------+------------------+------------------------+
| localhost | mysql.infoschema | NULL                   |
| localhost | mysql.session    | NULL                   |
| localhost | mysql.sys        | NULL                   |
| localhost | root             | NULL                   |
+-----------+------------------+------------------------+
```
 
**修改root用户权限

> ALTER USER 'root'@'localhost' password history 3;
 
 接下来，修改密码看下效果，会提示错误
> alter user 'root'@'localhost' identified by 'root@123456';
```sql
1819 - Your password does not satisfy the current policy requirements
```

#### 4.8.2 关于 mysql 密码策略相关参数

validate_password.length  固定密码的总长度；
validate_password.dictionary_file 指定密码验证的文件路径；
validate_password.mixed.case_count  整个密码中至少要包含大/小写字母的总个数；
validate_password.number_count  整个密码中至少要包含阿拉伯数字的个数；
validate_password_special_char_count 整个密码中至少要包含特殊字符的个数；
validate_password.policy 指定密码的强度验证等级，默认为 MEDIUM；
关于 validate_password.policy 的取值：
0/LOW：只验证长度；
1/MEDIUM：验证长度、数字、大小写、特殊字符；
2/STRONG：验证长度、数字、大小写、特殊字符、字典文件；

**查看当前的密码策略**

> SHOW VARIABLES LIKE 'validate_password%';
> 
```sql
+--------------------------------------+--------+
| Variable_name                        | Value  |
+--------------------------------------+--------+
| validate_password.check_user_name    | ON     |
| validate_password.dictionary_file    |        |
| validate_password.length             | 8      |
| validate_password.mixed_case_count   | 1      |
| validate_password.number_count       | 1      |
| validate_password.policy             | MEDIUM |
| validate_password.special_char_count | 1      |
+--------------------------------------+--------+
```

#### 4.8.3 修改密码策略

首先需要设置密码的**验证强度等级**，设置validate_password_policy 的全局参数为 LOW 即可

> set global validate_password_policy=LOW; 
 
**修改密码长度**
> set global validate_password_length=6;

**刷新权限表**
> flush privileges; 

### 4.9 跳过密码验证

**修改mysql的配置文件**

MySQL配置文件my.ini中，在[mysqld]下添加skip-grant-tables，关闭mysql服务并重新开启；

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
    > cd /usr/local/nginx/sbin
    > ./nginx -s quit
    > ./nginx

  5. nginx -s reload

6. Nginx环境变量

运行vim /etc/profile

> export NGINX_HOME=/usr/local/nginx
> export PATH=$PATH:$NGINX_HOME/sbin

运行 source /etc/profile 

7. 可选
    
创建用户www
> /usr/sbin/groupadd www
> /usr/sbin/useradd -g www www

默认配置文件
> /usr/local/nginx/conf/nginx.conf

```
user www www;
worker_processes 2; #设置值和CPU核心数一致
error_log /usr/local/webserver/nginx/logs/nginx_error.log crit; #日志位置和日志级别
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
> redis-server /usr/local/redis-stable/redis.conf ( ./src/redis-server 是底层的启动文件 ， ./redis.conf  是指定的配置文件)

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

9. 配置文件

- daemonize	yes、no	yes表示启用守护进程，默认是no即不以守护进程方式运行。其中Windows系统下不支持启用守护进程方式运行
- port		指定 Redis 监听端口，默认端口为 6379
- bind		绑定的主机地址,如果需要设置远程访问则直接将这个属性备注下或者改为bind * 即可,这个属性和下面的protected-mode控制了是否可以远程访问 。
- protected-mode	yes 、no	保护模式，该模式控制外部网是否可以连接redis服务，默认是yes,所以默认我们外网是无法访问的，如需外网连接rendis服务则需要将此属性改为no。
- timeout	300	当客户端闲置多长时间后关闭连接，如果指定为 0，表示关闭该功能
- loglevel	debug、verbose、notice、warning	日志级别，默认为 notice
- databases	16	设置数据库的数量，默认的数据库是0。整个通过客户端工具可以看得到
- rdbcompression	yes、no	指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大。
- dbfilename	dump.rdb	指定本地数据库文件名，默认值为 dump.rdb
- dir		指定本地数据库存放目录
- requirepass		设置 Redis 连接密码，如果配置了连接密码，客户端在连接 Redis 时需要通过 AUTH <password> 命令提供密码，默认关闭
- maxclients	0	设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 
- maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息。
- maxmemory	XXX <bytes>	指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区。配置项值范围列里XXX为数值。

# 三、基础工具

## 1. 文件上传下载

> yum install lrzsz

上传 rz -y
下载 sz 文件名

## 2. 安装ifconfig

> yum install net-tools.x86_64

## 3. 安装wget

> yum -y install wget

# 四、Gnome和KDE

CentOS7
1. 查看默认target开机模式
systemctl get-default
2. 开机以命令模式启动
systemctl set-default multi-user.target
3. 开机以图形化界面启动
systemctl set-default graphical.target
startx

# 五、 远程连接开启SSH

1. 检查CentOS是否安装openssh-server命令：yum list installed | grep openssh-server
   > 安装命令：yum install openssh-server

2. 安装vim（yum install vim*），使用vim编辑/etc/ssh/ 目录下的sshd服务配置文件 sshd_config

3. 将监听端口、地址前的#去掉,开启远程登录并开启连接验证
   ```shell
   Port 22
   #AddressFamily any
   ListenAddress 0.0.0.0
   ListenAddress
   
   #LoginGraceTime 2m
   PermitRootLogin yes

   #PermitEmptyPasswords no
   PasswordAuthentication yes
   ```

4. 开启sshd服务
   > service sshd start
   
   检查服务是否开启
   > ps -e | grep sshd
   > service sshd status