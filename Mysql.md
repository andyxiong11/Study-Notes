# 创建新用户

1. 进入到mysql数据库下

```sql
>mysql -u 用户名 -p
mysql> use mysql
Database changed
```

2. 对新用户增删改

```sql
1. 创建用户:

#指定ip：192.118.1.1的alex用户登录
create user 'alex'@'192.118.1.1' identified by '123';

#指定ip：192.118.1.开头的alex用户登录
create user 'alex'@'192.118.1.%' identified by '123';

#指定任何ip的alex用户登录
create user 'alex'@'%' identified by '123';

2. 删除用户
drop user '用户名'@'IP地址';

3. 修改用户
rename user '用户名'@'IP地址' to '新用户名'@'IP地址';

4. 修改密码
set password for '用户名'@'IP地址'=Password('新密码');
```

3. 对当前的用户授权管理

```sql
# 查看权限
show grants for '用户'@'IP地址'

# 授权 alex用户仅对db1.t1文件有查询、插入和更新的操作
grant select ,insert,update on db1.t1 to "alex"@'%';

# 表示有所有的权限，除了grant这个命令，这个命令是root才有的。alex用户对db1下的t1文件有任意操作
grant all privileges  on db1.t1 to "alex"@'%';

#alex用户对db1数据库中的文件执行任何操作
grant all privileges  on db1.* to "alex"@'%';

#alex用户对所有数据库中文件有任何操作
grant all privileges  on *.*  to "alex"@'%';
 
#取消权限

# 取消alex用户对db1的t1文件的任意操作
revoke all on db1.t1 from 'alex'@"%";  

# 取消来自远程服务器的alex用户对数据库db1的所有表的所有权限

revoke all on db1.* from 'alex'@"%";  

取消来自远程服务器的alex用户所有数据库的所有的表的权限
revoke all privileges on *.* from 'alex'@'%';

# 刷新权限
flush privileges;
```

4. MySql备份命令行操作

```sql
# 备份：数据表结构+数据
mysqdump -u root db1 > db1.sql -p

# 备份：数据表结构
mysqdump -u root -d db1 > db1.sql -p

#导入现有的数据到某个数据库
# 1.先创建一个新的数据库
create database db10;

# 2.将已有的数据库文件导入到db10数据库中
mysqdump -u root -d db10 < db1.sql -p
```

# 报错

## 撤销新建用户权限失败

**报错复现**
赋予新用户所有权限（all privileges）

```sql
mysql> grant all privileges on *.* to 'xyx'@'%' with grant option;
Query OK, 0 rows affected (0.09 sec)
```

然后撤销用户所有权限（all privileges）

```sql
mysql> REVOKE all privileges ON *.* FROM 'xyx'@'%';
```

报错：
ERROR 1227 (42000): Access denied; you need (at least one of) the SYSTEM_USER privilege(s) for this operation
查看完MySQL8.0.16官方文档后得知： SYSTEM_USER是mysql新权限，并且在root用户下创建新用户xyx时会授予SYSTEM_USER权限，而自己却没有SYSTEM_USER权限。

**解决方法**
现在新创建的用户下给root账户赋予SYSTEM_USER权限，然后在用root账户取消新用户xyx的所有权

- xyx用户下操作

```sql
mysql> Query OK, 0 rows affected (0.06 sec)
```

- root用户下的操作

```sql
mysql> revoke all privileges on *.* from xyx;
Query OK, 0 rowxyxxiaokang用户的所有权限撤销成功