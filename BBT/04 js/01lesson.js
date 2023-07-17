document.write('hello world!');
// 变量定义赋值 var
// 1.必须以字母、_、$开头；2.可以包含字母、_、$、数字

// 数据类型：原始值（Number、String、Boolean、undefined、null）、引用值（array、object、function）；
//原始值（栈）不可改变、
var num = 100;
var num1 = num;
num = 200;//实际上没有删除100，只是将100空间地址初始化，另外开辟一个内存空间赋予200
num1 = 100;
//引用值（堆）可以改变,指向位置
var arr = [1, 2];
var arr1 = arr;
arr1.push(3) //arr = [1,2,3]
arr = [1, 3] //arr1 = [1,2,3]

//一个js代码块的错误不影响其他的代码块

//运算操作符
//"+" 数学运算、字符串链接
//任何内容加字符串都等于字符串
var a = 1 + 1 + "a" + 1 + 1;//2a11
//-、*、/、%、++、--、+=、-=、%=
var a = 0 - 1;//-1
var a = 0 * 2;//0
var a = 0 / 1;//0
var a = 0 / 0;//NaN 
var a = 1 / 0;//Infinity 无穷
var a = -1 / 0;//-Infinity 负无穷
var a = 5 / 2;//1

var a = 1;
document.write(a++);//1
document.write(a);//2
var b = a++ + 1;
document.write(a);//3
document.write(b);//3

var a = 1;
var b = ++a - 1 + a++;//++a后a变成了2，a++为2
document.write(b + " " + a);//3 3

var a = 1;
var b = a-- + --a;
document.write(b);//0


//比较运算符
//>、<、==、>=、<=、!=
//字符串比较ASCII码
var a = NaN == NaN//false,只有这一个不等于
//undefined、null 不能和数字比较
// [] == 0;

//逻辑运算符
//&& || !
//undefined、null、NaN、" "、0、fals,为false
//第一个表达式为真时，返回第二个值
var a = 1 && 2 + 2;//4
var a = 0 && 2 + 2;//0
var a = null && 2 + 2;//null
var a = 1 && flase && 1;//flase
//短路语句
2 > 1 && document.write('1');//后端传输数据有误时，不渲染

//有真就返回
var num = 1 || 3;//1
var num = 0 || 3;//3
div.onclick = function (e) {
    var event = e;
    //非IE浏览器中，e有值，IE浏览器中e的值存在window.event
    window.event;

    var enevt = e || window.event;
}

//条件语句
if (1 > 2 && 3 > 2) {
    document.write('1>2');
}
if (1 > 2 || 3 > 2) {
    document.write('1>2 || 3>2');
}

var score = parseInt(window.prompt('请输入'));
if (score > 90 && score < 100) {
    document.write("")
} else if (score > 80 && score <= 90) {

}

for (let i = 0; i < 10; i++) {
    document.write('a');
}
while (1) {
    i++;
}
do {
    i++;
} while (i);

// //作业
// var score = parseInt(window.prompt('请输入'));
// //2的n次幂
// var i = 1;num = 2;
// while(i < score){
//     num *= 2;
// }
// document.write(num);
// //n的阶乘
// var num = 1;
// while(score > 0){
//     num *= score;
// }
// document.write(num);

switch (n) {
    case 1:
        document.write('1');
        break;
    case true:
        document.write();
}


//引用值 数组 对象
var arr = [1, 2, 3, undefined, "abc"];
console.log(arr[i]);
console.log(arr.length);

var obj = {
    Name: "deng",
    age: 40,
}
console.log(obj.Name);//deng
obj.Name = "xiong";
console.log(obj.Name);//xiong

//操作符 typeof() number、string、boolean、undefined、object、function
var num = 1;
console.log(typeof (num));//int
console.log(typeof (ac));// undefined 未定义的变量 
console.log(typeof (typeof (ac)));//string "undefined"

//显示类型转换 Number、parseInt、String、toString、Boolean
Number('123');//123
Number('undefined');//NaN
Number('a');//NaN
Number('123a');//NaN

parseInt('123');//123
parseInt('a');//NaN
parseInt('123px');//123
parseInt('10', 16);//'10'当成16进制，转换为十进制
parseInt('10101010', 2);//170
parseFloat('100.2px');//100

String(123);//'123'

num.toString();//将num转换成字符串
num.toString(8);//将num转换成八进制字符串


Boolean();//undefined、null、NaN、" "、0、fals,为false

//隐式类型转换 isNaN、++、--、+ 正、- 负、+、- * / %、&& || !、< > <= >=
isNaN()//判断值是否为NaN
isNaN(isNaN);//true
isNaN('isNaN');//true
isNaN('123');//false
isNaN('abc');//true 先运行number('abc'),值为NaN
isNaN(null);//true
isNaN(undefined);//false

var a = "123";
a++;//124 先运行number(a)
var a = "abc";
console.log(a++ + " " + typeof (a++));//NaN Number

var a = 'abc';
console.log(+a + " " + typeof (+a));//NaN Number
console.log(-a + " " + typeof (-a));//NaN Number

var a = 'abc' + 1;//'abc1' 加号两侧有一个字符串就转化为字符串,a.toString()

var a = '1' - 1;//0
var a = 'abc' - 1;//NaN number('abc')-number(1)
var a = 'abc' * 1;//NaN typeof(a)=number
var a = 'abc' / 1;//NaN
var a = 'abc' % 1;//NaN

var a = '12' > 1;//true 优先转化为数字比较
var a = true > false;//true
var a = 10 > 100 > 0;//false 

var a = 1 == '1';//true
var a = 1 == true;//true
var a = undefined == null;//true
var a = NaN == NaN;//flase

var a = 1 === '1';//flase 不发生隐式转换比较
var a = 1 !== '1';//true