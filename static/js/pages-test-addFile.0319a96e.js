(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-addFile"],{"01fe":function(t,e,a){"use strict";a.r(e);var r=a("69e6"),n=a("7b71");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);var i,l=a("f0c5"),c=Object(l["a"])(n["default"],r["b"],r["c"],!1,null,"285c1fa9",null,!1,r["a"],i);e["default"]=c.exports},"69e6":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r}));var r={tmInput:a("7a91").default,tmRow:a("6e86").default,tmCol:a("bd71").default,tmButton:a("9a18").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"app"},[a("tm-input",{attrs:{vertical:!0,title:"标题","border-bottom":!1,placeholder:"","input-type":"textarea","bg-color":"grey-lighten-5",clear:!0},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("tm-input",{attrs:{vertical:!0,height:100,title:"链接","border-bottom":!1,placeholder:"","input-type":"textarea","bg-color":"grey-lighten-5",clear:!0},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),a("tm-input",{attrs:{vertical:!0,title:"分类No","border-bottom":!1,placeholder:"形如 0, 00, 13, 89, 45a","input-type":"textarea","bg-color":"grey-lighten-5",clear:!0},model:{value:t.categoryNo,callback:function(e){t.categoryNo=e},expression:"categoryNo"}}),a("tm-input",{attrs:{vertical:!0,title:"图标",height:100,"border-bottom":!1,placeholder:"","input-type":"textarea","bg-color":"grey-lighten-5",clear:!0},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}}),a("tm-row",[a("tm-col",{attrs:{justify:"center",grid:12}},[a("v-uni-view",[a("tm-button",{directives:[{name:"show",rawName:"v-show",value:t.isCrx,expression:"isCrx"}],attrs:{icon:"icon-chart-relation",size:"m"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addUrl.apply(void 0,arguments)}}},[t._v("提取URL")]),a("tm-button",{attrs:{icon:"icon-cloudupload",size:"m"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[t._v("上传图标")]),a("tm-button",{directives:[{name:"show",rawName:"v-show",value:t.url&&t.categoryNo&&t.title&&t.path,expression:"url && categoryNo && title && path"}],attrs:{size:"m",icon:"icon-save"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveNote.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1)],1)},o=[]},"7b71":function(t,e,a){"use strict";a.r(e);var r=a("f4c8"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},f4c8:function(t,e,a){"use strict";(function(t){var r=a("4ea4");a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=r(a("1da1")),o={data:function(){return{title:"",url:"",fileList:[],path:"",categoryNo:"",isCrx:!1}},onReady:function(){chrome.tabs&&(this.isCrx=!0)},methods:{getParentUrl:function(){var t=null;if(parent!==window)try{t=parent.location.href}catch(e){t=document.referrer}return t},addUrl:function(){var t=this;chrome&&chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(e){e&&(t.url=e[0].url.replace(/&utm_source=.*&/,"&").replace(/\?utm_source=.*&/,"?").replace(/&utm_medium=.*&/,"&").replace(/&utm_medium=referral$/,"").replace(/\?utm_medium=referral$/,""),t.title=e[0].title)}))},upload:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(){var a=(0,n.default)(regeneratorRuntime.mark((function a(r){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(r.tempFilePaths.length<=0)){a.next=2;break}return a.abrupt("return");case 2:return n=r.tempFilePaths[0],a.next=5,t.uploadFile({filePath:n,cloudPath:"a.jpg",onUploadProgress:function(t){console.log(t);Math.round(100*t.loaded/t.total)},success:function(t){e.path=t.fileID},fail:function(){}});case 5:a.sent;case 6:case"end":return a.stop()}}),a)})));function r(t){return a.apply(this,arguments)}return r}()})},saveNote:function(){vk.callFunction({url:"admin/vkfiles/sys/addFile",title:"保存中...",data:{title:this.title,url:this.url,path:this.path,categoryNo:this.categoryNo},success:function(t){console.log("结果 ",t),vk.reLaunch("/pages/tabBar/message")}})},cancel:function(){vk.navigateTo("/pages/tabBar/message")}}};e.default=o}).call(this,a("a9ff")["default"])}}]);