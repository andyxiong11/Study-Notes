SQL（Structured Query Language）:结构化查询语言

- DML(数据操作语言)用来操作数据库中所包含的数据:INSER、UPDATE、DELETE
- DDL(数据定义语言)用于创建和删除数据库对象等操作：CREATE、DROP、ALTER
- DQL（数据查询语言）用来对数据库中的数据进行查询：SELECT
- DCL（数据控制语言）用来控制数据库组件的存取许可、存取权限等

**创建表**

```sql
create table [if not exists] 表名(
    字段1 数据类型 [字段属性|约束][索引][注释],
    ....
    字段n 数据类型 [字段属性|约束][索引][注释];
)
**重新*

#创建学生表
CREATE TABLE `student`（
    `studentNo` INT(4)  PRIMARY KEY,
     ` name` CHAR(10),
     ……）;

```

**删除表**

> DROP TABLE table_name ; 

**查看数据库里的表**
> show tables;

**查看表信息**
> desc 表名;

字段的约束及其属性
- 非空约束:not null,字段不允许为空
- 默认约束，default, 赋予某字段默认值
- 唯一约束，unique key(uk),设置字段的值是唯一的允许为空，但只能有一个空值
- 主键约束，primary key(pk),设置该字段为表的主键,可唯一标识该表记录
- 外键约束，foreign(fk),用于在两表之间建立关系，需要指定引用主表的哪一字段。FOREIGN KEY ( 外键字段名 )  REFERENCES 主表 (外键字段名 ) 
- 自动增长，auto_increment, 设置该列为自增字段默认每条自增1,通常用于设置主键

主键：**唯一性标识，与业务无关，非空、唯一**

```sql
CREATE TABLE `student` (
	`studentNo` INT ( 4 ) COMMENT '学号' PRIMARY KEY,
	`loginPwd` VARCHAR ( 20 ) NOT NULL COMMENT '密码',
	`studentName` VARCHAR ( 50 ) NOT NULL COMMENT '学生姓名',
	`sex` CHAR ( 2 ) DEFAULT '男' COMMENT '性别',
	`gradeId` INT ( 4 ) UNSIGNED COMMENT '年级编号',
	`phone` VARCHAR ( 50 ) COMMENT '联系电话',
	`address` VARCHAR ( 255 ) COMMENT '地址',
	`bornDate` DATETIME COMMENT '出生时间',
	`email` VARCHAR ( 50 ) COMMENT '邮件账号',
` identityCard ` VARCHAR ( 18 ) NOT NULL COMMENT '身份证号' 
) COMMENT = '学生表';
CREATE TABLE `subject` (
		`subjectNo` INT(4) COMMENT '年级编号' PRIMARY KEY,
		`gardeName` VARCHAR(50) NOT NULL COMMENT '年纪名称'
)COMMENT = '年级表'
CREATE TABLE `subject` (
	`subjectNo` INT ( 4 ) COMMENT '课程编号' PRIMARY KEY AUTO_INCREMENT,
	`subjectName` VARCHAR ( 50 ) NOT NULL COMMENT '课程名称',
	`classHour` INT ( 4 ) COMMENT '学时',
	`gradeID` INT ( 4 ) COMMENT '年级编号',
FOREIGN KEY ( gradeID ) REFERENCES grade ( gradeID ) 
) COMMENT = '科目表'
CREATE TABLE `result` (
	`studentNo` INT ( 4 ) COMMENT '学号' PRIMARY KEY auto_increment,
	`subjectNo` INT ( 4 ) COMMENT '课程编号',
	`examDate` datetime ( 4 ) NOT NULL COMMENT'考试日期',
	`studentResult` INT ( 4 ) NOT NULL COMMENT'考试成绩',
FOREIGN KEY ( subjectNo ) REFERENCES SUBJECT ( subjectNo ) 
) COMMENT = '成绩表'
```

**修改表结构**

```sql
1. 修改表名
ALTER TABLE 旧表名 RENAME 新表名;
2. 修改字段
ALTER TABLE 表名 CHANGE 原字段名 新字段名 数据类型[属性];
3. 添加字段
ALTER TABLE 表名 ADD 字段名 数据类型[属性];
4. 删除字段
ALTER TABLE 表名 DROP 字段名;
```

**添加主键**

> 表中经常有一个列或多列的组合，其值能唯一地标识表中的每一行。这样的一列或多列称为表的主键，通过它可强制表的实体完整性

```sql
ALTER TABLE 表名 ADD CONSTRAINT 主键名 PRIMARY KEY 表名（主键字段);
如:
alter table test2 add constraint `pk_studentName` primary key test1(`studentName`);
```

**添加外键**

> 外键表示了两个表之间的相关联系。**以另一个关系的外键作主关键字**的表被称为**主表**，**具有此外键的表**被称为主表的**从表**。外键又称作外关键字

```sql
ALTER TABLE 表名 ADD CONSTRAINT 外键名 FOREIGN KEY（外键字段) REFERENCES 关联表名（关联字段);
如：
lter table test1 add constraint fk_studentName foreign key(`studentName`) references test2(`studentName`);
```

**外键约束**
添加修改从表，必须要主表有此数据

删除修改主表，从表必须先删除修改

阻止执行：
1. 从表插入新行，其外键值不是主表的主键值便阻止插入；
2. 从表修改外键值，新值不是主表的主键值便阻止修改；
3. 主表删除行，其主键值在从表里存在便阻止删除(要想删除，必须先删除从表的相关行)；
4. 主表修改主键值，旧值在从表里存在便阻止修改(要想修改，必须先删除从表的相关行)。

级联执行：
1. 从表插入新行，其外键值不是主表的主键值便阻止插入；
2. 从表修改外键值，新值不是主表的主键值便阻止修改；
3. 主表删除行，其主键值在从表里存在便阻止删除(要想删除，必须先删除从表的相关行)；
4. 主表修改主键值，旧值在从表里存在便阻止修改(要想修改，必须先删除从表的相关行)。

```sql
主表：insert into test2 values('张三',80),('李四',76);
错误：
从表：insert into test1 values(100,'王五');

从表：insert into test1 values(100,'张三');

错误：
从表：update test1 set studentName='王五' where studentNo=100;

从表：update test1 set studentName='李四' where studentNo=100;
错误：
update test2 set studentName='王五' where score=76;
```

**插入数据记录**

- 插入单条记录:
> INSERT INTO 表名 [ (字段名列表)] VALUES(值列表);

```sql
insert into test1 values(100,'张三');
```

- 插入多条记录:

> INSERT INTO 新表（字段名列表） VALUES (值列表1),(值列表2).....(值列表n);
```sql
insert into student (`studentNo`,`loginPwd`,`studentName`,`sex`,`gradeId`,`phone`,`address`,`bornDate`,`email`,` identityCard`) values(1,'123456','张三','女',1,'12345678912','湖北','2021-6-4','@','1'),(2,'123456','李四','女',2,'12345678912','湖北','2021-6-4','@','2'),(3,'123456','王五','女',3,'12345678912','湖北','2021-6-4','@','3'),(4,'123456','赵六','女',4,'12345678912','湖北','2021-6-4','@','4');
```

注意:为避免表结构发生变化引发的错误，建议插入数据时写明具体字段名!

**DML语句――将查询结果插入新表**

> INSERT INTO新表（字段1,字段.……）SELECT字段1，字段...…FROM原表;
> 如:
> INSERT INTO student ( `studentNo`, `name` ) SELECT `studentNo`,`newname` FROM newstudent;

- 无须事先创建表
> CREATE TABLE新表(SELECT字段1，字段2 ...... FROM原表);
> 如: 
> CREATE TABLE student (SELECT `studentNo`, `name` FROM newstudent);


**DML语句――数据更新、删除更新**

- 数据记录
> UPDATE 表名 SET 字段1=值1,字段2=值2...字段n=值n [WHERE条件];
> 如：
> UPDATE student set studentName='张三' where studentNo=1;

- 删除数据记录
> DELETE FROM 表名 [WHERE条件];

**分组查询**

```sql
SELECT<字段名列表>
FROM<表名或视图>
[WHERE<查询条件>]
[GROUP BY<分组的字段名>]
[HAVING<条件>]
[ORDER BY<排序的字段名>[ASC 或DESC]]

SELECT `studentNo` , 'studentName` , `phone` , `address` , `bornDate'
FROM `student`
WHERE `gradeld`= 1
ORDER BY studentNo;
```

**查询语句中使用LIMIT子句限制结果集**

```sql
SELECT<字段名列表>
FROM<表名或视图>
[WHERE<查询条件>]
[GROUP BY<分组的字段名>]
[ORDER BY<排序的列名>[ASC 或 DESC]]
[LIMIT [位置偏移量,]行数];

查询所有年级编号为1的学员信息，按学号升序排序
- 显示前4条记录
- 每页4条，显示第2页，即从第5条记录开始显示4条数据
SELECT `studentNo`,`loginPwd`,`studentName`,`sex`,`gradeId`,`phone`,`address`,`bornDate`,`email`,` identityCard`
from `student`
ORDER BY studentNo 
LIMIT 4;
使用LIMIT子句时，注意第1条记录的位置是0 !
```

**聚合函数**

| 函数名  |        作用        |
| :-----: | :----------------: |
|  AVG()  | 返回某字段的平均值 |
| COUNT() |  返回某字段的行数  |
|  MAX()  | 返回某字段的最大值 |
|  MIN()  | 返回某字段的最小值 |
|  SUM()  |   返回某字段的和   |

> select 函数(字段名) from 表名；

```sql
select avg(studentNo) from student;
select sum(studentNo) from student;
select max(studentNo) from student;
select min(studentNo) from student;
select count(studentNo) from student;
```

**字符串函数**

|           函数名           |       作用       |
| :------------------------: | :--------------: |
|  CONCAT(str1,str1...strn)  |    字符串连接    |
| INSERT(str,pos,len,newstr) |    字符串替换    |
|         LOWER(str)         | 将字符串转为小写 |
|         UPPER(str)         | 将字符串转为大写 |
|   SUBSTRING(str,num,len)   |    字符串截取    |

```sql
select concat('my','s','ql');
select insert('这是sql server数据库',3,10,'mysql');
select lower('MySql');
select upper('MySql');
select substring('JavaMySQLOracle',5,5);
```

**时间日期函数**

|        函数名         |                  作用                  |
| :-------------------: | :------------------------------------: |
|       CURDATE()       |              获取当前日期              |
|       CURTIME()       |              获取当前时间              |
|         NOW()         |           获取当前日期和时间           |
|      WEEK(date)       |      返回日期date为一年中的第几周      |
|      YEAR(date)       |           返回日期date的年份           |
|      HOUR(time)       |          返回时间time的小时值          |
|     MINUTE(time)      |          返回时间time的分钟值          |
| DATEDIFF(date1,date2) | 返回日期参数date1和date2之间相隔的天数 |
|    ADDDATE(date,n)    |    计算日期参数date加上n天后的日期     |

```SQL
SELECT CURDATE();
SELECT CURTIME();
SELECT NOW();

-- 修改数据时间戳
UPDATE student set bornDate=NOW();

SELECT WEEK(NOW());
SELECT YEAR(NOW());
SELECT HOUR(NOW());
SELECT MINUTE(NOW());
SELECT DATEDIFF(NOW(),'2008-8-8');
SELECT ADDDATE(NOW(),5);
```

**数学函数**

|  函数名  |             作用              |
| :------: | :---------------------------: |
| CEIL(x)  | 返回大于或等于数值x的最小整数 |
| FLOOR(x) | 返回小于或等于数值x的最大整数 |
|  RAND()  |       返回0~1间的随机数       |

```sql
ceil(3.4);
floor(2.3);
rand();
```














