//JSQN是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别：对象就是本地用的，json是用来传输的)
var json = {//为了区分对象和json，json属性名必须加引号
    "name" : 'deng',
    "age" : 123
}
//前后端传输数据时，会变成字符串
//JSON.parse();string->json
//json{"name" : 'deng',"age" : 123}
//JSON.stringify();json->string
//"{"name" : 'deng',"age" : 123}"


//domTree（深度优先） + cssTree = randerTree
// reflow重排：dom节点的删除，添加；dom节点的宽高变化，位置变化；display none>block；offsetWidth；offsetLeft
// repaint 重绘



//异步加载JS
// js加载的缺点：加载工具方法没必要阻塞文档，过得s加载会影响页面效率，一旦网速不好，那么整个网站将等待js加载而不进行后续渲染等工作。
// 有些工具方法需要按需加载，用到再加载，不用不加载。

// 1.defer异步加载，但要等到dom文档全部解析完才会被执行。只有IE能用，也可以将代码写到内部。
{/* <script type="text/javascript" src = "tool.js" defer = "defer"></script>//异步加载
<script type="text/javascript" defer = "defer">var a =123;</script>//异步加载 */}
// 2.async异步加载，加载完就执行，async.只能加载外部脚本，不能把js写在script标签里。
{/* <script type="text/javascript" src = "tool.js" async = "async"></script>//异步加载 */}
// 1.2执行时也不阻塞页面
// 3.创建script,插入到DOM中，加载完毕后callBack,
var script = document.createElement('script');
script.type = "text/javascript";
script.src = "tools.js";
document.head.appendchild(script);//如果不插入到dom，只有预加载不执行
//test();//tools.js中的方法，会报错，因为js文件还没有下载完，但是已经执行到test()了
script.onload = function(){//onload不兼容IE
    test;//当tools.js下载完后才执行
}
//IE中的
script.onreadystatechange = function(){//当状态码变化时触发
    if(script.readyState =="complete" || script.readyState == "Loaded"){//readyState状态码 loaded加载中
        test();
    }
}
//兼容方法
function loadScript(url,callback){
    var script = document.createElement('script');
    script.type = "text/javascript";
    // script.src = "tools.js";
    //script.src = url;
    if(script.readyState){
        script.onreadystatechange = function(){//当状态码变化时触发
            if(script.readyState =="complete" || script.readyState == "Loaded"){//readyState状态码 loaded加载中
                // test();
                callback();
            }
        }
    }else{
        script.onload = function(){//onload不兼容IE
            //test;//当tools.js下载完后才执行
            callback();
        }
    }
    script.src = url;//先把事件绑定，再加载文件
    document.head.appendchild(script);//如果不插入到dom，只有预加载不执行
}

//loadScript('tools.js',test);//会报错，因为调用loadScript执行时，并没有下载tool.js文件，传入test时 未定义
loadScript('tools.js',function(){
    test();//匿名函数传入时，不会执行函数体的内容；或者将函数名加上引号变成字符串，eval(callback);或者将函数封装成对象的形式，tools[test]();
});