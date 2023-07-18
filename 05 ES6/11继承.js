class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`my name is ${this.name}`);
    }
}
//继承
class Male extends People {
    constructor(name, age, gender) {
        // this.name = name;
        // this.age = age;
        super(name,gae);//es6继承，在子类里面使用构造函数需要使用super。代表父类的构造函数People.constructor(name,gae)
        this.gender = gender;
    }
}
var m1 = new Male('andy', 12,'男性');