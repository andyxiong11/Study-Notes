const readline = require('readline')//readline 逐行读取

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('你如何看待Node.js中文网? ', (answer) => {
  console.log(`感谢您的宝贵意见: ${answer}`)

  rl.close()
})