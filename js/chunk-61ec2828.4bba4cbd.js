(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ec2828"],{"23eb":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"registration-form-wrapper"},[r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"title"},[e._v(" 浙江大学 "+e._s((new Date).getFullYear())+"年夏令营申请表 ")]),r("dq-form",{attrs:{formConfig:e.formConfig}})],1)])},n=[],u=r("9ab4"),l=r("1b40"),o=[{value:"01",name:"汉族"},{value:"02",name:"蒙古族"},{value:"03",name:"回族"},{value:"04",name:"藏族"},{value:"05",name:"维吾尔族"},{value:"06",name:"苗族"},{value:"07",name:"彝族"},{value:"08",name:"壮族"},{value:"09",name:"布依族"},{value:"10",name:"朝鲜族"},{value:"11",name:"满族"},{value:"12",name:"侗族"},{value:"13",name:"瑶族"},{value:"14",name:"白族"},{value:"15",name:"土家族"},{value:"16",name:"哈尼族"},{value:"17",name:"哈萨克族"},{value:"18",name:"傣族"},{value:"19",name:"黎族"},{value:"20",name:"傈僳族"},{value:"21",name:"佤族"},{value:"22",name:"畲族"},{value:"23",name:"高山族"},{value:"24",name:"拉祜族"},{value:"25",name:"水族"},{value:"26",name:"东乡族"},{value:"27",name:"纳西族"},{value:"28",name:"景颇族"},{value:"29",name:"柯尔克孜族"},{value:"30",name:"土族"},{value:"31",name:"达斡尔族"},{value:"32",name:"仫佬族"},{value:"33",name:"羌族"},{value:"34",name:"布朗族"},{value:"35",name:"撒拉族"},{value:"36",name:"毛难族"},{value:"37",name:"仡佬族"},{value:"38",name:"锡伯族"},{value:"39",name:"阿昌族"},{value:"40",name:"普米族"},{value:"41",name:"塔吉克族"},{value:"42",name:"怒族"},{value:"43",name:"乌孜别克族"},{value:"44",name:"俄罗斯族"},{value:"45",name:"鄂温克族"},{value:"46",name:"崩龙族"},{value:"47",name:"保安族"},{value:"48",name:"裕固族"},{value:"49",name:"京族"},{value:"50",name:"塔塔尔族"},{value:"51",name:"独龙族"},{value:"52",name:"鄂伦春族"},{value:"53",name:"赫哲族"},{value:"54",name:"门巴族"},{value:"55",name:"珞巴族"},{value:"56",name:"基诺族"}],i=[{value:"1",name:"中华人民共和国居民身份证"},{value:"2",name:"军人证件"},{value:"3",name:"港澳台身份证件"},{value:"4",name:"华侨身份证"},{value:"5",name:"外籍护照"}],m=[{value:"1",name:"中共党员"},{value:"2",name:"中共预备党员"},{value:"3",name:"共青团员"},{value:"4",name:"民革会员"},{value:"5",name:"民盟盟员"},{value:"6",name:"民建会员"},{value:"7",name:"民进会员"},{value:"8",name:"农工党党员"},{value:"9",name:"致公党党员"},{value:"10",name:"九三学社社员"},{value:"11",name:"台盟盟员"},{value:"12",name:"无党派民主人士"},{value:"13",name:"群众"}],s=r("bc3a"),c=r.n(s),d=r("bb4e"),p=function(e){for(var a in e)e[a].value="",e[a].error=""},v=r("79f6"),y=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.name="registration-form",a.formConfig={width:"90%",labelWidth:"240px",items:{name:{title:"基本信息",label:"姓名",placeholder:"请输入姓名",type:"input",required:!0,value:"",error:"",submitkey:"Name",echokey:"name",rules:[{ok:function(e){return!!e},msg:"请输入"}]},nickname:{label:"昵称",placeholder:"请输入昵称",type:"input",required:!0,value:"",error:"",submitkey:"NickName",echokey:"nick_name",rules:[{ok:function(e){return!!e},msg:"请输入"}]},gender:{label:"性别",placeholder:"请输入",type:"radio",required:!0,value:"",error:"",submitkey:"Gender",echokey:"gender",options:[{name:"男",value:1},{name:"女",value:2}],rules:[{ok:function(e){return!!e},msg:"请输入"}]},nation:{label:"民族",placeholder:"请输入",type:"select",options:o,required:!0,value:"",error:"",submitkey:"Ethnicity",echokey:"ethnicity",rules:[{ok:function(e){return!!e},msg:"请输入"}]},certificateType:{label:"身份证件类型",placeholder:"请输入",type:"select",options:i,required:!0,value:"",error:"",submitkey:"IDType",echokey:"id_type",rules:[{ok:function(e){return!!e},msg:"请输入"}]},certificateId:{label:"身份证号",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"IDNumber",echokey:"id_number",rules:[{ok:function(e){return!!e},msg:"请输入"}]},policalStatus:{label:"政治面貌",placeholder:"请输入",type:"select",required:!0,options:m,value:"",error:"",submitkey:"PoliticalStatus",echokey:"political_status",rules:[{ok:function(e){return!!e},msg:"请输入"}]},birthday:{label:"出生日期",placeholder:"请输入",type:"component",component:function(){return r.e("chunk-6a6303ff").then(r.bind(null,"64e2"))},required:!0,value:"",error:"",submitkey:"Birthday",echokey:"birthday",rules:[{ok:function(e){return!!e},msg:"请输入"}]},photo:{label:"个人照片",hint:"上传清晰的个人免冠正面照",type:"component",component:function(){return r.e("chunk-05fc6888").then(r.bind(null,"d443"))},required:!0,value:new ArrayBuffer(8),error:"",separator:!0,submitkey:"Photo",echokey:"photo",rules:[]},correspondenceAddress:{label:"通讯地址",title:"联系方式",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"CorrespondAddress",echokey:"correspond_address",rules:[{ok:function(e){return!!e},msg:"请输入"}]},homeAddress:{label:"家庭地址",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"FamilyAddress",echokey:"family_address",rules:[{ok:function(e){return!!e},msg:"请输入"}]},postalCode:{label:"邮政编码",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"PostalCode",echokey:"postal_code",rules:[{ok:function(e){return!!e},msg:"请输入"}]},telephoneNumber:{label:"电话号码",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"TelephoneNumber",echokey:"telephone_number",rules:[{ok:function(e){return!!e},msg:"请输入"}]},email:{label:"电子邮箱",placeholder:"请输入",type:"input",required:!0,value:"",error:"",separator:!0,submitkey:"Email",echokey:"email",rules:[{ok:function(e){return!!e},msg:"请输入"}]},intentionalCollegeName:{label:"意向学院",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"IntentionalCollegeName",echokey:"intentional_college_name",rules:[{ok:function(e){return!!e},msg:"请输入"}]},intentionalMajorName:{label:"意向专业",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"StudyDirection",echokey:"study_direction",rules:[{ok:function(e){return!!e},msg:"请输入"}]},intentionalStudyCategory:{label:"意向攻读类型",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"IntentionalStudyCategory",echokey:"intentional_study_category",rules:[{ok:function(e){return!!e},msg:"请输入"}]},intentionalTutorName:{label:"意向导师姓名",placeholder:"请输入",type:"input",required:!0,value:"",error:"",separator:!0,submitkey:"IntentionalTutorName",echokey:"intentional_tutor_name",rules:[{ok:function(e){return!!e},msg:"请输入"}]},undergraduateSchool:{hint:"请输入本科学校及院系",label:"本科学校及院系",placeholder:"请输入本科学校及院系",type:"input",title:"本科成绩",required:!0,value:"",error:"",submitkey:"UnderGraduateSchool",echokey:"under_graduate_school",rules:[{ok:function(e){return!!e},msg:"请输入"}]},major:{label:"本科专业",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"Major",echokey:"major",rules:[{ok:function(e){return!!e},msg:"请输入"}]},enrollmentTime:{label:"入学时间",placeholder:"请输入",type:"component",component:function(){return r.e("chunk-6a6303ff").then(r.bind(null,"64e2"))},required:!0,value:"",error:"",submitkey:"EnrollmentTime",echokey:"enrollment_time",rules:[{ok:function(e){return!!e},msg:"请输入"}]},graduationTime:{label:"毕业时间",placeholder:"请输入",type:"component",component:function(){return r.e("chunk-6a6303ff").then(r.bind(null,"64e2"))},required:!0,value:"",error:"",submitkey:"GraduationTime",echokey:"GraduationTime",rules:[{ok:function(e){return!!e},msg:"请输入"}]},foreignLanguageType:{hint:"请填写主要掌握的一门外语类型",label:"外语类型",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"SecondLanguageType",echokey:"second_language_type",rules:[]},foreignLanguageGrades:{hint:"与填写得外语类型对应的外语成绩",label:"外语成绩",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"SecondLanguageGrade",echokey:"second_language_grade"},gradeNumber:{label:"所学专业的同年级人数",placeholder:"请输入",type:"input",required:!0,value:"",error:"",submitkey:"GradeNumber",echokey:"GradeNumber",rules:[{ok:function(e){return!!e},msg:"请输入"}]},ranking:{label:"预计专业排名",placeholder:"请输入",type:"input",required:!0,value:"",error:"",rules:[],submitkey:"Ranking",echokey:"ranking",separator:!0},thesis:{label:"发表论文及其他研究成果情况",placeholder:"请输入",title:"研究成果",type:"textarea",required:!0,rows:10,maxlength:1e3,value:"",error:"",submitkey:"Thesis",echokey:"thesis",rules:[{ok:function(e){return!!e},msg:"请输入"}]},personalStatement:{label:"个人陈述",placeholder:"请输入申请人个人陈述",type:"textarea",rows:20,maxlength:1e3,required:!0,value:"",error:"",submitkey:"PersonalIntroduction",echokey:"personal_introduction",rules:[{ok:function(e){return!!e},msg:"请输入"}]}},buttons:{reset:{name:"reset",type:"reset",text:"重置",disabled:!1},submit:{name:"submit",text:"提交",type:"submit",disabled:!1,func:function(e){c()({url:v["a"].submitappform,data:e,method:"post",transformRequest:[function(e){var a=new FormData;for(var r in e)a.append(r,e[r]);return a}]}).then((function(e){if(console.log(e),e&&e.data&&e.data.Code){var r=e.data.Code;1e4===r&&(alert("提交个人信息成功"),a.$store.commit("showRegistration",!1))}})).catch((function(e){alert("提交失败，请重试"),a.$message("未知错误，请重试")}))}},cancel:{name:"cancel",disabled:!1,type:"function",text:"返回",func:function(){a.$store.commit("showRegistration",!1)}}}},a}return Object(u["c"])(a,e),a.prototype.mounted=function(){this.queryItems&&this.writeDataToItems(this.queryItems,this.formConfig.items),"newForm"===this.type&&p(this.formConfig.items),"getForm"===this.type&&(this.formConfig.buttons.submit.disabled=!0,this.formConfig.buttons.reset.disabled=!0),"drawerForm"===this.type&&(this.formConfig.buttons.submit.disabled=!0,this.formConfig.buttons.reset.disabled=!0,this.formConfig.buttons.cancel.disabled=!0)},a.prototype.writeDataToItems=function(e,a){for(var r in void 0===e&&(e={}),void 0===a&&(a={}),a){var t=a[r];if(t){var n=t.echokey;t.value=n?e[n]:e[r]}}},Object(u["b"])([Object(l["b"])({type:String,default:""})],a.prototype,"type",void 0),Object(u["b"])([Object(l["b"])({type:Object,default:null})],a.prototype,"queryItems",void 0),a=Object(u["b"])([Object(l["a"])({components:{DqForm:d["a"]}})],a),a}(l["c"]),b=y,h=b,f=(r("711e"),r("2877")),k=Object(f["a"])(h,t,n,!1,null,null,null);a["a"]=k.exports},"711e":function(e,a,r){"use strict";r("9d59")},"9d59":function(e,a,r){}}]);
//# sourceMappingURL=chunk-61ec2828.4bba4cbd.js.map