# 常用的命令

## 1. 重启命令（root模式）
   
> reboot
> shutdown -r now

10分钟后重启
> shutdown -r 10

在时间为14:00时候重启
> shutdown -r 14:00

## 2. 关机命令

> halt
> poweroff
> shutdown -h now
> init O

2分钟后关机
> shutdown -h 2

## 3. 查看主机命令

临时改名字
> hostname [主机名]

永久改名字
> vi /etc/hostname

> hostnamectl set-hostname 修改名

## 4. 修改网络配置

> vi /etc/sysconfig/network-scripts/ifcfg-ens32

重启network网络服务
> service network restart

> ip a
> ifconfig
> ping 主机地址

## 5. 防火墙设置

查看防火墙状态
> systemctl status firewalld.service

关闭防火墙
> systemctl stop firewalld.service

禁止开机启动
> systemctl disable firewalld.service

## 6. 目录操作命令

查看工作目录
> pwd

切换工作目录
>cd[目录位置]

查看目录文件
>ls[选项]...[目录或文件名]

常用命令选项
-l：详细信息显示
-a：显示所有子自录和文件的信息，包括隐藏文件
-A：类似于-a”，但不显示“”和“.”自录的信息
-R：递归显示内容

权限设置
> chmod 777 目录名

创建新的目录
-p 创建多级目录
> mkdir [-p] [路径/]目录名

删除目录
> rm -rf [/路径] 目录名

## 7. 文件操作命令

新建空文件，或更新文件时间标记
> touch 文件名

查看文件类型
> file 文件名

复制文件或目录
> cp [选项] 源文件或目录...目标文件或目录

常用命令选项
-r：递归复制整个目录树
-p：保持源文件的属性不变
-f：强制覆盖目标同名文件或目录
-l：需要覆盖文件或目录时进行提醒

册除文件或目录
> rm [选项] 文件或目录

常用命令选项
-f：强行删除文件，不进行提醒
-l：删除文件时提醒用户确认
-r：递归删除整个目录树

移动（Move)文件或目录（如果目标位置与源位置相同，则相当于改名）
> mv [选项].….源文件或目录..目标文件或目录

find查找
> find <路径> <选项> [表达式]

find查找的特点：
从指定路径下递归向下搜索文件，支持按照各种条件方式查找支持对查找到的文件再进一步的使用指令操作
（例如：删除、统计大小、复制等）

常用命令选项
-name 根据文件名查找
-user 根据文件拥有者查找
-group 根据文件所属组寻找文件
-perm 根据文件权限查找文件
-size 根据文件大小查找文件
-type 根据文件类型查找（f-普通文件，c-字符设备文件，b-块设备文件，1-链接文件，d-目录）
-o 表达式或
-and表达式与

### 管道

返回前两条信息
> find ./ -name "* test *" -type f | head -n 2
将查询到的文件复制到当前目录work文件夹
find ./ -name "* test *" -type f | head -n 2 | xargs -I FILE cp FILE work

## 8. 文件内容操作命令

显示出文件的全部内容
> cat

显示出文件带行号的全部内容
> cat -n 文件名

全屏方式分页显示文件内容
> more

查看文件开头的一部分内容（默认为10行）
> head -n [行号] 文件名

查看文件结尾的少部分内容(默认为10行）
常用于查看日志文件
> tail -n [行号] 文件名

查找文件里符合条件的**字符串**
> grep [选项] <关键字><文件...>

### grep查找进程

> ps -ef | grep nginx

## 9. 用户管理

- 添加用户
> useradd

-u指定组ID（uid）
-g指定所属的组名（gid）
-G指定多个组，用逗号“,”分开（Groups）
-c用户描述（comment)
-e失效时间（expire date）

- 添加密码
> passwd [选项] <用户名>

-d：清空用户的密码，使之无需密码即可登录
-l: 锁定用户帐号
-s: 查看用户帐号的状态（是否被锁定）
-u：解锁用户帐号
-x：最大密码使用时间（天)
-n：最小密码使用时间（天）

- 删除用户
> userde [选项] 用户名

-r删除账号时同时删除目录（remove）

- 给予用户root权限
打开以下文件，添加用户名 ALL=(ALL) ALL
> /etc/sudoers

修改文件用户组
> chown 用户组:用户名 文件名

## 10.软件包管理
RPM命令使用
>Rpm
-i：安装应用程序（install）
-e：卸载应用程序(erase）
-vh：显示安装进度；（verbose hash）
-U：升级软件包；（update)
-qa：显示所有已安装软件包（query all)
YuM命令Yum(全称为Yellow dog Updater,Modified)
是一个在Fedora和RedHat以及SUSE、CentOS中的Shell前端软件包管理器。
基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，
可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装























