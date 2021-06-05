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
    - [6.1 启动停止](#61-启动停止)
    - [6.2 查看初始密码](#62-查看初始密码)
- [安装基本常用扩展包](#安装基本常用扩展包)
- [配置Apache、mysql开机启动](#配置apachemysql开机启动)
- [配置Mysql](#配置mysql)


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

### 3. 安装TomCat源码包

    1. 首先需要将jdk安装包移动到linux中
    > 建议放到/tmp临时文件目录

    2. 解压缩
    > tar -zxvf /tmp/apache-tomcat-7.0.82.tar.gz -C /usr/local

    3. 重命名
    > mv /usr/local/apache-tomcat-7.0.82 /usr/local/Tomcat

    4. 测试
    > /usr/local/Tomcat/bin/startup.sh
      /usr/local/Tomcat/bin/shutdown.sh

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
然后重新按顺序安装：

### 6.1 启动停止

> 启动 mysql 服务：
  service mysql start
  关闭 mysql 服务：
  service mysql stop

### 6.2 查看初始密码

>  cat /var/log/mysqld.log | grep password


# 安装基本常用扩展包
1、安装Apache扩展包

yum -y install httpd-manual mod_ssl mod_perl mod_auth_mysql
返回

......
Installed:
httpd-manual.noarch 0:2.4.6-40.el7.centos.4
mod_ssl.x86_64 1:2.4.6-40.el7.centos.4

Complete!
安装成功！！！
3、安装Mysql扩展包

yum -y install mysql-connector-odbc mysql-devel libdbi-dbd-mysql
返回：

......
Dependency Installed:
libdbi.x86_64 0:0.8.4-6.el7 libdbi-drivers.x86_64 0:0.8.3-16.el7
unixODBC.x86_64 0:2.3.1-11.el7

Complete!
安装成功！！！

# 配置Apache、mysql开机启动
重启Apache、mysql服务(注意这里和centos6有区别,Cenots7+不能使用6的方式)

systemctl start httpd.service #启动apache
systemctl stop httpd.service #停止apache
systemctl restart httpd.service #重启apache
systemctl enable httpd.service #设置apache开机启动
如果是采用方法一安装的mariadb,安装完成以后使用下面的命令开启数据库服务：

启动MariaDB
[root@localhost ~]# systemctl start mariadb.service

停止MariaDB
[root@localhost ~]# systemctl stop mariadb.service

重启MariaDB
[root@localhost ~]# systemctl restart mariadb.service

设置开机启动
[root@localhost ~]# systemctl enable mariadb.service
重启对应服务

service mysqld restart

service php-fpm start

service httpd restart
# 配置Mysql
初次安装mysql是没有密码的,我们要设置密码，mysql的默认账户为root

设置 MySQL 数据 root 账户的密码：

[root@localhost ~]# mysql_secure_installation
当出现如下提示时候直接按回车：

Enter current password for root
出现如下再次回车：

Set root password? [Y/n]
出现如下提示输入你需要设置的密码，这里输入了root,输入密码是不显示的，回车后再输入一次确认：

New password:
接下来还会有四个确认，分别是：

Remove anonymous users? [Y/n]
Disallow root login remotely? [Y/n]
Remove test database and access to it? [Y/n]
Reload privilege tables now? [Y/n]
直接回车即可。
