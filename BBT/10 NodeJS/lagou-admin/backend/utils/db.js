// nodejs操作mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lagou-admin');//创建lagou-admin数据库

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/* mongoose官方文档示例
  var kittySchema = mongoose.Schema({
  name: String //创建一个string类型的name字段
});
var Kitten = mongoose.model('Kitten', kittySchema);//创建Kitten集合

var felyne = new Kitten({ name: 'Felyne' });//新建一个name值为Felyne
felyne.save()//保存 */

var usersSchema = mongoose.Schema({
  username: String,
  password: String
});
var Users = mongoose.model('users', usersSchema);//创建Kitten集合
exports.Users = Users