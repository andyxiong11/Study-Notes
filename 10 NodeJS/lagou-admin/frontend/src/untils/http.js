const http = ({
  url,
  type='get',//缺省值
  dataType={},
  data={}
})  => {
  return new Promise((resolve)=>{
    $.ajax({
      url,
      type,
      dataType,
      type,
      data,
      headers:{
        'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端
      },
      success: function(res,textStatus,jqXHR){
        resolve( {
          res,
          textStatus,
          jqXHR
        })
      },
      error(err){
        PromiseRejectionEvent(err.message)
      }
    })
  })
}

