## 问题

> Navicat连接不上MySQL8.0

## 原因

> mysql5.7与8.0密码加密方式不同。mysql5.7默认是方式是mysql_native_password;mysql8.0默认是caching_sha2_password

## 解决方法

```sql
--查看密码加密方式
show variables like '%password%';
+----------------------------------------------+-----------------+
| Variable_name                                | Value           |
+----------------------------------------------+-----------------+
| caching_sha2_password_auto_generate_rsa_keys | ON              |
| caching_sha2_password_private_key_path       | private_key.pem |
| caching_sha2_password_public_key_path        | public_key.pem  |
| default_password_lifetime                    | 0               |
| disconnect_on_expired_password               | ON              |
| generated_random_password_length             | 20              |
| mysql_native_password_proxy_users            | OFF             |
| password_history                             | 0               |
| password_require_current                     | OFF             |
| password_reuse_interval                      | 0               |
| report_password                              |                 |
| sha256_password_auto_generate_rsa_keys       | ON              |
| sha256_password_private_key_path             | private_key.pem |
| sha256_password_proxy_users                  | OFF             |
| sha256_password_public_key_path              | public_key.pem  |
+----------------------------------------------+-----------------+

--修改用户密码安全加密方式
alter user 'zhangsan'@'localhost' identified with mysql_native_password by '123456';

--8.0下创建用户通过mysql_native_password加密的方式
create user 'zhangsan'@'localhost' identified with mysql_native_password by '123456';

--查看加密的方式以及是否有设置过期策略
select host,user,password_expired,plugin from mysql.user where user in ('root','zhangsan');
+-----------+----------+------------------+-----------------------+
| host      | user     | password_expired | plugin                |
+-----------+----------+------------------+-----------------------+
| localhost | root     | N                | caching_sha2_password |
| localhost | zhangsan | N                | mysql_native_password |
+-----------+----------+------------------+-----------------------+

--刷新权限配置
flush privileges;

```