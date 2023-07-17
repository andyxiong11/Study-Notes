// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构(Destructuring)。
// 有数组解构赋值，对象解构赋值等。注意一下几点：
//     若解构不成功，变量的值就等于undefined;
//     解构赋值允许指定默认值：
//     ES6内部使用严格相等运算符(===)，判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined, 默认值才会生效：
//     默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。


//对象解构
var userInfo = {
    id: 1,
    name: 'andy',
    email: 'goegry@163.com',
    work: ['pm', 'test']
}
// var userEmail = userInfo.email;
// var userName = userInfo.name;
// console.log(userInfo);
// console.log(userEmail);
// console.log(userName);
let { id, name, email, work } = userInfo;//解构左侧与右侧结构要一致
console.log(name);//'andy'
console.log(email);//'goegry@163.com'
console.log(work);//['pm','test']
//对象部分解构
// let{email} = userInfo; 
// console.log(email);//'goegry@163.com'
//别名，防止冲突
let { email: MyEmail } = userInfo;
console.log(MyEmail);//'goegry@163.com'



//数组全部解构
let arr = [1, 2, 3];
let [a, b, c] = arr;//解构左侧与右侧结构要一致
console.log(a + b + c);//1+2+3
//对象部分解构
let [, , e] = arr;
console.log(e);//3
//复合解构
let arrs = [1, 2, 3, [4, 5, 6]];
let [j,k,l,m] = arrs;
// let [j,k,l,[m,n,o]] = arrs; //[1, 2, 3, [4, 5, 6]]
console.log(m);//[1, 2, 3]



//字符串解构
var str = 'abc';
// let [a,b,c] = str;