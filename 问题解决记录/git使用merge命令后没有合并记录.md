## 问题

基于 master 新建了一个 bugfix 分支，测试无问题后合入 master ，使用 git merge 命令进行合并，git push 之后使用 git log 查看日志，发现缺少合并的日志

## b原因
由于新分支是基于 master 新建的，且在我合并到 master 之前，没有其他分支合入 master ，这样的话，新的分支与 master 最新提交的分支没有分支差异，对于树形结构来说就是没有分叉，可以直接嫁接，此时执行 git merge bugfix 后，master 的 HEAD 会直接指向最新的 bugfix 提交上，就不会产生新的合并提交记录，这个过程就是 git 提交的 fast-forward 模式（快进模式）

## 解决方式

在合并的时候，为了方便后续定位问题，需要展示合并的记录以便确定提交来源，我们就可以禁用 fast-forward 模式

```shell
git merge bugfix --no-ff
```


作者：想喝柠檬茶
链接：https://juejin.cn/post/7187195577614991416
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。