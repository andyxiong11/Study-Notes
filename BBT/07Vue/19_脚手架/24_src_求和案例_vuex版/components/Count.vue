<template>
  <div>
    <!-- <h1>当前求和为：{{ sum }}</h1> -->
    <h1>当前求和为：{{ $store.state.sum }}</h1>
      <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Count",
    data(){
      return{
        n: 1, //用户选择的数字
        //sum: 0 //当前的和 放到..\store\index.js
      }
    },
    methods:{
      increment(){
        // this.sum += this.n
        //this.$store.dispatch('jia',this.n)
        this.$store.commit('JIA',this.n)//跳过dispatch，之直接通过commit调用mutations
      },
      decrement(){
        // this.sum -= this.n
        this.$store.dispatch('jian',this.n)
        this.$store.commit('JIAN',this.n)
      },
      incrementOdd(){
        // if(this.sum % 2){
        //   this.sum += this.n
        // }
        this.$store.dispatch('jianOdd',this.n)
      },
      incrementWait(){
        // setTimeout(()=>{
        //   // this.sum += this.n
        // },500)
        this.$store.dispatch('jianWait',this.n)
      }
    }
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>