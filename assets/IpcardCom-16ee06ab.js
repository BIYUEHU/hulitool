import{d as y,r,w as x,a7 as g,c as d,b as e,F as b,z as k,j as w,f as C,e as m,t as c,q as $,A as N,o as p,W as V,N as K}from"./index-319a5c0a.js";import{o as S,T as B}from"./index-49b83028.js";import{h as D}from"./index-d4d19875.js";import"./index-1abee89e.js";import"./index-c6b758bf.js";const F=e("h2",null,[e("strong",null,"演示效果")],-1),R=e("label",{class:"mdui-textfield-label"},"选择角色",-1),z=["value"],H=e("i",{class:"mdui-radio-icon"},null,-1),I={style:{"margin-right":"15px"}},M=e("br",null,null,-1),T=["src"],U={class:"mdui-textfield mdui-textfield-not-empty mdui-row"},j=e("label",{class:"mdui-textfield-label"},"内嵌代码",-1),q={class:"mdui-col-xs-9"},A={class:"mdui-col-xs-3"},l="https://api.hotaru.icu/api/ipcard?apikey=b699b2d60915d83f3723272855240c4c&img=",E='style="width: 500px; max-width: 90%"',O=y({__name:"IpcardCom",setup(L){const h=["随机","香風智乃（Kafuu Chino）","古河渚（Furukawa Nagisa）","棗鈴（Natsume Rin）","神戸小鳥（Kanbe Kotori）","風又ねり（Kazamata Neri）","博麗霊夢（Hakurei Reimu）","姫野星奏（Himeno Sena）","水上由岐（Minakami Yuki）","月社妃（Tsukiyashiro Kisaki）"],{proxy:i}=$(),t=r("0"),o=r(""),_=()=>N(i,`<img src="${l}${t.value}" style="width:500px;max-width: 90%;" />`),f=[D(),S];return x(t,n=>{console.log(n)}),new i.$mdui.Select("#demo"),g.mutation(),(n,s)=>(p(),d("div",null,[F,R,e("form",null,[(p(),d(b,null,k(h,(a,u)=>e("label",{key:u,class:"mdui-radio"},[m(e("input",{type:"radio",name:"charters","onUpdate:modelValue":s[0]||(s[0]=v=>t.value=v),value:u},null,8,z),[[V,t.value]]),H,e("span",I,c(a),1)])),64))]),M,e("img",{src:l+t.value,class:"huli-image-normal"},null,8,T),e("div",U,[j,e("div",q,[w(C(B),{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),style:{height:"40px"},autofocus:!1,"aria-readonly":"true",extensions:f},null,8,["modelValue"])]),e("div",A,[e("button",{onClick:s[2]||(s[2]=a=>_()),class:"mdui-btn mdui-ripple"},"Copy")])]),m(e("span",null,c(o.value=`<img src="${l}${t.value}" ${E} />`),513),[[K,!1]])]))}});export{O as default};
