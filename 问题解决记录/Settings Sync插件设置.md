# Settings Sync插件设置
## 1.VScode安装Settings Sync插件

## 2.使用GitHub开通并创建一个Gist（代码片段管理服务）保存环境配置

### 2.1 开通

1. 登录Github，点击头像进入Settings页面，在Settings页面点击进入 Developer settings （开发者设置）

2. 点击进入Personal access tokens （个人授权令牌）页面，点击 Generate new token  生成一个令牌（帮助在VSCode中使用自己的私有令牌访问自己的保存在Gist上的配置）

3. 输入令牌备注，勾选Gist，点击生成。

### 2.2 创建

1. 登录Github，点击头像进入->Gist页面，点击创建一个新Gist。

2. 输入创建的Gist描述和片段内容（vscode-setting-sync)，保存即可。

3. 手动复制刚才创建的Gist仓库的ID

## 3.配置VScode

1. 使用快捷键Ctrl+P 或F1 输入命令 >sync 点击 同步：高级选项

    ps：如果有问题，可以点红框下面的 扩展设置重置 它不会清除你现有的扩展，只恢复初始sync的配置） 快捷键的用法是 Ctrl+P 输入命令：>Sync: Reset Extension Settings

2. 选择同步：编辑配置设置

3. 输入你在github上创建的gist token 记得使用Ctrl+S保存更改

4. 进入Settings Sync扩展设置页面设置，输入创建的Gist仓库ID



使用Settings Sync我们需要记住两个快捷键：

Shift + Alt + U 将配置环境 扩展插件信息上传到云端

Shift + Alt + D 下载云端的配置