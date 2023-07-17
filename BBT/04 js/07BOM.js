//1.查看滚动条的滚动距离
//window.pageXOffset/pageYOffset  IE8及IE8以下不兼容
//document.body/documentElement.scrollLeft/scrollTop  IE8及IE8以下兼容;兼容性比较混乱，用时取两个值相加，因为不可能存在两个同时有值
//document.body.scrollLeft+document.documentElement.scrollLeft

//封装兼容性方法，求滚动轮滚动离getScrollOffset()
function getScrollOffset(){
    if(window.pageXOffset){
        return {
            x : window.pageXOffset,
            y : window.pageYOffset
        }
    }else{
        return {
            x : document.body.scrollLeft+document.documentElement.scrollLeft,
            y : document.body.scrollTop+document.documentElement.scrollTop
        }
    }
}

//2.查看可视区窗口的尺寸
//window.innerWidth/innerHeight  IE8及IE8以下不兼容；缩放页面会与有影响
//document.documentElement.clientWidth/clientHeight  标准模式下，任意浏览器都兼容
//document.body.clientWidth/clientHeight  适用于怪异模式下的浏览器；html头部删除“<!DOCTYPE html>”即怪异模式，向下兼容ie7 ie6的方法

//封装兼容性方法，返回浏览器视口尺寸getViewportOffset()
function getViewportOffset(){
    if(window.innerWidth){
        return {
            x : window.innerWidth,
            y : window.innerHeight
        }
    }else{
        if(document.compatMode ==="BackCompat"){
            return {
                W : document.body.clientwidth,
                h : document.body.clientHeight
            }
        }else{
            return {
                w : document.documentElement.clientwidth,
                h : document.documentElement.clientHeight
            }
        }
    }
}

//3.查看元素的几何尺寸
//domEle.getBoundingClientRect();
//兼容性很好
//该方法返回一个对象，对象里面有left,top,right,bottom等属性。
//left和top代表该元素左上角的X和Y坐标，right和bottom代表元素右下角的X和Y坐标
//heighti和width属性老版本IE并未实现
//返回的结果并不是“实时的”

//<div style = "width:100px;height:100px;posititon:absolute;left:100px;top:100px"></div>
var div = document.getElementsByTagName('div')[0];
var demo = div.getBoundingClientRect();
// {bottom: 200  top: 100 
// height: 100 width: 100
// left: 100  right: 200 
// x: 100 y: 100
div.style.width = "200px";//demo不会变

//4.查看元素的尺寸
//dom.offsetWidth,dom.offsetHeight
//div.offsetWidth == div.getBoundingClientRect()中的width

//5.查看元素的位置
//dom.offsetleft,dom.offsetTop
//对于无定位父级的元素，返回相对文档的坐标（注意border和body的8px。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。

//<div style="width:300px;height:300px;border:2px solid black;position:relative;top:100px;left:100px;">
//    <div class="demo"style="width:100px;height:100px;background-color:red;position:absolute;left:100px;top:100px;">
//    </div>
//</div>
var div = getElementsByClassName('demo')[0];
div.offsetLeft;//100px 相对于有定位的父级元素div的距离;使用margin-top和top效果一样

//dam.offsetParent
//返回最近的有定位的父级，如无，返回body,body.offsetParent返回null

//求元素相对于文档的坐标getElementPosition

//6.让滚动条滚动
//window上有三个方法scroll(),scrollTo()  scrollBy();
window.scroll(x,y);//让页面滚动到指定x,y距离
window.scrollTo(x,y);//让页面滚动到指定x,y距离
window.scrollBy(x,y);//让页面滚动指定x,y距离
//scrollBy()会在之前的数据基础之上做累加。
//应用：展开更多，点击时记录“滚动条的滚动距离”，点击收起时让页面滚动到指定距离

//利用scrollBy()快速阅读的功能
//<div>...</div>
//<div style="width:100px;height:100px;background-color:orange;color:#fff;font-size:40px;font-weight:bold;text-align:center;line-height:100px;position:fixed;bottom:200px;right:50px;border-radius:50%;opacity:0.5;">start</div>
//<div style="width:100px;height:100px;background-color:#0f0;color:#fff;font-size:40px;font-weight:bold;text-align:center;line-height:100px;position:fixed;bottom:50px;right:50px;border-radius:50%;opacity:0.5;">start</div>
var start = document.getElementsByTagName('div')[1];
var stop = document.getElementsByTagName('div')[2];
var timer = 0;
var key = true;//防止重复点击start，新增多个定时器，只有在点击stop后才生效
start.onclick = function (){
  if(key){
    timer = setInterval(function (){
      window.scrollBy(0,10);
    },50);
    key = false;
  }
}
stop.onclick = function(){
  clearInterval(timer);
  key = true;
}