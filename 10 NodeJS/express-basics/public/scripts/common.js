// console.log('0');

// 以下用于演示 CSR 客户端渲染
$.ajax({
  url:'/api/list',
  success(result){
    // console.log(result);
    let html = '<ul>'
    $.each(result.data,(index,value)=>{
      html += '<li>' + value + '</li>'
    })
    html += '</ul>' 
    $('#list').html(html)//jquery的html方法，将html挂载到页面
  }
})