//正则表达式
//转义字符
var str = "abc\"def";
console.log(str);//abc"def
var str = "abc\ndef";
console.log(str);
//abc
//def
var str = "abc\tdef";//tab
console.log(str);//abc  def
//多行字符串
document.body.innerHTML = "\
<div></div>\
<span></span>\
"

//正则表达式：匹配特殊字符或特殊搭配原则的字符
//创建方式
// 1.直接量
var reg = /abc/;
var str = "abcd";
reg.test(str);//true 包含小写的abc
// 2.new RegExp()
var str = "abcd";
var reg = new RegExp("abc");
reg.test(str);//true
//括号也可以直接放变量
var reg = /abc/;
var reg1 = new RegExp(reg);
var reg1 = RegExp(reg);//不加new reg1和reg指向同一个地址

//用法
var reg = /abc/i;//1.忽略大小写进行匹配
//var reg = /abc/g;//2.全局匹配
var reg =/ab/g;
var str = "abababab";
str.match(reg);//["ab"]
str.match(reg);//["ab","ab","ab","ab"]
//var reg = /abc/m;//3.多行匹配
var reg = /^a/g;//匹配以a开头的所有a
var str = "abab\nabab";
str.match(reg);//['a']

var reg = /^a/gm;//匹配每一行以a开头的所有a
var str = "abab\nabab";
str.match(reg);//['a','a']

//1.表达式
// [abc]查找方括号之间的任何字符。
// [^abc]查找任何不在方括号之间的字符。
// [0-9]查找任何从0至9的数字。
// [a-z]查找任何从小写a到小写z的字符。
// [A-Z]查找任何从大写A到大写Z的字符。
// [A-z]查找任何从大写A到小写Z的字符。
// [adgk]查找给定集合内的任何字符。
// [^adgk]查找给定集合外的任何字符。
// (red|blue|green)查找任何指定的选项。
var reg = /[1234567890][1234567890][1234567890]/g;//匹配3位数字的字符
var str = '2131b3h312hgbhj313';
str.match(reg);//['123','312','313]

var reg = /[ab][cd][d]/g;//匹配a/b + c/d + d
var str = 'abcd';
str.match(reg);//['bcd']

var reg = /[0-9A-z][cd][d]/g;//匹配0-9/A-z + c/d + d
var reg = /[^a][^b]/g;//匹配非 a + b

var reg = /(abc|bcd)/g;//匹配abc或bcd
var str = "abcd";//['abc','bcd']
var reg = /(abc|bcd)[0-9]/g;//匹配abc + [0-9]或bcd + [0-9]

//2.元字符
// . 查找单个字符，除了换行和行结束符。
// \w查找单词字符。
// \W查找非单词字符。
// \d查找数字。
// \D查找非数字字符。
// \s查找空白字符。
// \S查找非空白字符。
// \b匹配单词边界。
// \B匹配非单词边界。
// \0查找NUL字符。
// \n查找换行符。
// \f查找换页符。
// \r查找回车符。
// \t查找制表符。
// \v查找垂直制表符。
// \xxx查找以八进制数XXX规定的字符。
// \xdd查找以十六进制数dd规定的字符。
// \uxxxx查找以十六进制数xxxx规定的Unicode字符.

// \w === [0-9A-z_]
// \W === [^\w]
var reg = /\Wcd2/g;//
var str = "b*cd2";//['*cd2']
str.match(reg);
// \d === [0-9]
// \D === [^\d]
var reg = /\d\d\d/g;//
var str = "123";//['123']
str.match(reg);
var reg = /[\w\d]/g;//
var str = "s";//['s']
str.match(reg);
// \s === [\n|\f|\r|\t|\v| ]; 换行符 换页符 回车符 制表符 垂直制表符
// \S === [^\s]
// \b匹配单词边界。
// \B匹配非单词边界。
var reg = /\bada/g;//
var str = "dsa ada qwe";//['ada']
str.match(reg);
var reg = /\bada\b/g;//
var str = "dsa ada qwe";//['ada']
str.match(reg);
var reg = /\bada\b/g;//
var str = "dsa adaqwe";//null
str.match(reg);
// \t查找制表符。
var reg = /\tada/g;//
var str = "dsa\tadaqwe";//['ada']
str.match(reg);
// \uxxxx查找以十六进制数xxxx规定的Unicode字符.
var reg = /\u8001\u9093\u8eab\u4f53\u597d/g;
var str="老邓身体好";//["老邓身体好"]
str.match(reg);
var reg = /[\u0000-\uffff]/g;//匹配一切字符 /[\d\D] [\s\S]
var str="老邓身体好";//["老","邓","身","体","好"]
str.match(reg);
//.= [^\r\n]
var reg = /./g;//
var str="老邓身体好";//["老","邓","身","体","好"]
str.match(reg);

//3.量词
// n+匹配任何包含至少一个n的字符串。
// n*匹配任何包含零个或多个的字符串。
// n?匹配任何包含零个或一个n的字符串。
// n{x}匹配包含X个n的序列的字符串。
// n{X,Y}匹配包含X至Y个n的序列的字符串。
// n{X,}匹配包含至少X个个的序列的字符串。
// n$匹配任何结尾为n的字符串。
// ^n匹配任何开头为n的字符串。
// ?=n匹配任何其后紧接指定字符串n的字符串。
// ?!n匹配任何其后没有紧接指定字符串n的字符串。

//n+
var reg  = /\w+/g;
var str = "abc";
str.match(reg);//["abc"]

var reg  = /\w+?/g;//加一个？变成非贪婪匹配
var str = "abc";
str.match(reg);//["a","b","c"]
//n*
var reg  = /\w*/g;
var str = "abc";//匹配到abc后，光标处还有个""
str.match(reg);//["abc",""]
var reg  = /\d*/g;
var str = "abc";//光标每移动一位都没匹配到\d
str.match(reg);//["","","",""]
// n?
var reg  = /\w?/g;//匹配每一个\w
var str = "aaaaaaaaa";
str.match(reg);//['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '']

var reg  = /\w?/g;//加一个？变成非贪婪匹配
var str = "aaaaaaaaa";
str.match(reg);//['', '', '','', '', '','','','', '']

//n{x}
var reg  = /\w{3}/g;//每3个\w匹配
var str = "aaaaaaaaaaa";
str.match(reg);//['aaa', 'aaa', 'aaa']
//n{X,Y}
var reg  = /\w{3,5}/g;//每3-5个\w匹配
var str = "aaaaaaaaaaaaa";
str.match(reg);//['aaaaa', 'aaaaa', 'aaa']

var reg  = /\w{3,5}?/g;//加一个？变成非贪婪匹配
var str = "aaaaaaaaaaaaa";
str.match(reg);['aaa', 'aaa', 'aaa', 'aaa']
// n{X,}
var reg  = /\w{1,}/g;//匹配最大数量的\w，最少一个\w
var str = "aaaaaaaaaaaaa";
str.match(reg);//['aaaaaaaaaaaaa']
var reg  = /\w{2,}/g;
var str = "qweqwr";
str.match(reg);//['qweqwr']
// ^n
var reg  = /^abc/g;
var str = "abcdef";
str.match(reg);//["abc"]
// n$
var reg  = /ef$/g;
var str = "abcdef";
str.match(reg);//["ef"]

var reg  = /^abc$/g;//限制字符串
var str = "abcabc";
str.match(reg);//null

//练习 检查首尾是否含有数字
var reg = /^\d|\d$/;
//练习 检查首尾都含有数字
var reg = /^\d[\s\S]*\d$/;

// 4.RegExp对象属性
// global RegExp对象是否具有标志g.
// ignoreCase RegExp对象是否具有标志i:
// lastIndex 一个整数，标示开始下一次匹配的字符位置。
// multiline RegExp对象是否具有标志m。
// source 正则表达式的源文本。
reg.ignoreCase;//boolean
reg.global;//boolean
reg.multiline;//boolean
reg.source;// /^\d|\d$/


// 5.RegExp对象方法
// compile 编译正则表达式。 不用管
// exec 检索字符串中指定的值。返回找到的值，并确定其位置。
// test 检索字符串中指定的值。返回true或false。
reg.test(str);
// exec
var reg = /ab/g;//不加g lastIndex不会变
var str = "ababab";
console.log(reg.exec(str));//['ab', index: 0, input: 'ababab', groups: undefined]
console.log(reg.lastIndex);//2  光标的位置
console.log(reg.exec(str));//['ab', index: 2, input: 'ababab', groups: undefined]
console.log(reg.lastIndex);//4
console.log(reg.exec(str));//['ab', index: 4, input: 'ababab', groups: undefined]
console.log(reg.lastIndex);//6
console.log(reg.exec(str));//null
console.log(reg.exec(str));//['ab', index: 0, input: 'ababab', groups: undefined]
console.log(reg.lastIndex);//2  
reg.lastIndex = 0;//人为修改光标位置
console.log(reg.exec(str));//['ab', index: 0, input: 'ababab', groups: undefined]
console.log(reg.lastIndex);//2  

var str = "aaabbb";
var reg = /(\w)\1\1/g;//\1反向引用\w
str.match(reg);//['aaa','bbb']
var reg = /(\w)\1\1(\w)\2\2/g;
str.match(reg);//['aaabbb']
console.log(reg.exec(str));//['aaabbb', 'a', 'b', index: 0, input: 'aaabbb', groups: undefined]


// 6.支持正则表达式的String对象的方法
// search 检索与正则表达式相匹配的值。
// match 找到一个或多个正则表达式的匹配。
// replace 替换与正则表达式匹配的子串。
// split 把字符串分割为字符串数组。

// search 返沪匹配到的位置，未匹配到返回-1
var str = "qweaaabbb";
var reg = /(\w)\1\1/;
console.log(str.search(reg));//3

var str = "qweaaabbb";
var reg = /(\w)\1\1/g;
console.log(str.search(reg));//3 与g没有关系
// match 
var str = "aaabbb";
var reg = /(\w)\1\1/;
str.match(reg);//['aaa', 'a', index: 0, input: 'aaabbb', groups: undefined]

var str = "aaabbb";
var reg = /(\w)\1\1/g;
str.match(reg);//['aaa','bbb']
// split 按照正则表达式拆分
var str = "qweaaerewbbfwfewf";
var reg = /(\w)\1/;
console.log(str.split(reg));//['qwe', 'a', 'erew', 'b', 'fwfewf']

var str = "qweaaerewbbfwfewf";
var reg = /(\w)\1/g;
console.log(str.split(reg));//['qwe', 'erew', 'fwfewf']
// replace
var str ="aa";
console.log(str.replace("a","b"));//ba 不用正则表达式只能替换第一个

var reg = /a/;
var str ="aa";
console.log(str.replace("a","b"));//ba 不用g只能替换第一个

var reg = /a/;
var str ="aa";
console.log(str.replace("a","b"));//bb
//replace应用 将xxyy倒转
var reg =/(\w)\1(\w)\2/g;
var str ="aabb";
// console.Log(str.replace(reg,"$2$2$1$1"));//bbaa
console.log(str.replace(reg,function ($,$1,$2){
    return $2+$2+$1+$1+$1+'abc';
}));
//replace应用 将the-first-name转换为小驼峰
var reg =/-(\w)/g;
var str = "the-first-name";
console.log(str.replace(reg,function($,$1){
    return $1.toUpperCase();
} ));



//正向预查 正向断言
var str ="abaaaaa"
var reg =/a(?=b)/g;
str.match(reg);//查找后面有b的a，但是不返回b
var str ="abaaaaa"
var reg =/a(?!b)/g;
str.match(reg);//查找后面没有b的a，但是不返回b

// https://ke.qq.com/course/231577/1731627734763673#term_id=100273169 59分30秒