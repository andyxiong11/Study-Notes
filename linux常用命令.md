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

> hostname 

## 4. 设置主机命令

临时设置
> vi /etc/hostname

永久修改
> vi /etc/sysconfig/network-scripts/ifcfg-ens33

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

创建新的目录
> mkdir [-p]V路径/]目录名

删除目录
>rm-f[/路径目录名





