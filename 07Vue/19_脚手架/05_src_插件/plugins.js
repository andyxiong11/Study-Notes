export default {
  install(Vue,x,y,z){
    console.log("插件被使用",Vue);//vue的构造函数

    //文件 13过滤器 全局过滤器
    Vue.filter('mySlice',function(value){
      return value.slice(0,4)
    }),

    //文件 15_自定义指令 定义全局指令
    Vue.directive('fbind', {
      //指令与元素成功绑定时调用
      bind(element,binding){
          element.value = binding.value;
      },
      //指令所在元素被插入页面时
      inserted(element){
          element.focus();
      },
      //指令所在的模板被重新解析时
      update(element,binding){
          element.value = binding.value;
      }
    }),

    //定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      },
    })

    //给vue原型上加方法（vm和vc都能用了）
    Vue.prototype.hello = () => {
      alert('你好啊');
    } 
    console.log(x,y,z);
  }
}