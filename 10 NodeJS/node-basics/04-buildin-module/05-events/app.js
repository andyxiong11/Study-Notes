// node app.js
// event nodejs的事件对象
const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{}//继承

const event = new MyEventEmitter()

event.on('play',(value)=>{//监听paly事件
  console.log(value);
})

event.once('play2',(value)=>{//监听paly2事件
  console.log(value);
})

event.emit('play','movie')
event.emit('play2','tv')
event.emit('play2','tv')
event.emit('play2','tv')
event.emit('play2','tv')