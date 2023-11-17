// 演示爬虫
// 需要安装cheerio
//nodemon server.js
const http = require('http')
const https = require('https')
const cheerio = require('cheerio');

function filterData(data) {
  const $ = cheerio.load(data);
  $('.section-item-box p').each((index,el)=>{//.each jquery遍历方法
    //console.log(index);//DOM元素索引
    console.log($(el).text());//拿到DOM元素的文本内容，详见cheerio文档
  })
  //console.log(data);//网页的html
}

const server = http.createServer((req,res)=>{
  let data = ''
  https.get('https://www.meizu.com',(result)=>{
    result.on('data',(chunk)=>{
      data += chunk
    })
    result.on('end',()=>{
      filterData(data)
    })
  })
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})