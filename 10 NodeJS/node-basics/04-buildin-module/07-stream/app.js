const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()

const readstream = fs.createReadStream('./logs.txt')//创建一个可读流
const writestream = fs.createWriteStream('./logs.gzip')//创建一个可写流

readstream
  .pipe(gzip)//管道操作
  .pipe(writestream)//管道操作 读取./logs.txt，将其压缩写入

// writestream.write(readstream)