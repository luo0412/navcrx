(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-addNote"],{"23f8":function(t,e,n){"use strict";n.r(e);var a=n("4aee"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"4aee":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{val:"",title:"",isCrx:!1}},onReady:function(){chrome.tabs&&(this.isCrx=!0)},methods:{getParentUrl:function(){var t=null;if(parent!==window)try{t=parent.location.href}catch(e){t=document.referrer}return t},addUrl:function(){var t=this;if(chrome&&chrome.tabs)chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){if(e){var n=e[0].url;t.val+=n}}));else{var e=this.getParentUrl();e&&(t.val+=e)}},saveNote:function(){vk.callFunction({url:"admin/note/sys/addNote",title:"保存中...",data:{content:this.val,title:this.title},success:function(t){console.log("结果 ",t),vk.navigateTo("/pages/tabBar/community")}})},cancel:function(){vk.navigateTo("/pages/tabBar/community")}}};e.default=a},"77b5":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={tmInput:n("7a91").default,tmRow:n("6e86").default,tmCol:n("bd71").default,tmButton:n("9a18").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"app"},[n("tm-input",{attrs:{vertical:!0,height:100,title:"标题(用于搜索)","border-bottom":!1,placeholder:"","input-type":"textarea","bg-color":"grey-lighten-5",clear:!0},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("tm-input",{attrs:{vertical:!0,height:600,title:"笔记内容","border-bottom":!1,placeholder:"支持代码块","input-type":"textarea","bg-color":"grey-lighten-5",clear:!0},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),n("tm-row",[n("tm-col",{attrs:{justify:"center",grid:12}},[n("v-uni-view",[n("tm-button",{directives:[{name:"show",rawName:"v-show",value:t.isCrx,expression:"isCrx"}],staticStyle:{"margin-right":"20px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addUrl.apply(void 0,arguments)}}},[t._v("当前页URL")]),n("tm-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveNote.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1)],1)},i=[]},a80d:function(t,e,n){"use strict";n.r(e);var a=n("77b5"),r=n("23f8");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,l=n("f0c5"),c=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"e462eee2",null,!1,a["a"],o);e["default"]=c.exports}}]);