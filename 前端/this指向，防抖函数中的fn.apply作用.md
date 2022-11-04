> 引用自[https://blog.csdn.net/weixin_44494811/article/details/103486637](https://blog.csdn.net/weixin_44494811/article/details/103486637)

1.介绍：首先我们要了解apply()的基本知识，apply（）和call（）都是每个函数或对象都拥有的非继承的方法。
2.作用：都是用来改变this的指向的
3.下面介绍带参数和不带参数的常见的应用
首先想很好理解和应用apply,其根本是对于this的理解。
this的三种指向：1.指向this所在函数的直接调用者，2.new的时候，指向new出来的对象，3.事件中指向当前的出发对象
总结：this会指向某个对象
为什么要用this？因为this的指向不是单一的，可以改变，可以代替将来的调用者，对于一个固定的函数，方便将来不同实例调用有不同结果，如果没有this，将来谁调用结果都是一样，达不到需求。
先看看别人写的关于apply的理解，看完回来再看我这里，会收益匪浅
[菜鸟教程](https://www.runoob.com/w3cnote/js-call-apply-bind.html)
[Js apply方法详解](https://www.cnblogs.com/chenhuichao/p/8493095.html)
```javascript
function Parent(name,age){
this.name=name
this.age=age
console.log(this)
console.log(this.name,this.age)
}
function Children(name,age,height){
console.log(this,arguments)
// Parent.apply(this,[name,age,height])
// Parent(name,age)
this.height=height
}
let lisi=new Children("李四",12,170)
console.log(lisi.name,lisi.age,lisi.height)
```
![](https://cdn.nlark.com/yuque/0/2021/png/1120372/1618410073746-6a248ab4-3d91-4afe-b604-354591b1a2ac.png#height=46&id=hqNdG&originHeight=46&originWidth=611&originalType=binary&size=0&status=done&style=none&width=611)
上面的代码和输出，可以看到，children里面的this就是指children对象，argument就是传进来的参数。因为children中没有this.name=name和this.age=age，所以输出lisi.name和lisi.age都是undefined.
在es5中我们想要继承parent中的属性，在这里换句话说，我们想要用parent中的this.name=name和this.age=age中的两行代码,一般我们首先想到的是，直接在children里面调用parent,我们就来试试可行性
```javascript
function Parent(name,age){
this.name=name
this.age=age
console.log(this)
console.log(this.name,this.age)
}
function Children(name,age,height){
// console.log(this,arguments)
// Parent.apply(this,[name,age,height])
Parent(name,age)
this.height=height
}
let lisi=new Children("李四",12,170)
console.log(lisi.name,lisi.age,lisi.height)
```
![](https://cdn.nlark.com/yuque/0/2021/png/1120372/1618410107910-e20e0c1c-d3be-468c-8567-9e56c3066c28.png#height=62&id=hWh6M&originHeight=62&originWidth=534&originalType=binary&size=0&status=done&style=none&width=534)
结果输出，parent里面的this指向了window，虽然在children里面调用parent能接到两个参数name和age,在parent里面确实输出了李四和12，但是实例里面却是undefined,因为他仅存在parent中。那我们如何使用parent中的那两行代码呢或者说继承那两个属性。同样是调用parent如何才能使parent中的this指向children对象。明显是要改变this的指向，所以我们可以想到apply，call，bind等，这里用apply，其他的其实也是可以的。
```javascript
function Parent(name,age){
this.name=name
this.age=age
console.log(this)
console.log(this.name,this.age)
}
function Children(name,age,height){
// console.log(this,arguments)
Parent.apply(this,[name,age,height])
// Parent(name,age)
this.height=height
}
let lisi=new Children("李四",12,170)
console.log(lisi.name,lisi.age,lisi.height)
```
![](https://cdn.nlark.com/yuque/0/2021/png/1120372/1618410127206-d1b553fb-712f-4fd4-9f50-5d271b550a44.png#height=64&id=Lf0UL&originHeight=64&originWidth=269&originalType=binary&size=0&status=done&style=none&width=269)
现在看输出结果，实例对象lisi中有了‘李四’和12了，parent里面的this输出结果是children对象.这就达到我们想要的要求了。在children里面执行了 Parent.apply(this,[name,age,height])， Parent.apply(this,arguments)和 Parent.apply(this,[name,age,height])是一样的，区别在于一个可以随children参数如何变化自动接受参数，后者手动设置参数，相当于执行了this.name=name,this.age=age这两行代码了。并且this指向的是children。
在节流防抖函数中，我们就会看到fun.apply(this,arguments)这样的一句话
```javascript
 <div>
            账户：<input type="text" id="myinput"><span id="tip"></span>
    </div>
    <script>
        function debounce(fun,wait=300){
            let timeout=null;
            return function(){
                if(timeout){
                    clearTimeout(timeout)
                }
                timeout=setTimeout(()=>{
                    fun.apply(this,arguments)
                    // fun()
                },wait)
            }
        }
        let span=document.getElementById('tip')
        function testUname(){
            span.innerHTML="用户名合法"
        }
        let input=document.getElementById('myinput')
        addEventListener('input',debounce(testUname,1000))
    </script>

```
这个是防抖函数，有了以上的经验，我们可以知道这里 fun.apply(this,arguments)的用意，无非就是想fun中的this指向debounce中return的这个函数中的this，return回来的这个函数中的this也就是指向直接调用return 函数那个对象。这里都是window来直接调用return回来的那个函数。所以这里的this其实没啥用，之所以这么写是因为arguments就是传入的参数数组,而且个数可以不确定的传回给fn。我们正常有参数的函数时fn(‘参数1’,‘参数2’,…)//这里的省略号不是正规语法，只是表示不确定个。这时候，如果我们项使fn内的this指向某个对象obj。那么我们的写法是fn.apply(obj,[‘参数1’,‘参数2’,…])这里的省略号不是正规语法，只是表示不确定个数。看一下下面例子：
```javascript
// var name='zhangsan'//let不上升到window
window.name='zhangsan'
function test2(num){
console.log(this.name)
console.log(num)
}
let obj={
name:'lisi'
}
test2.apply(obj,[4])//lisi，4
```
如果我们使test2具有防抖，并且给他传入1一个参数。我们这样调用debounce(test2)(6)//zhangsan 6
正是因为我们不确定像test2这种将来使他具有防抖的函数有多少个参数。我们又知道arguments可以接受不确定的参数。但是我们又将这不确定的参数传给fn，能这样写吗,fn(argument),显然不行。因为fn接受的是fn(‘参数1’,‘参数2’,…)这种形式，而不是fn([‘参数1’,‘参数2’,…])。那怎么办，现在我们想到apply方法恰好就是接受这样的样式的。所以使用fn.apply(this,arguments)就顺理成章了。
所以下面代码尝试多个参数；
```javascript
function debounce(fn){
let timeout=null
return function (){
fn.apply(this, arguments);
}
}
// var name='zhangsan'//let不上升到window
window.name='zhangsan'
function test2(num1,num2,num3){
console.log(this.name)
console.log(num1,num2,num3)
}
let obj={
name:'lisi'
}
test2.apply(obj,[4])//lisi，4
debounce(test2)(6,2,4)//zhangsan   6  2  4
```
到这里，我们整理一下，问题就是两个，①不知道以后需要防抖的函数到底有多少个参数，用arguments来接受。②如何将arguments传回给需要防抖的函数。apply是一个恰到好处的应用。有这么一个思路了。我们可以设想用es6的…也可以方便的把参数传给fn。代码如下：
```javascript
function debounce(fn){
let timeout=null
return function (){
// fn.apply(this, arguments);
fn(...arguments)
}
}
// var name='zhangsan'//let不上升到window
window.name='zhangsan'
function test2(num1,num2,num3){
console.log(this.name)
console.log(num1,num2,num3)
}
let obj={
name:'lisi'
}
test2.apply(obj,[4])//lisi，4
debounce(test2)(6,2,4)//zhangsan   6  2  4
```
结果是一样的，所以证明了我们的想法。所以以后我们完全可以用下面那种更短小精悍容易理解的写法。
————————————————
版权声明：本文为CSDN博主「前端小懒虫」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：[https://blog.csdn.net/weixin_44494811/article/details/103486637](https://blog.csdn.net/weixin_44494811/article/details/103486637)
