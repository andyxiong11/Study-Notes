/* // https://nodejs.cn/api/v18/net.html#%E7%B1%BBnetsocket

const net = require('net');

const client = net.createConnection({ port: 8124 }, () => {//建立连接
  // 'connect' listener.
  console.log('connected to server!');
  client.write('world!\r\n');//给服务端
});
client.on('data', (data) => {
  console.log(data.toString());
  // client.end(); //断开连接
});
client.on('end', () => {//断开连接
  console.log('disconnected from server');
}); */ 

var net = require('net')
const readline = require('readline')

var port = 8124
var host = '127.0.0.1'//localhost

var socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {//建立连接
  socket.write('hello.') //给服务端
})

socket.on('data', (msg) => {//有数据返回时调用
  console.log(msg.toString())
  say()
})

socket.on('error', function (err) {
  console.log('error' + err);
})

socket.on('close', function () {
  console.log('connection closeed');
})

const r1 = readline.createInterface({//输入输出
  input: process.stdin,
  output: process.stdout
})

function say() {
  r1.question('请输入：\n', (inputMsg) => {
    if (inputMsg != 'bye') {
      socket.write(inputMsg + '\n')//给客户端发消息
    } else {
      socket.destroy()//断开连接
      r1.close()
    }
  })
}