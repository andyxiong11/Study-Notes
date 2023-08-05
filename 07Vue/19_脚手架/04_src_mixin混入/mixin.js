export const mixin = {//需要写一个对象，然后需要一个常量接收，最后需要暴露
  methods: {
    showName(){
      alert(this.name);
    }
  },
  //mixin中什么都可以写
  // mounted() {
  //   console.log("挂载完毕");
  // },
}
export const mixin2 = {
  data() {//School和Student组件的data中也有以下属性
    return {
      x: 100,
      y: 200
    }
  },
}