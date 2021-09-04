# 1. 配置fiddler

【options】
**允许远程访问**
【Connections】
端口：8888
勾选 【Allow remote computers to connect】

**开启https**
【https】
勾选 【Capture HTTPS CONNECTs】、【Decrypt HTTPS traffic】、【Ignore server certificate errors (unsafe)】

**手机配置**
代理：PC-IP:端口
打开浏览器：PC-IP:端口，安装证书

# 2. fidder常用设置

**Filters**

## 2.1 过滤

### 2.1.1 Hosts

> 只显示host包含192.168.200.132的http数据包
Show only the following Hosts:192.168.200.132

### 2.1.2 Client Process

> 只显示进程chrome:944的http数据包
Show only traffic from
选择进程chrome:944

### 2.1.3 Request Headers

> 只显示url包含/crm/Instrument的http数据包，且将请求头中包含application/json的http数据包标记出来
Show only if URL contains:/crm/Instrument
Flag requests with headers:application/json

### 2.1.4 Response Status Code

> 显示除2开头的状态码以外的http数据包
Hide success(2xx)

### 2.1.5 Response Type and Size

> 显示html文件，大于20kb的http数据包
选择Show only HTML
Hide larger than 20 kb

## 2.2 断点

勾选Break request on POST

### 2.2.1 request断点

对某一个请求修改WebForme->Body的value

### 2.2.2 response断点

对某一个请求修改WebForme->Body的value，同时修改返回状态码

## 2.3 快捷键

> 下方命令行输入框

1. ?zhihu,标记包含“zhihu”的http数据包
2. ">20",标记大于0.02kb的http数据包
3. <3000,标记小于30kb的http数据包
4. <1k,标记小于1k的http数据包
5. =200,标记状态码等于200的http数据包
6. =post,标记请求为post的http数据包
7. @zhihu.com,标记host包含“zhuhu.com”的http数据包
8. bold /zhihu.com,对url包含“zhuhu.com”的http数据包加粗
9. bpafter zhihu.com,对RequestURI包含“zhuhu.com”的http数据包添加断点
10. bps 200,对状态码包含200的http数据包添加断点
11. bpv get,对post请求的http数据包添加断点
12. bpu bilibili.com,对url包含“bilibili.com”的http数据包添加断点
13. cls or clear,清空上方
