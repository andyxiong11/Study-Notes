var userInfo = {
    id: 1,
    name: 'andy',
    email: 'gogery@163.com'
}
//把对象拼接成字符串
// var tmpl = 'the userId is'+userInfo.id + ',my name is'+userInfo.name + ',my emai1 is'+userInfo.email;
var tmpl = `the userId is $(userInfo.id),
my name is $(userInfo.name),
my emai1 is $(userInfo.email)`;//`反引号 ES6可以随便换行,$里面也可以使用全局变量
// var tmpl = 'the userId is xxx,\
// my name is xxx,\
// my emai1 is xxx';//ES5需要使用\或+