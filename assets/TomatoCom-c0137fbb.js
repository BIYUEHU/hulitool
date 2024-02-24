import{d as N,r as o,E as O,c as d,j as h,k as x,y as S,o as c,b as e,e as f,v as I,B as T,g as r,t as b,G as $,m as w,p as M,h as U,_ as K}from"./index-319a5c0a.js";const a=t=>(M("data-v-42ce69e4"),t=t(),U(),t),P={style:{"margin-top":"20px"}},W=a(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"番茄工作法")])],-1)),j={class:"mdui-card-content container"},z={class:"mdui-textfield"},G=a(()=>e("label",{class:"mdui-textfield-label"},"番茄时长（分钟）",-1)),X={class:"mdui-textfield"},q=a(()=>e("label",{class:"mdui-textfield-label"},"休息时长(分钟)",-1)),F={style:{"margin-left":"10px"},class:"mdui-checkbox"},H=a(()=>e("i",{class:"mdui-checkbox-icon"},null,-1)),J=a(()=>e("i",{class:"mdui-icon material-icons"},"access_alarm",-1)),L=a(()=>e("i",{class:"mdui-icon material-icons"},"stop",-1)),Q=a(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"统计版")])],-1)),Y={class:"mdui-card-content container"},Z=a(()=>e("strong",null,null,-1)),E=a(()=>e("div",{class:"mdui-card-header-title"},[e("h4",{class:"mdui-text-color-theme-accent"},[e("strong",null,"什么是番茄？")])],-1)),A=a(()=>e("div",{class:"mdui-card-content container"},[e("i",null,"番茄工作法是简单易行的时间管理方法。"),e("i",null,"使用番茄工作法，选择一个待完成的任务，将番茄时间设为25分钟，专注工作，中途不允许做任何与该任务无关的事，直到番茄时钟响起，然后进行短暂休息一下（5分钟就行），然后再开始下一个番茄。每4个番茄时段多休息一会儿。"),e("i",null," 番茄工作法极大地提高了工作的效率，还会有意想不到的成就感。"),e("h5",null,"番茄工作法流程"),e("li",null," 每天开始的时候规划这一天要完成的几项任务，将任务逐项写在列表里（或记在软件的清单里） "),e("li",null,"设定你的番茄钟（定时器、软件、闹钟等），时间是25分钟。"),e("li",null,"开始完成第一项任务，直到番茄钟响铃或提醒（25分钟到）。"),e("li",null,"停止工作，并在列表里该项任务后画个X。"),e("li",null,"休息3~5分钟，活动、喝水、方便等等。"),e("li",null," 开始下一个番茄钟，继续该任务。一直循环下去，直到完成该任务，并在列表里将该任务划掉。 "),e("li",null,"每四个番茄钟后，休息25分钟。"),e("h5",{class:"mdui-text-color-red"},"注意事项"),e("li",null,"在某个番茄钟的过程里，如果突然想起要做什么事情"),e("li",null," 非得马上做不可的话，停止这个番茄钟并宣告它作废（哪怕还剩5分钟就结束了），去完成这件事情，之后再重新开始同一个番茄钟； "),e("li",null," 不是必须马上去做的话，在列表里该项任务后面标记一个逗号（表示打扰），并将这件事记在另一个列表里（比如叫“计划外事件”），然后接着完成这个番茄钟。 ")],-1));var R=(t=>(t[t.STOP=0]="STOP",t[t.WORK=1]="WORK",t[t.REST=2]="REST",t))(R||{});const ee=N({__name:"TomatoCom",setup(t){const m=o(25),v=o(5),_=o(!0),g=o(0),s=o(0),y=o(),n=o(0),B=O(()=>{const u=Math.floor(n.value/60),l=n.value%60;return`${u}:${l<10?"0":""}${l}`}),k=()=>{s.value=1,n.value=m.value*60,V()},C=(u=!1)=>{if(clearInterval(y.value),u&&s.value===1&&g.value++,_.value&&u){if(s.value===2){k();return}s.value===1&&D();return}s.value=0},V=()=>{y.value=setInterval(()=>{n.value--,n.value<=0&&C(!0)},1e3)},D=()=>{s.value=2,n.value=v.value*60,V()};return(u,l)=>{const p=S("card");return c(),d("div",P,[h(p,{class:"mdui-card mdui-hoverable"},{default:x(()=>[W,e("div",j,[e("div",z,[G,f(e("input",{class:"mdui-textfield-input","onUpdate:modelValue":l[0]||(l[0]=i=>m.value=i),maxlength:"6",type:"number"},null,512),[[I,m.value]])]),e("div",X,[q,f(e("input",{class:"mdui-textfield-input","onUpdate:modelValue":l[1]||(l[1]=i=>v.value=i),maxlength:"6",type:"number"},null,512),[[I,v.value]])]),e("label",F,[f(e("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=i=>_.value=i)},null,512),[[T,_.value]]),H,r(" 自动开始下一个番茄 ")])]),e("div",null,[s.value?(c(),d("button",{key:1,onClick:l[3]||(l[3]=i=>C()),class:"child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"},[L,r("停止番茄 ")])):(c(),d("button",{key:0,onClick:k,class:"child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"},[J,r("开始专注 ")]))])]),_:1}),h(p,{class:"mdui-card mdui-hoverable mdui-textfield"},{default:x(()=>[Q,e("div",Y,[e("div",null,[e("span",null,"已完成："+b(g.value),1)]),e("div",null,[e("span",null,"状态："+b(R[s.value]),1)]),s.value?(c(),d("h1",{key:0,class:"time",style:$({color:s.value===1?"orange":"lightgreen"})},[Z,r(b(B.value),1)],4)):w("",!0)])]),_:1}),h(p,{class:"mdui-card mdui-hoverable mdui-textfield"},{default:x(()=>[E,A]),_:1})])}}});const le=K(ee,[["__scopeId","data-v-42ce69e4"]]);export{le as default};