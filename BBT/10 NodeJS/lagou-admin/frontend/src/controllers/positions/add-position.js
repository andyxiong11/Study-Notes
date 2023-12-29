// 职位添加 从list-position抽离,add-users复制
import page from '../../databus/page.js'
import positionAddTpl from '../../views/positions-add.art'

import {positionsAdd} from '../../models/positions.js'

// 职位添加
export const addPosition = ()=>{
  $('#positions-list-box').after(positionAddTpl)//after渲染到positions-list-box样式元素之后

  const _save = async () => {
    // 提交表单
    /* const data = $('#position-form').serialize()//serialize获取表单提交的数据
    let result = await positionsAdd(data) //ajax请求 
    if(result.ret){//请求成功
      page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1
      $('body').trigger('addPosition')//trigger 触发addPosition事件
    } 因需要使用jquery.form传输图片，改造下面*/
    try {
      let result = await positionsAdd()
      if(result.ret){//请求成功
        page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1
        $('body').trigger('addPosition')//trigger 触发addPosition事件
      }
      // 关闭注册弹窗
      $('#positions-close').click()//关闭
    } catch (err) {
      console.log(err);
    }
  }

  // 点击保存，提交表单
  $('#positions-save').off('click').on('click',_save)
}