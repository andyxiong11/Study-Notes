function getuserInfo(name, age) {
    console.log('getuserInfo', name, age);
}
let userInfo = {
    name: 'andy',
    age: 23
}
//getuserInfo(userInfo.name, userInfo.age);
//对象解构
let { name, age } = userInfo;
getuserInfo(name, age);


//函数的参数对象解构赋值
function getuserInfo({ name, age }) {
    console.log('getuserInfo', name, age);
}
getuserInfo(userInfo);

//应用 回调函数可以少取几个参数

//函数参数的默认值
function getuserInfo({ name = 'fault', age = 12 } = {}) {
    console.log('getuserInfo', name, age);
}
getuserInfo();