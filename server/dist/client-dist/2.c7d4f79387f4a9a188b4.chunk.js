webpackJsonp([2],{"+q25":function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("WT6e"),e=function(){},o=u("bfOx"),i=u("Xjw4"),a=u("qYm3"),r=u("Pm2l"),s=function(){function n(n,l){this._apiService=n,this._activatedRoute=l,this.user=new r.a,this.followers=new Array,this.repos=new Array,this.isLoading=!1}return n.prototype.ngOnInit=function(){var n=this;this._activatedRoute.params.subscribe(function(l){l.username&&(n.user=new r.a,n.followers=void 0,n.repos=void 0,n.isLoading=!0,n._apiService.getUser(l.username).then(function(l){n.user=l,n.isLoading=!1,n._apiService.getUserFollowers(n.user.login).then(function(l){return n.followers=l.followers}),n._apiService.getUserRepos(n.user.login).then(function(l){return n.repos=l.repos})}))})},n}(),c=t._1({encapsulation:0,styles:[[".user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{-webkit-animation:.6s ease-in-out slide;animation:.6s ease-in-out slide;-webkit-box-shadow:0 3px 6px 3px rgba(0,0,0,.2);box-shadow:0 3px 6px 3px rgba(0,0,0,.2);margin:30px;min-height:100vh}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:20px}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:40px}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{font-size:1em;font-weight:700;margin:5px 0}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .secondary-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{word-break:break-all}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{padding:30px;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:5px;-webkit-animation:1s ease-in-out fade;animation:1s ease-in-out fade}.user-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:5px}.user-detail[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;z-index:-1}@-webkit-keyframes slide{from{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide{from{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fade{from{opacity:0}to{opacity:1}}@keyframes fade{from{opacity:0}to{opacity:1}}@media screen and (max-width:650px){.user-detail[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]{-webkit-box-flex:0;-ms-flex:none;flex:none;width:calc(100% - 40px)}}"]],data:{}});function _(n){return t._21(0,[(n()(),t._3(0,0,null,null,1,"div",[["class","location"]],null,null,null,null,null)),(n()(),t._20(1,null,["Company: ",""]))],null,function(n,l){n(l,1,0,l.component.user.company)})}function f(n){return t._21(0,[(n()(),t._3(0,0,null,null,1,"div",[["class","location"]],null,null,null,null,null)),(n()(),t._20(1,null,["Location: ",""]))],null,function(n,l){n(l,1,0,l.component.user.location)})}function g(n){return t._21(0,[(n()(),t._3(0,0,null,null,6,"div",[["class","item"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n          "])),(n()(),t._3(2,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t._14(n,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t._2(3,671744,null,0,o.m,[o.k,o.a,i.g],{routerLink:[0,"routerLink"]},null),t._16(4,2),(n()(),t._20(5,null,["",""])),(n()(),t._20(-1,null,["\n        "]))],function(n,l){n(l,3,0,n(l,4,0,"/user",l.context.$implicit.login))},function(n,l){n(l,2,0,t._14(l,3).target,t._14(l,3).href),n(l,5,0,l.context.$implicit.login)})}function p(n){return t._21(0,[(n()(),t._3(0,0,null,null,7,"div",[["class","items"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n        "])),(n()(),t._3(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),t._20(3,null,["Followers (",")"])),(n()(),t._20(-1,null,["\n        "])),(n()(),t.Y(16777216,null,null,1,null,g)),t._2(6,802816,null,0,i.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t._20(-1,null,["\n      "]))],function(n,l){n(l,6,0,l.component.followers)},function(n,l){n(l,3,0,l.component.user.followers)})}function m(n){return t._21(0,[(n()(),t._3(0,0,null,null,4,"div",[["class","item"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n          "])),(n()(),t._3(2,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),t._20(3,null,["",""])),(n()(),t._20(-1,null,["\n        "]))],null,function(n,l){n(l,2,0,t._6(1,"",l.context.$implicit.html_url,"")),n(l,3,0,l.context.$implicit.full_name)})}function d(n){return t._21(0,[(n()(),t._3(0,0,null,null,7,"div",[["class","items"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n        "])),(n()(),t._3(2,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),t._20(3,null,["Repositories (",")"])),(n()(),t._20(-1,null,["\n        "])),(n()(),t.Y(16777216,null,null,1,null,m)),t._2(6,802816,null,0,i.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t._20(-1,null,["\n      "]))],function(n,l){n(l,6,0,l.component.repos)},function(n,l){n(l,3,0,l.component.user.public_repos)})}function x(n){return t._21(0,[(n()(),t._3(0,0,null,null,36,"div",[["class","content"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n    "])),(n()(),t._3(2,0,null,null,24,"section",[["class","main-info"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n        "])),(n()(),t._3(4,0,null,null,3,"div",[["class","avatar-container"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n            "])),(n()(),t._3(6,0,null,null,0,"img",[["alt","user_avatar"],["class","avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t._20(-1,null,["\n          "])),(n()(),t._20(-1,null,["\n          "])),(n()(),t._3(9,0,null,null,16,"div",[["class","details"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n            "])),(n()(),t._3(11,0,null,null,4,"h1",[["class","name"]],null,null,null,null,null)),(n()(),t._20(12,null,["\n                "," "])),(n()(),t._3(13,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),t._20(14,null,["[","]"])),(n()(),t._20(-1,null,["\n            "])),(n()(),t._20(-1,null,["\n            "])),(n()(),t.Y(16777216,null,null,1,null,_)),t._2(18,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._20(-1,null,["\n            "])),(n()(),t.Y(16777216,null,null,1,null,f)),t._2(21,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._20(-1,null,["\n            "])),(n()(),t._3(23,0,null,null,1,"p",[["class","bio"]],null,null,null,null,null)),(n()(),t._20(24,null,["",""])),(n()(),t._20(-1,null,["\n          "])),(n()(),t._20(-1,null,["\n    "])),(n()(),t._20(-1,null,["\n    "])),(n()(),t._3(28,0,null,null,7,"section",[["class","secondary-info"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n      "])),(n()(),t.Y(16777216,null,null,1,null,p)),t._2(31,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._20(-1,null,["\n      "])),(n()(),t.Y(16777216,null,null,1,null,d)),t._2(34,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._20(-1,null,["\n    "])),(n()(),t._20(-1,null,["\n  "]))],function(n,l){var u=l.component;n(l,18,0,u.user.company),n(l,21,0,u.user.location),n(l,31,0,u.followers),n(l,34,0,u.repos)},function(n,l){var u=l.component;n(l,6,0,t._6(1,"",u.user.avatar_url,"")),n(l,12,0,u.user.name),n(l,13,0,t._6(1,"",u.user.html_url,"")),n(l,14,0,u.user.login),n(l,24,0,u.user.bio)})}function w(n){return t._21(0,[(n()(),t._3(0,0,null,null,0,"img",[["class","loader"],["src","assets/loader.png"]],null,null,null,null,null))],null,null)}function M(n){return t._21(0,[(n()(),t._3(0,0,null,null,7,"article",[["class","user-detail"]],null,null,null,null,null)),(n()(),t._20(-1,null,["\n  "])),(n()(),t.Y(16777216,null,null,1,null,x)),t._2(3,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._20(-1,null,["\n  "])),(n()(),t.Y(16777216,null,null,1,null,w)),t._2(6,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t._20(-1,null,["\n"])),(n()(),t._20(-1,null,["\n"]))],function(n,l){var u=l.component;n(l,3,0,u.user.login),n(l,6,0,u.isLoading)},null)}var O=t.Z("app-user-detail",s,function(n){return t._21(0,[(n()(),t._3(0,0,null,null,1,"app-user-detail",[],null,null,null,M,c)),t._2(1,114688,null,0,s,[a.a,o.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]);u.d(l,"UserDetailModuleNgFactory",function(){return b});var b=t._0(e,[],function(n){return t._11([t._12(512,t.j,t.W,[[8,[O]],[3,t.j],t.v]),t._12(4608,i.k,i.j,[t.s,[2,i.o]]),t._12(512,i.b,i.b,[]),t._12(512,o.n,o.n,[[2,o.s],[2,o.k]]),t._12(512,e,e,[]),t._12(1024,o.i,function(){return[[{path:":username",component:s}]]},[])])})}});