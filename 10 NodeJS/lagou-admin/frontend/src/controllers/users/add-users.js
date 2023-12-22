// 从index.js抽离
import page from '../../databus/page.js'
import usersAddTpl from '../../views/users-add.art'

import {usersAdd as usersAddModel} from '../../models/users-add.js'

// 注册表单提交事件（添加用户）
export const addUser = ()=>{
  const html = usersAddTpl
  $('#users-list-box').after(html)//将添加用户模板加在用户模板后面

  const _save = async () => {
    // console.log('0');
    // 提交表单
    const data = $('#users-form').serialize()
    // console.log(data);
    /* ajax请求移出到src\models\uesers-add.js
      $.ajax({
      url:'/api/users',//后端接口地址
      type:'post',
      headers:{
        'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
      },
      data,
      success(res){
        // console.log(res);      
        page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1

        // _loadData()//此处不手动调用，调用消息订阅更新页面
        $('body').trigger('addUser')//trigger 触发addUser事件
      }
    }) */
    let result = await usersAddModel(data)//ajax请求
    if(result.ret){//请求成功
      page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1
      $('body').trigger('addUser')//trigger 触发addUser事件
    }

    // 关闭注册弹窗
    const $btnClose = $('#users-close')
    $btnClose.click()
  }

  // 点击保存，提交表单
  $('#users-save').on('click',_save)//从index.js移入
}