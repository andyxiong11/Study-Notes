let name = 'andy';
let age = 12;
let fn = function(){
    // console.log('my name is' + this.name);
    console.log(`my name is'$(this.name)`);
}
let userInfo = {
    id:1,
    // name:name,
    // age:age,
    // fn : fn,
    name,//es6中变量名与属性名一致，可以只写变量名
    age,
    fn//es6中函数名与函数值一致，可以只写函数名
}
console.log(userInfo);
userInfo.fn;

//webpack里面的babel翻译器会将es6语法转换成es5
//www.babeljs.io