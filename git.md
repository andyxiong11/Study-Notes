- 初始化 git init
  
- 配置使用者信息
  - 用户名：git   config  --global user.name  "[]"     
  - 邮箱：git   config   --global user.email "[]"
  - 配置全局

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
  - 回退到某一个版本号：git reset --hard Head [ca3cc90]
- 查看版本切换记录      git reflog  

- 分支相关命令
  - 创建分支 git branch [分支名]
  - 查看分支 git branch
  - 切换分支 git checkout [分支名]
  - 合并分支 git merge [分支名] 
    - **必须在master分支执行**
  - 删除分支 git branch -d [分支名]

---

**Github 实际应用**
- 推送代码    git push [地址origin] [分支名master]
- 拉取代码    git pull [地址] [分支名]
  - **必须先执行初始化 git init**
- 克隆代码    git clone [地址]

---

**通过ssh推送**  
- 生成秘钥 ssh-keygen -t rsa -C "[邮箱]" 
> *.pub公钥
  - **先pull再push**
- 简写公钥    git remote add [变量名] [公钥] => git push [变量名] [分支名]
- 简写推送    git push [变量名] -u [分支名] => git push->git pull
  - **关联分支，只用于当前目录**



