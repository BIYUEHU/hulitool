import{d as v,r as o,a5 as c,c as s,b as e,e as h,v as p,f as u,g as d,t as b,m as _,o as a,K as r}from"./index-319a5c0a.js";const k={class:"mdui-textfield"},x=e("i",{class:"mdui-icon material-icons mdui-text-color-lime-a700"},"account_circle",-1),f=e("label",{class:"mdui-textfield-label"},"游戏ID",-1),y={class:"mdui-row-xs-1"},g={class:"mdui-col"},D=e("br",null,null,-1),C={key:0,class:"mdui-card mdui-hoverable"},V=e("div",{class:"mdui-card-header mdui-row"},[e("div",{class:"mdui-card-header-title"},[e("h4",null,"查询结果")])],-1),w={class:"mdui-card-content"},B={key:0},N=["src"],M=e("br",null,null,-1),R={key:0},T=["src"],j={key:1},E=e("br",null,null,-1),I={key:0},K=["src"],S={key:1},U=e("br",null,null,-1),$={key:1},q=e("br",null,null,-1),z=e("div",{class:"mdui-card-header-subtitle"},null,-1),H=v({__name:"McskinCom",setup(A){const t=o(c("dataRes")),m=o(c("getData")),l=o("");return(F,n)=>(a(),s("div",null,[e("div",k,[x,f,h(e("input",{class:"mdui-textfield-input","onUpdate:modelValue":n[0]||(n[0]=i=>l.value=i),maxlength:"30",type:"text"},null,512),[[p,l.value]])]),e("div",y,[e("div",g,[e("button",{onClick:n[1]||(n[1]=i=>l.value&&m.value({name:l.value})||u(r)(1)),class:"mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"让我查查！")])]),D,t.value.code?(a(),s("div",C,[V,e("div",w,[t.value.code===500?(a(),s("div",B,[e("span",null,[d("皮肤: "),e("img",{src:t.value.data.skin},null,8,N),M]),e("span",null,[d("披风: "),t.value.data.cape?(a(),s("span",R,[e("img",{src:t.value.data.cape},null,8,T)])):(a(),s("span",j,"无")),E]),e("span",null,[d("头颅: "),t.value.data.avatar?(a(),s("span",I,[e("img",{src:t.value.data.avatar},null,8,K)])):(a(),s("span",S,"无")),U])])):t.value.code===502?(a(),s("div",$,b(u(r)("用户不存在！","red"),t.value={}),1)):_("",!0)]),q,z])):_("",!0)]))}});export{H as default};