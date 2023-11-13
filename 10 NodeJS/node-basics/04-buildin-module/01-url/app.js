var log4js = require('log4js');

log4js.configure({
  appenders: { cheese: { type:"file",filename:"cheese.log"}},
  categories: {default: { appenders:["cheese"],level:"error"}}
});

var logger = log4js.getLogger();
logger.level = 'debug'

const url = require('url')

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

const urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}

//console.log(url.parse(urlString));//urlObj   url.parse弃用,可使用new URL(urlString)
//logger.debug(url.parse(urlString));//用log4js记录运行的日志

//logger.debug(url.format(urlObj));//https://www.baidu.com:443/path/index.html?id=2#tag=3

//logger.debug(url.resolve('https://www.abc.com/a','../'))//https://www.abc.com/ 回到上一级

//logger.debug(url.resolve('https://www.abc.com/a','/b')) //https://www.abc.com/b

const urlParams = new URLSearchParams(url.parse(urlString).search)
//console.log(urlParams);//URLSearchParams { 'id' => '2' }
logger.debug(urlParams.get('id'))//2