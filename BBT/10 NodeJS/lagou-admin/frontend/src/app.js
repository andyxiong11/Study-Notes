import indexTpl from './views/index.art'

// console.log(indexTpl);

const html = indexTpl({})

// console.log(html);

$('#root').html(html)