// 职位添加 从list-position抽离,add-users复制
import page from '../../databus/page.js'
import positionUpdateTpl from '../../views/positions-add.art'

import {positionsAdd} from '../../models/positions.js'

// 职位修改
export const updatePosition = ()=>{
  $('#positions-list-box').after(positionUpdateTpl)//after渲染到positions-list-box样式元素之后

  const _save = async () => {
    // 提交表单
    try {
      let result = await positionsAdd()
      /* if(result.ret){//请求成功
        console.log(1);
        page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1
        $('body').trigger('addPosition')//trigger 触发addPosition事件
      } */
      // 关闭注册弹窗
      $('#positions-close').click()//关闭
    } catch (err) {
      console.log(err);
    }
  }

  // 点击保存，提交表单
  $('#positions-save').off('click').on('click',_save)
}