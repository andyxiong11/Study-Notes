# 配置

- 配置使用者信息
  - 用户名：git   config  --global user.name  "[用户名]"     
  - 邮箱：git   config   --global user.email "[邮箱]"
  - 配置全局
- 查看用户名和邮箱地址：
  - git config user.name
  - git config user.email
- 查看配置信息
  - 列出当前配置：git config --list;
  - 列出repository配置：git config --local --list;
  - 列出全局配置：git config --global --list;
  - 列出系统配置：git config --system --list;

- 初始化 git init

- 添加远程库到本地 git remote add origin [地址]

- 推送代码    git push [地址origin] [分支名master]
- 拉取代码    git pull [地址] [分支名]
- git pull origin master --allow-unrelated-histories
- 克隆代码    git clone [地址] [新项目名]

- 把代码存储到.git中  
  1. git add .[/read.md]
  2. git commit [-m "[说明]"]
  -  合并：git commit --all [-m "[说明]"]

- 查看所处状态 git status
> modified:readme.me //已添加，未提交  
> modfifed:readme.md //未添加   

- 查看日志                    
  - 查看历史提交：git log
  - 简洁版：git log --oneline
  
- 版本回退                   
  - 回退一次：git reset --hard Head~[0]
  - 回退到某一个版本号：git reset --hard [ca3cc90]
- 查看版本切换记录      git reflog  

- 分支相关命令
  - 创建分支 git branch [分支名]
  - 查看本地分支 git branch
  - 查看远程分支 git branch -r
  - 查看本地和远程分支 git branch -a
  - 切换分支 git checkout [分支名]
  - 上传分支 git push origin [分支名]
  - 合并分支 git merge [分支名] 
    - **必须在master分支执行**
    - 配合git fetch拉取远程仓库到本地远程仓库副本，再使用git merge合并到本地仓库
  - 删除本地分支 git branch -D [分支名]
  - 删除远程分支 git push origin --delete [分支名]

**通过ssh推送**  
- 生成秘钥 ssh-keygen -t rsa -C "[邮箱]" 
> *.pub公钥，将公钥内容添加到github
  - **先pull再push**
- 简写公钥    git remote add [变量名] [公钥] => git push [变量名] [分支名]
- 简写推送    git push [变量名] -u [分支名] => git push->git pull
  - **关联分支，只用于当前目录**

> 以下命令大全内容参考https://gitee.com/all-about-git
# 命令大全

## 1、仓库
```shell
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```
## 2、配置
```shell
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```
## 3、增加/删除文件

```shell
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```
## 4、代码提交
```shell
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```
## 5、分支
```shell
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 查看本地分支与远程分支的映射关系
$ git branch -vv

# 撤销本地当前分支与远程分支的映射关系
$ git branch --unset-upstream

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
<<<<<<< HEAD
=======

# 本地分支重命名(还没有推送到远程)

$ git branch -m oldName newName

# 远程分支重命名 (已经推送远程-假设本地分支和远程对应分支名称相同)
a. 重命名远程分支对应的本地分支
git branch -m oldName newName
b. 删除远程分支
git push --delete origin oldName
c. 上传新命名的本地分支
git push origin newName
d.把修改后的本地分支与远程分支关联
git branch --set-upstream-to origin/newName

>>>>>>> 清除BBT文件夹相关提交记录
```
## 6、标签
```shell
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```
## 7、查看信息
```shell
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```
## 8、远程同步
```shell
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```
## 9、撤销
```shell
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```
## 10、其他
```shell
# 生成一个可供发布的压缩包
$ git archive

# 删除指定文件夹当前分支相关历史提交记录
$ git filter-branch --force --index-filter 'git rm --cached -r --ignore-unmatch [文件夹名]' --prune-empty --tag-name-filter cat --

# 删除指定文件当前分支相关历史提交记录
$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch [文件名]' --prune-empty --tag-name-filter cat --

# 删除指定文件夹所有分支标签相关历史提交记录
$ git filter-branch --force --index-filter 'git rm --cached -r --ignore-unmatch [文件夹名]' --prune-empty --tag-name-filter cat -- --all

```

# 设置和取消代理

```s
git config --global http.proxy http://127.0.0.1:7890

git config --global https.proxy https://127.0.0.1:7890

git config --global --unset http.proxy

git config --global --unset https.proxy
```