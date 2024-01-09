> 来源：https://varxzy.com/notes/527.html

原来的仓库： <big-repo>
想要分离出来的子文件夹名称： <name-of-folder>
该子文件夹形成的新仓库： <new-repo>

## 使用 git subtree

1. 进入 big-repo 所在的目录，运行：

```shell
git subtree split -P <name-of-folder> -b <name-of-new-branch>
```

运行后，git 会遍历原仓库中所有的历史提交，挑选出与指定路径相关的 commit 并存入名为 name-of-new-branch 的临时分支中。另外需要注意的是，如果你在使用 Windows，且该文件夹深度 > 1，你必须使用斜杠 / 作为目录分隔符而不是默认的反斜杠 \。

2. 创建一个新的 git 仓库：

```shell
mkdir <new-repo>
git init
```

3. 接着把原仓库中的临时分支拉到新仓库中：

```shell
git pull </path/to/big-repo> <name-of-new-branch>
```



## 使用 git filter-branch
 git 传统的所谓核弹级大杀器命令 —— filter-branch

1. clone 一份原仓库并删掉原来的 remote：

```shell
git clone <big-repo> <new-repo>
cd <new-repo>
git remote rm origin
```

2. 运行如下命令（这是重点）：

```shell
git filter-branch --tag-name-filter cat --prune-empty --subdirectory-filter <name-of-folder> -- --all

这条命令同样会过滤所有历史提交，只保留所有对指定子目录有影响的提交，并将该子目录设为该仓库的根目录。这里说明各下个参数的作用：

--tag-name-filter 该参数控制我们要如何处理旧的 tag，cat 即表示原样输出；
--prune-empty 删除空的（对子目录没有影响的）提交；
--subdirectory-filter 指定子目录路径；
-- --all 该参数必须跟在 -- 后面，表示对所有分支进行操作。如果你只想保存当前分支，也可以不添加此参数。
```

该命令执行完毕后就可以看到新仓库中已经变成子目录的内容了，且保留了关于该子目录所有的提交历史。



不过只是这样的话新仓库中的 .git 目录里还是保存有不少无用的 object，我们需要将其清除掉以减小新仓库的体积（如果你用上面 subtree 的方法的话是不需要执行这一步的）：

```shell
git reset --hard
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
git reflog expire --expire=now --all
git gc --aggressive --prune=now
```

## 清理原仓库

既然所指定的子文件夹已经被分离为一个单独的 git repo 了，我们就可以放心地在原仓库中删除它了：

```shell
git rm -rf <name-of-folder>

#提交一下说明对应操作

git commit -m 'Remove some fxxking shit'

#删除刚才创建的临时分支

#后一种方法不需要执行这一步

git branch -D <name-of-new-branch>
```


不过这种方法还是会在提交历史中保留所有关于这个子目录的内容，如果你想要把这个子目录从原 repo 中不留一丝痕迹地完全移除，那你需要 BFG Repo Cleaner 这样的工具或者使用 filter-branch 等命令。



### 关联原仓库与新仓库

这里我们可以通过 subtree 或者 submodule 两种命令来实现，不过他们两个各有优点和缺点，所以请根据你自己的实际情况选择（不过现在一般都推荐使用 subtree，submodule 用起来实在是太他妈的蛋疼了）。

当然，你也可以分离之后直接使用 npm、composer 之类的包管理器将新仓库作为一个依赖库引入进来，这也是完全没有问题的。