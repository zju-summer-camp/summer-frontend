(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdf16418"],{1508:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dq-filter-wrapper",style:{width:t.filterConfig.width?t.filterConfig.width:"auto"}},[n("div",{staticClass:"filters-wrapper"},t._l(t.filterConfig.items,(function(e,a){return n("dq-form-item",{key:a,attrs:{itemConfig:e,filterConfig:t.filterConfig}})})),1),n("div",{staticClass:"filter-buttons-wrapper"},t._l(t.filterConfig.buttons,(function(e){return n("el-button",{key:e.name,attrs:{disabled:e.disabled},on:{click:function(n){return t.clickBtn(e)}}},[t._v(t._s(e.text))])})),1)])},i=[],r=n("9ab4"),o=n("1b40"),s=n("30bc"),l=n("bc3a"),c=n.n(l),u=n("1a8f"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.keys=Array.from(Object.keys(e.filterConfig.items)),e}return Object(r["c"])(e,t),e.prototype.validKeys=function(t){for(var e=!0,n=0,a=t;n<a.length;n++){var i=a[n];e=Object(u["a"])(this.filterConfig.items[i],this.filterConfig)&&e}return e},e.prototype.getData=function(){for(var t=this.filterConfig.items,e={},n=0,a=this.keys;n<a.length;n++){var i=a[n],r=t[i],o=r.submitkey||i,s=r.value;e[o]=s}return e},e.prototype.sendAxios=function(t){"get"===t.method?c.a.get(t.url,{params:this.getData()}).then((function(e){t.success(e)})).catch((function(e){t.fail(e)})):c()({url:t.url,data:this.getData(),method:"post"}).then((function(e){t.success(e)})).catch((function(e){t.fail(e)}))},e.prototype.clickBtn=function(t){var e=this.getData();if("submit"===t.type){if(console.log("校验表单填写项是否正确..."),!this.validKeys(this.keys))return;console.log("校验通过")}t.func&&t.func(e),"reset"===t.type&&this.reset()},e.prototype.reset=function(){var t=this.filterConfig.items||{};for(var e in console.log("items",t),t)t[e].value="",t[e].error=""},Object(r["b"])([Object(o["b"])({type:Object,default:function(){return{}}})],e.prototype,"filterConfig",void 0),e=Object(r["b"])([Object(o["a"])({components:{DqFormItem:s["a"]}})],e),e}(o["c"]),f=p,d=f,h=(n("18ce"),n("2877")),m=Object(h["a"])(d,a,i,!1,null,null,null);e["a"]=m.exports},"18ce":function(t,e,n){"use strict";n("bf72")},6024:function(t,e,n){},7571:function(t,e,n){"use strict";n("6024")},"8e66":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"forms-wrapper"},[n("div",{staticClass:"title-wrapper"},[n("div",{staticClass:"export-wrapper"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"批量导出已勾选报名表",placement:"top"}},[n("el-button",{attrs:{size:"small",circle:"",icon:"el-icon-download"},nativeOn:{click:function(e){return e.preventDefault(),t.exportBatch(e)}}})],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出所有报名表",placement:"top"}},[n("el-button",{attrs:{size:"small",circle:"",icon:"el-icon-download"},nativeOn:{click:function(e){return e.preventDefault(),t.exportAll(e)}}})],1)],1)]),n("div",{staticClass:"filter-wrapper"},[n("dq-filter",{attrs:{filterConfig:t.filterConfig}})],1),n("div",{staticClass:"table-wrapper"},[n("el-table",{attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{style:{color:"#fff"},attrs:{type:"selection",width:"60"}}),n("el-table-column",{attrs:{prop:"account.username",label:"用户昵称",width:"140"}}),n("el-table-column",{attrs:{prop:"account.phone",label:"联系方式",width:"140"}}),n("el-table-column",{attrs:{prop:"state",label:"状态",width:"80"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"operation-wrapper"},[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),t.formDetail(e.$index,e)}}},[t._v(" 详情 ")]),n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),t.exportCurrent(e.$index,e)}}},[t._v(" 导出 ")]),n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),t.changeStatus(e.$index,e)}}},[t._v(" 修改状态 ")])],1)]}}])})],1)],1),n("div",{staticClass:"pagination-wrapper"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pagination.total,"current-page":t.pagination.current,"page-size":t.pagination.size},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pagination,"current",e)},"update:current-page":function(e){return t.$set(t.pagination,"current",e)}}})],1),n("div",{staticClass:"drawer-wrapper"},[n("el-drawer",{attrs:{title:t.details.title.name,visible:t.drawer,direction:"rtl",size:"70%"},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticClass:"drawer-content"},[n("div",{staticClass:"form-content"},[n("registration-form-detail",{attrs:{queryItems:t.queryItems,type:"drawerForm"}})],1),n("div",{staticClass:"operations"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出当前报名表",placement:"top"}},[n("el-button",{attrs:{size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.exportCurrent(e)}}},[t._v(" 导出 ")])],1)],1)])])],1),n("el-dialog",{attrs:{title:"修改状态",visible:t.showReviseStatus,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.showReviseStatus=e}}},[n("div",[n("div",[t._v("当前正在修改 "+t._s(t.reviseStatusInfo.name)+" 的报名表")]),n("dq-form",{attrs:{formConfig:t.formConfig}})],1),n("div"),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.showReviseStatus=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showReviseStatus=!1}}},[t._v("确 定")])],1)])],1)},i=[],r=n("9ab4"),o=n("1b40"),s=n("bc3a"),l=n.n(s),c=n("23eb"),u=n("bb4e"),p=n("1508"),f=n("79f6"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tableData=[],e.currentPage=1,e.multipleSelection=[],e.drawer=!1,e.details={title:""},e.statusOptions=[{name:"待定",value:0},{name:"通过",value:1},{name:"拒绝",value:2}],e.queryItems={},e.showReviseStatus=!1,e.reviseStatusInfo={},e.filterConfig={width:"90%",items:{name:{label:"项目名称",placeholder:"请输入项目名称",type:"input",required:!0,hint:"请输入完整的项目名称，以查询该项目下学生报名情况",value:"",error:""},team:{label:"导师团队",placeholder:"请输入导师团队",type:"input",value:"",error:""},academy:{label:"所属学院",placeholder:"请输入所属学院",type:"input",value:"",error:""}},buttons:{submit:{text:"查询",type:"submit",func:function(t){e.getFormList()}}}},e.formConfig={width:"100%",items:{status:{hint:"修改状态",label:"状态",placeholder:"请选择状态",type:"select",options:e.statusOptions,value:"",submitkey:"phoneNumber",error:"",required:!0,rules:[{ok:function(t){var e=/^1[0-9]{10}$/;return console.log(e.test(t)),!!e.test(t)},msg:"请输入格式正确的手机号"}]}}},e.pagination={current:1,size:3,total:1},e}return Object(r["c"])(e,t),e.prototype.getFormList=function(){var t=this;l.a.get(f["a"].queryCandidates,{params:{team:this.filterConfig.items.team.value,academy:this.filterConfig.items.academy.value,name:this.filterConfig.items.name.value,page:this.pagination.current,limit:this.pagination.size}}).then((function(e){t.pagination.total=e.data.Data.count,t.tableData=e.data.Data.accounts||[]}))},e.prototype.formDetail=function(t,e){var n=this;l.a.get(f["a"].queryappform,{params:{ID:this.tableData[t].account.id}}).then((function(t){Object.keys(t.data.Data).forEach((function(e){n.queryItems[e]=t.data.Data[e],n.drawer=!0}))}))},e.prototype.changeStatus=function(t,e){this.reviseStatusInfo=this.tableData[t],this.showReviseStatus=!0},e.prototype.handleClose=function(){console.log("关闭修改状态弹窗")},e.prototype.pageChange=function(){console.log("sss",this.currentPage)},e.prototype.handleSizeChange=function(t){this.getFormList()},e.prototype.handleCurrentChange=function(t){this.currentPage=t,this.getFormList()},e.prototype.exportCurrent=function(){alert("exportCurrent")},e.prototype.exportBatch=function(){alert("exportBatch")},e.prototype.exportAll=function(){console.log("exportAll")},e.prototype.handleSelectionChange=function(t){this.multipleSelection=t,console.log("handleSelectionChange",t)},e.prototype.mounted=function(){this.getFormList()},e=Object(r["b"])([Object(o["a"])({components:{RegistrationFormDetail:c["a"],DqForm:u["a"],DqFilter:p["a"]}})],e),e}(o["c"]),h=d,m=h,g=(n("7571"),n("2877")),v=Object(g["a"])(m,a,i,!1,null,null,null);e["default"]=v.exports},bf72:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cdf16418.dd11af02.js.map