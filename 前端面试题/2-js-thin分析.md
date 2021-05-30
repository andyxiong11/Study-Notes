## js有关this的大厂面试题

## 在函数中直接使用

```js
    function get(content){
        console.log(content)
    }

    get('你好')

    get.call(window,'你好')

```      

## 函数作为对象的方法被调用（谁调用我我就指向谁）

```js
    var person = {
        name: '张三',
        run: function (time) {
            console.log('${this.name}在跑步最多${time}min就不行了')
        }
    }

    person.run(30)

    person.run.call(person, 30)

```

##
```js


