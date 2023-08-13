## 发送请求的四种方式
1. xhr new XMLHttpRequest()xhr.open()xhr.send()
2. jQuery $.get $.post 
3. axios
4. fetch

- 安装axios
  - npm install axios

- 跨域：协议名、主机名、端口号任意一个不一致
- 解决跨域问题
  1. 后端处理 cors
  2. jsonp，配置script src，只能处理get请求，需要前后端一起处理
  3. 代理服务器（nginx、vue-cli）

- 需要启动test_proxy_server中的node服务器