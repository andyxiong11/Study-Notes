var express = require('express');
var router = express.Router();

var log4js = require("log4js")

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
})

var logger = log4js.getLogger('cheese')
logger.level = "debug"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 模拟post请求响应
router.post('/data',(req,res,next)=>{
  logger.debug(req.body)
  res.send('OK')
})

module.exports = router;
