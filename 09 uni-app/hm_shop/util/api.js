// 封装请求方法
const BASE_URL = 'http://localhost:8082'
export const myRequest = (options)=>{
	return new Promise((reslove,reject)=>{//Promise 异步
		uni.request({
			url:BASE_URL+options.url,
			method:options.methods || 'GET',//请求方式
			data: options.data || {},//
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({//showToast消息提示框
						title:"获取数据失败"
					})
				}
				reslove(res)//将数据返回
			},
			fail: (err)=>{
				uni.showToast({//showToast消息提示框
					title:"请求接口失败",
				}),
				reject(err)//将错误信息返回
			}
		})
	})
}