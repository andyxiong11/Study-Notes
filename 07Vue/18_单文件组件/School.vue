<template>
    <!--组件的结构-->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showX">点我输出x</button>
    </div>
</template>
<script>
    //export 分别暴露
    //组件交互相关的代码（数据方法）
    const school = Vue.extend({
        name: 'School',
        data(){
            return {
                name: '尚硅谷',
                address: '武汉'
            }
        },
        methods:{
            showX(){
                console.log(this.x);
            }
        }
    })
    //export {school} 统一暴露
    export default school //默认暴露  必须要使用
    //以下为简写
    // export default Vue.extend({
        // name: 'School',
    //     data(){
    //         return {
    //             name: '尚硅谷',
    //             address: '武汉'
    //         }
    //     },
    //     methods:{
    //         showX(){
    //             console.log(this.x);//this指向vc（VueComponent的实例对象）,VueComponent的原型对象的隐式原型属性指向Vue的原型对象
    //         }
    //     }
    // })
    // export default {
        // name: 'School',
    //     data(){
    //         return {
    //             name: '尚硅谷',
    //             address: '武汉'
    //         }
    //     },
    //     methods:{
    //         showX(){
    //             console.log(this.x);//this指向vc（VueComponent的实例对象）,VueComponent的原型对象的隐式原型属性指向Vue的原型对象
    //         }
    //     }
    // }

</script>
<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>