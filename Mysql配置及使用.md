# 创建新用户

## 1. 进入到mysql数据库下

```sql
>mysql -u 用户名 -p
mysql> use mysql
Database changed
```

## 2. 对新用户增删改

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

## 3. 对当前的用户授权管理

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

## 4. MySql备份命令行操作

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

# 常用命令

1. 查看数据库表
> show databases;

2. 创建数据库
> create database 数据库名;

3. 使用数据库
> use 数据库名；

4. 删除数据库
> drop database 数据库名；

# 报错

## 常见报错
1. ERROR 1064 (42000):You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'love China' at line 1
语法错误

2. ERROR 1007 (HY000): Can't create database 'ilovechina'; database exists
数据库已存在

3. ERROR 1008 (HY000): Can't drop database 'ilovachina';database doesn't exist
数据库不存在

4. ERROR 1049 (42000):Unknown database 'database'
数据库不识别

5. ERROR 1046 (3D000): No database selected
没有选中数据库

6. ERROR 1113 (42000):A table must have at least 1 column
数据表至少要有一列

7. ERROR 1146 (42S02): Table 'ishop1.cuetomer' doesn't exist
数据表"cuetomer" 在数据库“ishop1"中不存在

8. ERROR 1062 (23000): Duplicate entry '2' for key 'PRIMARY'
输入的2违反主键约束

9. ERROR 1136 (21S01): Column count doesn't match value count at row 2
输入行内值的计数与列计数不匹配

10. ERROR 1054 (42S22): Unknown column 'ct_num' in 'field list'
字段列表中存在未知列"ct_num"

11. ERROR 1051 (42S02): Unknown table 'myschool.subjedt'
数据库myschool中存在未知表"subjedt"

12. ERROR 1366 (HY000): Incorrect integer value: '初一' for column 'id' at row 1
id列第一行输入的“初一”数据类型错误

13. ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`myschool`.`gg`, CONSTRAINT `gg_ibfk_1` FOREIGN KEY (`grand_id`) REFERENCES `grand` (`id`))
违反外键约束，不能新增或更新子行数据

14. ERROR 1215 (HY000): Cannot add foreign key constraint
不能创建外键约束

15. ERROR 1111 (HY000): Invalid use of group function
函数无效

16. ERROR 1048 (23000): Column 'cu_phone' cannot be null
cu_phone 列不能为空

17. ERROR 1242 (21000): Subquery returns more than 1 row

子查询返回超过1行

18. ERROR 1235 (42000): This version of MySQL doesn't yet support 'LIMIT & IN/ALL/ANY/SOME subquery'
版本不支持

19. ERROR 1630 (42000): FUNCTION o.sum does not exist. Check the 'Function Name Parsing and Resolution' section in the Reference Manual
函数不存在

20. ERROR 1241 (21000): Operand should contain 1 column(s)
操作数应该包含1列

21. ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`ishop1`.`order`, CONSTRAINT `fk_3` FOREIGN KEY (`o_cid`) REFERENCES `commodity` (`c_id`))
不能删除或更新父行

22. ERROR 1292 (22007): Incorrect date value: '2002' for column 'dep_date' at row 1
不正确的日期值

23. ERROR 1060 (42S21): Duplicate column name 'c_id'
重复专栏的名字c_id

24. ERROR 1066 (42000): Not unique table/alias: 'customer'
'customer'不是唯一的表名/别名

25. ERROR 1065 (42000): Query was empty
查询为空

26. ERROR 1052 (23000): Column 'sid' in field list is ambiguous
SID列不明确

27. ERROR:DELIMITER must be followed by a 'delimiter' character or string
'delimiter' 后面必须有一个字符或者字符串

28. ERROR 1075 (42000):Incorrect table definition; there can be only one auto column and it must be defined as a key
在设置了自增长列以后需要定义主键列

29. ERROR 1239:Incorrect foreign key definition for 'fk_studentNo': Key reference and table reference don't match
外键定义不正确：引用和表不匹配

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
```


