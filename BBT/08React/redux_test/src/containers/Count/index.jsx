//引入Count的UI组件
import CountUI from '../../components/Count'

//引入store，不能手动引入，需要通过App.js传入
// import store from '../../redux/store'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//使用connect()()创建并暴露一个Count的容器组件
// TODO connect()()不懂
/* const CountContailer = connect()(CountUI)

export default CountContailer */
export default connect()(CountUI)