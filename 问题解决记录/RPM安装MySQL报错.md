## 问题

> 警告：mysql-community-libs-5.7.28-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1

## 原因

> 由于yum安装了旧版本的GPG keys造成的

## 解决方法

```
rpm -ivh mysql-community-common-5.7.34-1.el7.x86_64.rpm --force --nodeps
rpm -ivh mysql-community-libs-5.7.34-1.el7.x86_64.rpm --force --nodeps  
rpm -ivh mysql-community-client-5.7.34-1.el7.x86_64.rpm --force --nodeps  
rpm -ivh mysql-community-server-5.7.34-1.el7.x86_64.rpm --force --nodeps 
```