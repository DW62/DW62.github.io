(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ad1c"],{bcaf:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[s("el-input",{staticStyle:{width:"30%"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{staticStyle:{width:"30%"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),s("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[s("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.avatar,"preview-src-list":[e.form.avatar]}}),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.open}},[e._v("更换头像")])],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("修改")]),s("el-button",{on:{click:e.go}},[e._v("返回")])],1)],1),s("el-dialog",{attrs:{title:"上传图片",visible:e.dialogVisible,"append-to-body":!0,width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"http://39.105.29.9:9090/files/ossUpload","on-success":e.imgUpload,multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),s("em",[e._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])])],1)],1)},i=[],r=s("b775"),o={name:"aboutIndex",components:{},data:function(){return{dialogVisible:!1,form:{id:"",avatar:"https://mydwblog.oss-cn-shanghai.aliyuncs.com/2021/10/11/6350f69b77e745e2927e255b97a5e9c7.png",email:"1124279871@qq.com",nickname:"admin"},rules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],avatar:[{required:!0,message:"头像不能为空",trigger:"blur"}]}}},created:function(){this.loadUser()},mounted:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r["a"].post("/user/postUserById",t.form).then((function(e){e.data.result?(t.$message.success("修改成功"),sessionStorage.setItem("user",JSON.stringify(e.data.data.user))):t.$message.success("修改失败")}))}))},loadUser:function(){this.form=JSON.parse(sessionStorage.getItem("user"))},go:function(){if(window.history.length<=1)return this.$router.push({path:"/"}),!1;this.$router.go(-1)},open:function(){this.dialogVisible=!0},imgUpload:function(e,t,s){var a=this;this.dialogVisible=!1,this.form.avatar=t.response.data.url,r["a"].post("/user/postUserById",this.form).then((function(e){if(e.data.result){var t=JSON.parse(sessionStorage.getItem("user"));t.avatar=a.form.avatar,sessionStorage.setItem("user",JSON.stringify(t)),a.loadUser(),a.$router.go(0)}else a.$message({message:"服务器故障请稍后在修改",type:"warning",offset:80})}))}}},l=o,n=s("2877"),m=Object(n["a"])(l,a,i,!1,null,"17ccff86",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21ad1c.e367add5.js.map