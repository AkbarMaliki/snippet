(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-firebase-auth-changepassword"],{c8c8:function(a,s,t){"use strict";t.r(s);var o=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[a._v(" "+a._s(a.$store.state.users)+" "),t("div",{staticClass:"sm-form "},[t("label",{attrs:{for:"password"}},[a._v("password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.password,expression:"vdata.password"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:a.vdata.password},on:{input:function(s){s.target.composing||a.$set(a.vdata,"password",s.target.value)}}})]),t("div",{staticClass:"sm-form "},[t("label",{attrs:{for:"password"}},[a._v("re password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.password2,expression:"vdata.password2"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:a.vdata.password2},on:{input:function(s){s.target.composing||a.$set(a.vdata,"password2",s.target.value)}}})]),t("p",{directives:[{name:"show",rawName:"v-show",value:a.vdata.password!=a.vdata.password2,expression:"vdata.password!=vdata.password2"}],staticClass:"p-2 font-bold text-red"},[a._v("Password Tidak Sama!")]),t("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:function(s){return a.changePasswword()}}},[t("span",{staticClass:"typcn typcn-key"}),a._v(" Change Password")]),t("hr",{staticClass:"style13"}),t("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(s){return a.$store.dispatch("logout")}}},[a._v("Logout")])])},r=[],e=(t("bc3a"),t("8aa5")),n=t.n(e),d=(n.a.firestore(),{data:function(){return{vdata:{}}},methods:{changePasswword:function(){var a=n.a.auth().currentUser;console.log(a);var s=this.vdata.password;a.updatePassword(s).then((function(){alert("success ganti password")}),(function(a){alert("gagal ganti password")}))}},beforeMount:function(){this.$store.dispatch("ceklogin",{true:!0,false:"/auth/login"})},mounted:function(){}}),p=d,i=t("2877"),c=Object(i["a"])(p,o,r,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=page-testing-firebase-auth-changepassword.f3548c64.js.map