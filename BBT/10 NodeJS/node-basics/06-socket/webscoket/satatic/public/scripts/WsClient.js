var ws = new WebSocket('ws://localhost:8124/')

ws.onopen = () => {//连接成功
  ws.send('大家好!')
}

ws.onmessage = (msg) => {////相当于on('message',()=>{})；收到服务端的消息
  const content = document.getElementById('content')
  content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}