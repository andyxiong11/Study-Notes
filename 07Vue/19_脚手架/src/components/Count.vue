<template>
  <div>
    <!-- <h1>当前求和为：{{ sum }}</h1> -->

    <!-- 下面是从vuex取 -->
    <!-- <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h3>当前求和放大10倍为：{{ $store.state.sum*10 }}</h3>
    <h3>当前求和放大10倍为：{{ dahe }}</h3>
    <h3>当前求和放大10倍为：{{ $store.getters.bigSum }}</h3>
    <h3>当前求和放大10倍为：{{ $store.getters.bigSum }}</h3> -->

    <!-- 下面是利用计算属性 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ sum*10 }}</h3>
    <h3>当前求和放大10倍为：{{ dahe }}</h3>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
  import { mapState,mapGetters } from "vuex";
  export default {
    name: "Count",
    data(){
      return{
        n: 1, //用户选择的数字
        //sum: 0 //当前的和 放到..\store\index.js
      }
    },
    computed:{
      dahe(){
        return this.$store.state.sum*10
      },
      //自己写计算属性
      // sum(){
      //   return this.$store.state.sum
      // },
      // school(){
      //   return this.$store.state.school
      // },
      // subject(){
      //   return this.$store.state.subject
      // },

      //借助mapState生成计算属性，从state中读取数据。（对象写法）
      //...mapState将mapState对象中的key和value放到computed对象
      // ...mapState({'sum':'sum','school':'school','subject':'subject'}),

      //借助mapState生成计算属性，从state中读取数据。（数组写法，前提是函数名与数据名一致）
      ...mapState(['sum','school','subject']),

      //自己写计算属性
      bigSum(){
        return this.$store.getters.bigSum
      },

      //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
      // ...mapGetters({'bigSum':'bigSum'}),

      //借助mapGetters生成计算属性，从getters中读取数据。（数组写法，前提是函数名与数据名一致）
      ...mapGetters(['bigSum']),

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
    },
    mounted() {
      // console.log('this',this);
      // const x = mapState({'sum':'sum','school':'school','subject':'subject'})
      // console.log(x);
    },
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>