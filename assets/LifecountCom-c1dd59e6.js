import{d as $,r as x,i as V,w as B,c as k,j as y,k as u,l as p,m as b,q,x as g,y as D,o as d,f as w,b as e,g as t,t as a,F as A,z as H,n as z,A as E,p as F,h as j,_ as U}from"./index-319a5c0a.js";const l=r=>(F("data-v-6a0cbc94"),r=r(),j(),r),G={style:{"margin-top":"20px"}},J=l(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"已经过去了")])],-1)),K={class:"mdui-card-content container"},M={class:"mdui-row"},O={class:"mdui-col-xs-4"},P=l(()=>e("small",null,"年",-1)),Q={class:"mdui-col-xs-4"},R=l(()=>e("small",null,"月",-1)),W={class:"mdui-col-xs-4"},X=l(()=>e("small",null,"天",-1)),Y={class:"mdui-row"},Z={class:"mdui-col-xs-4"},ee=l(()=>e("small",null,"时",-1)),se={class:"mdui-col-xs-4"},te=l(()=>e("small",null,"分",-1)),le={class:"mdui-col-xs-4"},ae=l(()=>e("small",null,"秒",-1)),oe=l(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"剩下的时间")])],-1)),de={class:"mdui-card-content container"},ce={class:"mdui-row"},ne={class:"mdui-col-xs-4"},ie=l(()=>e("small",null,"年",-1)),ue={class:"mdui-col-xs-4"},re=l(()=>e("small",null,"月",-1)),_e={class:"mdui-col-xs-4"},me=l(()=>e("small",null,"天",-1)),ve={class:"mdui-row"},he={class:"mdui-col-xs-4"},pe=l(()=>e("small",null,"时",-1)),be={class:"mdui-col-xs-4"},fe=l(()=>e("small",null,"分",-1)),xe={class:"mdui-col-xs-4"},ke=l(()=>e("small",null,"秒",-1)),ye=l(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"人生进度")])],-1)),ge={class:"box"},we=l(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"分享小格")])],-1)),Ce={class:"mdui-card-content"},Ie={class:"code"},Ve=l(()=>e("i",{class:"mdui-icon material-icons"},"content_copy",-1)),Be=l(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"说明")])],-1)),De=l(()=>e("div",{class:"mdui-card-content"},[e("div",null,[e("b",null,"假设我们的寿命是80岁,分为400个方块。")]),e("div",null,[e("span",{class:"block past"}),t(" 你已经走过的生命")]),e("div",null,[e("span",{class:"block sleep"}),t(" 如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间 ")]),e("div",null,[e("span",{class:"block work"}),t(" 如果你 65 岁退休，退休前平均每天工作 8 小时，这是你余下生命里工作占用的时间 ")]),e("div",null,[e("span",{class:"block retired"}),t(" 65 岁，你退休了")]),e("div",null,[e("span",{class:"block baby"}),t(" 如果你 28 岁生孩子，孩子18岁出门上大学，这 18 年里你平均每天能花 5 个小时陪伴孩子，这里是你余下生命里所用去的时间 ")]),e("div",null,[e("span",{class:"block parents"}),t(" 如果你每个月能看望父母一天，在他们 80 岁前，这是你的余生里还能陪伴他们的时光 ")]),e("div",null,[e("span",{class:"block surplus"}),t(" 除了以上之外，你剩下的所有日子 ")])],-1)),Le=$({__name:"LifecountCom",setup(r){let c=[];const{proxy:f}=q(),o=x(),s=x(null),n=x(),C=()=>{s.value=g.countDate(o.value),n.value=L()},L=()=>{if(o.value)return g.countBlock(o.value)},I=()=>`${window.location.href.split("?")[0]}?s=${V.encode(o.value.getTime().toString())}`,N=()=>{S(),s.value&&(c.push(setInterval(()=>{s.value.past.minute+=1},60*1e3)),c.push(setInterval(()=>{s.value.past.second+=1},1e3)),c.push(setInterval(()=>{s.value.have.minute-=1},60*1e3)),c.push(setInterval(()=>{s.value.have.second-=1},1e3)))},S=()=>{c.forEach(_=>clearInterval(Number(_))),c=[]};if(typeof f.$route.query.s=="string")try{const _=new Date(parseInt(V.decode(f.$route.query.s)));o.value=_,C()}catch{}return B(o,()=>C()),B(s,()=>N()),(_,m)=>{const T=D("el-date-picker"),i=D("card");return d(),k("div",G,[y(i,{class:"mdui-card mdui-hoverable mdui-textfield picker"},{default:u(()=>[y(T,{style:{width:"95%"},modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=v=>o.value=v),"default-value":new Date(2010,9,1),type:"date",placeholder:"选择你的出生日期","disabled-date":w(g).disabledDate},null,8,["modelValue","default-value","disabled-date"])]),_:1}),o.value&&s.value?(d(),p(i,{key:0,class:"mdui-card mdui-hoverable mdui-textfield"},{default:u(()=>[J,e("div",K,[e("div",M,[e("div",O,[t(a(s.value.past.year),1),P]),e("div",Q,[t(a(s.value.past.month),1),R]),e("div",W,[t(a(s.value.past.day),1),X])]),e("div",Y,[e("div",Z,[t(a(s.value.past.hour),1),ee]),e("div",se,[t(a(s.value.past.minute),1),te]),e("div",le,[t(a(s.value.past.second),1),ae])])])]),_:1})):b("",!0),o.value&&s.value?(d(),p(i,{key:1,class:"mdui-card mdui-hoverable mdui-textfield"},{default:u(()=>[oe,e("div",de,[e("div",ce,[e("div",ne,[t(a(s.value.have.year),1),ie]),e("div",ue,[t(a(s.value.have.month),1),re]),e("div",_e,[t(a(s.value.have.day),1),me])]),e("div",ve,[e("div",he,[t(a(s.value.have.hour),1),pe]),e("div",be,[t(a(s.value.have.minute),1),fe]),e("div",xe,[t(a(s.value.have.second),1),ke])])])]),_:1})):b("",!0),n.value?(d(),p(i,{key:2,class:"mdui-card mdui-hoverable mdui-textfield"},{default:u(()=>[ye,e("div",ge,[(d(!0),k(A,null,H(n.value.blockArr,(v,h)=>(d(),k("div",{key:h,class:z(["block",[v.type,{retired:h===323&&h>=n.value.length.past},{flash:h===n.value.length.past-1}]])},null,2))),128))])]),_:1})):b("",!0),n.value?(d(),p(i,{key:3,class:"mdui-card mdui-hoverable"},{default:u(()=>[we,e("div",Ce,[e("div",Ie,a(I()),1),e("button",{onClick:m[1]||(m[1]=v=>w(E)(w(f),I())),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"},[Ve,t("点击复制 ")])])]),_:1})):b("",!0),y(i,{class:"mdui-card mdui-hoverable mdui-textfield"},{default:u(()=>[Be,De]),_:1})])}}});const Se=U(Le,[["__scopeId","data-v-6a0cbc94"]]);export{Se as default};
