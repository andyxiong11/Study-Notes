const name = {
  surname:"zhang",
  sayName(){
    console.log(this.surname);
  }
}

const age = {
  age:100
}

//module.exports = name //module.exports在一个文件只能暴露一个

/* module.exports = {
  name,
  age
} */
// exports 本质是 const exports = module.exports
exports.name = name
exports.age = age