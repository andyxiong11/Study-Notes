正向代理：“代理”的是客户端，客户端知道访问的目标服务器，而目标服务器是不知道访问它的是谁
反向代理：“代理”的是服务器端，外网访问内网时，内网会有一台服务器进行转发，客户端不知道它访问的目标服务器具体信息

正向代理
改hosts
```shell
www.xiongyexing.xyz www.xiongyexing.xyz
```

反向代理
```shell
server {
    # 监听80端口
    listen 80;
    # 服务器名称（随意）
    server_name www.xiongyexing.xyz; 
    # 路由匹配
    location / {
        # 文件目录，即你存放静态资源的地方
        root /usr/share/nginx/test.com;
        # 设置首页为根目录下index.html文件
        index index.html;
        # 适配前端路由为history模式
        try_files  $uri $uri/ /index.html;
    }
    # 接口前缀为/api/的所有请求都将转发至目标服务器，并重写请求，不再包含/api/
    location /api/ {
        proxy_pass  http://127.0.0.1:8080/blog/index.html;
    }
} 
```
