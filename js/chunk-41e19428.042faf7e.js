(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41e19428"],{"1dac":function(t,e,n){},"59f7":function(t,e,n){"use strict";n("1dac")},b77c:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"verification-code-wrapper",on:{click:t.clickBtn}},[n("el-input",{class:{"error-input":t.itemConfig.error},attrs:{type:"text",placeholder:t.itemConfig.placeholder},model:{value:t.itemConfig.value,callback:function(e){t.$set(t.itemConfig,"value",e)},expression:"itemConfig.value"}}),n("el-button",{on:{click:t.sendVerificationCode}},[t._v("发送验证码")])],1)},i=[],c=n("9ab4"),r=n("1b40"),l=n("1a8f"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),e.prototype.mmounted=function(){console.log("in component",this.itemConfig)},e.prototype.clickBtn=function(){console.log("in component",this.itemConfig)},e.prototype.sendVerificationCode=function(){Object(l["a"])(this.formConfig.items.phoneNumber,this.formConfig)?alert("短信验证码发送成功，请注意查收"):alert("请输入正确的电话号码")},Object(c["b"])([Object(r["b"])({type:Object,default:function(){return{}}})],e.prototype,"itemConfig",void 0),Object(c["b"])([Object(r["b"])({type:Object,default:function(){return{}}})],e.prototype,"formConfig",void 0),e=Object(c["b"])([Object(r["a"])({})],e),e}(r["c"]),f=u,a=f,p=(n("59f7"),n("2877")),s=Object(p["a"])(a,o,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-41e19428.042faf7e.js.map