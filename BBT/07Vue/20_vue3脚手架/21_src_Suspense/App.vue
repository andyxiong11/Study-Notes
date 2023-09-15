<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <!-- 应该展示的组件 -->
      <template v-slot:default>
        <Child/>
      </template>
      <!-- 组件没加载出来时展示的内容 -->
      <template v-slot:fallback>
          <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
    <Child/>
  </div>
</template>

<script>
  //静态引入
  //import Child from './components/Child.vue'

  //异步引入
  import {defineAsyncComponent} from 'vue'
  // const Child = defineAsyncComponent(()=>{
  //   return import('./components/Child.vue')
  // })
  //下面是简写
  const Child = defineAsyncComponent(()=>import('./components/Child.vue'))


  export default {
    name:'App',
    components:{Child},
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>