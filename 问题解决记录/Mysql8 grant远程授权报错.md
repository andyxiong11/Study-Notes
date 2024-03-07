## 问题

> mysql8 grant远程授权报错：ERROR 1410 (42000): You are not allowed to create a user with GRANT

## 原因

> 8.0以后，这个特性已被移除

## 解决方法

```sql

# 使用mysql 数据库

mysql > use mysql;

# 特定用户的host 修改

mysql > update user set host='%' where user='root';

# 指定用户的授权

mysql > grant all privileges on *.* to root@'%'

```