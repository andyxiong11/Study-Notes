// ES6引入的新的写法，箭头函数
// 1.简化   2.明确this的指向问题
// 面试：两链一包（作用域链、原型链、闭包），this指向问题
// 箭头函数中，this是固定作用域

var fn = function sum(a, b) {
    return a + b;
}
console.log(fn(1, 2));
// sum(1,2);//报错 找不到原函数
var fn = function () { }


//箭头函数基本语法
var fn = (param) => {
    console.log(param);
    console.log('箭头函数');
}
fn(12);//12
// 1.=> 左边参数只有一个，括号可以不写
var fn = param => {
    console.log(param);
    console.log('箭头函数');
}
fn(12);
// 2.=> 右边的函数体如果只有一条语句，不用写大括号，默认会加上return，否则需要加上大括号，选加return
var sum = (a, b) => a + b;
console.log(sum(1, 2));
// 3.=> 右边的函数体如果只有一条语句，返回一个对象,需要加上大括号，选加return
var fnObj = () => {
    return { name: 'andy', age: 12 }
}
var fnObj = () => {
    var obj = { name: 'andy', age: 12 };
}



//箭头函数this指向
setTimeout(function () {
    console.log(this);//ES5定时器的this为window
}, 1000)

var obj = {
    name: 'andy',
    age: 12,
    sayHi: function () {
        console.log(this === obj);
        console.log(`my name is ${this.name}`);
    }
}
obj.sayHi();//my name is andy  此时obj调用，this指向obj实例
var fn = obj.sayHi;
fn();//等价window.fn()   此时this指向window

//箭头函数的this为父级作用域的this，一级一级找
var obj = {
    name: 'andy',
    age: 12,
    sayHi: () => {
        console.log(this === obj);//此时的this指向window，因为父级没有this，此时不适合用箭头函数
        console.log(`my name is ${this.name}`);
    }
}
obj.sayHi();

function People(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log('my name is ' + this.name);
        //es5中的setTimeout this指向window
        setTimeout(function(){//定时器是异步执行，相当于window.setTimeout()
            console.log('setTimeout',this);//this指向window
        },2000)
        //es6中的setTimeout this得看父级
        setTimeout(() => {
            console.log('setTimeout',this);//this指向p1实例
        },2000)
    }
}
var p1 = new People('andy', 12);
p1.say();

//箭头函数不可以做构造函数
// var P1 = () => {

// }
// var p1 = new P1();




//需求：点击（为事件设置回调函数）盒子，延时2s（定时器），把盒子的内容取出来
{/* <style type="text/css">
        #box {
            width: 200px;
            height: 200px;
            background-color: red;
            color: #fff;
            cursor: pointer;
        }
    </style>
<body>
    <p>需求：点击（为事件设置回调函数）盒子，延时2s（定时器），把盒子的内容取出来</p>
    <div id="box">你好</div>
</body> */}
var oBox = document.getElementById('box');
oBox.onclick = function () {
    // console.log('DOM0级',oBox.innerText);
    // console.log('DOM0级',this.innerText);
    //ES5写法
    var _That = this;
    setTimeout(function () {
        console.log('DOM0级', oBox.innerText);
        //console.log('DOM0级',this.innerText);//此时this指向window
        console.log('DOM0级', _That.innerText);//或者在点击事件函数中定义var _That = this;
        console.log('DOM0级', this.innerText);//或者.bind(this)
    }.bind(this), 2000)

    //ES6写法
    setTimeout( () => {
        console.log('DOM0级', this.innerText);//找父级  oBox
    }, 2000)
}

oBox.addEventListener('click', function () {
    console.log('DOM2级', this.innerText);
})