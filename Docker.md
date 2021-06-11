# Docker

## 1. Docker概述

> 2010在美国几个年轻人成立了dotCloud，做一些pass云计算服务、LXC有关的容器技术，并将自己的容器化技术命名为Docker
>
> 然而刚刚诞生并没有引起行业的关注
>
> 于是，2013年Docker开源，每月更新一个版本
>
> 2014.4.9，Docker1.0发布

* 核心思想：==隔离==,通过隔离将服务器利用到极致

* 开发打包部署上线，一套流程

* 基于Go语言开发   

* ==容器化技术不是模拟一个完整的操作系统==,直接运行在宿主机上，没有自己的内核，也没有虚拟硬件

> DevOps（开发、运维）

## 2. Docker安装

### 2.1 Docker基本组成

**镜像（Images）**：

​	通过镜像创建容器服务，例：tomcat镜像 ==> run ==> tomcat01容器（提供服务）

* 通过这个镜像可以创建多个容器（==最终服务或项目运行是在容器中==）

**容器（container）**：

​	Docker利用容器技术，独立运行一个或一个组应用，它是通过镜像创建的

​	可以理解为一个简易的linux系统

**仓库（repository）**：

​	存放镜像的地方，分为公有仓库和私有仓库

### 2.2 安装Docker

> 安装环境

```shell
[root@andyxiong /]# uname -r
3.10.0-1127.el7.x86_64

[root@andyxiong /]# cat /etc/os-release 
```

> 官方文档：https://docs.docker.com/engine/install/centos/

#### 2.2.1 卸载旧版本

```shell
yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine
```

#### 2.2.2 需要的安装包

```shell
yum install -y yum-utils
```

#### 2.2.3 设置镜像仓库

```shell
# 官方文档默认国外仓库
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo 

# 修改为阿里云镜像
yum-config-manager \
--add-repo \
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 2.2.4 安装Docker

```shell
# 安装前更新yum索引
yum makecache fast
# 安装Docker
yum install docker-ce docker-ce-cli containerd.io
```

#### 2.2.5 启动Docker

````shell
systemctl start docker
````

#### 2.2.6 查看是否安装成功

```shell
docker version
```

#### 2.2.7 hello-world

```sh
docker run hello-world
```

运行结果：

```
Unable to find image 'hello-world:latest' locally # 没有找到'hello-world:latest'镜像
latest: Pulling from library/hello-world		  # 拉取'hello-world:latest'镜像
0e03bdcc26d7: Pull complete 
Digest: sha256:6a65f928fb91fcfbc963f7aa6d57c8eeb426ad9a20c7ee045538ef34847f44f1
Status: Downloaded newer image for hello-world:latest

Hello from Docker!							  	  # 运行成功结果
```

#### 2.2.8 查看下载的镜像

```shell
docker images
```

### 2.3  卸载Docker

#### 2.3.1 卸载依赖

```shell
yum remove docker-ce docker-ce-cli containerd.io
```

#### 2.3.2 删除资源sh

```shell
rm -rf /var/lib/docker
```

### 2.4  阿里云镜像加速器

```shell
mkdir -p /etc/docker

tee /etc/docker/daemon.json <<-'EOF'

{
  "registry-mirrors": ["https://********.mirror.aliyuncs.com"]# 个人加速器地址在阿里云容器镜像服务中
}
EOF

systemctl daemon-reload
systemctl restart docker
```

### 2.5 详解hello-world流程

1. run
1. Docker在本机寻找镜像
1. 本机有则直接运行；否则去DockerHub上下载
1. DockerHub上找到，下载到本地并运行；否则返回错误

### 2.6 底层原理

#### 2.6.1 Docker是什么工作的？

> Docker是一个Client-Server结构的系统，Docker的守护进程运行在主机上，通过Socket从客户端访问，DockerServer接收到Docker-Client的指令就会执行。

#### 2.6.2 Docker为什么比VM快？

1. Docker有比虚拟机更少的抽象层
1. Docker利用的是宿主机的内核，VM需要Guest OS

> 由此可得，在新建一个容器的时候，Docker不需要像虚拟机一样重新加载一个操作系统内核，避免引导

## 3. Docker命令

**帮助命令**

```shell
docker version 	  #显示docker的版本信息
docker info       #显示docker的系统信息，包括镜像和容器的数量
docker 命令 --help #帮助命令
```

> 官方文档：https://docs.docker.com/engine/reference/commandline/

### 	3.1 镜像命令

#### 3.1.1 docker Images 

> 查看本地主机上的所有镜像

```shell
[root@andyxiong ~]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              bf756fb1ae65        5 months ago        13.3kB

REPOSITORY # 镜像的仓库源
TAG		   # 镜像的标签
IMAGE ID   # 镜像的id
CREATED    # 镜像的创建时间
SIZE       # 镜像的大小

#可选项         
  -a, --all             #列出所有镜像
      --digests         
  -f, --filter filter   
      --format string  
      --no-trunc      
  -q, --quiet           # 只显示镜像id
```

#### 3.1.2 docker search

> 搜索镜像

```shell
[root@andyxiong ~]# docker search mysql
NAME                              DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   9592                [OK]                
#下面还有省略了

#可选项
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print search using a Go template
      --limit int       Max number of search results (default 25)
      --no-trunc        Don't truncate output
例：--filter=STARS=3000  #STARS大于3000的镜像
```

#### 3.1.3 docker pull

> 下载镜像

```shell
docker pull 镜像名[:tag]
```

```shell
[root@andyxiong ~]# docker pull mysql
Using default tag: latest			#默认最新版本latest
latest: Pulling from library/mysql
afb6ec6fdc1c: Pull complete 		#分层下载，docker images的核心：联合文件系统
0bdc5971ba40: Pull complete 
97ae94a2c729: Pull complete  
f777521d340e: Pull complete 
1393ff7fc871: Pull complete 
a499b89994d9: Pull complete 
7ebe8eefbafe: Pull complete 
597069368ef1: Pull complete 
ce39a5501878: Pull complete 
7d545bca14bf: Pull complete 
211e5bb2ae7b: Pull complete 
5914e537c077: Pull complete 
Digest: sha256:a31a277d8d39450220c722c1302a345c84206e7fd4cdb619e7face046e89031d	#签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest	#真实地址 mysql<=>docker.io/library/mysql:latest
```

#### 3.1.4 docker rmi

> 删除指定镜像

```shell
docker rmi -f 容器镜像名或id
docker rmi -f 容器镜像名或id 容器镜像名或id 容器镜像名或id #删除多个镜像
```

> 删除所有镜像

```shell
docker rmi -f $(docker images -aq)
```

### 	3.2 容器命令

==有了镜像才可以创建容器==

**pull一个centos镜像**

```shell
docker pull centos
```

#### 3.2.1 新建容器并启动

```shell
docer run [参数] 镜像名

#参数
--name="Name"	容器名字，用来区分容器
-d				后台方式运行
-it				使用交互方式运行，进入容器查看内容
	exit 退出容器
-P				指定容器的端口，-P 8080:8080
	-P ip：主机端口：容器端口
	-P 主机端口：容器端口 （常用）
	-P 容器端口
-p				随机指定端口
```

#### 3.2.2 列出所有运行的容器

```shell

```



### 	3.3 操作命令

## 4. Docker镜像

## 5. 容器数据卷

## 6. DockerFile

## 7. Docker网络原理

## 8. IDEA整合Docker 







