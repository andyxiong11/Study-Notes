// ECMAScript2015 ECMAScript6 ES6
// let声明变量，const声明常量

//var 弊端：1.预解析造成逻辑混乱，可以先使用后声明。在声明赋值之前调用，undefined
//2.var声明的变量没有块级作用域，只有全局作用域和函数作用域
for (var i = 0; i < 10; i++) {
    consoLe.log(i);
}
consoLe.log(i);//10  不想让i在循环外部使用
//3.var可以重复声明 不合逻辑
var a = 1;
var a = 10;
console.log(a);//10


//使用let解决
console.log(a);//报错
let a = 12;//let不会预解析
console.log(a);

for (let i = 0; i < 10; i++) {//let块级作用域
    consoLe.log(i);
}
consoLe.log(i);//报错

{
    let a = 10;
    console.log(a);//10
    {
        console.log(a);//报错；
        let a = 100;//let块级作用域允许嵌套
        console.log(a);//100；如果a未声明，则为10
    }
}


//const 常量 一般用大写
const PI = 3.14;//声明时必须赋值
PI = 3;//报错
var r = 3;
var length = 1 * PI * r;

const userInfo = {
    id: 1,
    name: 'andy',
    worker: ['pm', 'teacher']
}
userInfo = { };//报错
userInfo.name = 'newAndy';//因为对象保存的是引用地址，没有修改常量userInfo的引用地址
consoLe.log(userInfo);
//栈 容量小，速度快，存储基本类型
//堆 容量大，速度慢，存储引用数据类型