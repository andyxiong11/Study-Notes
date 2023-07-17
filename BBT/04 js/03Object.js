var mrDeng = {
    name : "MrDeng",
    age : 40,
    sex : "male",
    health : 100,
    smoke : function(){
        console.log('I am smoking!');
        //mrDeng.health--;
        this.health--;
    },
    drink : function(){
        console.log('I am drink');
        //mrDeng.health++;
        this.health++;
    }
}
mrDeng.smoke();
mrDeng.health;//99
//增删改查
mrDeng.wife = "liu";
console.log(mrDeng);
console.log(mrDeng.wife);
mrDeng.wife = "xiao";
delete mrDeng.wife;
console.log(mrDeng);

var mrDeng = {
    name : "MrDeng",
    age : 40,
    sex : "male",
    prepareWife : "wang",
    gf : "liu",
    wifi : "",
    divorce : function(){//离婚
        delete this.wife;
        this.gf = this.prepareWife;
    },
    getMarried : function(){//结婚
        this.wife = this.gf;
    },
    changePrepareWife : function(someone){
        this.prepareWife = someone;
    }
}
mrDeng.getMarried();
console.log(mrDeng.wife);;//liu
mrDeng.divorce();
mrDeng.getMarried();
console.log(mrDeng.wife);;//wang
mrDeng.changePrepareWife('zhang');
mrDeng.divorce();
mrDeng.getMarried();
console.log(mrDeng.wife);;//zhang


//对象的创建方法
//1.对象字面量/对象直接量
var obj = {};
//2.构造函数
//系统自带构造函数Oject();加上new创建一个对象 new Object();对象的返回值赋值给一个变量
var obj = new Object();
obj.name = 'wang'; 
obj.drink = function(){
    console.log('I am drink');
}
//自定义构造函数
function Car(){//构造函数建议使用大驼峰
    this.name = 'BMW';
    this.height = '1400';
    this.weight = '1000';
    this.health = 100;
    this.run = function(){
        this.health--;
    };
}
var car = new Car();//有new才会生成对象
var car1 = new Car();//不同对象的属性方法是分开的

//构造函数原理
function Student(name,age,sex,grade){
    //1.生成this对象
    //var this = {name : 'zhangsan'};
    //ao = { this : {name : 'zhangsan'} }
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.grade = 2017;
    //3.返回this
    //return this;
}
//2.调用 执行this.
var student = new Student('zhangsan','18','male');

//模拟构造函数
function Strudent(name,age){
    var that = {};
    that.name = name;
    that.age = age;
    return that;
}
var student = Strudent();

function Strudent(name,age){
    var that = {};
    that.name = name;
    that.age = age;
    //return {};//student为空对象
    //return 123;//student为实际参数，因为必须返回一个对象
}
var student = Strudent('xiaowang','12');


//包装类
new String();
new Boolean();
new Number();

var num = new Number(123);//对象123
//num  * 2 = 268; 但是此时num变成了原始值
num.a = 'a';//num = { a : 'a'; [[PrimitiveValue]] : 123 }
var str = new String('213');
var bol = new Boolean(true);
//undefined和null不可以有属性
//原始值不可能有属性值和方法

var num = 4;
num.len = 3;//new Number(4).len = 3;自动创建一个Number对象,然后销毁
console.log(num.len);//重新创建一个一个Number对象，new Number(4).len，undefined

//给数组属性赋值，截断
var arr = [1,2,3,4,5];
arr.length = 2;
console.log(arr);//[1,2]

var str = 'abcd';
str.length = 2;//new String(4).length = 3;自动创建一个String对象,然后销毁
console.log(str);//abcd
console.log(str.length);//4 length是字符串对象自带属性,new String('abcd').length

//作业
var str = 'abc';
str += 1;
var test = typeof(str);
if(test.length == 6){
    test.sign = "typeof返回的结构为String";//new String(test).sign = "typeof返回的结构为String"
}
console.log(test.sign);//undefined  new String(test).sign

function Person(name,age,sex){
    var a = 0;
    this.name = name;
    this.age = age;
    this.se = sex;
    function sss(){
        a++;
        document.write(a);
    }
    this.say = sss;//闭包
}
var oPerson = new Person();
oPerson.say();//1
oPerson.say();//2
var  oPerson1 = new Person();
oPerson1.say();//1



//原型是function对象的一个属性，定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象
//Person.prototype 原型
//Person.prototype = {} 祖先
Person.prototype.name = "wang";
Person.prototype.say = function(){
    console.log('hehe');
}
function Person(){
    this.name = 'deng';//优先使用自己的属性
}
var person = new Person(); 
var person1 = new Person();
console.log(person);//{}
console.log(person.name);//deng
console.log(person1.name);//deng
console.log(person.say);//hehe
console.log(person1.say);//hehe

//应用 解耦合
Car.prototype.name = BMW;
Car.prototype.height = 1400;
Car.prototype.weight = 1000;
function Car(color){
    // this.name = 'BMW';
    // this.height = '1400';
    // this.weight = '1000';
    this.color = color;
}
var car = new Car('red');
console.log(car);//{color : 'red'}
console.log(car.prototype);//{'color : 'red',name : BMW,height : 1400,weight : 1000}

//原型增删改查
Person.prototype.lastName = "Deng";
function Person(name){
    this.name = name;
}
var person = new Person('wang');
person.lastName = 'ji';//person多了一个lastName属性，原型并没有修改。实际是增加属性
//改
Person.prototype.lastName = "ji";
//增
Person.prototype.firstName = "ji";
//删

Person.prototype = {
    name : BMW,
    height : 1400,
    weight : 1000,
}

//原型的constructor属性，查找该对象的构造函数
function Person(){

}
Car.prototype = {
    constructor : Person,
}
function Car(){

}
var car = new Car;
console.log(car.constructor);//function Person(){}  构造函数被修改

//原型的__proto__属性，指向对象的原型
Person.prototype.name = 'abc';
function Person(){
    //第一步生成this对象，实际上并不是空的。当person.name找不到自身的属性时，会找__proto__ 对象的原型
    // var this = {
    //     __proto__ : Person.prototype
    // };
}
var person = new Person();
person.__proto__;//Object{ }
person.name;    // abc 当person.name找不到自身的属性时，会找__proto__ 对象的原型
var obj = {
    name : 123
}
person.__proto__ = obj;//Person.prototype可以被修改
person.name;    //123 

Person.prototype.name  = 'sunny';
function Person(){
    //var this = { __proto__ : Person.prototype}
}
var person = new Person();
// Person.prototype.name = 'chery';//修改了属性值
// console.log(person.name);//chery
Person.prototype = {
    name : 'chery'//只是修改了Person.prototype，person对象__proto__指向的空间并没有修改
}
console.log(person.name);//sunny

Person.prototype.name  = 'sunny';
function Person(){
    //var this = { __proto__ : Person.prototype}
}
Person.prototype = {
    name : 'chery'
}
var person = new Person();//先把Person.prototype的name属性替换了，然后创建对象
console.log(person.name);//chery

//原型链
CanvasGradient.prototype.lastName = "Deng";
function Grand(){

}
var grand = new Grand();
Father.prototype = grand;
function Father(){
    this.name = 'wang';
}
var father = new Father();
Son.prototype = father;
function Son(){
    this.hobbit = 'smoke';
}
var son = new Son();
console.log(son.lastName);//Deng
console.log(Grand.prototype.__proto__);//原型链终端 Object.prototype

//原型链的增删改查
// 只能增删改原型自己的值，不能增删改父亲的值。但可以改父亲的引用值,调用的修改
function Father(){
    this.fortune = {
        card1 : 'visa'
    }
    this.num = 100;
}
var father = new Father();
Son.prototype = father;
function Son(){
}
var son = new Son();
son.fortune.card2 = 'master';
console.log(father.fortune);//card1 : 'visa' card2 : 'master'

son.num++;
console.log(father.num);//100
console.log(son.num);//101
console.log(son);//{num = 101;}

Person.prototype = {
    name : 'a',
    sayName : function(){
        console.log(this.name);
    }
}
function Person(){
    //this.name = 'b'; //此时person.sayName为b;person.portotype.sayName为a
}
var person = new Person();
person.sayName();//a

Person.prototype = {
    height : 100
}
function Person(){
    this.eat = function(){
        this.height ++;
    }
}
var person = new Person();
person.eat();
console.log(person.height); //101
//console.log(person.prototype.height);//报错
//console.log(person.prototype);//undefined
console.log(person.__proto__);//100

//Object.create(原型)方法
//var obj = {}; <==> var obj = new Object();
var obj = {name: 'sunny'};
var obj1 = Object.create(obj);
//上面等同于下面
Person.prototype.name = 'sunny';
function Person(){

}
var person = Object.create(Person.prototype);

//绝大多数对象的最终都会继承自Object.prototype
Object.create(null);//例外

var obj = Object.create(null);
obj.__proto__ = {name : 'sunny'};
console.log(obj.name);//undefined,非系统定义的__proto__ 原型

//Number.toString()和Object.toString()返回值不一样，因为num.toString()重写了
var num = 123;
num.toString();//"123" 首先需要包装类包装new Number(num).toString();
//new Number的原型Number.prototype上有toString()方法,所以不用去Number.prototype的原型Object.prototype上找
Number.prototype.toString = function(){}//原型上已有的方法，又写一个与原型中同名的方法，重写
Number.prototype.__proto__ = Object.prototype
var obj = {};
obj.toString();//'[object Object]'
//方法的重写
Person.prototype  = {
    // toString : function(){
    //     return 'hehe';
    // }
    //加上上面的 person.toString();//'hehe'
};
function person(){
}
var person = new Person;
person.toString();//Person原型上没有toString方法，就去找Object.prototype '[object Object]'

Object.prototype.toString();
Number.prototype.toString();
Array.prototype.toString();
Boolean.prototype.toString();
String.prototype.toString();
//document.write隐式调用toString()方法
var obj = Object.create(null);
// obj.toString = function(){
//     return '123';
// }
document.write(obj);//会报错，实际上隐式调用了obj.toString(),原型里面没有toString()方法

//js精度丢失问题
console.log(0.14 * 100);//14.00000002
Meth.ceil(123.23)//向上取整 1214
Meth.
Meth.random()//0-1随机数
for(var i = 0; i < 10;i++){
    // var num = Meth.random().toFixed(2) * 100;//保留2位小数*100,会出现精度问题
    var num = Meth.floor(Meth.random() * 100);//*100取整,不会出现精度问题
    console.log(num);
}
//js只能处理小数点前16位和后无16位(有时候可以用科学计数法表示）的数据,
console.log(0.000000000000000001 + 0.000000000000000001);//2e-18
console.log(0.100000000000000001 + 0.100000000000000001);//0.2  不能用科学计数法表示
console.log(1000000000000001 + 1000000000000001);//2000000000000002



//call apply 改变this指向
function test(){

}
test();//实际上test.call();

function Person(name,age){
    //this = obj;
    this.name = name;
    this.age = age;
}
var person = new Person('deng',100);
var obj = { };
Person.call(obj);//将Person方法中的this替换为obj
Person.call(obj,'cheng',300);//正常方法执行 借用别人的函数构造自己的对象
console.log(person);//{name: 'deng', age: 100}
console.log(obj);//{name: 'cheng', age: 300}

function Person(name,age,sex){
    this.name = nmae;
    this.age = age;
    this.sex =sex;
}
function Student(name,age,sex,tel,grade){
    // this.name = nmae;
    // this.age = age;
    // this.sex =sex;
    //var this = {name:"",age:"",sex:""}
    Person.call(this,name,age,sex);//将this = {},传到Person方法中。依次传递name,age,sex存到this = {}中
    this.tel = tel;
    this.grade = grade;
}
var student = new Student('sunny',12,'male',1767876543,120);
console.log(student);

function Wheel(wheelSize,style){//轮子大小、风格
    this.style = style;
    this.wheelSize = wheelSize;
}
function Sit(sitColor){
    this.sitColor = sitColor;
}
function Model(height,width,len){
    this.health = height;
    this.width = width;
    this.len = len;
}
function Car(wheelSize,style,sitColor,height,width,len){
    Wheel.call(this,wheelSize,style);
    Sit.call(this,sitColor);
    Model.call(this,height,width,len)
}
var car = new Car(100,'花里胡哨','red',1800,1900,4900);

//call必须把实参按照形参个数传进去，apple必须传数组
function Car(wheelSize,style,sitColor,height,width,len){
    Wheel.apply(this,[wheelSize,style]);
    Sit.apply(this,[sitColor]);
    Model.apply(this,[height,width,len])
}



//继承发展
//1.传统形式——原型链；继承了没用的属性
CanvasGradient.prototype.lastName = "Deng";
function Grand(){

}
var grand = new Grand();
Father.prototype = grand;
function Father(){
    this.name = 'wang';
}
var father = new Father();
Son.prototype = father;
function Son(){
}
var son = new Son();
console.log(son);
//2.借用构造函数；不能继承借用构造函数的原型；每次构造函数都要多走一个函数
function Person(name,age,sex){
    this.name = nmae;
    this.age = age;
    this.sex =sex;
}
function Student(name,age,sex,tel,grade){
    Person.call(this,name,age,sex);//将this = {},传到Person方法中。依次传递name,age,sex存到this = {}中
    this.tel = tel;
    this.grade = grade;
}
var student = new Student('sunny',12,'male',1767876543,120);
//3.共有原型；修改任意一个构造函数的原型，其他函数均更改
Father.prototype.lastName = "Deng";
function Father(){
}
function Son(){
}
Son.prototype = Father.prototype;//Father.prototype是个对象，引用值;
var father = new Father();
var son = new Son();
console.log(father.lastName);//"Deng"
console.log(son.lastName);//"Deng"
//封装继承函数
function inherit(Target,Origin){//Origin原始构造函数
    Target.prototype = Origin.prototype;
}
inherit(Son,Father);//不能放在对象创建之后
Son.prototype.sex = "male";//修改Son原型，但是此时Father函数中也有这个属性，因为指向用一个原型
var son = new Son();

console.log(son.lastName);//"Deng"
//4.圣杯模型；子原型和父原型互不影响
Father.prototype.lastName = "Deng";
function Father(){
};
function F(){};
function Son(){
};
F.prototype = Father.prototype;
Son.prototype = new F();
//封装圣杯模型
function inherit(Target,Origin){//Origin原始构造函数
    function F(){};
    F.prototype = Origin.prototype;//不能放在对象创建之后
    Target.prototype = new F();
    Target.prototype.constructor = Target;//将son.constructor恢复
    Target.prototype.uber = Origin.prototype;//方便寻找父类
}
Father.prototype.lastName = "Deng";
function Father(){
}
function Son(){
}
inherit(Son,Father);
var father = new Father();
var son = new Son();
console.log(son.constructor);//Father 因为 son.__proto__ ——> new F().__proto__ ——> Father.prototype
//更好的写法
var inherit = (function(){
    var F = function F(){};//私有化了变量，如下闭包
    function inherit(Target,Origin){//Origin原始构造函数
        F.prototype = Origin.prototype;//不能放在对象创建之后
        Target.prototype = new F();
        Target.prototype.constructor = Target;//将son.constructor恢复
        Target.prototype.uber = Origin.prototype;//方便寻找父类
    }
})()
//闭包 私有化变量应用
function Deng(name,wife){
    // this = { //创建对象时新建了this属性，并返回this(闭包)
    //     divorce : function(){
    //         this.wife = prepareWife;
    //     },
    //     changePrepareWife : function(target){
    //         prepareWife = target;
    //     },
    //     sayPraprewife : function(){
    //         console.log(prepareWife);
    //     }
    // }
    var prepareWife = "xiaozhang";
    this.name = name;
    this.wife = wife;
    this.divorce = function(){
        this.wife = prepareWife;
    }
    this.changePrepareWife = function(target){
        prepareWife = target;
    }
    this.sayPraprewife = function(){
        console.log(prepareWife);
    }
    // return this;//创建对象时新建了this属性，并返回this(闭包)
}
var deng = new Deng();//创建对象时新建了this属性，并返回this(闭包)
deng.divorce();
deng.sayPraprewife();//xiaozhang
console.log(deng.prepareWife);//undefined



//管理变量、防止污染全局、适用于模块发开发
//org 命名空间问题；解决方法：将不同人命名的变量放到各自的对象中，防止冲突
var org = {
    departmeng1 : {//部门1
        zhangsan : {//员工zhangsan
            name : "abc",
            age : 12
        },
        lisi : {//员工lisi

        }
    },
    departmeng2 : {//部门2
        zhangsan : {//员工zhangsan
            
        },
        lisi : {//员工lisi

        }
    }
}
//org.departmeng1.zhangsan.name
var zhangsan = org.departmeng1.zhangsan;
zhangsan.name;

//新的解决方法  闭包 私有化变量,不污染全局变量
var name = 'bac';
var init = (function(){
    var name = 'abc';
    function callName(){
        console.log(name);
    }
    return function(){
        callName();
    }
}());
init();//abc，外部变量不影响
var initDeng = (function(){
    var name = '123';
    function callName(){
        console.log(name);
    }
    return function(){
        callName();
    }
}());
initDeng();//123



//连续调用
{/* <head>
    <!-- <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
</head> */}
// $('div').css('background-color','red').width(100).height(100).html(123).css('position','absolute').css('left','100px').css('top','100px');
var deng = {
    smoke : function(){
        console.log('smoking');
        return this;//可以继续调用其他属性方法
    },
    drink : function(){
        console.log('drinking');
    },
    perm : function(){
        console.log('perm');
    },
}
deng.smoke().drink().perm();

//属性的访问
// obj.name本质是obj['name']
var deng = {
    wife1 : {name : 'xiaozhang'},
    wife2 : {name : 'xiaoliu'},
    wife3 : {name : 'xiaomeng'},
    wife4 : {name : 'xiaowang'},
    sayWife : function(num){
        return this['wife' + num];
    }
}
deng.sayWife(2);



//对象的枚举
//for in
var obj = {
    name : '13',
    age : 123,
    sex : "male",
    height : 180,
    weight : 75
}
for(var prop in obj){
    console.log(prop + " " + typeof(prop));//遍历对象，类型为字符串
    //name age sex height weight
    console.log(obj.prop);//undefined undefined undefined undefined undefined 不报错
    //obj.prop ——> obj['prop']
    console.log(obj[prop]);//prop是变量不需要加引号
}
//1.hasOwnProperty 排除原型，一般遍历需要加上
var obj = {
    name : '13',
    age : 123,
    sex : "male",
    height : 180,
    weight : 75,
    __proto__ : {
        lastName : "deng",
        //__proto__ : Object.prototype
    }
}
Object.prototype.abc = '123;'
for(var prop in obj){
    if(obj.hasOwnProperty(prop)){//hasOwnProperty 判断prop属性是不是自己的
        console.log(obj[prop]);
    }
    if(!obj.hasOwnProperty(prop)){//不能打印系统的原型，但是人为设置的可以打印 Object.prototype.abc
        console.log(obj[prop]);
    }
}
//2.in 判断对象可不可以调用这个属性，不会过滤原型,与hasOwnProperty不一样
var obj = {
    name : '13',
    age : 123,
    sex : "male",
    height : 180,
    weight : 75,
    __proto__ : {
        lastName : "deng",
    }
}
console.log("weight" in obj);//true
console.log("lastName" in obj);//true
//3.instanceof
//A instanceof B  
//官方解释  A对象是不是B构造函数构造出来的
//实质  A对象的原型链上有没有B的原型
function Person(){

}
var person = new Person();
console.log(person instanceof Person);//true
console.log(person instanceof Object);//true??
console.log([] instanceof Array);//true
console.log([] instanceof Object);//true??
//应用 区分数组和字符串
var arr = [] || {};
if(arr instanceof Array){
    console.log("数组");
}

arr.constructor();

Object.prototype.toString.call([]);//[object Array] 将toString方法的this指向[] 字符串类型是数组
Object.prototype.toString.call({});//[object object]



//this
//1.函数预编译过程this ——> window
function test(c){
    //var this = test.create(test.prototype);
    var a = 123;
    function b(){
    }
}
// AO{
//     arguments : [1],
//     this : window,
//     c : 1,
//     a : undefined,
//     b : function (){}
// }
test(1);
var test = new Test;//test构造函数会加一个var this = test.create(test.prototype);
//2.全局作用域里this ——> window
console.log(this);
///3.call/apply可以改变函数运行时this指向
//4.obj.func();func()里面的this指向obj
var obj = {
    a : function(){
        console.log(this.name);
    },
    name : 123
}
obj.a();
//作业
var name = '222';
var a = {
    name : '111',
    say : function(){
        console.log(this.name);
    }
}
var fun = a.say;
fun();//222 函数拿到全局执行
a.say();//111
var b = {
    name : '333',
    say : function(fun){
        fun();
    }
}
b.say(a.say);//222 b中的函数，this指向b，但没人调用fun()，所以走预编译，this指向window
b.say = a.say;
//相当于
// var b = {
//     name : '333',
//     say : function(){
//         console.log(this.name);
//     }
// }
b.say();//333  谁调用，this指向谁



//arguments
//1.arguments.callee 打印函数的引用
function test(){
    console.log(arguments.callee);
}
test();//function test(){console.log(arguments.callee);}

function test(){
    console.log(arguments.callee);//test
    function demo(){
        console.log(arguments.callee);//demo
    }
    demo();
}
test();
//应用
var num = (function (n){
    if(n == 1){
        return 1;
    }
    return n * arguments.callee(n-1);//计算阶乘，函数为立即执行函数，没有函数名
}(20))
//2.func.caller  函数被调用的环境
function test(){
    demo();
}
function demo(){
    console.log(demo.caller);//function test(){demo();}
}
test();
//作业
var foo ='123';
function print(){
    var foo ='456';
    this.foo="789";//window.foo = '789
    console.log(foo);
}
print();//456

var foo ='123';
function print(){
    this.foo="789";//window.foo = '789
    console.log(foo);
}
print();//234

var foo ='123';
function print(){
    //var this = Object.create(print.prototype);
    this.foo="789";//此时不改变window
    console.log(foo);
}
new print();//123

var a = 5;
function test(){
    a = 0;//AO时定义了a :undefined
    alert(a);//0   0 
    alert(this.a);//5    undefined
    var a;
    alert(a);//0  0
}
test();
new test();

function print() {
    var marty = { 
        name: "marty",
        printName: function(){
            console.log(this.name);
        }
    }
    var test1 = {
        name: "test1"
    };
    var test2 = {
        name:"test2"
    };
    var test3 = {
        name:"test3"
    };
    test3.printName = marty.printName; 
    var printName2 = marty.printName.bind({ name: 123 }); 
    marty.printName.call(test1);//test1
    marty.printName.apply(test2); //test2
    marty.printName(); //marty
    printName2();
    test3.printName(); //test3
}
print();



//克隆
//浅拷贝  
var obj = {
    name : '123',
    age : 12,
    card : ['visa']
}
var obj1 = {}
function clone(origin,target){
    var target = target || {};
    for(var prop in origin){
        target[prop] = origin[prop];
    }
    return target;//如果没有传target，需要手动返回
}
clone(obj,obj1);
obj.card.push = 'alipay';
console.log(obj1);//obj1也会有'alipay'

//深拷贝
// 1.判断是不是原始值
// 2.判断是数组还是对象
// 3.建立相对应的数组或对象
var obj = {
    name : '123',
    age : 12,
    card : ['visa']
}
//var obj1 = {[obj.card[0],obj.card[2],[]]}
var obj1 = {}
function deepClone(origin,target){
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]"//方便比较是否是数组
    for(var prop in origin){
        if(origin.hasOwnProperty(prop)){//不取原型上的
            if(origin[prop] !== "null" && typeof(origin[prop]) == 'object'){//防止null
                if(toStr.call(origin[prop]) == arrStr){
                    target[prop] = [];
                }else{
                    target[prop] = {}
                }
                deepClone(origin[prop],target[prop])
            }else{
                target[prop] = origin[prop];
            }
        }
    }
    return target;//如果没有传target，需要手动返回
}
deepClone(obj,obj1);
obj.card.push = 'alipay';
console.log(obj1);


//三目运算符
var num = 1 < 0 ? 2 + 2 : 1 + 1;
var num = 1 < 0 ? ("10" > "9" ? 1 : 0) : 2;// 0  字符串是比较每一位的ASCII码，1<9
//简化深拷贝的代码
target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};



//数组
var arr = [];
var arr = new Array();//数组的所有方法来自于Array.prototype

var arr = [1,2, , ,3,4];//length 6
var arr = new Array(1,2,4);//arr = [1,2,4]
//new Array只有一个参数，为数组长度
var arr = new Array(10);//length 10
var arr = [10];//arr = [10]

//数组的读写，不可以溢出读，结果undefined；可以溢出写
//可以读取数组的任意一位,并赋值。因为本质是对象
var arr = [];
console.log(arr[10]);//undefined
arr[10] = 'abc';
console.log(arr.length);//11

//数组的方法(es3.0)
//JavaScript：ECMAScript(es3.0 es5.0 es6.0) DOM(操作html) BOM(操作浏览器，每个浏览器互相不兼容)
//改变原数组:push pop shift unshift sort reverse splice
//1.push 添加值，返回新数组长度
arr.push(1);
arr.push(1,2,3,4);
//push方法
Array.prototype.push = function(){
    for(var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }
    return this.length;
}
//2.pop 剪切最后一位，返回剪切的值
var arr =[1,2];
arr.pop();//2
//3.shift 剪切第一位，返回剪切的值
var arr =[1,2];
arr.shift();//1
//4.unshift 将值添加到数组前面
var arr =[1,2];
arr.unshift(2);//[2,1,2]
arr.unshift(2,1);//[2,1,2,1,2]
//unshift方法 待编写
Array.prototype.unshift = function(){
    var arr = [];
    for(var i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    for(var i = 0; i < this.length; i++){
        arr.push(this[i]);
    }
    return arr;
}
//5.reverse 反转数组，返回原数组
var arr =[1,2];
arr.reverse();//[2,1]
//6.splice 切片,返回剪切数组长度及值   splice(从哪一位开始截取，截取多少位，在切口处添加新的数据)
var arr = [1,1,2,2,3,4];
arr.splice(1,2);//2[1,2]   [1,2,3,4]
arr.splice(1,0,5);//[1,5,2,3,4]

//-1 倒数第一位
arr.splice(-1,1);//4
//实现逻辑
splice = function(pos){
    pos += pos > 0 ? 0 : this.length;
    //pos >= 0 || pos <= this.length;
}
//7.sort 排序(默认升序),返回原数组
//sort.reverse() 降序
var arr = [1,3,5,4,10];
//按照ASCII码排序
arr.sort();//[1,10,3,4,5]

//自定义排序（冒泡排序）:必须写两个形参。返回值为负数，前面的数放在前面；返回值为正数，后面的书在前；返回值为0，不变
//1,3;1,5;1,4;1,10;3,5;3,4;3,10;5,4;4,10;5,10
arr.sort(function(a,b){
    if(a > b){
        return 1;
        //return a-b;
    }else{
        return -1;
        //return a-b;
    }
})

//乱序排列
var arr = [1,2,3,4,5,6,7,8];
arr.sort(function(a,b){
    return Math.random()-0.5;
})

//给对象按某个属性值升序
var cheng = {
    name : "cheng",
    age : 18,
    sex : 'male',
    face : "handsome"
}
var deng = {
    name : "deng",
    age : 40,
    sex : undefined,
    face : "amazing"
}
var zhang = {
    name : "zhang",
    age : 20,
    sex : "male"
}
var arr = [cheng,deng,zhang];
arr.sort(function(a,b){
    return a.age - b.age;
})

//按照字符串长度升序
var arr = ['aws','deed','1','ewqeqw','dasda','weqweqweqwe'];
arr.sort(function(a,b){
    return a.length - b.length;
})

//不改变原数组 concat join split toString slice
//1.concat 连接两个数组
var arr = [1,2,3,4];
var arr1 = [5,6,7];
arr.concat(arr1);
//2.toString 把数组变成字符串
var arr = [1,2,3,4];
arr.toString();//"1,2,3,4"
//3.slice 截取  
var arr = [1,2,3,4,5,6];
//slice(从该位开始截取，截取到该位)
var newArr = arr.slice(1,3);//[2,3,4]
//slice(从该位开始截取到最后一位)
var newArr = arr.slice(3);//[4,5,6]
//slice()
var newArr = arr.slice();//[1,2,3,4,5,6]
//4. join 将数组的每个值用自定义连接起来，转化为字符串
var arr = [1,2,3,4,5,6];
var str = arr.join("-");//"1-2-3-4-5-6"
var str = arr.join(0);//"10203040506"
//5.split 字符串方法
var arr = [1,2,3,4,5,6];
var str = arr.join("-");//"1-2-3-4-5-6"
var newArr = str.split("-");//[1,2,3,4,5,6]



//类数组
function tets(){
    console.log(arguments);//类数组
    arguments.push(7);//报错，因为不是数组
}
test(1,2,3,4);

//1.利用属性名模拟数组的特性
//2.动态增长kength属性
//3.如果强行让类数组调用push方法，则会根据length属性值的位置进行扩充
//好处：可以利用数组和对象的方法，比如利用for in遍历
var obj = {
    //属性要为索引（数字）属性，必须要有length属性，最好加上push
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    'length' : 3,
    'push' : Array.prototype.push,
    //'splice' : Array.prototype.splice //加上后，obj还是对象，但是变成了数组，可以调用数组的所有方法
}
//上面相当于 var arr = ['a','b','c'];
console.log(obj[0]);//'a'
obj.push('d');//obj = {'0' : 'a','1' : 'b','2' : 'c','3' : 'd',length : 4}  属性都变了，一般对象不会变
//原理
Array.prototype.push = function(target){
    obj[obj.length] = target;
    obj.length++;
}

//面试题
var obj = {
    '2' : 'a',
    '3' : 'b',
    'length' : 2,//因为长度为2，所以在obj[2]上新增
    'push' : Array.prototype.push,
}
obj.push('c');
obj.push('d');
console.log(obj);//var obj = {'2' : 'c','3' : 'd','length' : 4}


//作业
//1.封装type
// typeof([])--array
// typeof({})--object
// typeof(funtion)--object
// typeof(new Number())--number object
// typeof(123)---number
//(1) 判断原始值(number string undefined boolean null)和引用值（object function array)
//(2) 区分引用值
function type(target){
    // var ret = typeof(target);
    var template = {
        "[object Array]" : "array",
        "[object Object]" : "object",
        "[object Number]" : "number-object",
        "[object Boolean]" : "boolean-object",
        "[object String]" : "string-object"
    }
    if(target === null){
        return 'null';
    }
    if(typeof(target) == 'function'){
        return 'function';//此判断可以删除，直接返回typeof(target)
    }else if(typeof(target) == 'object'){//typeof(target)可以提出来
        //数组
        //对象
        //包装类 Object.prototype.toString
        var str = Object.prototype.toString.call(target);
        return template[str];
    }else{
        return typeof(target);
    }
}
//上述方法提取到common.js

//2.数组去重，要求在原型链上编程
//自己写的
Array.prototype.unique = function(){
    for(var i = 0;i < this.length; i++){
        for(var j = i;(i != this.length) && (j < this.length) ;j++){
            if(this[j] === this[i]){
                this.splice(j,1);
            }
        }
    }
    return this;
}
//参考答案 hash
//将数组的每个值与对象比较，如果没有数组值，就加上
Array.prototype.unique = function(){
    var temp = {},
        newArr = [],
        len = this.length;//避免for循环反复运算
    for(var i = 0;i< len;i++){
        if(temo[this[i]] === undefined){//!temo[this[i]]
            temp[this[i]] = i;//最好不要赋值i或undefined,!0和!undefined都是true
            arr.push[i];
        }
    }
    return newArr;
}
//上述方法提取到common.js
var arr = [1,2,1,3,4,1,4,5,1];
arr.unique();


 //作业
//1.一个字符串[a-z]组成，找出字符串第一个只出现一个的字母
function demo(str){
    var obj = {};
        len = str.length,
        flag;
    //遍历字符串
    for(var i = 0;i < len;i++){
        //判断当前字符是否已存在
        if(!obj[i]){
            flag = 0;
            //遍历当前字符之后的字符串并比较
            for(var j = i + 1;j < len;j++){
                if(str[j] == str[i]){
                    flag++;
                    obj[j] = 1;
                //比较到字符串最后一位，且前面没有与之相同的字符
                }else if((j == (len-1)) && (flag == 0)){
                    return str[i];
                }
            }
        }
    }
}
//1.for遍历字符串
//2.遍历时判断如果当前字符角标在对象中有对应的属性值，则跳过
//3.for逐一比对当前字符之后的字符与当前字符是否相等，相等则把角标当作属性名传到对象中
//4.如果当前字符与当前字符之后的字符比到最后一位均不相等，则返回字符
demo("qwewevrqbar");
//srt[i] str.split("")
//2.字符串去重



//try catch 报错后不影响后续代码执行
try{
    console.log('a');
    console.log(b);//报错 try里面当前语句之后的代码不执行
    console.log('c');//不执行
}catch(e){//系统将错误信息error.message、error.name放到error对象中，传给e
    alert(e.name + ":" + e.message);
}
console.log('c');//执行

//error.name  错误名称
// 1.EvalError:eval()的使用与定义不一致
// 2.RangeError:数值越界
// 3.ReferenceError:非法或不能识别的引用数值（最常见）
//变量未经声明使用，函数未经声明调用等等
// 4.SyntaxError:发生语法解析错误（最常见）
//中文符号等等
// 5.TypeError::操作数类型错误（数组方法操作对象）
// 6.JRIError:URI处理函数使用不当



//ES5.0的严格模式(es3.0和es5.0产生冲突的部分使用es5.0，否则用es3.0)
//浏览器使用es3.0 + es5.0新增的方法，二者产生的冲突使用es3.0
"use strict";//启用es5.0严格模式,必须写在页面逻辑最顶端。不用函数启用，避免老浏览器无法找到该函数报错
function tets(){
    //"use strict"//也可以写在函数内部，只对函数生效
    console.log(arguments.callee);
}
tets();//会报错，arguments.callee只能用在es3.0

//1.with、arguments.caller、arguments.callee、func.caller es5.0不允许使用
//with 修改顶层作用域链，但影响运行效率
var obg = {
    name : 'abc',
    age : 123
}
var name = 'window';
function test(){
    var name = 'scope';
    var age = 234;
    with(obj){//将with中的对象作为with代码体中作用域链的最顶端
        console.log(name);//'abc'
    }
}
test();
//应用 解决命名空间问题 588行
with(org.departmeng1.zhangsan){
    console.log(name);
}
//应用
with(document){
    write('e');//document.write('e')
}
//2.变量赋值前必须声明
"use strict";
var a = b = 3;//报错
//3.局部的this必须赋值，赋值什么就是什么
function test(){
    console.log(this);
}
test();//undefined 不指向window
test.call(123);//123  但是在es3.0会先包装成对象
//4.拒绝重复属性和参数
"use strict";
function test(name,name){
    console.log(name);
}
test(1,2);//报错
var obj = {
    name : 23,
    name : 12
}

//eval() 将字符串当作代码执行,还能改变作用域,只能在es5.0使用
//eval('console.log('213')');//213