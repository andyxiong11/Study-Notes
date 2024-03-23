vue3 报错：找不到模块‘xxx.vue’或其相应的类型声明

解决方式：

在项目根目录新建一个 xx.d.ts

```ts
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
```