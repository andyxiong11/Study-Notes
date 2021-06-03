SQL（Structured Query Language）:结构化查询语言

- DML(数据操作语言)用来操作数据库中所包含的数据:INSER、UPDATE、DELETE
- DDL(数据定义语言)用于创建和删除数据库对象等操作：CREATE、DROP、ALTER
- DQL（数据查询语言）用来对数据库中的数据进行查询：SELECT
- DCL（数据控制语言）用来控制数据库组件的存取许可、存取权限等

创建表

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

查看数据库里的表
> show tables;

查看表信息
> desc 表明

字段的约束及其属性
- 非空约束:not null
- 默认约束，default
- 唯一约束，unique key(uk)
- 主键约束，primary key(pk)
- 外键约束，foreign(fk)
- 自动增长，auto_increment


主键：唯一性标识，与业务无关，非空、唯一

```sql
CREATE TABLE 'student(
    'studentNo`INT(4) NOT NuLL COMMENT'学号'PRIMARY KEY ,
    `loginPwd` VARCHAR(20)NOT NULL COMMENT'密码"，
    'studentName`VARCHAR(50)NOT NULL COMMENT '学生姓名'，
    'sexTCHAR(2)DEFAULT'男'NOT NULL COMMENT '性别"，
    gradeld ` INT(4) UNSIGNED COMMENT '年级编号'，
    'phone`VARCHAR(50) COMMENT '联系电话，
    'address'VARCHAR(255)DEFAULT '地址不详'COMMENT'地址"，
    'bornDate` DATETIME COMMENT '出生时间'，
    'email`VARCHAR(50) COMMENT'邮件账号"，
    identityCard `VARCHAR(18)UNIQUE KEY COMMENT'身份证号'
)cOMMENT='学生表';
```


增加字段
alter table student add identitycard varchar(18);
增加字段其属性
alter table student change identitycard identitycard 







