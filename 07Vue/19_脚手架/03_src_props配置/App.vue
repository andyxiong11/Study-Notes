<template>
  <div>
    <!-- 人为传数据  -->
    <!-- 加上冒号，引号内的内容为表达式 -->
    <Student name="张三" sex="女" :age="18"/>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: 'App',
  components:{Student}
}
</script>