<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showX">点我输出x</button>
    </div>
</template>
<script>
    export default {
        name: 'MySchool',//需要使用大驼峰，语法检查报错
        data(){
            return {
                name: '光谷',
                address: '武汉'
            }
        },
        methods:{
            showX(){
                console.log(this.x);
            }
        }
    }

</script>
<style>
    .demo{
        background-color: orange;
    }
</style>