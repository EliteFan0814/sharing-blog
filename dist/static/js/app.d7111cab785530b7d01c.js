webpackJsonp([10],{AAyv:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("p+dL"),i="/auth/register",u="/auth/login",c="/auth/logout",l="/auth",d={register:function(t){var e=t.username,n=t.password;return Object(s.a)(i,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return Object(s.a)(u,"POST",{username:e,password:n})},logout:function(){return Object(s.a)(c)},getInfo:function(){return Object(s.a)(l)}},f=n("NYxO");window.auth=d;var p={data:function(){return{}},computed:o()({},Object(f.c)(["isLogin","user"])),methods:o()({},Object(f.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}}),created:function(){this.checkLogin()}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[r("h1",[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("iNrb"),alt:"logo"}})])],1),t._v(" "),r("div",{staticClass:"btns"},[r("router-link",{attrs:{to:"/login"}},[r("el-button",[t._v("立即登录")])],1),t._v(" "),r("router-link",{attrs:{to:"/register"}},[r("el-button",[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[r("h1",[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("iNrb"),alt:"logo"}})])],1),t._v(" "),r("router-link",{attrs:{to:"/create"}},[r("i",{staticClass:"edit el-icon-plus"})]),t._v(" "),r("div",{staticClass:"user"},[r("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}}),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销")])])])])]:t._e()],2)},staticRenderFns:[]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("与世界共享你的想法 · 范培超个人项目 · 基于 Vue")])])}]};var m={name:"App",components:{Header:n("VU/8")(p,h,!1,function(t){n("lvU3")},null,null).exports,Footer:n("VU/8")(null,g,!1,function(t){n("AAyv")},"data-v-2a77629e",null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var b=n("VU/8")(m,v,!1,function(t){n("ltEN")},null,null).exports,w=n("/ocq"),L=n("Xxa5"),_=n.n(L),k=n("exGp"),x=n.n(k),y={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return d.login({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,o=e.password;return x()(_.a.mark(function t(){var e;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.register({username:a,password:o});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return x()(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return x()(_.a.mark(function t(){var a;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,d.getInfo();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}};r.default.use(f.a);var A=new f.a.Store({modules:{auth:y,blog:{state:{},getters:{},mutations:{},actions:{}}}});window.store=A,r.default.use(w.a);var O=new w.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(5).then(n.bind(null,"OpX7"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"YE8u"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"bywM"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(7).then(n.bind(null,"YDhy"))}}]});O.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?A.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var P=O,U=n("zL8q"),E=n.n(U),M=(n("tvR6"),n("pFYg")),j=n.n(M);function q(t){var e=("object"===(void 0===t?"undefined":j()(t))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;case n<2592e6:r=Math.floor(n/864e5)+"天前";break;default:r=Math.floor(n/2592e6)+"月前"}return r}var N={install:function(t,e){t.prototype.friendlyDate=q}};r.default.use(E.a),r.default.use(N),r.default.config.productionTip=!1,new r.default({el:"#app",router:P,store:A,components:{App:b},template:"<App/>"})},iNrb:function(t,e,n){t.exports=n.p+"static/img/sharing.f26839b.png"},ltEN:function(t,e){},lvU3:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:t,method:e};"get"===e.toLowerCase()?o.params=n:o.data=n,s()(o).then(function(t){console.log(t.data),"ok"===t.data.status?r(t.data):(i.Message.error(t.data.msg),a(t.data))}).catch(function(t){i.Message.error("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="https://blog-server.hunger-valley.com",s.a.defaults.withCredentials=!0},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d7111cab785530b7d01c.js.map