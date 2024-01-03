// 职位修改 从list-position抽离,add-users复制
import page from '../../databus/page.js'
import positionUpdateTpl from '../../views/positions-update.art'
import positionUpdateForm from '../../views/positions-update-form.art'

import http from '../../untils/http.js'

import {positionsUpdate} from '../../models/positions.js'

// 职位修改
export const updatePosition = async (id)=>{
  /* let { result } = await http({//http返回一个promise
    url: '/api/positions/listone',
    type: 'post',
    dataType: 'json',
    data: {
      id
    }
  })
  // console.log(result);

  $('#positions-list-box').after(positionUpdateTpl({
    data:{
      ...result
    }
  }))//after渲染到positions-list-box样式元素之后 */
  // 上面抽离到fillPositionUpdateTpl方法，因为弹窗没有渲染第一次点击编辑无法打开
  $('#positions-list-box').after(positionUpdateTpl())//after渲染到positions-list-box样式元素之后 

  const _save = async () => {
    // 提交表单
    try {
      let result = await positionsUpdate()
      if(result.ret){//请求成功
        console.log(1);
        page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1
        $('body').trigger('addPosition')//trigger 触发addPosition事件
      }
      // 关闭注册弹窗
      $('#positions-close-update').click()//关闭
    } catch (err) {
      console.log(err);
    }
  }

  // 点击保存，提交表单
  $('#positions-save-update').off('click').on('click',_save)
}

// 渲染弹窗
export const fillPositionUpdateTpl = async (id) => {
  let { result } = await http({//http返回一个promise
    url: '/api/positions/listone',
    type: 'post',
    dataType: 'json',
    data: {
      id
    }
  })
  // console.log(result);

  // 渲染弹窗中的表单，并加载数据
  $('#position-form-update').html(positionUpdateForm({
    data:{
      ...result
    }
  }))
}