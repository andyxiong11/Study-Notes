import indexTpl from './views/index.art'
import siginTpl from './views/signin.art'

// console.log(indexTpl);

const html = siginTpl({})

// console.log(html);

$('#root').html(html) //TODO此处始终报错未定义$，如果将index.html中的js引入放到head中也不显示页面