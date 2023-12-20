//https://socket.io/docs/v4/tutorial/step-3

const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('./public'))//因为前端服务有问题，手动调用静态资源

app.get('/', (req, res) => {
  // res.sendFile(join(__dirname, 'index.html')); 已经有前端页面，不需要示例中的静态资源
  res.send('hello')
});

io.on('connection', (socket) => {//连接成功
  console.log('a user connected');

  socket.on('receive', (data) => {//自定义receive事件
    console.log(data);//data 收到客户端的消息
    socket.broadcast.emit('message',data)//broadcast 广播
  });
});

server.listen(3000,'localhost', () => {
  console.log('server running at http://localhost:3000');
});