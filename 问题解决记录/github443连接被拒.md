## 问题

> fatal: unable to access 'https://github.com/andyxiong11/Study-Notes.git/': Failed to connect to github.com port 443 after 2071 ms: Connection refused

## 解决方法

> 本地有代理导致

git config --global http.proxy http://127.0.0.1:7890


> 修改DNS映射

140.82.112.3 github.com