(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-laporan-print"],{"03a0":function(t,a,e){var n=e("25bb"),r=e("d309");t.exports={distanceInWords:n(),format:r()}},1700:function(t,a,e){},2144:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticStyle:{"font-family":"times new roman"}},[n("div",{staticClass:"no-print bg-black",staticStyle:{color:"White"}},[n("hr"),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2"},[n("button",{staticClass:"btn btn-sm btn-outline-danger no-print mt-4",attrs:{type:"button"},on:{click:function(a){return t.back()}}},[t._v("Go Back!")]),n("br"),n("br")]),n("div",{staticClass:"col-sm-4"},[t._v(" Mengetahui Perangkat Desa : "),n("tr",[n("td",[t._v("Jabatan ")]),n("td",[t._v(" : ")]),n("td",[n("div",{staticClass:"sm-form "},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jabatan,expression:"vdata.jabatan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"Jabatan",name:"Jabatan",placeholder:"Jabatan"},domProps:{value:t.vdata.jabatan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"jabatan",a.target.value)}}})]),n("div",{staticClass:"sm-form "},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"Nama",name:"Nama",placeholder:"Nama"},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})])])])]),n("div",{staticClass:"col-sm-6"},[n("button",{staticClass:"btn btn-sm btn-primary float-right pr-4 mt-4",attrs:{type:"button"},on:{click:function(a){return t.print()}}},[n("span",{staticClass:"typcn typcn-printer"}),t._v(" Print")])])])]),n("hr",{staticClass:"style13"})]),n("div",{},[t._m(0),n("img",{staticClass:"img-fluid",staticStyle:{width:"100%",height:"20px"},attrs:{src:e("f703")}}),n("p",{staticClass:"text-center underline text-uppercase",staticStyle:{"font-size":"21px","font-weight":"bold"}},[t._v("LAPORAN DATA KETERANGAN "+t._s(t._f("nounderline")("BTN BANJARBARU")))]),n("br"),n("p",[t._v("Jumlah Data : "+t._s(t.$store.state.print2.length))]),n("div",{staticClass:"table-responsive",staticStyle:{width:"100%",display:"table","overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[n("table",{staticStyle:{border:"1px solid black",widht:"100%",margin:"1em auto"},attrs:{border:"1"}},[n("thead",{staticClass:"mdb-color bg-white",staticStyle:{width:"100%"}},[n("tr",{staticStyle:{color:"black"}},[n("th",{staticClass:"uppercase p-1",staticStyle:{"font-size":"14px",padding:"7px",border:"1px solid"}},[t._v("NO")]),t._l(t.key,(function(a,e){return n("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:e+"key",staticClass:"uppercase p-1",staticStyle:{"font-size":"11px",padding:"2px",border:"1px solid"}},[t._v(t._s(t._f("nounderline")(a)))])}))],2)]),n("tbody",t._l(t.$store.state.print2,(function(a,e){return n("tr",{key:e+"print",staticStyle:{"font-size":"12px"}},[n("td",{staticClass:"p-1",staticStyle:{"font-size":"12px",border:"1px solid",padding:"2px"}},[t._v(t._s(e+1))]),t._l(a,(function(a,e,r){return n("td",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(e),expression:"!less.includes(keys)"}],key:r,staticClass:"p-1",staticStyle:{"font-size":"12px",border:"1px solid",padding:"2px"}},[t._v(t._s(a))])}))],2)})),0)])]),n("div",{staticClass:"float-right",staticStyle:{"padding-right":"70px","font-size":"19px"}},[n("p",[t._v("Banjarbaru, "+t._s(t.format(new Date)))]),n("p",[t._v(t._s(t.ttd.Jabatan))]),n("br"),n("br"),n("p",{staticClass:"underline font-bold",staticStyle:{"font-size":"19px"}},[t._v(t._s(t.ttd.Nama))])])])])},r=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2",staticStyle:{"margin-left":"10px",position:"absolute",left:"20px",height:"80px"},attrs:{src:e("9658"),alt:"no found"}})]),n("div",{staticClass:"col-9"},[n("p",{staticClass:"pl-3 text-center",staticStyle:{"font-size":"25px","line-height":"1.5","line-spacing":"3px"}},[t._v(" PT. BANK TABUNGAN NEGARA (PERSERO) Tbk "),n("br"),t._v("KANTOR CABANG BANJARBARU ")]),n("p",{staticClass:"pl-3 text-center",staticStyle:{"font-size":"18px"}}),n("p",{staticClass:"text-center",staticStyle:{"font-size":"18px"}},[t._v("Jl. A. Yani No.11, Guntung Payung, Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan 70714, Indonesia")])])])}],s=(e("b64b"),e("ac1f"),e("5319"),e("1276"),e("03a0")),i={data:function(){return{less:["UrutID","Gambar","_id","username"],thnya:[],records:"",key:[],vdata:{jabatan:"Kepala Bagian",nama:"....................................."},listnya:[{Nama:"Taufik",Jabatan:"Programmer"},{Nama:"Akbar",Jabatan:"Desainer"},{Nama:"Maliki",Jabatan:"Web Master"},{Nama:"Kino",Jabatan:"Traveller"}],ttd:{Nama:".................................",Jabatan:"Kepala Bagian"}}},filters:{nounderline:function(t){return t.replace("_"," ")}},methods:{getKeys:function(){var t=this.$store.state.print2[0];t=Object.keys(t),this.key=t},scramble:function(t){for(var a="",e="",n=0;n<t.length;n++)a="",a=t.charAt(n),"a"==a?a=a.replace("a","x"):"b"==a?a=a.replace("b","v"):"c"==a?a=a.replace("c","u"):"d"==a?a=a.replace("d","w"):"e"==a?a=a.replace("e","y"):"f"==a?a=a.replace("f","z"):"g"==a?a=a.replace("g","t"):"h"==a?a=a.replace("h","s"):"i"==a?a=a.replace("i","r"):"j"==a?a=a.replace("j","q"):"k"==a?a=a.replace("k","p"):"l"==a?a=a.replace("l","o"):"m"==a?a=a.replace("m","n"):"z"==a?a=a.replace("z","f"):"y"==a?a=a.replace("y","e"):"x"==a?a=a.replace("x","a"):"w"==a?a=a.replace("w","d"):"v"==a?a=a.replace("v","b"):"u"==a?a=a.replace("u","c"):"t"==a?a=a.replace("t","g"):"s"==a?a=a.replace("s","h"):"r"==a?a=a.replace("r","i"):"q"==a?a=a.replace("q","j"):"p"==a?a=a.replace("p","k"):"o"==a?a=a.replace("o","l"):"n"==a?a=a.replace("n","m"):"1"==a?a=a.replace("1","0"):"2"==a?a=a.replace("2","8"):"3"==a?a=a.replace("3","9"):"4"==a?a=a.replace("4","7"):"5"==a?a=a.replace("5","6"):"0"==a?a=a.replace("0","1"):"8"==a?a=a.replace("8","2"):"9"==a?a=a.replace("9","3"):"7"==a?a=a.replace("7","4"):"6"==a?a=a.replace("6","5"):" "==a?a=a.replace(" ","_"):"_"==a?a=a.replace("_"," "):"*"==a?a=a.replace("*","/"):"/"==a?a=a.replace("/","*"):","==a?a=a.replace(",","^"):"^"==a&&(a=a.replace("^",",")),e+=a;return e},ganti:function(t){console.log(t),this.ttd.Nama=JSON.parse(t).Nama,this.ttd.Jabatan=JSON.parse(t).Jabatan,this.$forceUpdate()},print:function(){window.print()},back:function(){this.$router.go(-1)},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:s})}},mounted:function(){var t=this;this.less=this.$route.query.less.split(","),setTimeout((function(){t.getKeys()}),500)}},o=i,l=(e("d622"),e("2877")),c=Object(l["a"])(o,n,r,!1,null,"922634ce",null);a["default"]=c.exports},"25bb":function(t,a){function e(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function a(a,e,n){var r;return n=n||{},r="string"===typeof t[a]?t[a]:1===e?t[a].one:t[a].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:a}}t.exports=e},9658:function(t,a,e){t.exports=e.p+"img/btn.4ca301eb.png"},d309:function(t,a,e){var n=e("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],i=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=["AM","PM"],l=["am","pm"],c=["a.m.","p.m."],u={MMM:function(a){return t[a.getMonth()]},MMMM:function(t){return a[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return i[t.getDay()]},A:function(t){return t.getHours()/12>=1?o[1]:o[0]},a:function(t){return t.getHours()/12>=1?l[1]:l[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},p=["M","D","DDD","d","Q","W"];return p.forEach((function(t){u[t+"o"]=function(a,e){return s(e[t](a))}})),{formatters:u,formattingTokensRegExp:n(u)}}function s(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r},d622:function(t,a,e){"use strict";var n=e("1700"),r=e.n(n);r.a},f703:function(t,a,e){t.exports=e.p+"img/line.6a5ee0b6.jpg"}}]);
//# sourceMappingURL=page-laporan-print.cb969255.js.map