import{d as m,r as d,c,j as p,f as i,b as t,e as v,F as b,o as f,M as l,K as u,A as C,q as h,N as k}from"./index-319a5c0a.js";import{o as _,T as x}from"./index-49b83028.js";import{j as V}from"./index-c6b758bf.js";const $=t("br",null,null,-1),w={class:"mdui-card"},J=t("div",{class:"mdui-card-header mdui-row"},[t("div",{class:"mdui-card-header-title"},[t("h4",null,"Output")])],-1),S={class:"mdui-card-content"},g=["innerHTML"],T=m({__name:"JsCom",setup(j){const e=d(""),o=d(""),a=[V(),_],{proxy:r}=h();return(y,n)=>(f(),c(b,null,[p(i(x),{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=s=>e.value=s),style:{height:"400px"},autofocus:!0,"indent-with-tab":!0,tabSize:4,extensions:a},null,8,["modelValue"]),$,t("button",{onClick:n[1]||(n[1]=s=>e.value?o.value=i(l).run(e.value):i(u)(1)),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple","mdui-tooltip":"{content: '浏览器环境运行JS'}"},"运行"),t("button",{onClick:n[2]||(n[2]=s=>e.value?e.value:i(u)(1)),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple","mdui-tooltip":"{content: '加密JavaScript代码并压缩'}"},"混淆"),t("button",{onClick:n[3]||(n[3]=s=>e.value?e.value=i(l).format(e.value):i(u)(1)),class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"},"格式化"),t("button",{onClick:n[4]||(n[4]=s=>e.value?e.value=i(l).zip(e.value):i(u)(1)),class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple","mdui-tooltip":"{content: '将代码压缩成一行'}"},"压缩"),t("button",{onClick:n[5]||(n[5]=s=>i(C)(i(r),e.value)),class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"},"复制"),t("div",w,[J,t("div",S,[t("span",{innerHTML:o.value},null,8,g)])]),v(t("iframe",null,null,512),[[k,!1]])],64))}});export{T as default};