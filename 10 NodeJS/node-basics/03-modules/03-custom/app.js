//console.log(require);//此时node app.js可以运行,但是在浏览器不支持common js

const { name,age } = require('./name')
name.sayName()
console.log(age.age);