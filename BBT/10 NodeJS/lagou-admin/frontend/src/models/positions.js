// 获取职位数据，复制src\models\users-list.js
import http from '../untils/http'

export const positionsList =  async() => {//因为http返回promise，所以需要使用await
  try {
    let { result } = await http({//http返回对象解构；：别名
      url:'/api/positions/list'
    })
    return result
  } catch (error) {
    console.log(error);
  }
}

// 添加职位，复制src\models\users-add.js
export const positionsAdd = async (data) => {//因为http返回promise，所以需要使用await
 /*  try {
    let { result:res } = await http({//http返回对象解构；：别名
      url:'/api/positions/add',
      type:'post',
      data
    })
    return res
  } catch (error) {
    console.log(error);
  }  因需要使用jquery.form传输图片，改造*/

  // 使用jquery.form插件传输表单图片,手动返回promise
  return new Promise((resolve,reject)=>{
    var options = {
      url: "/api/positions/add", //提交地址：默认是form的action,如果申明,则会覆盖
      type: "post",   //默认是form的method（get or post），如果申明，则会覆盖
      // beforeSubmit: beforeCheck, //提交前的回调函数
      success: (result)=>{
        resolve(result);
      },  //提交成功后的回调函数
      error: (err)=>{
        reject(err);
      },  //提交失败后的回调函数
      // target: "#output",  //把服务器返回的内容放入id为output的元素中
      dataType: "json", //html(默认), xml, script, json...接受服务端返回的类型
      // clearForm: true,  //成功提交后，是否清除所有表单元素的值
      resetForm: true,  //成功提交后，是否重置所有表单元素的值
      timeout: 30000     //限制请求的时间，当请求大于3分钟后，跳出请求
    };
    $('#position-form').ajaxSubmit(options)
  })
}