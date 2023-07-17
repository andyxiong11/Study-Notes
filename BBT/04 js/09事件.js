//一、绑定事件处理函数
//1. ele.onxxx = function (event){}
//兼容性很好，但是一个元素的同一个事件上只能绑定一次
//基本等同于写在HTML行间上
//<div style = "onclick = 'console.log('b')'"></div>
var div = document.getElementsByTagName('div')[0];
div.onclick = function(){
    console.log('a');;
}
//下面会覆盖上面
div.onclick = function(){
    console.log('b');;
}
//2. obj.addEventListener(type,fn,false);
//IE9以下不兼容，可以为一个事件绑定多个处理程序，按照绑定顺序触发
div.addEventListener(事件类型,处理函数,false);
div.addEventListener('click',function(){
    console.log('a');
},false);
div.addEventListener('click',function(){
    console.log('b');
},false);
//以下只会打印一次，因为绑定的是同一个函数
div.addEventListener('click',test,false);//也可以直接用函数名
div.addEventListener('click',test,false);
function test(){
    console.log('a');
}
//3. obj.attachEvent('on'+type,fn);
//IE独有，一个事件同样可以绑定多个处理程序,且可以重复绑定函数
obj.attachEvent('onclick',function(){})

//<ul><li></li><li></li><li></li></ul>
//作业 使用原生addEventListener给li绑定事件
var li = document.getElementsByTagName('li'),
          len = li.length;
for(var i = 0;i < len;i++){
    (function(i){
        li[j].addEventListener('click',function(){
            console.log(i);
        },false)
    }(i))//注意闭包
}


//二、事件处理的运行环境
//1. ele.onxxx function (event){}
//程序this指向是dom元素本身
div.onclick = function(){
    console.log(this);//<div></div>
}
//2. obj.addEventListener(type,fn,false);
//程序this指向是dom元素本身
div.addEventListener('click',function(){
    console.log(this);//<div></div>
},false)
//3. obj.attachEvent('on'+type,fn);
//程序this指向window
div.attachEvent('onclick',function(){
    console.log(this);//window
})
//改造让其指向dom元素
diw.attachEvent('onclick',function (){
    handle.call(div);
})
function handle(){
    console.log(this);//div
}

//作业 封装兼容性的addEvent(elem,type,handle);方法
function addEvent(elem,type,handle){
    if(elem.addEventListener){
        elem.addEventListener(type,handle,false);
    }else if(elem.attachEvent){
        elem.attachEvent('on' + type,function(){
            handle.call(elem);
        })
    }else{
        elem['on' + type] = handle;
    }
}


//三、解除事件处理程序
//1. ele.onclick = false/"/null;
div.onclick = function(){
    console.log('a');
    this.onclick = null;//点击一次后，将行间样式 onclick = "null"
}
//2. ele.removeEventListener(type,fn,false);
div.addEventListener('click',test,false);//不能用匿名函数
function test(){
    console.log('a');
}
div.removeEventListener('click',test,false);
//3. ele.detachEvent('on'+type,fn);
div.detachEvent('click',test,false);//不能用匿名函数
function test(){
    console.log('a');
}
div.detachEvent('click',test,false);
//注：若绑定匿名函数，则无法解除


//四、事件处理模型——事件冒泡、捕获
//1.事件冒泡：
//结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一事件，自子元素冒泡向父元素。（自底向上）
{/* <style type="text/css">
  .wrapper{
    width:300px;
    height:300px;
    background-color:red;
  }
  .content{
    //margin-left: 300px;
    width:200px;
    height:200px;
    background-color:green;
  }
  .box{
    //margin-left: 200px;
    width:100px;
    height:100px;
    background-color:orange;
  }
</style>
<div class="wrapper">
  <div class="content">
    <div class="box">
    </div>
  </div>
</div> */}
var wrapper = document.getElementsByClassName('wrapper')[0];
var content = document.getElementsByClassName('content')[0];
var box = document.getElementsByClassName('box')[0];
wrapper.addEventListener('click',function(){
    console.log('wrapper');//wrapper
},false)
content.addEventListener('click',function(){
    console.log('content');//content wrapper
},false)
box.addEventListener('click',function(){
    console.log('box');//box content wrapper
},false)

//2.事件捕获：
//结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，即同一事件，自父元素捕获至子元素（事件源元素）。（自顶向下）
var wrapper = document.getElementsByClassName('wrapper')[0];
var content = document.getElementsByClassName('content')[0];
var box = document.getElementsByClassName('box')[0];
wrapper.addEventListener('click',function(){
console.log('wrapper');//wrapper
},true)
content.addEventListener('click',function(){
console.log('content');//wrapper content 
},true)
box.addEventListener('click',function(){
console.log('box');//wrapper content box
},true)
//IE没有捕获事件

//触发顺序，先捕获，后冒泡
wrapper.addEventListener('click',function(){
    console.log('wrapper');
},false)
content.addEventListener('click',function(){
    console.log('content');
},false)
box.addEventListener('click',function(){
    console.log('box');
},false)
wrapper.addEventListener('click',function(){
    console.log('wrapperBubble');
    },true)
content.addEventListener('click',function(){
    console.log('contentBubble');
},true)
box.addEventListener('click',function(){
    console.log('boxBubble');
},true)
//wrapperBubble contentBubble boxBubble box content wrapper

//focus,blur,change,submit,reset,select等事件不冒泡


//五、取消冒泡和阻止默认事件
//1.取消冒泡：//继承了父元素的点击事件
//W3C标准event.stopPropagation():但不支持ie9以下版本
document.onclick = function(){
    console.log('a');
}
div.onclick = function(e){
    e.stopPropagation();//e对象会记录鼠标点击时的参数
    //event.cancelBubble = true;
    //stopBubble(e);
    console.log('b');//会打印a和b
}
// IE独有event.cancelBubble=true(chrome也有)
// 封装取消冒泡的函数stopBubble(event)
function stopBubble(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}

//2.阻止默认事件：
// 默认事件一表单提交，标签跳转，右键菜单等
// 1.return false:以对象属性的方式注册的事件才生效
document.oncontextmenu = function(){
    console.log('a');//网页上右键
    return false;//阻止右键菜单
}
//应用 a标签去掉点击跳转和刷新的功能
//<a href = "javascript:void(false)">demo</a> 等同
// 2.event.preventDefault();W3C标注，IE9以下不兼容
document.oncontextmenu = function(){
    console.log('a');//网页上右键
    e.preventDefault();//阻止右键菜单
}
// 3.event.returnValue=false;兼容IE
document.oncontextmenu = function(){
    console.log('a');//网页上右键
    e.returnValue=false;//阻止右键菜单
}
// 封装阻止默认事件的函数cancelHandler(event):
function cancelHandler(event){
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
}


//六、事件对象 e
//e对IE不生效，event‖window.event用于IE
div.onclick = function(e){
    var event = e || window.event;
}
//事件源对象：
//因为冒泡，所以需要知道事件源对象
{/* <div class="wrapper"style="width:100px;height:100px;background-color:red;">
<div class="box"style="width:50px;height:50px;background-color:green"></div></div> */}
var wrapper = document.getElementsByClassName('wrapper')[0];
var box = document.getElementsByclassName('box')[0];
wrapper.onclick = function (e){
    var event = e || window.event;
    console.log(event);
    var target = event.target || event.srcElement;
    console.log(target);//事件源对象
}
//event.target火狐只有这个
//event.srcElement IE只有这个
//这俩chrome都有
//兼容性写法

//七、事件委托
//利用事件冒泡，和事件源对象进行处理
//优点：
//1.性能不需要循环所有的元素一个个绑定事件
//2.灵活当有新的子元素时不需要重新绑定事件
{/* <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
</ul> */}
var ul = document.getElementsByTagName('ul');
ul.onclick = function(e){
    var event = e || window.event;
    var target = event.target || event.srcElement;
    console.log(target.innerText);//每次点击li相当于点击ul，找到对应的事件源对象li，后续li可以动态扩张，不用for
}

//作业 拖拽
{/* <div style="width: 100p;height: 100px;background-color: pink;position:absolute;left: 0;top: 0;"></div> */}
var div = document.getElementsByTagName('div')[0];
var disX,
    disY;
div.onmousedown = function(e){
    disX = e.pageX - parseInt(div.style.left);//获取鼠标开始的位置距离方块左上角的距离
    disY = e.pageY - parseInt(div.style.top);//获取鼠标开始的位置距离方块左上角的距离
    document.onmousemove = function (e){//document,而不是用div，防止鼠标移动太快移出div，没有监听到
        var event = e || window.event;
        div.style.Left = e.pagex - disX + "px";//-disX 防止方块左上角跟着鼠标移动
        div.style.top = e.pageY - disY + "px";//-disX 防止方块左上角跟着鼠标移动
    }
    document.onmouseup = function (){//document,而不是用div，防止鼠标移动太快移出div，没有监听到
        div.onmousemove = null;
    }
}
//不用document,或者用div.setCapture()  将页面上的所有事件捕获到div上；div.releaseCapture() 释放
//改造，将拖拽封装一个函数drag(elem),用addEventListener


//八、事件分类
//8.1 鼠标事件
//click、mousedown、mousemove、mouseup、contextmenu、mouseover、mouseout、mouseenter、mouseleave
//click = mousedown + mouseup
document.onclick = function(){
    console.log("click");
}
document.onmousedown = function(){
    console.log("mousedown");
}
document.onmouseup = function(){
    console.log("mouseup");
} //mousedown mouseup click

{/* <div style="width: 100p;height: 100px;background-color: pink;position:absolute;left: 0;top: 0;"></div> */}
var div = document.getElementsByTagName('div')[0];
div.onmouseover = function(){
    div.style.background = "yellow";
}//鼠标移进去  mouseenter
div.onmouseout = function(){
    div.style.background = "green";
}//鼠标移出   mouseleave

//用button:来区分鼠标的按键，0/1/2
document.onmousedown = function(e){
    console.log(e.button);
}
//DOM3标准规定：click事件只能监听左键，只能通过mousedown和mouseup来判断鼠标键

//如何解决mousedown和click的冲突 区分点击和拖拽
var firstTime = 0,
    lastName = 0,
    key = false;
document.onmousedown = function (){
    firstTime = new Date().getTime();
}
document.onmouseup = function (){
    lastTime = new Date().getTime();
    if(lastTime - firstTime > 300){
        key = true;
    }
}
document.onclick = function (){
    if(key){
        console.log('click')
        key = false;
    }
}


//8.2键盘事件
//keydown keyup keypress
//onkeypress = onkeydown + onkeyup
document.onkeypress = function(){
    console.log("onkeypress");
}
document.onkeydown = function(){
    console.log("onkeydown");
}
document.onkeyup = function(){
    console.log("onkeyup");
} //onkeydown onkeypress,如果不松开鼠标，不输出onkeyup
//keydown > keypress > keyup
//keydown和keypress的区别:
//keydown可以响应任意键盘按键，keypress只可以响应字符类键盘按键
//keypress返回ASCI码，可以转换成相应字符
document.onkeypress = function(e){
    console.log(e.charCode);
    console.log(String.fromCharCode(e.charCode));//转换成字母
}
document.onkeydown = function(e){
    console.log(e.charCode);
}


//8.3文本操作事件
//input、focus、blur、change
// input{
//     border: 1px solid #01f;
//  }
// <input type="text">
var input = document.getELementsBylagName('input')[1];
input.oninput = function (e){
    console.log(this.value);//文本每次变化都会调用
}
input.onchange = function (e){
    console.log(this.value);//聚焦和失焦时文本前后发生变化会调用
}
//focus 聚焦时触发；blur失焦时触发
{/* <input type="text" value="请输入用户名" style="color:#999" onfocus="if(this.value='请输入用户名'){this.value='';this.style.color='#424242'}"
onblur="if(this.value==''){this.value='请输入用户名';this.style.color='#999'}"> */}


//8.4 窗体操作事件（windos上的）
//scrool 滚动条滚动触发  load整个页面加载完后触发，比如可以将js代码写到元素上方
window.onscroll = function(){
    console.log(window.pageYOffset);
}

//作业：
// 1.完善轮播图，加按钮
// 2.提(qie)取密码框的密码
// 3.输入框功能完善
// 4.菜单栏
// 5.贪食蛇游戏
// 6.扫雷游戏