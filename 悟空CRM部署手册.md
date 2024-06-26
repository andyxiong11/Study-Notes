## 1. VM网络编辑

子网IP：192.168.200.0
子网掩码：255.255.255.0

DHCP设置：192.168.200.2-192.168.200.254
NAT设置：网关 192.168.200.1

**物理机网络适配器同步设置**

## 2. CentOS7安装网络设置

IP: 192.168.200.132
子网掩码：255.255.255.0
网关IP 192.168.200.1

## 3. 查看CentOS7网络配置

**CentOS7默认没有安装ifconfig，可使用ip addr命令替代**

ifconfig安装命令：yum install net-tools.x86_64

```
/etc/sysconfig/network-scripts/

地址分配模式：BOOTPROTO=static
网卡名称： NAME=ens-32
是否启动： ONBOOT=yes
IPADDR  ：ip地址
NETMASK  ：掩码
GATWEWAY  : 网关
DNS1  ：域名解析改成ip地址

重启网卡命令为：nmcli connection reload 网卡名称（RHEL8）
重启网卡命令为：systemctl restart network（RHEL7）
```

## 4. 远程连接开启SSH

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

## 5. 搭建运行环境
### 5.1 Java

 1. 首先需要将jdk安装包（jdk-8u311-linux-x64.tar.gz）移动到linux /tmp中

 2. 创建Java文件目录
 > mkdir -p /usr/local/java

 3. 解压缩
 > tar -zxvf jdk-8u311-linux-x64.tar.gz -C /usr/local/java/

 3. 配置环境变量
 > vim /etc/profile

 ```shell
 export JAVA_HOME=/usr/local/java/jdk1.8.0_311
 export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib/
 export PATH=$PATH:$JAVA_HOME/bin
 ```

 4. 重新加载配置文件
 > source /etc/profile

 5. 验证
 > java -version

 ### 5.2 Mysql

1. 首先需要将mysql压缩包（mysql-5.7.34-1.el7.x86_64.rpm-bundle.tar）移动到linux /tmp中
   
2. tar -xvf mysql-5.7.34-1.el7.x86_64.rpm-bundle.tar
   
3. 安装顺序

    ```shell
    rpm -ivh mysql-community-common-5.7.34-1.el7.x86_64.rpm  
    # rpm -ivh mysql-community-client-plugins-5.7.34-1.el7.x86_64.rpm
    rpm -ivh mysql-community-libs-5.7.34-1.el7.x86_64.rpm   
    rpm -ivh mysql-community-client-5.7.34-1.el7.x86_64.rpm  
    rpm -ivh mysql-community-server-5.7.34-1.el7.x86_64.rpm  
    ```

4. 查看MySQL状态

   启动MySQL8.0、5.7
   > systemctl start mysqld

   查看MySQL状态
   > systemctl status mysqld

5. 修改MySQL密码
   1. 查看初始密码
      > cat /var/log/mysqld.log | grep password
   2. 修改
      **远程改密码前，需开放MySQL远程连接权限**
      > mysql -u 用户名 -p
      > ALTER user 'root'@'localhost' IDENTIFIED BY 'Root.wukong132';

6. 开放远程登陆权限

   ```sql
   use mysql;

   -- 查询host
   select user, authentication_string, host from user;

   --输入授权远程访问命令
   grant all privileges on *.* to 'root'@'192.168.xxx.xxx<%>' identified by 'xxxxxx' with grant option; --可用%替换具体IP，xxxxxx指密码

   --刷新
   flush privileges;
   ```

   **开放防火墙**
   1. 查看3306端口状态
      > firewall-cmd --query-port=3306/tcp
   2. 开启3306
      > firewall-cmd --zone=public --add-port=3306/tcp --permanent
   3. 重新加载防火墙
      > firewall-cmd --reload

### 5.3 Redis安装

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

## 6. 项目配置

1. 将目录doc下的crm9.sql导入到新建数据库crm9
2. 修改/src/main/resources/config/crm9-config.txt下的数据库配置文件
3. 修改/src/main/resources/config/redis.json下的redis连接文件

## 7. 项目部署

```java
<dependency>
    <groupId>com.jfinal</groupId>
    <artifactId>jfinal-undertow</artifactId>
    <version>1.9</version>
</dependency>
<!--<dependency>-->
            <!--<groupId>javax.servlet</groupId>-->
            <!--<artifactId>javax.servlet-api</artifactId>-->
            <!--<version>4.0.1</version>-->
            <!--<scope>provided</scope>-->
        <!--</dependency>-->
```

打包方式改为jar 运行maven package，打包

### IDEA maven打包

![](https://ailyun-gallery.oss-cn-hangzhou.aliyuncs.com/image/202210281548908.png)

## 8. 项目运行

将打包生成的/72crm-9.0-JAVA-master/target/crm9-release.zip 文件上传到服务器并解压,运行对应的72crm.sh/72crm.bat即可
chmod +x 