## 问题

DBeaver通过 sql 导入数据出现如下错误 java.io.IOException: Process failed (exit code = 1). See error log

## 解决办法

mysql 默认以 gbk 编码连接数据库，之前导出备份文件是 utf8 编码，编码不一致导致错误。
在执行脚本之前配置一下，加上指定编码执行即可（Extra command args中输入        "--default-character-set=utf8mb4"）