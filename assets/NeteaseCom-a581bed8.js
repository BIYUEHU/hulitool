import{d as w,r as d,a5 as m,V as x,ab as y,c as s,b as l,e as C,v as F,f as _,g as u,t as a,F as q,z as D,m as N,o as n,K as p,ac as V}from"./index-319a5c0a.js";const B={class:"mdui-textfield"},E={class:"mdui-icon material-icons mdui-text-color-pink-300"},M={class:"icon",style:{width:"1em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1415"},z=l("path",{d:"M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z",fill:"#EA3E3C","p-id":"1416"},null,-1),I=l("path",{d:"M527.616 849.43872a373.6064 373.6064 0 0 1-162.54976-39.00416c-112.36352-55.16288-180.00896-176.29184-172.55424-308.67456 7.41376-130.34496 85.10464-237.4656 202.752-279.552a35.85024 35.85024 0 0 1 24.15616 67.51232c-107.66336 38.49216-150.81472 136.86784-155.29984 216.13568-5.86752 103.51616 46.08 197.79584 132.34176 240.13824 124.69248 60.30336 216.91392 22.35392 260.82304-5.64224 59.8016-38.16448 97.86368-100.01408 96.95232-157.55264-1.024-63.72352-24.064-120.99584-63.27296-157.14304a145.408 145.408 0 0 0-65.5872-35.28704q2.82624 9.76896 5.64224 19.32288c13.38368 45.63968 24.94464 85.05344 25.6 114.40128a134.26688 134.26688 0 0 1-37.69344 97.76128 139.1104 139.1104 0 0 1-100.6592 40.45824 140.10368 140.10368 0 0 1-100.47488-42.24 169.12384 169.12384 0 0 1-46.2848-122.76736c1.19808-85.12512 80.11776-153.28256 162.816-175.104a324.80256 324.80256 0 0 1-6.71744-67.05152 92.0576 92.0576 0 0 1 69.18144-91.81184c46.21312-12.53376 104.448 5.19168 124.66176 37.888a35.84 35.84 0 0 1-11.70432 49.31584 35.84 35.84 0 0 1-49.26464-11.65312 62.34112 62.34112 0 0 0-48.45568-5.21216c-4.32128 1.71008-12.35968 4.90496-12.76928 23.10144a270.87872 270.87872 0 0 0 6.73792 58.51136 217.4976 217.4976 0 0 1 133.56032 57.6512c53.57568 49.38752 85.0432 125.46048 86.35392 208.71168 1.29024 81.85856-49.7664 167.86432-130.048 219.136a310.14912 310.14912 0 0 1-168.2432 48.65024z m23.6544-457.55392c-56.77056 15.6672-107.4688 63.03744-108.07296 106.42432a98.304 98.304 0 0 0 25.6512 71.43424 68.0448 68.0448 0 0 0 49.36704 20.87936 67.24608 67.24608 0 0 0 49.44896-18.944 63.19104 63.19104 0 0 0 17.23392-46.08c-0.4096-19.79392-11.7248-58.368-22.67136-95.6928-3.61472-12.42112-7.35232-25.14944-10.9568-38.02112z",fill:"#FFFFFF","p-id":"1417"},null,-1),L=[z,I],R=l("label",{class:"mdui-textfield-label"},"歌名",-1),T={class:"mdui-row-xs-1"},$={class:"mdui-col"},j=l("br",null,null,-1),A={key:0},K={class:"mdui-card mdui-hoverable"},S=l("div",{class:"mdui-card-header mdui-row"},[l("div",{class:"mdui-card-header-title"},[l("h4",null,"歌曲信息")])],-1),U={class:"mdui-card-content"},Z=l("strong",null,"歌名:",-1),G=l("strong",null,"歌手:",-1),H=l("br",null,null,-1),J=l("strong",null,"ID:",-1),O=l("strong",null,"链接:",-1),P=["href"],Q=l("br",null,null,-1),W=l("strong",null,"封面:",-1),X=["src"],Y=l("br",null,null,-1),l1=["src"],t1=["href"],e1=l("br",null,null,-1),a1=l("strong",null,"歌词:",-1),s1={key:0},n1=["href","download"],o1=l("br",null,null,-1),d1={key:1},u1=l("br",null,null,-1),i1=l("div",{class:"mdui-card-header-subtitle"},null,-1),c1=l("br",null,null,-1),r1={class:"mdui-table-fluid"},_1={class:"mdui-table mdui-table-hoverable"},v1=l("thead",null,[l("tr",null,[l("th",null,"#"),l("th",null,"歌名"),l("th",null,"歌手")])],-1),h1=["onClick"],m1={key:1},f1=w({__name:"NeteaseCom",setup(p1){const t=d(m("dataRes")),b=d(m("getData")),i=d(""),e=d(0),g=d(""),v=d([]),f=r=>{e.value=r},k={timeupdate:r=>{}};return x(async()=>{v.value=y.parseLrc(g.value)}),(r,c)=>(n(),s("div",null,[l("div",B,[l("i",E,[(n(),s("svg",M,L))]),R,C(l("input",{class:"mdui-textfield-input","onUpdate:modelValue":c[0]||(c[0]=o=>i.value=o),maxlength:"30",type:"text"},null,512),[[F,i.value]])]),l("div",T,[l("div",$,[l("button",{onClick:c[1]||(c[1]=o=>i.value&&b.value({name:i.value})||_(p)(1)),class:"mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"点击解析")])]),j,t.value.code&&t.value.code===500&&t.value.data?(n(),s("div",A,[l("div",K,[S,l("div",U,[l("span",null,[Z,u(a(t.value.data[e.value].title),1)]),l("span",null,[G,u(a(t.value.data[e.value].author),1),H]),l("span",null,[J,u(a(t.value.data[e.value].songid),1)]),l("span",null,[O,l("a",{href:t.value.data[e.value].link},a(t.value.data[e.value].link),9,P),Q]),l("span",null,[W,l("img",{style:{width:"90px"},src:t.value.data[e.value].pic},null,8,X),Y]),l("span",null,[l("audio",{controls:"",autoplay:"",events:k,src:t.value.data[e.value].url},null,8,l1)]),l("span",null,[l("a",{target:"_blank",href:t.value.data[e.value].url},"点击下载",8,t1),e1]),l("span",null,[a1,u(" "+a(v.value)+" ",1),t.value.data[e.value].lrc?(n(),s("span",s1,[u(a(t.value.data[e.value].lrc.substring(0,90)+"...")+" ",1),l("a",{target:"_blank",href:"data:application/octet-stream;base64,"+_(V)(t.value.data[e.value].lrc),download:t.value.data[e.value].title+".lrc"},"点击下载",8,n1),o1])):(n(),s("span",d1,"无"))])]),u1,i1]),c1,l("div",r1,[l("table",_1,[v1,l("tbody",null,[(n(!0),s(q,null,D(t.value.data,(o,h)=>(n(),s("tr",{key:o.songid,onClick:b1=>f(h)},[l("td",null,a(h+1),1),l("td",null,a(o.title),1),l("td",null,a(o.author),1)],8,h1))),128))])])])])):t.value.code?(n(),s("div",m1,a(_(p)("解析失败","darkblue"),t.value={}),1)):N("",!0)]))}});export{f1 as default};
