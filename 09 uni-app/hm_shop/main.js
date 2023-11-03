import App from './App'
import {myRequest} from 'util/api.js'

Vue.prototype.$myRequest = myRequest //挂载到原型上

//过滤器
//TODO封装时间转换函数
Vue.filter('formatDate',(date) => {
		console.log(date);
		const nDate = new Date(date)
		console.log(nDate);
		const year = nDate.getFullYear()
		const month = nDate.getMonth().toString().padStart(2,0)//padStart字符串补全，如果小于2位，加一个0
		const day = nDate.getDate().toString().padStart(2,0)
		return year+'-'+month+'-'+day
})

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif