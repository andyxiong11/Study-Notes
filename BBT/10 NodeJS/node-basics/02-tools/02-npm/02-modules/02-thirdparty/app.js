//node app.js 运行
// 演示npm第三方模块
const axios = require('axios')

axios.get('http://m.maoyan.com/ajax/moreclassicList?sortId=1&showType=3&limit=10&offset=30&optimus_uuid=A5518FFOAFEC11EAAB158D7AB0D05BBBD74C9789D9F649898982E6542C7DD479&optimus_risk_level=71&optimus_code=10')
  .then(result => {
    console.log(result.data);
  })
  .catch((err)=>{

  })