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

**增加字段**
> alter table student add identitycard varchar(18);

**修改字段**
> alter table student change identitycard identitycard varchar(18);

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
> ALTER TABLE 旧表名 RENAME 新表名;
2. 修改字段
> ALTER TABLE 表名 CHANGE 原字段名 新字段名 数据类型[属性];
3. 添加字段
> ALTER TABLE 表名 ADD 字段名 数据类型[属性];
4. 删除字段
> ALTER TABLE 表名 DROP 字段名;
```

**添加主键**

> 表中经常有一个列或多列的组合，其值能唯一地标识表中的每一行。这样的一列或多列称为表的主键，通过它可强制表的实体完整性

```sql
ALTER TABLE 表名 ADD CONSTRAINT 主键名 PRIMARY KEY表名（主键字段);
如:
alter table test2 add constraint `pk_studentName` primary key test1(`studentName`);
```

**添加外键**

> 外键表示了两个表之间的相关联系。以另一个关系的外键作主关键字的表被称为主表，具有此外键的表被称为主表的从表。外键又称作外关键字

```sql
ALTER TABLE 表名 ADD CONSTRAINT 外键名 FOREIGN KEY（外键字段) REFERENCES 关联表名（关联字段);
如：
lter table test1 add constraint fk_studentName foreign key(`studentName`) references test2(`studentName`);
```











