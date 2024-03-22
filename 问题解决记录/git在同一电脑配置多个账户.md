1. 生成公私钥对
```shell
## 说明：
## -t rsa表示加密方式
## -C表示注册不同云端仓库时所用的邮箱
## -F表示自定义生成秘钥的名称
# 生成github.com公私钥对
ssh-keygen -t rsa -C "one@gmail.com"-f github
# 生成gitlab.com公私钥对
ssh-keygen -t rsa -c "two@gmail.com"-f gitlab
```
2. 对应网站配置公钥
3. 在.ssh文件夹下配置config文件
```shell
# 这里是自定义的host简称，以后连接远程服务器就可以用命令ssh myhost
Host github
# 主机名可用ip也可以是域名（如：github.com或者bitbucket.org)
HostName github.com
# 服务器open-ssh端口（默认：22，默认时一般不写此行）
# Port
# 配置登录时用什么权限认证,可设为(publickey,password publickey,keyboard-interactive等)
# PreferredAuthentications publickey
# 证书文件路径（如~/.ssh/id_rsa*)
IdentityFile ~/.ssh/id_rsa*
# 云端仓库登录用户名
User admin

# 示例
# gitlab账号
host gitlab.abc.com
hostname gitlab.abc.com
Port 65095
User abc
IdentityFile /home/abc/.ssh/id_rsa
# github账号 
host github.com
hostname github.com
Port 22
User abc
IdentityFile /home/abc/.ssh/id_rsa_second
```
4. 设置每个项目文件夹的局部用户名与邮箱
```shell
#取消global
git config --global --unset user.name
git config --global --unset user.email

#设置每个项目repo的自己的user.email
git config  user.email "xxxx@xx.com"
git config  user.name "suzie"
```