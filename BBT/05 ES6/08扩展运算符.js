var arr = [1,2,3];
var arr1 = [4,5,6];
var newArr = arr.concat(arr1);//原数组不改变，需用新数组接收
console.log(newArr);
var newSlice = arr.slice(1,2);//原数组不改变，需用新数组接收
arr.splice(1,2);//原数组改变
console.log(arr);
//如果函数没有副作用的编程，称为函数式编程。高阶函数、函数柯里化
//www.lodashjs.com

//数组的扩展运算符  合并数组
var newArr = [...arr,...arr1];//arr.concat(arr1);

//对象的扩展运算符 合并对象
var userInfo = {
    name : 'andy',
    age : 12
}
var newInfo = {
    address : '湖北省武汉市',
    age : 23
}
for (let attr in newInfo){//ES5写法
    userInfo[attr] = newInfo[attr];
}
//ES6写法 属性存在则覆盖
var infos = {...userInfo,...newInfo};
console.log(infos);//{ name: 'andy', age: 23, address: '湖北省武汉市' }

//ES6的另外一种写法，把源头后面的所有属性赋值给target
var infos = Object.assign({},userInfo,newInfo,{'work':['pm','cm']});
console.log(infos);//{ name: 'andy', age: 23, address: '湖北省武汉市', work: [ 'pm', 'cm' ] }