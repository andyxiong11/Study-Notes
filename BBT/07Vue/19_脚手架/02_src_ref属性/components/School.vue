<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      name: "光谷",
      address: "武汉"
    }
  }
}
</script>

<style>
  .school {
    background-color: gray;
  }
</style>