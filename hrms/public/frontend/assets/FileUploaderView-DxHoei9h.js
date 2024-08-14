import{E as D,a as p,f as F,j as u,k as f,x as e,l as o,q as a,t as w,F as I,H as B,K as g,n as i,v as m,a6 as _,D as A,a5 as N,a8 as S,a9 as U}from"./frappe-ui-BRfrkV0W.js";import{I as j}from"./index-Ds2wFB9p.js";import{F as M}from"./WorkflowActionSheet-BvTE3kNb.js";const h=n=>(S("data-v-80243cf5"),n=n(),U(),n),P={class:"flex flex-col gap-3 py-4"},$={class:"file-select"},q=h(()=>e("h2",{class:"text-base font-semibold text-gray-800 pb-4"},"Attachments",-1)),E={class:"select-button cursor-pointer"},H={class:"flex flex-col w-full border shadow-sm items-center rounded p-3 gap-2"},K=h(()=>e("span",{class:"block text-sm font-normal leading-5 text-gray-700"}," Upload images or documents ",-1)),L={key:0,class:"w-full"},O={class:"w-full flex flex-col items-center gap-2"},R={class:"flex flex-row items-center justify-between text-gray-700 text-sm"},T=["onClick"],z=h(()=>e("h2",{class:"text-lg font-bold"},"Delete Attachment",-1)),G={class:"font-bold"},J={class:"flex flex-row gap-4"},Q={__name:"FileUploaderView",props:{modelValue:{type:Object,required:!0}},emits:["handle-file-select","handle-file-delete"],setup(n,{emit:y}){let l=p(!1),d=p(!1),c=p({});const v=y;function b(r){c.value=r,d.value=!0}function k(r){c.value=r,l.value=!0}function V(){v("handle-file-delete",c.value),l.value=!1}return(r,s)=>{const x=F("Button");return u(),f("div",P,[e("label",$,[q,e("div",E,[e("div",H,[o(a(w),{name:"upload",class:"h-6 w-6 text-gray-700"}),K]),e("input",{class:"hidden",ref:"input",type:"file",multiple:"",accept:"*",onChange:s[0]||(s[0]=t=>v("handle-file-select",t))},null,544)])]),n.modelValue.length?(u(),f("div",L,[e("ul",O,[(u(!0),f(I,null,B(n.modelValue,(t,C)=>(u(),f("li",{class:"bg-gray-100 rounded p-2 w-full",key:C},[e("div",R,[e("span",{class:"grow",onClick:W=>b(t)},g(t.file_name||t.name),9,T),o(a(w),{name:"x",class:"h-4 w-4 cursor-pointer text-gray-700",onClick:()=>k(t)},null,8,["onClick"])])]))),128))]),o(a(A),{modelValue:a(l),"onUpdate:modelValue":s[2]||(s[2]=t=>_(l)?l.value=t:l=t)},{"body-title":i(()=>[z]),"body-content":i(()=>[e("p",null,[m(" Are you sure you want to delete the attachment "),e("span",G,g(a(c).file_name),1),m(" ? ")])]),actions:i(()=>[e("div",J,[o(x,{variant:"outline",class:"py-5 w-full",onClick:s[1]||(s[1]=t=>_(l)?l.value=!1:l=!1)},{default:i(()=>[m(" Cancel ")]),_:1}),o(x,{variant:"solid",theme:"red",onClick:V,class:"py-5 w-full"},{default:i(()=>[m(" Delete ")]),_:1})])]),_:1},8,["modelValue"]),o(a(j),{ref:"modal","is-open":a(d),onDidDismiss:s[3]||(s[3]=t=>_(d)?d.value=!1:d=!1)},{default:i(()=>[o(M,{file:a(c)},null,8,["file"])]),_:1},8,["is-open"])])):N("",!0)])}}},ee=D(Q,[["__scopeId","data-v-80243cf5"]]);export{ee as default};
//# sourceMappingURL=FileUploaderView-DxHoei9h.js.map