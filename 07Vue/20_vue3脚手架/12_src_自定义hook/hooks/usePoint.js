import {reactive,onMounted,onBeforeUnmount} from 'vue'

// function savePoint() {
export default function(){
  //实现鼠标“打点”相关的数据
  let point = reactive({
    x:0,
    y:0
  })

  //实现鼠标“打点”相关的方法
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX,event.pageY)
  }

  //实现鼠标“打点”相关的生命周期钩子
  onMounted(()=>{
    // window.addEventListener('click',(event)=>{
    //   point.x = event.pageX,
    //   point.y = event.pageY,
    //   console.log(event.pageX,event.pageY);
    // })
    //此处不能使用箭头函数，否则删除监听事件时找不到事件
    window.addEventListener('click',savePoint)
  })

  onBeforeUnmount(()=>{
    // window.removeEventListener('click')
    window.removeEventListener('click',savePoint)
  })

  return point
}