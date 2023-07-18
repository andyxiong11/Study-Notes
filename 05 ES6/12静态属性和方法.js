//ES5
function People(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log(`my name is ${this.name}`);
    }
}
var p1 = new People('andy',12);

console.log(People.length);//形参的数量，把构造函数当对象使用

People.counter = 12;//静态属性，实例对象无法共享
console.log(People.counter);//12
p1.counter;//undefined
People.say = function(){
    console.log(`my name is say`);
}
People.say();//静态方法，实例对象无法共享


//构造函数实际是对象
//js引擎底层
var People = new Function('name', 'age',`this.name = name;
this.age = age;
this.sayHi = function(){
    console.log(\`my name is ${this.name}\`);
}`)



//ES6
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`my name is ${this.name}`);
    }
    static say() {//静态方法，实例对象无法共享
        console.log(`my name is say`);
    }
    static counter = 12;////静态属性，实例对象无法共享
}
var p1 = new People('andy',12);
p1.say();//报错
p1.counter();//报错