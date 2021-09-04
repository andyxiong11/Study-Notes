# 配置fiddler

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

# fidder常用设置

**Filters**

## 1. 过滤

## 1.1 Hosts

> 只显示host包含192.168.200.132的http数据包
Show only the following Hosts:192.168.200.132

## 1.2 Client Process

> 只显示进程chrome:944的http数据包
Show only traffic from
选择进程chrome:944

## 1.3 Request Headers

> 只显示url包含/crm/Instrument的http数据包，且将请求头中包含application/json的http数据包标记出来
Show only if URL contains:/crm/Instrument
Flag requests with headers:application/json

## 1.4 Response Status Code

> 显示除2开头的状态码以外的http数据包
Hide success(2xx)

## 1.5 Response Type and Size

> 显示html文件，大于20kb的http数据包
选择Show only HTML
Hide larger than 20 kb