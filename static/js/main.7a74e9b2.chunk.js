(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(3),c=a.n(o);a(16),a(17);var i=e=>{let{name:t,description:a,value:n,setValue:o}=e;return l.a.createElement("div",{className:"todo-input-item"},l.a.createElement("label",null,t,":"),l.a.createElement("input",{value:n,onChange:e=>{o(e.target.value)},type:"text",placeholder:a}))};var r=e=>{let{onClick:t}=e;return l.a.createElement("div",{className:"todo-input-item"},l.a.createElement("button",{onClick:t,className:"primary-btn",type:"button"},"Add"))};var s=e=>{let{isCompletedScreen:t,setIsCompletedScreen:a}=e;return l.a.createElement("div",{className:"btn-area"},l.a.createElement("button",{onClick:()=>a(!1),className:"secondaryBtn ".concat(!1===t&&"active")},"To Do"),l.a.createElement("button",{onClick:()=>a(!0),className:"secondaryBtn ".concat(!0===t&&"active")},"Completed"))},d=a(4),m=a(6),u=a(5);var p=e=>{let{todoTitle:t,todoDescription:a,handleDeleteTodo:n,handleDeleteCompletedTodo:o,id:c,handleCommit:i,index:r,isCompletedScreen:s}=e;return l.a.createElement("div",{className:"todo-list-item"},l.a.createElement("div",null,l.a.createElement("h3",null,t),l.a.createElement("p",null,a)),l.a.createElement("div",null,l.a.createElement(d.a,{onClick:()=>{s?o(c):n(c)},title:"Delete?",className:"icon"}),s?l.a.createElement(u.a,{className:"icon",onClick:()=>i(c)}):l.a.createElement(m.a,{onClick:()=>i(c),title:"Completed?",className:" check-icon"})))};var E=e=>{let{handleClear:t}=e;return l.a.createElement("button",{onClick:t,className:"clear"},"Clear")};var C=function(){const[e,t]=Object(n.useState)(""),[a,o]=Object(n.useState)(""),[c,d]=Object(n.useState)([]),[m,u]=Object(n.useState)([]),[C,h]=Object(n.useState)(!1);Object(n.useEffect)(()=>{(async()=>{await fetch("https://jsonplaceholder.typicode.com/todos").then(e=>e.json()).then(e=>console.log(e))})()},[]);const v=e=>{const t=new Date;let a=t.getDate(),n=t.getMonth(),l=t.getFullYear(),o=t.getHours(),i=t.getMinutes(),r=t.getSeconds(),s="".concat(a,"-").concat(n,"-").concat(l," at ").concat(o,":").concat(i,":").concat(r),d={...c.find(t=>t.id===e),completed_at:s},p=[...m,d];console.log(p),u(p),g(e)},b=e=>{let t={...m.find(t=>t.id===e)};d([...c,t]),u(m.filter(t=>t.id!==e))},g=e=>{d(c.filter((t,a)=>t.id!==e))};return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"My Todos"),l.a.createElement("div",{className:"todo-wrapper"},l.a.createElement("div",{className:"todo-input"},l.a.createElement(i,{value:e,setValue:t,name:"Title",description:"What's the title of your To Do?"}),l.a.createElement(i,{value:a,setValue:o,name:"Description",description:"What's the description of your To Do?"}),l.a.createElement(r,{onClick:()=>{if(a&&e){let n={id:(new Date).getMilliseconds(),title:e,description:a},l=[...c];l.push(n),d(l),t(""),o("")}}})),l.a.createElement("div",{className:"clear-wrapper"},l.a.createElement(E,{handleClear:()=>{d([])}}),l.a.createElement(s,{isCompletedScreen:C,setIsCompletedScreen:h})),l.a.createElement("div",{className:"todo-list"},!0===C?null===m||void 0===m?void 0:m.map((e,t)=>l.a.createElement(p,{handleCommit:b,key:t,index:t,handleDeleteTodo:g,id:e.id,isCompletedScreen:C,todoTitle:e.title,todoDescription:e.description})):c.map((e,t)=>l.a.createElement(p,{handleCommit:v,key:t,index:t,handleDeleteTodo:g,isCompletedScreen:C,id:e.id,todoTitle:e.title,todoDescription:e.description})))))};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:o,getTTFB:c}=t;a(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(C,null)),h()},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.7a74e9b2.chunk.js.map