(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-notifikasi-index"],{"5f8e":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:function(n){return t.notifikasi(23,"/driver/req-driver","Permintaan Di Approve")}}},[t._v("notifikasi")])])},i=[],r=(a("99af"),a("bc3a")),o=a.n(r),c=a("80f4"),s=a("cc98"),f=a.n(s),d={methods:{notifikasi:function(t,n,a){var e=new FormData;e.append("data","insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)\n         VALUES ('".concat(t,"','").concat(n,"','").concat(a,"','false','driver','1','").concat(new Date,"')")),e.append("database"," infolay3_test"),o.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){var i={id:f()(),target_id:t,app:"driver",text:a,link:n,dibaca:"false"};c["a"].emit("send-message",i)}))}}},u=d,l=a("2877"),p=Object(l["a"])(u,e,i,!1,null,null,null);n["default"]=p.exports},"80f4":function(t,n,a){"use strict";var e=a("8055"),i=a.n(e),r=(a("7e59"),i()("https://infolayanans.now.sh"));n["a"]=r},"99af":function(t,n,a){"use strict";var e=a("23e7"),i=a("d039"),r=a("e8b5"),o=a("861d"),c=a("7b0b"),s=a("50c4"),f=a("8418"),d=a("65f0"),u=a("1dde"),l=a("b622"),p=a("2d00"),b=l("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!i((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=u("concat"),w=function(t){if(!o(t))return!1;var n=t[b];return void 0!==n?!!n:r(t)},k=!g||!m;e({target:"Array",proto:!0,forced:k},{concat:function(t){var n,a,e,i,r,o=c(this),u=d(o,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(r=-1===n?o:arguments[n],w(r)){if(i=s(r.length),l+i>h)throw TypeError(v);for(a=0;a<i;a++,l++)a in r&&f(u,l,r[a])}else{if(l>=h)throw TypeError(v);f(u,l++,r)}return u.length=l,u}})}}]);
//# sourceMappingURL=page-testing-notifikasi-index.f0cd2982.js.map