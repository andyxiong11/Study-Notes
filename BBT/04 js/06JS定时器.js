// setInterval();
// setTimeout();
// clearlnterval();
// clearTimeout();
// 全局对象window.上的方法，内部函数this指向window
// 注意：setInterval("func()",1O00);

var time = 1000;//ms
setInterval(function(){
    console.log(a);
},time);
time = 2000;//不生效

var firstTime = new Date().getDate();
setInterval(function(){
    var lastTime = new Date().getDate();
    console.log(lastTime - firstTime);//实际上不是每次刚好1秒执行一次
    firstTime = lastTime;
},1000);

var timer = setInterval(function(){
}(1000));//timer = 1 返回一个唯一标识
var timer1 = setInterval(function(){
},1000);//timer1 = 2

var i=0;
var timer = setInterval(function(){
    console.log(i++);
    if(i > 10){
        clearInterval(timer);//清除定时器
    }
},10);

setTimeout(function(){
    console.log(1);
},1000);//等待1000毫秒再执行

var timer = setTimeout(function(){
    console.log(1);
},1000);//setTimeout和setInterval的timer会互相+，不会重复
clearTimeout(timer);

//作业 计时器，到三分钟停止
// input{
//     border:1px solid rgba(0,0,0,0.8);
//     text-align:right;
//     font-size:20px;
//     font-weight:bold;   
// }
// minutes:<input type="text"value="0">
// seconds:<input type="text"value="0">
var minutesNode = document.getElementsByTagName('input')[0];
var secondsNode = document.getElementsByTagName('input')[1];
var minutes = 0,
    seconds = 0;
var timer = setInterval(function(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    secondsNode.value = seconds;
    minutesNode.value = minutes;
    if(minutes == 3){
        clearInterval(timer);
    }
},1000)
