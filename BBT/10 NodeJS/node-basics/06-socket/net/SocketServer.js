/* // https://nodejs.cn/api/v18/net.html#%E7%B1%BBnetserver
const net = require('net')

const server = net.createServer((socket) => {//建立连接
  // socket.end('goodbye\n');//断开连接

  socket.write('hello') //给客户端

  socket.on('data',(chunk) => {//客户端返回
    console.log(chunk.toString());
  })
})

server.on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen('8124',() => {
  console.log('opened server on', server.address());
}); */

const net = require('net')

const server = new net.createServer()

let clients = {}//客户端对象
let clientName = 0 //客户端名

server.on('connection', (client) => {//connection方法 建立连接
  client.name = ++clientName//连接一个客户端，将其命名为0、1、2、3...
  clients[client.name] = client

  client.on('data', (msg) => {//有数据返回时调用
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())//将某一个客户端返回的消息发给所有的客户端
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', (data) => {//前端关闭连接时（end）调用
    delete clients[client.name]//在clients删除当前客户端
    console.log(client.name + ' 下线了');
  })
})

function broadcast(client, msg) {//将某一个客户端返回的消息发给所有的客户端
  for (var key in clients) {
    clients[key].write(client.name + ' 说：' + msg)//给所有客户端发消息，哪个客户端发消息的内容
  }
}

server.listen(8124, 'localhost') //监听客户端