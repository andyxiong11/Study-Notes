(function(){"use strict";var t={931:function(t,e,n){var o=n(144),i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试一下go")])])])},l=[],a={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(3)}}},u=a,c=n(1001),v=(0,c.Z)(u,s,l,!1,null,null,null),p=v.exports,f={name:"App",components:{Banner:p}},h=f,d=(0,c.Z)(h,i,r,!1,null,null,null),m=d.exports,_=n(8345),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeDestroy(){},mounted(){},beforeRouteEnter(t,e,n){console.log("App---beforeRouteEnter",t,e),t.meta.isAuth?"guanggu"===localStorage.getItem("school")?n():alert("学校名不对，无权限查看"):n()},beforeRouteLeave(t,e,n){console.log("App---beforeRouteLeave",t,e),n()}},y=w,k=(0,c.Z)(y,g,b,!1,null,null,null),x=k.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是Home的内容")]),e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)},Z=[],A={name:"Home",beforeDestroy(){},mounted(){}},O=A,P=(0,c.Z)(O,C,Z,!1,null,null,null),j=P.exports,$=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习")]),t._m(0),t._m(1),t._m(2)])},q=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],D={name:"News",data(){return{opacity:1}},activated(){console.log("News组件被激活了"),this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},N=D,R=(0,c.Z)(N,$,q,!1,null,null,null),S=R.exports,E=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"detail",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),t._v("   "),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},L=[],B=(n(7658),{name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"detail",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"detail",query:{id:t.id,title:t.title}})},beforeDestroy(){console.log("Message组件即将被销毁")}}}),H=B,I=(0,c.Z)(H,E,L,!1,null,null,null),M=I.exports,T=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},F=[],V={name:"Detail",props:["id","title"],mounted(){console.log(this.$route)}},z=V,G=(0,c.Z)(z,T,F,!1,null,null,null),J=G.exports;const K=new _.ZP({mode:"history",routes:[{name:"about",path:"/about",component:x,meta:{isAuth:!0,title:"关于"}},{name:"home",path:"/home",component:j,meta:{title:"主页"},children:[{name:"news",path:"news",component:S,meta:{isAuth:!0,title:"新闻"}},{name:"message",path:"message",component:M,meta:{isAuth:!0,title:"消息"},children:[{name:"detail",path:"detail/:id/:title",component:J,meta:{isAuth:!0,title:"详情"},props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});K.afterEach(((t,e)=>{console.log("后置路由守卫",t,e),document.title=t.meta.title||"光谷系统"}));var Q=K;o.ZP.config.productionTip=!1,o.ZP.use(_.ZP),new o.ZP({el:"#app",render:t=>t(m),router:Q})}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var l=!0,a=0;a<o.length;a++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(l=!1,r<s&&(s=r));if(l){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],l=o[1],a=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var c=a(n)}for(e&&e(o);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(931)}));o=n.O(o)})();
//# sourceMappingURL=index.3bf681d0.js.map