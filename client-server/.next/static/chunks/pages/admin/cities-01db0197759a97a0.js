(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{5356:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/cities",function(){return s(4667)}])},5334:function(e,t,s){"use strict";var l=s(5893),i=s(1664),a=s.n(i);let r=()=>(0,l.jsx)("header",{className:"bg-blue-500 py-4",children:(0,l.jsxs)("nav",{className:"container mx-auto flex items-center justify-between px-4",children:[(0,l.jsx)("h1",{className:"text-white font-bold text-2xl",children:"Housing Prices Tracker"}),(0,l.jsxs)("ul",{className:"flex",children:[(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"text-white hover:text-gray-200 px-3 py-2",href:"/",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"text-white hover:text-gray-200 px-3 py-2",href:"/admin",children:"Admin"})})]})]})});t.Z=r},1465:function(e,t,s){"use strict";var l=s(5893),i=s(1664),a=s.n(i);let r=()=>(0,l.jsx)("nav",{className:" h-full w-64 bg-gray-100",children:(0,l.jsxs)("ul",{className:"list-none p-0 m-0 mt-12",children:[(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white ",href:"/admin/houses",children:"Houses"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white ",href:"/admin/regions",children:"Regions"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white",href:"/admin/cities",children:"Cities"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white",href:"/admin/zillow-estimates",children:"Zillow Estimates"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white",href:"/admin/region-statistics",children:"Region Statistics"})})]})});t.Z=r},4667:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return b},default:function(){return j}});var l=s(5893),i=s(5334),a=s(1465),r=s(7294),n=s(6154),c=s(6167);let d=c.f+"/api/Cities";n.Z.interceptors.response.use(e=>e,e=>{throw console.error(e),e});let o=async()=>{let e=await n.Z.get(d);return e.data},x=async e=>{let t=c.f+"/api/Cities/",s=await n.Z.post(t,e);return s.data},h=async e=>{let t=c.f+"/api/Cities/"+e.city_id,s=await n.Z.put(t,e);return s.data},m=async e=>{let t=await n.Z.delete(d+"/"+e);return t.data};var u={getCities:o,updateCity:h,deleteCity:m,createCity:x};let f=e=>{let{setShowCreateCity:t,setStateCities:s,currentCity:i,states:a}=e,[n,c]=(0,r.useState)(""),[d,o]=(0,r.useState)("");(0,r.useEffect)(()=>{i&&(c(i.city_name),o(i.state))},[i]);let x=async()=>{console.log("onSubmit");try{let e=a.find(e=>e.name===d);if(e){let l={city_name:n,state_id:null==e?void 0:e.state_id};await u.createCity(l);let i=await u.getCities();s(i),t(!1)}else throw Error("State not found")}catch(e){console.log(e)}},h=async()=>{console.log("onSubmit");try{if(i){console.log(a);let e=a.find(e=>e.name===d);if(e){i.state_id=null==e?void 0:e.state_id;let l={city_id:i.city_id,city_name:n,state_id:null==e?void 0:e.state_id};await u.updateCity(l);let a=await u.getCities();s(a),t(!1)}else throw Error("State not found")}}catch(e){console.log(e)}};return(0,l.jsxs)("div",{className:"fixed h-screen w-screen flex items-center justify-center ",children:[(0,l.jsxs)("div",{className:"bg-white px-8 py-8 z-10 rounded flex flex-col items-center",children:[i?(0,l.jsx)("h2",{className:"text-xl text-center",children:"Edit City"}):(0,l.jsx)("h2",{className:"text-xl text-center",children:"Add City"}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-2 gap-y-2 mt-6",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{htmlFor:"city_name",className:"block text-sm font-medium text-gray-700 text-left pl-2",children:"City Name"}),(0,l.jsx)("input",{type:"text",name:"city_name",id:"city_name",value:n,onChange:e=>c(e.target.value),className:" border rounded-md pl-2 pr-12 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",placeholder:"Street"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{htmlFor:"state_name",className:"block text-sm font-medium text-gray-700 text-left pl-2",children:"State Name"}),(0,l.jsx)("input",{type:"text",name:"state_name",id:"state_name",value:d,onChange:e=>o(e.target.value.toString()),className:" border rounded-md pl-2 pr-12 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",placeholder:"state_name"})]})]}),i?(0,l.jsx)("button",{className:"rounded px-4 py-2 shadow text-white bg-black mt-8 hover:bg-black active:scale-95 mr-6",onClick:h,children:"Submit"}):(0,l.jsx)("button",{className:"rounded px-4 py-2 shadow text-white bg-black mt-8 hover:bg-black active:scale-95 mr-6",onClick:x,children:"Submit"}),(0,l.jsx)("div",{className:"flex w-full justify-end",children:(0,l.jsx)("button",{className:"text-black mt-8 active:scale-95 hover:text-black hover:underline hover:underline-offset-1 ",onClick:()=>t(!1),children:"Cancel"})})]}),(0,l.jsx)("div",{className:"fixed inset-0 bg-black opacity-50 "})]})},y=e=>{let{cities:t,states:s}=e,[n,c]=(0,r.useState)(t),[d,o]=(0,r.useState)(!1),[x,h]=(0,r.useState)(void 0);return(0,l.jsxs)("div",{className:"bg-gray-50 h-screen",children:[(0,l.jsx)(i.Z,{}),(0,l.jsxs)("div",{className:"flex flex-row h-screen ",children:[(0,l.jsx)(a.Z,{}),(0,l.jsx)("div",{className:"flex flex-row justify-center w-full bg-gray-50",children:(0,l.jsx)(p,{states:s,cities:n,setStateCities:c,setShowCreateCity:o,setCurrentCity:h})}),d&&(0,l.jsx)(f,{states:s,setStateCities:c,setShowCreateCity:o,currentCity:x})]})]})},p=e=>{let{setShowCreateCity:t,setCurrentCity:s,setStateCities:i,cities:a,states:r}=e,n=()=>{s(void 0),t(!0)},c=async e=>{s(e),t(!0)},d=async e=>{try{await u.deleteCity(e);let t=a.filter(t=>t.city_id!==e);i(t)}catch(e){console.log(e)}};return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"w-full h-screen",children:(0,l.jsx)("div",{className:"container mx-auto py-12",children:(0,l.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,l.jsx)("div",{className:"text-center max-w-screen-lg ",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Cities"}),(0,l.jsx)("label",{className:"mr-2",children:"Filter By State"}),(0,l.jsx)("input",{placeholder:"State",className:" border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"}),(0,l.jsxs)("div",{className:"shadow bg-white px-8 py-8 rounded text-center mt-4",children:[(0,l.jsxs)("table",{className:"table-auto w-full",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"px-4 py-2",children:"#"}),(0,l.jsx)("th",{className:"px-4 py-2",children:"City"}),(0,l.jsx)("th",{className:"px-4 py-2",children:"State"}),(0,l.jsx)("th",{})]})}),(0,l.jsx)("tbody",{children:a.map((e,t)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border px-4 py-2",children:t+1}),(0,l.jsx)("td",{className:"border px-4 py-2",children:e.city_name}),(0,l.jsx)("td",{className:"border px-4 py-2",children:e.state}),(0,l.jsx)("td",{className:"px-4",children:(0,l.jsx)("button",{className:"hover:underline hover:underline-offset-1",onClick:()=>c(e),children:"Edit"})}),(0,l.jsx)("td",{className:"px-4",children:(0,l.jsx)("button",{className:"hover:underline hover:underline-offset-1",onClick:()=>d(e.city_id),children:"Delete"})})]},e.city_id))})]}),(0,l.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2",onClick:n,children:"Add City"})]})]})})})})})})};var b=!0,j=y},6167:function(e,t,s){"use strict";s.d(t,{f:function(){return l}});let l="http://flip1.engr.oregonstate.edu:9178"}},function(e){e.O(0,[664,154,774,888,179],function(){return e(e.s=5356)}),_N_E=e.O()}]);