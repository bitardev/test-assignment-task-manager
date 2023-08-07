(function(){"use strict";var e={9661:function(e,t,s){var i=s(9242),a=s(3396);function n(e,t,s,i,n,o){const l=(0,a.up)("TaskManager");return(0,a.wg)(),(0,a.j4)(l)}var o=s(4870),l=s(7139),r=s(5972),d=s(21),c=s(1697),u=s(65),f=s(4680),p=s(4962),m=s(2758);const g=(0,a._)("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),v={class:"fixed inset-0 overflow-hidden"},x={class:"absolute inset-0 overflow-hidden"},b={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},y={class:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"},k=(0,a._)("span",{class:"absolute -inset-2.5"},null,-1),h=(0,a._)("span",{class:"sr-only"},"Close panel",-1),w={class:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"},_={class:"px-4 sm:px-6"},T={class:"relative mt-6 flex-1 px-4 sm:px-6"},O={class:"pb-4"},U=(0,a._)("label",{for:"title",class:"block text-sm font-medium leading-6 text-gray-900"},"Title",-1),L={class:"mt-2"},S=(0,a._)("label",{for:"description",class:"block text-sm font-medium leading-6 text-gray-900"},"Description",-1),j={class:"mt-2"};var C={__name:"AddTask",props:["open","task"],emits:["update:isDialogOpen"],setup(e,{emit:t}){const s=e,n=(0,u.oR)(),l=(0,o.iH)(""),r=(0,o.iH)(""),d=()=>{setTimeout((()=>{l.value="",r.value=""}),500)},c=()=>{d(),t("update:isDialogOpen",!1)};(0,a.ic)((()=>{l.value=s.task?.title||"",r.value=s.task?.description||""}));const C=()=>{""!==l.value&&""!==r.value&&(console.log(l.value,r.value),s.task.title?n.dispatch("editTask",{id:s.task.id,title:l.value,description:r.value}):n.dispatch("addTask",{title:l.value,description:r.value})),c(),d()};return(e,t)=>((0,a.wg)(),(0,a.j4)((0,o.SU)(f.Q),{as:"template",show:s.open},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(p.Vq),{as:"div",class:"relative z-10",onClose:c},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(f.x),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,a.w5)((()=>[g])),_:1}),(0,a._)("div",v,[(0,a._)("div",x,[(0,a._)("div",b,[(0,a.Wm)((0,o.SU)(f.x),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(p.EM),{class:"pointer-events-auto relative w-screen max-w-md"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(f.x),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,a.w5)((()=>[(0,a._)("div",y,[(0,a._)("button",{type:"button",class:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:c},[k,h,(0,a.Wm)((0,o.SU)(m.Z),{class:"h-6 w-6","aria-hidden":"true"})])])])),_:1}),(0,a._)("div",w,[(0,a._)("div",_,[(0,a.Wm)((0,o.SU)(p.$N),{class:"text-base font-semibold leading-6 text-gray-900"},{default:(0,a.w5)((()=>[(0,a.Uk)("Add new task")])),_:1})]),(0,a._)("div",T,[(0,a._)("div",O,[U,(0,a._)("div",L,[(0,a.wy)((0,a._)("input",{id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),name:"title",type:"text",required:"",class:"block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[i.nr,l.value]])])]),(0,a._)("div",null,[S,(0,a._)("div",j,[(0,a.wy)((0,a._)("textarea",{rows:"4","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),id:"description",name:"description",required:"",class:"block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[i.nr,r.value]])])])]),(0,a._)("div",{class:"flex justify-end px-4 sm:px-6"},[(0,a._)("button",{onClick:c,type:"button",class:"inline-flex items-center rounded-md bg-gray-200 border-spacing-1 px-6 py-2 mr-2 text-sm font-semibold text-gray-500 shadow-sm hover:bg-gray-100 outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Cancel "),(0,a._)("button",{onClick:C,type:"button",class:"inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Save ")])])])),_:1})])),_:1})])])])])),_:1})])),_:1},8,["show"]))}};const W=C;var D=W;const Z={class:"relative flex min-h-screen flex-col justify-center bg-gray-50 py-6 sm:py-12"},M={class:"task-manager-wrapper px-6"},H={class:"flex justify-between pb-6"},F=(0,a._)("h3",{class:"self-center"},"Task Manager",-1),q={class:"grid gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},z={class:"flex-col w-full"},A={class:"task-manager--header pb-4 flex justify-between content-center"},V={class:"text-left font-bold self-center"},$={class:"grid gap-2 grid-cols-2"},E=["onClick"],N=["onClick"],P={class:"text-left"};var R={__name:"TaskManager",setup(e){const t=(0,u.oR)(),s=(0,a.Fl)((()=>t.state.tasksList));(0,a.bv)((()=>{0===s.value.length&&t.dispatch("getTaskList","https://64cad73f700d50e3c7054fc8.mockapi.io/tasks")}));const i=(0,o.iH)(!1),n=(0,o.iH)({}),f=e=>{n.value=e,i.value=!0},p=()=>{n.value={},i.value=!0};return(e,u)=>((0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("div",M,[(0,a._)("div",H,[F,(0,a._)("button",{onClick:u[0]||(u[0]=e=>p()),type:"button",class:"inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},[(0,a.Wm)((0,o.SU)(r.Z),{class:"-ml-0.5 mr-1.5 h-5 w-5","aria-hidden":"true"}),(0,a.Uk)(" New task ")])]),(0,a._)("div",q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.value,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"flex bg-white justify-start px-3 pt-6 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl w-full rounded-lg sm:px-5"},[(0,a._)("div",z,[(0,a._)("div",A,[(0,a._)("h4",V,(0,l.zw)(e.title),1),(0,a._)("div",$,[(0,a._)("button",{onClick:t=>f(e),type:"button",class:"inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},[(0,a.Wm)((0,o.SU)(d.Z),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})],8,E),(0,a._)("button",{onClick:s=>(0,o.SU)(t).dispatch("deleteTask",e.id),type:"button",class:"inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},[(0,a.Wm)((0,o.SU)(c.Z),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})],8,N)])]),(0,a._)("p",P,(0,l.zw)(e.description),1)])])))),128))]),(0,a.Wm)(D,{isDialogOpen:i.value,"onUpdate:isDialogOpen":u[1]||(u[1]=e=>i.value=e),open:i.value,task:n.value},null,8,["isDialogOpen","open","task"])])]))}};const K=R;var Q=K,Y={name:"App",components:{TaskManager:Q}},B=s(89);const G=(0,B.Z)(Y,[["render",n]]);var I=G,J=(s(7658),s(4161)),X=(0,u.MT)({namespaced:!0,state:{tasksList:[]},getters:{tasksList(e){return e.tasksList}},mutations:{initTasksList(e,t){e.tasksList=t},updateTasksList(e,t){e.tasksList.push(t)},deleteTaskFromStore(e,t){e.tasksList.splice(e.tasksList.indexOf(t),1)}},actions:{async addTask({state:e,commit:t,getters:s},i){const a="https://64cad73f700d50e3c7054fc8.mockapi.io/tasks",n=await J.Z.post(a,{title:i.title,description:i.description});t("updateTasksList",await n.data),console.log(n.data.id),console.log(n.data.title),console.log(n.data.description),console.log(n.data.json)},async editTask({state:e,commit:t,getters:s},i){const a=e.tasksList.find((e=>e.id===i.id));a.title=i.title,a.description=i.description;const n=`https://64cad73f700d50e3c7054fc8.mockapi.io/tasks/${i.id}`;await J.Z.put(n,{title:i.title,description:i.description})},getTaskList({commit:e,getters:t},s){J.Z.get(s).then((t=>{e("initTasksList",t.data||[])}))},deleteTask({state:e,commit:t,getters:s},i){const a=e.tasksList.find((e=>e.id===i)),n=`https://64cad73f700d50e3c7054fc8.mockapi.io/tasks/${i}`;t("deleteTaskFromStore",a),J.Z.delete(n)}},modules:{}});(0,i.ri)(I).use(X).mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,n){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],n=e[c][2];for(var l=!0,r=0;r<i.length;r++)(!1&n||o>=n)&&Object.keys(s.O).every((function(e){return s.O[e](i[r])}))?i.splice(r--,1):(l=!1,n<o&&(o=n));if(l){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,a,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,n,o=i[0],l=i[1],r=i[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(r)var c=r(s)}for(t&&t(i);d<o.length;d++)n=o[d],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},i=self["webpackChunktest_assignment_vue_tailwind_task_manager"]=self["webpackChunktest_assignment_vue_tailwind_task_manager"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(9661)}));i=s.O(i)})();
//# sourceMappingURL=app.b448d565.js.map