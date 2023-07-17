//1.读写元素css属性
dom.style.prop
//可读写行间样式，没有兼容性问题，碰到float这样的保留字属性，前面应加css
div.cssFloat;
div.style;//返回div所有可用的属性，值为空；类数组
div.style['width'];//可读取
//写入的值必须是字符串格式
div.style.width = "200px";
//复合属性必须拆解，组合单词变成小驼峰式写法
div.style.backgroundColor = "oragin";
div.style.border="2px solid black";

//2.查询计算样式
window.getComputedStyle(ele,null);
//计算样式只读
//返回的计算样式的值都是绝对值（px、rgb()），没有相对单位（em）
//IE8及IE8以下不兼容
window.getComputedStyle(div,null);//返回div所有可用的属性，值为默认值；类数组

//<style type = "text/css">
//    div{
//        width : 100px;!import
//    }
//</style>
//<body>
//    <div style = "width : 200px"></div>
//</body>
window.getComputedStyle(div,null).width;//100px 用于显示最终样式
div.style.width;//200px

//null取伪元素
window.getComputedStyle(div,"after").width;//  div::after{width:100px}

//IE独有计算样式
//ele.currentStyle
//计算样式只读
//返回的计算样式的值不是经过转换的绝对值

//封装兼容性方法getStyle(elem,prop);
function getstyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedstyle(elem,null)[prop];
    }else{
        return elem.currentStyle[prop];
    }
}


//作业 移动小方块
<div style="width:100px;height:100px;background-color:red;position:absolute;left:0px;top:opx;"></div>
//不写top和left时，默认是auto，无法取值
function getstyle(elem,prop){
    if(window.getComputedstyle){
        return window.getComputedstyle(elem,null)[prop];
        }else{
            return elem.currentStyle[prop];
        }
}
var div = document.getElementsByTagName('div')[0];
var timer = setInterval(function() {
    div.style.left = parseInt(getstyle(div,'left')) + 1 + 'px';//每次获取方块当前的位置，加移动的距离
    //因为getstyle(div,'left')值为0px

    if(parseInt(div.style.left)>500){
        clearInterval(timer);
    }
},10);