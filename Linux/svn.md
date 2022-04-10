# 1. 安装SVN

```shell
    yum -y install subversion
```

# 2. 创建版本库

```shell
    mkdir /usr/svn
    svnadmin create /usr/svn/dev
```

# 3. 修改配置

配置文件存储在**dev/conf**目录下：
- authz：权限配置文件，控制读写权限
- passwd：账号密码配置文件
- svnserve.conf：svn服务器配置文件

## 3.1 服务器配置文件

**svnserve.conf**

- anon-access = none|read|write 决定非授权用户的访问级别。none 表示无访问权限，read 表示只读，write 表示可读可写，默认为 read。
- auth-access = none|read|write 决定授权用户的访问级别，使用与上面相同的访问级别。默认为 write。
- password-db = filename 指定账号密码数据库文件名。filename 是相对仓库中 conf 目录的位置，也可以设置为绝对路径，默认为passwd。
- authz-db = filename 指定权限配置文件名，filename 是相对仓库中 conf 目录的位置，也可以设置为绝对路径，默认为authz。
- realm = realm-name 指定版本库的认证域，即在登录时提示的认证域名称。若两个版本库的认证域相同，建议使用相同的账号密码数据库文件passwd

## 3.2 账号密码配置文件

**passwd**

格式： “账号 = 密码”

## 3.3 权限配置文件

**authz**

- 在根目录下设置用户user1、user2读写权限 

```
    [/]
    user1 = rw
    user2 = rw
```

- 将用户分组设置权限

```
    [group]
    team1 = user1,user2
    [/]
    @team1 = rw
```

- 设置分组以外其他用户的只读权限

```
    @team1 = rw
    * = r
```

# 4. 启动SVN服务

``` shell
    # -d 以守护进程启动
    # -r 设置的根目录
    svnserve -d -r /usr/svn/
```

关闭SVN命令：**killall svnserve**

# 5. 多个项目管控配置

> 将多个项目的authz和passwd文件统一放在一处，在多个项目的svnserve.conf文件中配置这两个文件的绝对路径，并在authz中对不同的项目设置用户访问权限。

如：a、b、c、d这4个用户，p1、p2两个项目，其中a、b只能访问p1，c、d只能访问p2。

**创建版本库目录**

mkdir /usr/svn

**创建多个版本库**

cd /usr/svn
svnadmin create p1
svnadmin create p2

**创建管理用户权限目录**
mkdir /var/svn/conf
cd /p1/conf
cp authz passwd /var/svn/conf

**修改配置文件**

修改p1的svnserve.conf文件：
```
anon-access = none
auth-access = write 
password-db = /var/svn/conf/passwd 
authz-db = /var/svn/conf/authz 
realm = p1 
```

修改p2的svnserve.conf文件：
```
anon-access = none
auth-access = write
password-db = /var/svn/conf/passwd
authz-db = /var/svn/conf/authz
realm = p2
```

修改password-db文件
```
[users]
a = 123
b = 123
c = 123
d = 123
```

修改authz文件
```
[groups] //分组
p1user = a,b
p2user = c,d

[/]
* = #以上没有定义的用户都没有任何权限

[p1:/] //p1的访问控制，c、d无法访问
@p1user = rw

[p2:/] //p2的访问控制，a、b无法访问
@p2user = rw
```
**对password-db和authz文件的修改立即生效，不必重启svn。**

**启动svn服务**
svnserve -d -r /usr/svn/

**访问项目p1 URL**
svn://IP/p1

**访问项目p2 URL**
svn://IP/p1