import y from"./TabButtons-BJxEFQt7.js";import{_ as r}from"./RequestList-DGHLXuA2.js";import{m as k,t as l}from"./leaves-BBzuyBmO.js";import{m as q,t as u}from"./claims-Bz9WCDbs.js";import C from"./LeaveRequestItem-Dw8H5oWS.js";import L from"./ExpenseClaimItem-B89PXSXR.js";import{u as p}from"./realtime-5zeDazFm.js";import{a as V,i as $,c,a1 as d,e as b,j as m,k as w,l as x,y as f,a5 as E}from"./frappe-ui-BRfrkV0W.js";import"./index-Ds2wFB9p.js";import"./FormattedField-lMAZlWZI.js";import"./EmployeeAvatar-BUQt5s56.js";import"./WorkflowActionSheet-BvTE3kNb.js";import"./workflow-ByDDimW8.js";import"./formatters-BXUkm3h3.js";const M={class:"w-full"},I={__name:"RequestPanel",setup(g){const a=V("My Requests"),n=$("$socket"),_=c(()=>i(k,q)),v=c(()=>i(l,u));function i(s,e){const t=[...s.data||[],...e.data||[]];return t.forEach(o=>{o.doctype==="Leave Application"?o.component=d(C):o.doctype==="Expense Claim"&&(o.component=d(L))}),R(t)}function R(s){return s.sort((e,t)=>new Date(t.posting_date)-new Date(e.posting_date)).splice(0,10)}return b(()=>{p(n,"Leave Application",()=>l.reload()),p(n,"Expense Claim",()=>u.reload())}),(s,e)=>(m(),w("div",M,[x(y,{buttons:[{label:"My Requests"},{label:"Team Requests"}],modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t)},null,8,["modelValue"]),a.value=="My Requests"?(m(),f(r,{key:0,items:_.value},null,8,["items"])):a.value=="Team Requests"?(m(),f(r,{key:1,items:v.value,teamRequests:!0},null,8,["items"])):E("",!0)]))}};export{I as default};
//# sourceMappingURL=RequestPanel-cWX6kUGJ.js.map