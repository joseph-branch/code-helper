(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"08d0":function(t,e,i){},"0b40":function(t,e,i){},2016:function(t,e,i){"use strict";i("0b40")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),i("router-link",{attrs:{to:"/CodeHelper"}},[t._v("Code Helper")]),t._v(" | "),i("router-link",{attrs:{to:"/About"}},[t._v("About")])],1),i("router-view")],1)},s=[],o=(i("034f"),i("2877")),r={},l=Object(o["a"])(r,n,s,!1,null,null,null),c=l.exports,d=i("8c4f"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),a("h1",[t._v("This is a home page")]),a("p",[t._v(" This is the home page of "),a("strong",{staticStyle:{color:"#42b983"}},[t._v("Code Helper")]),t._v(". If the name sucks that's because it's the first thing that came to my mind. ")])])}],f=(i("d960"),{}),h=Object(o["a"])(f,u,p,!1,null,"8357db08",null),v=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-containter"},[t._m(0),i("div",{staticClass:"full-column-2",staticStyle:{color:"blue"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"d-flex card-body justify-content-center"},[i("div",[i("form",{attrs:{enctype:"multipart/form-data",id:"upload-form"}},[i("input",{ref:"file",attrs:{type:"file",id:"file",hidden:""},on:{change:function(e){return t.handleFilesUpload()}}}),i("label",{attrs:{id:"upload-file",for:"file"}},[t._v("Upload Files")]),i("span",{attrs:{id:"file-chosen"}},[t._v(t._s(""==t.uploadedFilename?"No file chosen":t.uploadedFilename))])])])])]),i("div",{staticClass:"card"},[i("div",{staticClass:"d-flex card-header justify-content-between"},[i("h5",{staticClass:"card-left-text mt-2"},[t._v("CODE")]),i("div",[i("input",{attrs:{type:"button",id:"edit-code",hidden:""},on:{click:t.toggleEditMode}}),i("label",{attrs:{id:"edit-button",for:"edit-code"}},[t._v("Edit Code")])])]),i("div",{staticClass:"card-body card-left-text code-overflow",attrs:{id:"code-box"}},[i("pre",{directives:[{name:"show",rawName:"v-show",value:!t.isEditMode,expression:"!isEditMode"}],staticClass:"code-overflow",attrs:{id:"code-box-code"}}),i("textarea",{directives:[{name:"show",rawName:"v-show",value:t.isEditMode,expression:"isEditMode"},{name:"model",rawName:"v-model",value:t.fileContents,expression:"fileContents"}],staticClass:"text-area-perserved",domProps:{value:t.fileContents},on:{input:function(e){e.target.composing||(t.fileContents=e.target.value)}}})]),i("div",{staticClass:"d-flex card-footer justify-content-end"},[i("div",[i("input",{attrs:{type:"button",id:"submit-code",hidden:""},on:{click:t.postUploadedCode}}),i("label",{attrs:{id:"submit-button",for:"submit-code"}},[t._v("Submit Code")])])])])]),i("div",{staticClass:"full-column-3",staticStyle:{color:"green"}},[i("div",{staticClass:"card"},[t._m(1),i("div",{staticClass:"card-body"},[t._v(" "+t._s(t.explanation)+" ")])]),t._m(2),t._m(3)])])},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-column-1",staticStyle:{color:"red"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[i("h5",{staticClass:"card-left-text mt-2"},[t._v("MENU")])]),i("div",{staticClass:"card-body"},[t._v("Menu Contents")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-header card-left-text mt-2"},[i("h5",[t._v("EXPLANATION")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header card-left-text mt-2"},[i("h5",[t._v("REFERENCE")])]),i("div",{staticClass:"card-body"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-header card-left-text mt-2"},[i("h5",[t._v("LEGEND")])]),i("div",{staticClass:"card-body"})])}],_=(i("fb6a"),i("ac1f"),i("1276"),i("b0c0"),i("a434"),i("a15b"),i("159b"),i("bc3a")),C=i.n(_),g=i("1157"),y=i.n(g);String.prototype.splice=function(t,e,i){return this.slice(0,t)+i+this.slice(t+Math.abs(e))};var x={name:"CodeHelper",components:{},data:function(){return{uploadedFile:"",uploadedFilename:"",fileContents:[],exampleCode:"",resultData:[],queriedEvents:[],explanation:"Once you submit a file, click on any of the highlighted text for an explanation to be displayed here.",isEditMode:!1,splitCode:""}},methods:{reset:function(){this.uploadedFile="",this.uploadedFilename="",this.fileContents=[],this.exampleCode="",this.resultData=[],this.queriedEvents=[],this.explanation="Once you submit a file, click on any of the highlighted text for an explanation to be displayed here.",this.isEditMode=!1,this.splitCode=""},handleFilesUpload:function(){var t=this;if("cpp"==this.$refs.file.files[0].name.split(".").pop()){this.reset(),this.uploadedFile=this.$refs.file.files[0],this.uploadedFilename=this.uploadedFile.name;var e=new FileReader;e.readAsText(this.uploadedFile,"UTF-8"),e.onload=function(e){t.fileContents.push(e.target.result),t.fileContents=t.fileContents[0].replaceAll("<","&lt").replaceAll(">","&gt"),t.highlightCode()},e.onerror=function(t){alert(t.target.error.name)}}},handleExplination:function(t){console.log(t)},toggleEditMode:function(){this.isEditMode=!this.isEditMode},highlightCode:function(){var t=this;for(var e in this.splitCode=this.fileContents.split(/\r\n|\n/),console.log(this.resultData),this.resultData){var i=this.resultData[e]["endCol"];this.splitCode[this.resultData[e]["endLine"]-1]=this.splitCode[this.resultData[e]["endLine"]-1].splice(i+1,0,"</span>");var a=this.resultData[e]["startCol"];this.splitCode[this.resultData[e]["startLine"]-1]=this.splitCode[this.resultData[e]["startLine"]-1].splice(a-1,0,"<span data-type='".concat(this.resultData[e]["type"],"' style='background-color: rgba(77,145,226,.3); cursor: pointer'>"))}var n=this.splitCode.join("<br>"),s=document.getElementById("code-box-code");s.innerHTML=n,this.queriedEvents=document.querySelectorAll("[data-type]"),this.queriedEvents.forEach((function(e){e.addEventListener("click",(function(e){var i=e.target.dataset["type"];console.log(i),"forloop"===i?t.explanation="This is a for loop":"ifelse"===i?t.explanation="This is a if statement":"whileloop"===i?t.explanation="This is a while loop":"dowhile"===i?t.explanation="This is a do-while loop":"switch"===i&&(t.explanation="This is a switch statement")}))})),y()("#file")[0].value=""},postUploadedCode:function(){var t=this,e=new FormData;e.append("files[]",this.uploadedFile),C.a.post("https://codehelper.wtf",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.resultData=e.data,t.highlightCode())}))}}},E=x,w=(i("2016"),Object(o["a"])(E,m,b,!1,null,"c6eb97e6",null)),O=w.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),a("h1",[t._v("This is an about page")]),a("p",[t._v(" I built this web application in "),a("strong",{staticStyle:{color:"#42b983"}},[t._v("3-4 days")]),t._v(" with minimal sleep. If something breaks just "),a("strong",{staticStyle:{color:"#42b983"}},[t._v("refresh")]),t._v(" the page and try again! ")])])}],S=(i("79d4"),{}),M=Object(o["a"])(S,F,j,!1,null,"4d1fe237",null),T=M.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),a("h1",{staticStyle:{color:"#42b983"}},[t._v("404")]),a("h5",{staticStyle:{color:"#42b983"}},[t._v("NOT FOUND")]),a("p",[t._v(" Even though I built this application in "),a("strong",{staticStyle:{color:"#42b983"}},[t._v("3-4 days")]),t._v(" with minimal sleep I'm nice enough to provide a 404 page! "),a("strong",{staticStyle:{color:"#42b983"}},[t._v("sheesh!")])])])}],k=(i("910f"),{}),N=Object(o["a"])(k,D,$,!1,null,"13a7ae11",null),A=N.exports;a["a"].use(d["a"]);var P=[{path:"/",name:"Home",component:v},{path:"/codehelper",name:"CodeHelper",component:O},{path:"/about",name:"About",component:T},{path:"*",name:"404NotFound",component:A}],H=new d["a"]({mode:"history",base:"/",routes:P}),L=H,U=i("2f62");a["a"].use(U["a"]);var I=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}});i("7b17"),i("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:L,store:I,render:function(t){return t(c)}}).$mount("#app")},"79d4":function(t,e,i){"use strict";i("f0ba")},"85ec":function(t,e,i){},"90ac":function(t,e,i){},"910f":function(t,e,i){"use strict";i("90ac")},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d960:function(t,e,i){"use strict";i("08d0")},f0ba:function(t,e,i){}});
//# sourceMappingURL=app.f42a3bf8.js.map