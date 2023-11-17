// node app.js
const fs = require('fs')
const fsPromises = require('fs').promises

// 创建文件夹
// fs.mkdir('logs', (err) => {//错误优先函数，第一个参数是报错
//   if(err) throw err
//   console.log('文件夹创建成功')
// })

// 文件夹改名
// fs.rename('./logs', './log', () => {
//   console.log('文件夹名字修改成功')
// })

// 删除文件夹
// fs.rmdir('./log', () => {
//   console.log('文件夹删除成功')
// })

// 读取文件夹目录信息
// fs.readdir('./logs', (err, result) => {
//   console.log(result);
// })

// 写内容到文件里
// fs.writeFile(
//   './logs/log1.log',
//   'hello\nworld',
//   (err) => {// 错误优先的回调函数
//     if (err) {
//       console.log(err.message)
//     } else {
//       console.log('文件创建成功')
//     }
//   }
// )

// 给文件追加内容
// fs.appendFile('./logs/log1.log', '!!!', () => {
//   console.log('done.')
// })

// 删除文件
// fs.unlink('./logs/log1.log', (err) => {
//   console.log('done.')
// })

// 读取文件内容
// fs.readFile('./logs/log1.log', 'utf-8', (err, data) => {//utf-8 将读取的文件内容转换
//   console.log(data)
//   // console.log(data.toString());//也可以不使用utf-8，使用toString()
// })

// 批量写文件
// for (var i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}.log`, `log-${i}`, (err) => {
//     console.log('done.')
//   })
// }

// 批量读取文件/目录信息
// function readDir(dir){
//   fs.readdir(dir, (err, data) => {
//     // console.log(data);
//     data.forEach((value, index) => {//forEach遍历数组
//       // console.log(value);
//       // console.log(fs.stat);
//       fs.stat(`${dir}/${value}`, (err, stats) => {//stat 获取文件信息，返回一个文件信息对象
//         // console.log(stats);
//         // console.log(value + ':' + stats.size)
//         // console.log(value + ' is ' + (stats.isDirectory() ? 'directory' : 'file'))
//         if(stats.isDirectory()){//isDirectory 是否是文件夹
//           readDir(`${dir}/${value}`)
//         }else{
//           fs.readFile(`${dir}/${value}`,'utf-8', (err, stats) => {
//             console.log(stats);
//           })
//         }
//       })
//     })
//   })
// }
// readDir('./logs/')

// 同步读取文件
/* try {
  const content = fs.readFileSync('./logs/log1.log', 'utf-8')
  console.log(content)
  console.log(0)
} catch (e) {
  console.log(e.message)
}
console.log(1) */

// 异步读取文件：方法一
/* fs.readFile('./logs/log-0.txt', 'utf-8', (err, content) => {
  console.log(content)
  console.log(0)
})
console.log(1) */

// 异步读取文件：方法二
// fs.readFile('./logs/log-0.txt', 'utf-8').then(result => {
//   console.log(result)
// })

// 异步读取文件：方法三
/* function getFile() {
  return new Promise((resolve) => {
    fs.readFile('./logs/log-0.txt', 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}
;(async () => {
  console.log(await getFile())
})() */

// 异步读取文件：方法三变形
// ;(async () => {
//   let result = await fsPromises.readFile('./logs/log1.log')
//   console.log(result.toString())
// })()

// 异步读取文件：方法四
/* const fsPromises = fsPromises.readFile('./logs/log-1.txt', 'utf-8').then((result) => {
  console.log(result)
})
console.log(fsPromises) */

// watch 监测文件变化
fs.watch('./logs/log1.log', (err) => {
  console.log("文件变化")
})

//watchFile