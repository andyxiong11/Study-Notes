//form 03object.js 1120行
//返回传入值的类型
function type(target){
    var ret = typeof(target);
    var template = {
        "[object Array]" : "array",
        "[object Object]" : "object",
        "[object Number]" : "number-object",
        "[object Boolean]" : "boolean-object",
        "[object String]" : "string-object"
    }
    if(target === null){
        return 'null';
    }else if(ret == 'object'){
        var str = Object.prototype.toString.call(target);
        return template[str];
    }else{
        return ret;
    }
}

//form 03object.js 1148行
//数组去重
Array.prototype.unique = function(){
    var temp = {},
        newArr = [],
        len = this.length;
    for(var i = 0;i< len;i++){
        if(!temo[this[i]]){
            temp[this[i]] = 'a';
            arr.push[i];
        }
    }
    return newArr;
}
//form 04DOM.html  338行
//返回子元素节点
ELement.prototype.myChildren = function (){
    var child = this.childNodes,
        len = child.Length,
        arr = [];
    for(var i=0;i<len;i++){
        if(child[i].nodeType == 1){
            arr.push(child [i]);
        }
    }
    return arr;
}
//form 04DOM.html  431行
//1.封装函数insertAfter();功能类似insertBefore();
Element.prototype.insertAfter() = function(targetNode,afterNode){
    var beforeNode = afterNode.nextElementSibling;
    if(beforeNode == null){//当前元素是最后一个
        this.appendChild(targetNode);
    }else{
        this.insertBefore(targetNode,beforeNode);
    }
}
//form 07BOM.js 7行
//返回页面滚动条的移动距离
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
//form 07BOM.js 26行
//返回浏览器视口尺寸
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
//form 07BOM.js 83行
//求元素相对于文档的坐标getElementPosition



//form 08脚本化CSS.js 36行
//兼容性，返回元素CSS属性值
function getstyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedstyle(elem,null)[prop];
    }else{
        return elem.currentStyle[prop];
    }
}
//form 09事件.js 79行
//兼容性的绑定事件方法
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
//form 09事件.js 198行
// 兼容性 取消冒泡的函数
function stopBubble(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}
//form 09事件.js 225行
// 兼容性 阻止默认事件
function cancelHandler(event){
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
}
//form 10json.js 44行
//兼容性 js异步加载
function loadScript(url,callback){
    var script = document.createElement('script');
    script.type = "text/javascript";
    if(script.readyState){
        script.onreadystatechange = function(){
            if(script.readyState =="complete" || script.readyState == "Loaded"){
                callback();
            }
        }
    }else{
        script.onload = function(){
            callback();
        }
    }
    script.src = url;
    document.head.appendchild(script);
}

loadScript('tools.js',function(){
    test();//匿名函数传入时，不会执行函数体的内容；或者将函数名加上引号变成字符串，eval(callback);或者将函数封装成对象的形式，tools[test]();
});