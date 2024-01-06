var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var cors = require('cors') //此处不使用该方法解决前端请求跨域，避免老系统后端没有使用cors；改用webpack配置
var cors = require('cors') //socket.io需要使用cors解决跨域
var cookieSession = require('cookie-session') //操作cookie

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var positionRouter = require('./routes/positions');
var mobileRouter = require('./routes/mobile')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(cors())//解决前后端请求跨域问题，此处不使用该方法解决前端请求跨域，避免老系统后端没有使用cors；改用webpack配置
app.use(cors()) //socket.io需要使用cors解决跨域

// 设置cookie-session
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/users', usersRouter);//后端接口
app.use('/api/positions', positionRouter);//后端接口
app.use('/mobile', mobileRouter);//后端接口

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
