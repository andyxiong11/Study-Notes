//const logger =  require('../utils/log')//该文件原本应该是写log4js配置,以便直接调用,由于视频文件缺失,内容未写
var log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type:"file",filename:"cheese.log"}},
  categories: {default: { appenders:["cheese"],level:"error"}}
});
var logger = log4js.getLogger();
logger.level = 'debug'

const querystring = require('querystring')

const query = 'id=2&name=tongyia&from=北京'
const query2 = 'id:2/name:tongyi/from:北京'
const queryEscape ='id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC'
const queryobj = { id:'2',name:'tongyi',from:''}

//logger.debug(querystring.parse(query))//{ id: '2', name: 'tongyia', from: '北京' }

// logger.debug(querystring.escape(query))//id%3D2%26name%3Dtongyia%26from%3D%E5%8C%97%E4%BA%AC

// logger.debug(querystring.unescape(queryEscape))//id=2&name=tongyi&from=北京

// logger.debug(querystring.stringify(queryobj,':','/'))//id/2:name/tongyi:from/

// logger.debug(querystring.parse(query2,'/',':'))//{ id: '2', name: 'tongyi', from: '北京' }

const newQuery = querystring.stringify(queryobj,null,null,{
  encodeURIComponent(string){
    return querystring.unescape(string)
  }
})
logger.debug(newQuery)//id=2&name=tongyi&from=