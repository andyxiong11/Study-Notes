# postman基本使用

> 部分内容摘自：<https://juejin.cn/post/6986552612804001806>

## 1. 添加测试集合

## 2. 添加request请求

## 3. 设置请求

### 3.1 get

1. 请求方式get

2. 添加url
例：
{{url}}/login

3. 添加请求参数Params
例：
key username、passwd
value admin、123456
-> {{url}}/login?username=admin&passwd=123456

4. 添加请求头Headers
例：
key Admin-Token、Content-Type
value {{Admin-Token}}、application/json

### 3.2 post

1. 请求方式post

2. 添加url
例：
{{url}}/login

3. 添加请求参数Body

4. 添加请求头Headers
例：
key Admin-Token、Content-Type
value {{Admin-Token}}、application/json

#### 3.2.1 设置Body参数

1. 提交form表单
**x-www-form-urlencoded**
key username、passwd
value admin、123456
-> {{url}}/login?username=admin&passwd=123456

2. json提交
**raw**

    ```json
    {"username":"admin", "passwd":"123456"}
    ```

3. xml提交
**raw**

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <username>admin</username>
    <passwd>123456</passwd>
    ```

4. 二进制文件binary

#### 3.2.2 授权Authorization

注意：应当注意:NTLM和BearerToken仅在Postman本地应用程序中可用。所有其他授权类型都可
以在Postman本地应用程序和Chrome应用程序中使用。

1. Inherit auth from parent
向集合或文件夹添加授权。 假设您在集合中添加了一个文件夹。在授权选项卡下，默认的授权类型将被设置为“从父类继承auth”。 “从父”设置的“继承auth”指示默认情况下，该文件夹中的每个请求都使用父类的授权类型。在本例中， 该集合使用“No Auth”，因此该文件夹使用“No Auth”，这意味着该文件夹中的所有请求将使用“No Auth” 如果您希望将父集合授权类型保留为“No Auth”，但要更新这个特定的文件夹的授权助手，该怎么办呢? 您可以编辑文件夹的详细信息，从类型下拉菜单中选择“基本的Auth”，并输入您的凭证。因此，这个文件夹中 的每个请求都依赖于“基本的Auth”，而父集合中的其余请求仍然不使用任何授权

2. No Auth
默认情况下，“No Auth”出现在下拉菜单列表中。当您不需要授权参数发送请求时，使用“No Auth”。

3. Bearer Token
Bearer Token是安全令牌。任何带有Bearer Token的用户都可以使用它来访问数据资源，而无需使用加密 密钥。 使用Bearer Token: 第一步：从下拉菜单中选择“Bearer Token”。 第二步：要设置请求的授权参数，请输入令牌的值。 第三步：点击发送按钮。

4. Basic auth
Basic Auth是一种授权类型，需要验证用户名和密码才能访问数据资源。 使用基本身份验证: 第一步：从下拉菜单中选择“Basic Auth”。 第二步：要设置请求的授权参数，请输入您的用户名和密码。 第三步：点击发送按钮。

5. Digest Auth
在“Digest Auth”流程中，客户端向服务器发送请求，服务器返回客户端的nonce和realm值；客户端 对用户名、密码、nonce值、HTTP请求方法、被请求资源URI等组合后进行MD5运算，把计算得到的摘要信息 发送给服务端。服务器然后发回客户端请求的数据。 通过哈希算法对通信双方身份的认证十分常见，它的好处就是不必把具备密码的信息对外传输，只需将这 些密码信息加入一个对方给定的随机值计算哈希值，最后将哈希值传给对方，对方就可以认证你的身份。 Digest思想同样采如此，用了一种nonce随机数字符串，双方约好对哪些信息进行哈希运算即可完成双 方身份的验证。Digest模式避免了密码在网络上明文传输，提高了安全性，但它仍然存在缺点，例如认证报文 被攻击者拦截到攻击者可以获取到资源。 默认情况下，Postman从响应中提取值对应的值。如果不想提取这些值，有以下两种选择： 在所选字段的高级部分中输入您自己的值勾选“Yes,disable retrying the request”复选框。

6. OAuth 1.0
OAuth 1.0是一种可以让我们在不公开密码的情况下授权使用其他应用程序的授权模式。 在Postman中按照以下步骤使用OAuth 1.0授权： 在Authorization下来授权标签中选择“OAuth 1.0”授权模式；在“Add authorization data to” 下拉选择框中，选择对应的请求模式。 当选择“Request Body/Request URL”时，Postman将检查请求方法是POST还是PUT，以及请求主体 类型是否是x-www-form-urlencoded；如果是这样，Postman将增加授权参数到请求主体。对于所有其他 情况，它会向URL添加授权参数。

7. OAuth 2.0
OAuth 2.0作为OAuth 1.0的升级版本。在Postman中按照以下步骤进行使用： 在Authorization下来授权标签中选择“OAuth 2.0”授权模式在“Add authorization data to” 下拉选择框中，选择对应的请求模式； 设置请求的授权参数，有以下三个选择： 点击“Get New Access Token”按钮，在弹出的对话框中输入对应的参数；单击“Request Token”按 钮获取对应的Token。接下来有了对应的Token后，就可以点击“Send”按钮发送请求了； 在“Access Token”输入框中输入一个Token，或者Token对应的环境变量，然后就可以点击“Send”按 钮发送请求了； 在“Available Tokens”下拉框中选择已经存在的Token，然后发送请求。
案例：

### 3.3 Pre-request Script--预处理脚本

**请求发送之前需要执行的代码片段**
使用场景：例如请求中包含一个随机数或者时间戳（时间的毫秒值），或者参数需要加密。

#### 3.3.1 在get请求接口内部添加

例：

1. 传输参数

    ```js
    pm.variables.set("username","admin");
    pm.variables.set("password","123456");
    ```

2. 获取时间的毫秒值（时间戳）

```js
var time = nre Date().getTime();
pm.globale.set("timestamp",time)
```

#### 3.3.2 在集合集中添加

**接口集的所有接口在请求时都会先执行预请求脚本**
编辑edit集合
例：

```js
console.log("开始执行")
```

### 3.4 Tests内置脚本

**在请求完成之后执行的脚本,即断言**
例：

```js
pm.test("响应时间小于200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("状态码为200", function () {
    pm.response.to.have.status(200);
});
pm.test("验证登录是否成功(code为0)", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.code).to.eql(0);
});
pm.test("验证登录用户是否为admin", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.user.username).to.eql("admin");
});
pm.test("验证json是否包含admin", function () {
    pm.expect(pm.response.text()).to.include("admin");
});
```

## 4. 环境变量

例：
环境变量名：xxxx
VARIABLE: url
CURRENT VALUE: http:192.168.128.20

使用VARIABLE的值{{url}}

## 5. 全局变量

globals,同环境变量用法
