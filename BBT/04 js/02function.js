//函数声明
function fun(){
}
console.log(fun);//function fun(){ }
//1.命名函数表达式
var test = function abc(){//无法打印 abd，只能打印test
}
console.log(test);//var test = function abc(){ }
console.log(test.name);//"abc"
//2.匿名函数表达式
var test = function(){
}
console.log(test);
console.log(test.name);//"demo"

//形参 实参
function sum(a,b){//不用定义变量
    var c = a + b;
    document.write(c);
    //实参都用arguments数组存起来
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);//打印实参列表
    }
    if(sum.length > arguments.length){
        consol.log("形参多了");
    }
}
sum(1,2,3)//形参和实参数量可以不一

//加法函数
function sum(){
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    console.log(result);
}

function sum(a,b){
    //arguments [1]
    var a = 2;
    console.log(arguments[0]);//2
    arguments[0] = 3;
    console.log(a);//3 虽然a是个原始值不可改变，但是有映射关系
    b = 2;
    console.log(arguments[1]);//undefined 没有实参，没有映射关系
}
sum(a);

function myNumber(target){
    return +target;
}
var num = myNumber('123');

// //作业
// //输入数字，反转变成汉字
// //debugger;
// function reverse(){
//     var num = window.prompt('请输入');
//     //console.log(typeof(num);
//     //console.log(num.length);
//     var newNum = "";
//     for(var i = num.length-1;i >= 0; i--){
//         newNum += num[i];
//     }
//     transtr(newNum);
// }
// function transtr(target){
//     //console.log(target);
//     for(var i = 0;i < target.length; i++){
//         //console.log(typeof(target));
//         //字符串可以用数组的方式读取
//         switch(target[i]){
//             case "0":
//                 document.write("零");
//                 break;
//             case "1":
//                 document.write("一");
//                 break;
//             case "2":
//                 document.write("二");
//                 break;
//             case "3":
//                 document.write("三");
//                 break;  
//             case "4":
//                 document.write("四");
//                 break;  
//             case "5":
//                 document.write("五");
//                 break;  
//             case "6":
//                 document.write("六");
//                 break;  
//             case "7":
//                 document.write("七");
//                 break;  
//             case "8":
//                 document.write("八");
//                 break;  
//             case "9":
//                 document.write("九");
//                 break; 
//         }
//     }
// }
// reverse();
// //阶乘
// function jc(){
//     if(n == 1){
//         return 1;
//     }
//     return n * jc(n-1);//递归
// }


//递归
//阶乘
function jc(){
    if(n == 1 || n == 0){
        return 1;
    }
    return n * jc(n-1);//递归
}
//斐波那契数列
function fb(n){
    if(n == 1 || n == 2){
        return 1;
    }
    return fb(n - 1) + fb(n - 2);
}

//作用域
function fu(){
    var a = 0;
    function fu(){
        var b = 1;
        document.write(a);
    }
    document.write(b);
}

//js运行三部曲 语法分析 预编译  解释执行
//预编译
//函数声明整体提升。原理见预编译过程
test();//输出 a
function test(){
    console.log('a');
}
//变量 声明整体提升，但不包括赋值。原理见预编译过程
console.log(a);// 输出 undefined
a = 123;

console.log(a);// 报错
//a = 123;

//预编译前奏
a = 123;
//1.未经声明就赋值的变量为全局对象所有
consol.log(window.a);//123

var a = 123;
//2. 声明的全局变量为window的属性
consol.log(window.a);//123

function fu(){
    var a = b =1;//将1赋值给未声明的变量b，将b的值赋值给声明的变量a
}
console.log(a);//undefined
console.log(b);//1

//预编译过程：
// 1.创建AO对象
// 2.找形参和变量声明，将其名称作为AO的属性名，值为undefined
// 3.将实参值和形参值统一
// 4.在函数体找函数声明，函数名为AO的属性名，值为函数体
function fn(a){
    console.log(a); //function a(){}
    var  a = 123; //将AO对象中的a修改为123
    console.log(a); //123
    function a(){}
    console.log(a); //123
    var b = function(){} //函数表达式 将AO对象中的b修改为function(){}
    console.log(b); //function(){}
    function d(){}
}
fn(1);
AO = {
    //a : undefined,
    //a : 1,
    a : function a(){},
    b : undefined,
    d : function d(){},
}

//作业
function test(a,b){
    console.log(a); //1
    c = 0; 
    var c;
    a = 3;
    b = 2;
    console.log(b); //2
    function b () {}
    function d(){}
    console.log(b); //2
}
test(1);

function print(){
    console.log(foo);//undefined
    var foo=2;
    console.log(foo);//2
    console.log(hello);//报错
}
print();

//全局预编译
// 1.创建GO对象  GO === window
// 2.如果有函数声明，函数名为GO的属性名，值为函数体
function fu(){
    var a = b =1;//将1赋值给未声明的变量b，将b的值赋值给声明的变量a
    console.log(window.b);//1
}
console.log(a);//window.a undefined
console.log(b);//1
//前面说的未经声明的变量为全局变量
GO = {
    b : 1,
}
AO = {
    a : undefined,
}

//先创建GO
GO = {
    test : function test(test){console.log(test);var test = 234;console.log(test);function test(){}},
}
console.log(test);// function test(test){console.log(test);var test = 234;console.log(test);function test(){}}
function test(test){
    console.log(test); //function test(){}
    var test = 234;
    console.log(test); //234
    function test(){}
}
AO = {
    //test : undefined,
    //test : 1,
    //test : function test(){},// AO有 优先用AO
    test : 234,
}
test(1);
var test = 123;

//练习
// GO = {
//     //global : undefined,
//     global : 100,
// }
// global = 100;
// function fn(){
//     console.log(global); //undefined// AO有 优先用AO
//     global = 200;
//     console.log(global); //200
//     var global = 300;
// }
// AO = {
//     //global : undefined,
//     global : 200,
// }
// fn();
// var global;

//练习
// GO = {
//     //a : undefined,
//     test : function test () {  },
//     c : 234,
//     a : 10,
// }
// function test () {
//     console.log(b); // undefined
//     if(a){ //flase
//         var b = 100;
//     }
//     c = 234;
//     console.log(c); //234
// }
// var a;
// AO = {
//     b : undefined,//没到执行阶段，不管if
// }
// test();
// a = 10;
// console.log(c); //234

//练习
// GO = {
//     demo : function demo(){},
//     //a : undefined,
//     a : 100,
//     f : 123
// }
// a = 100;
// AO = {
//     //e : undefined, 
//     //e : 1,
//     //e: funcrion e(){}
//     e : 2,
//     b : undefined,
//     //c : undefined,
//     c : function c(){},
//     //a : undefined,
//     a : 10,
//     e : function e(){}
// }
// function demo(e){
//     function e(){}
//     arguments[0] = 2;//e = 2
//     console.log(e);//2
//     if(a){ //false
//         var b = 123;
//         function c(){

//         }
//     }
//     var c;
//     a = 10;
//     var a;
//     console.log(b);  //undefined
//     f = 123;
//     console.log(c); //function c(){}
//     console.log(a); //10
// }
// var a;
// demo(1);
// console.log(a); //100
// console.log(f); //123

//练习
var str = false + 1;
document.write(str); //1
var demo = false == 1;
document.write(demo); //flase
if(typeof(a) && -true + (+undefined) + ""){
//typeof(a)不报错 undefined
//-true 1
//+undefined NaN
//"undefined" && "NaN"
    document.write('基础扎实');
}
if(11 + "11" * 2 == 33){
//11 + 22 == 33
//33 == 33
    document.write('基础扎实');
}
!!" " + !!"" - !!false||document.write('不能打印')
//!!" " => ||true => |flase => true
//!!"" => ||false => |true => false
//true + false + false || document.write('不能打印')

//练习
(window.foo || (window.foo = 'bar'));//window.foo = 'abr',先读括号


//作用域
function a(){

}
a.name;
//a.[[scope]];
//[[scope]]指作用域，存储运行期上下文的合集
//作用域链：[[scope]]所存储的执行期上下文对象的集合，呈链式链接
//运行期上下文：函数在执行时会创建一个“执行期上下文”的内部对象（即GO AO），一个函数执行多次会创建多个执行上下文，函数执行完时销毁执行上下文
//查找变量：在哪个函数查找变量，就在哪个函数的作用域链的顶端向下查找（AO）
function a(){
    function b(){
        var b = 234;
        //aa = 0;
    }
    var aa = 123;
    b();
    //console.log(aa);//0 b函数作用域链中的a函数的AO与a函数作用域链中的AO是引用关系
}
var glob = 100;
a();
//a函数定义时，a.[[scope]]作用域链存储第0位 0：GO{this:window,window:object,document:object,a:function,glob:100}
//a函数执行时，a.[[scope]] --> 
//0 : AO{this:window,argments:[],a:123,b:function}
//1 : GO{this:window,window:object,document:object,a:function,glob:100}
//b函数定义执行时，b.[[scope]] --> 
//0 ：AO{this:window,arguments:[],b:234}
//1 : AO{this:window,argments:[],a:123,b:function}
//1 : GO{this:window,window:object,document:object,a:function,glob:100}

function a(){
    function b(){
        function c(){

        }
        c();
    }
    b();
}
a();
//外面不能访问里面，里面可以访问外面
// a defined a.[[scope]] --> 0:GO //定义
// a doning  a.[[scope]] --> 0:a AO //执行
//                           1:GO
// b defined  b.[[scope]]--> 0:a AO
//                           1:GO
// b doning  b.[[scope]] --> 0:b AO
//                           1:a AO
//                           2:GO
// c defined  c.[[scope]] -->0:b AO
//                           1:a AO
//                           2:GO
// c defined  c.[[scope]] -->0:c AO
//                           1:b AO
//                           2:a AO
//                           3:GO



//闭包 内部函数被保存到了外部 原有作用域链不释放会导致内存泄漏
function a(){
    function b(){
        var bbb = 234;
        document.write(aaa);
    }
    var aaa = 123;
    return b; 
}
var glob = 100;
var demo = a();//a函数执行完，执行上下文被销毁，但是把b函数定义时的作用域链赋值给了demo
//0 : AO{this:window,argments:[],aaa:123,b:function}
//1 : GO{this:window,window:object,document:object,a:function,glob:100}
demo();//123

var demo;
function a(){
    var bbb = 234;
    function b(){
        document.write(abc);
    }
    demo = b();//将b函数保存到全局变量demo中，同样形成了闭包
}
a();
demo();

function a(){
    var num = 100;
    function b(){
        num++;
        console.log(num);
    }
    return b;
}
var demo = a();
demo();//101 
demo();//102 每次执行完，b的AO和a的AO GO被销毁了，但b函数作用域链中a的AO没有
//作用
//1.实现公有变量,比如函数累加器，调用一次+1
function add(){
    var count = 0;
    function demo(){
        count++;
        console.log(count);
    }
    return demo;
}
var counter = add();
counter();
counter();
//2.可以做缓存（存储结构）
function test(){
    var num = 100;
    function a (){
        num++;
        console.log(num);
    }
    function b (){
        num--;
        console.log(num);
    }
    return [a,b]
}
var myArr = test();
myArr[0]();//101
myArr[1]();//100

function test(){
    var food = "apple";
    var obj = {
        eatFood : function (){
            if(food != ""){
                console.log("I am eating" + food);
                food  = "";
            }else{
                console.log("There is nothing!");
            }
        },
        oushFood : function(myFood){
            food = myFood;
        }
    }
    return obj;
}
var person = test();
person.eatFood();//I am eating apple
person.eatFood();//There is nothing!
person.pushFood('banana');//I am eating banana
person.eatFood();//There is nothing!
//3.实现封装，属性私有化
//4.模块化开发，防止污染全局变量



//立即执行函数，执行后被销毁。解决闭包问题和初始化
(function abc(){
    var a = 123;
    var b = 234;
    console.log(a+b);
}())
(function abc(a,b){
    console.log(a+b);
}(123,234))
var sum = (function abc(a,b){
    sum = a+b;
    return sum;
}(123,234))
//只有表达式才能被执行符号执行
// function test(){
//     var a = 123;
// }()
var test = function(){
    var a = 123;
}()//可以执行，等同于立即函数

//立即执行函数解决闭包
function test(){
    var arr = [];
    for(var i = 0;i < 10; i++){
        arr[i] = function(){
            document.write(i);
        }
    }
    return arr;
}
var myArr = test();//此时并没有执行“console.log(i)”语句，只是把function函数赋值给arr[i]
//此时arr = [function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);},function(){document.write(i);}]
for(var j = 0;j < 10; j++){
    myArr[j]();//10 10 10 10 10 10 10 10 10 10 myArr[j]()与test形成了闭包，可以使用test的执行上下文，此时i=10
}
//改造
function test(){
    var arr = [];
    var k;
    for(var i = 0;i < 10; i++){
        (function(k){
            arr[k] = function(){
                document.write(k);//执行时 此时的k为每次循环时的i，与function(k)形成了闭包
            }
        }(i));//每一次循环i的值会被传到k上
        // (function(k){
        //     arr[k] = function(){
        //         document.write(k);
        //     }
        // }(0));
        // (function(k){
        //     arr[k] = function(){
        //         document.write(k);
        //     }
        // }(1));
        // (function(k){
        //     arr[k] = function(){
        //         document.write(k);
        //     }
        // }(2));
    }
    return arr;
}
var myArr = test();
//此时arr = [function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);},function(){document.write(j);}]
for(var j = 0;j < 10; j++){
    myArr[j]();
}

//作业 立即执行函数解决闭包
//给所有li标签加上点击事件
// *{
//     margin : 0;
//     padding : 0;
// }
// ul{
//     list-style : none;
// }
// li:nth-of-typeof(2n){
//     background-color: red;
// }
// li:nth-of-typeof(2n+1){
//     background-color: green;
// }
function test(){
    var liCollection = document.getElementsByTagName('li');
    for(var i = 0;i < liCollection.length; i++){
        liCollection[i].onclick = function(){
            console.log(i);
        }
    }
}
//改造
function test(){
    var liCollection = document.getElementsByTagName('li');
    for(var i = 0;i < liCollection.length; i++){
        (function(j){
            liCollection[j].onclick = function(){
                console.log(j);
            }
        }(i))
    }
}

//作业 计算字符串的字节长度
function retByteslen(bytes){
    var count = 0;
    for(var i = 0;i < bytes.length; i++){
        if(bytes.charCodeAt(i) <= 255){
            count++;
        }else if(bytes.charCodeAt(i) > 255){
            count += 2;
        }
    }
    console.log(count);
}
retByteslen("abvfc");
//改造 汉字比英文字母多1，均当成英文字母，遇到汉字+1
function retByteslen(bytes){
    var count,len;
    count = len = bytes.length;
    for(var i = 0;i < len; i++){
        if(bytes.charCodeAt(i) <= 255){
            count++;
        }
    }
    console.log(count);
}
retByteslen("abvfc");

//作业 
var f = (
    function f(){
        return "1";
    },
    function g(){
        return 2;
    }
)();
console.log(typeof f);//number

//作业
var x = 1;
if(function f(){}){//function f(){},加上括号变成了表达式，用完就销毁了
    x += typeof f;//虽然f没有定义，但是放到typeof里不会报错，"undefined"
}
console.log(x);//"1undefined"