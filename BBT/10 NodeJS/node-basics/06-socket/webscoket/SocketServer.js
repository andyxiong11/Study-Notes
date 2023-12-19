// https://www.npmjs.com/package/ws

// 广播的例子
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8124 });

wss.on('connection', function connection(ws) {//connection 连接成功
  ws.on('open', function open() {//open 有客户端连接时执行
    console.log('connected');
    ws.send('hello')//给客户端
  });

  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {//message 客户端返回的消息
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });//给所有客户端发消息
      }
    });
  });

  ws.on('close', function close() {
    console.log('disconnected');
  });
});