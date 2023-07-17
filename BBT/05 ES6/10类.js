//es5声明类
function Animal(name) {
    //私有属性
    this.name = name;
    // this.sayHi = function(){
    //     console.log(`my name is ${this.name}`);
    // }
}
Animal.prototype.sayHi = function () {//让所有实例化对象共享一个方法，没必要每次实例化都开辟一个新空间
    console.log(`my name is ${this.name}`);
}
var a1 = new Animal('cat');
a1.sayHi();//1.首先在Animal对象上找2.其次在原型__proto__(Animal.prototype)上找

//ES5继承
function People(name, worker) {
    // this.name = name;
    Animal.call(this.name);//继承私有属性
    this.worker = worker;
}
//基于原型继承，让子类的prototype指向父类的实例对象
Animal.prototype = a1;
Animal.prototype.constructor = People;//修正子类构造函数指向
var p1 = new People('andy', 12);


//如果把构造函数当成普通函数执行会污染全局变量
var a1 = Animal('cat');//window.Animal('cat')   window.name = 'cat'



//ES6
class People {
    //每次实例化，方法自动执行。一般初始化属性，接收实例化传递的参数
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //es5里面原型继承的语法糖
    //People.prototype.sayHi = function () {}
    sayHi() {
        console.log(`my name is ${this.name}`);
    }
}
var p1 = new People('andy',12);
p1.sayHi();