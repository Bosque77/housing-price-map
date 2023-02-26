(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[168],{4307:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/regions",function(){return t(3123)}])},5334:function(e,i,t){"use strict";var s=t(5893),n=t(1664),a=t.n(n);let l=()=>(0,s.jsx)("header",{className:"bg-blue-500 py-4",children:(0,s.jsxs)("nav",{className:"container mx-auto flex items-center justify-between px-4",children:[(0,s.jsx)("h1",{className:"text-white font-bold text-2xl",children:"Housing Prices Tracker"}),(0,s.jsxs)("ul",{className:"flex",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"text-white hover:text-gray-200 px-3 py-2",href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"text-white hover:text-gray-200 px-3 py-2",href:"/admin",children:"Admin"})})]})]})});i.Z=l},1465:function(e,i,t){"use strict";var s=t(5893),n=t(1664),a=t.n(n);let l=()=>(0,s.jsx)("nav",{className:" h-full w-64 bg-gray-100",children:(0,s.jsxs)("ul",{className:"list-none p-0 m-0 mt-12",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white ",href:"/admin/houses",children:"Houses"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white ",href:"/admin/regions",children:"Regions"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white",href:"/admin/cities",children:"Cities"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white",href:"/admin/zillow-estimates",children:"Zillow Estimates"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"block text-black py-3 px-6 hover:bg-gray-700 hover:text-white",href:"/admin/region-statistics",children:"Region Statistics"})})]})});i.Z=l},4358:function(e,i,t){"use strict";t.d(i,{N0:function(){return a},UA:function(){return n},b6:function(){return l},cA:function(){return s}});let s=[{city_id:1,city_name:"San Francisco",state:"California"},{city_id:2,city_name:"New York",state:"New York"},{city_id:3,city_name:"Berkley",state:"California"},{city_id:8,city_name:"Dallas",state:"Texas"}],n=[{region_id:1,region_name:"Bay Area",cities:["San Francisco","Berkley"],region_description:"\n      The Bay Area is a metropolitan region located in Northern California, USA, that encompasses the cities and surrounding areas surrounding the San Francisco Bay. The region is known for its diverse culture, innovative technology industry, and stunning natural beauty.\n\n      The Bay Area is home to several major cities, including San Francisco, Oakland, and San Jose, as well as many smaller towns and suburbs. "},{region_id:2,region_name:"New York",cities:["New York City"],region_description:"\n    New York is a bustling metropolitan region located in the northeastern part of the United States, known for its iconic skyline, diverse culture, and vibrant energy. \n    The region is home to the city of New York, which is made up of five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. \n    "},{region_id:3,region_name:"Texas Triangle",cities:["Dallas"],region_description:"\n    The Texas Triangle is a region in the southern part of the United States that encompasses several major cities, \n    including Houston, Dallas, and Austin, as well as many smaller towns and suburbs.\n    "}],a=[{zillow_estimate_id:1,zestimate:2245681,date:"2022-01-01",home_id:1},{zillow_estimate_id:2,zestimate:1245341,date:"2022-01-01",home_id:2},{zillow_estimate_id:3,zestimate:1245481,date:"2022-01-01",home_id:3},{zillow_estimate_id:4,zestimate:7245681,date:"2022-01-01",home_id:4},{zillow_estimate_id:5,zestimate:945681,date:"2022-01-01",home_id:5},{zillow_estimate_id:6,zestimate:4245681,date:"2022-01-01",home_id:6},{zillow_estimate_id:7,zestimate:3245681,date:"2022-01-01",home_id:7},{zillow_estimate_id:8,zestimate:1245681,date:"2022-01-01",home_id:8}],l=[{home_id:1,street:"123 Main St",sq_ft:1200,num_of_bed:2,num_of_bath:1,year_built:1990,lat:37.123,lng:-122.456,zip:"94107",city:"San Fancisco",city_id:1},{home_id:2,street:"456 Elm St from the burrow of the dog",sq_ft:1500,num_of_bed:3,num_of_bath:2,year_built:1980,lat:40.789,lng:-73.012,zip:"10001",city:"New York",city_id:2},{home_id:3,street:"789 Oak St",sq_ft:1700,num_of_bed:4,num_of_bath:3,year_built:1970,lat:34.567,lng:-118.91,zip:"90001",city:"Los Angeles",city_id:3},{home_id:4,street:"246 Birch St",sq_ft:1300,num_of_bed:3,num_of_bath:1,year_built:2e3,lat:41.876,lng:-87.654,zip:"60601",city:"Chicago",city_id:4}]},3123:function(e,i,t){"use strict";t.r(i);var s=t(5893),n=t(5334),a=t(1465),l=t(4358),r=t(7294);let o=()=>{let[e,i]=(0,r.useState)(void 0);return(0,s.jsxs)("div",{className:"bg-gray-50 h-screen",children:[(0,s.jsx)(n.Z,{}),(0,s.jsxs)("div",{className:"flex flex-row h-screen ",children:[(0,s.jsx)(a.Z,{}),(0,s.jsxs)("div",{className:"flex flex-col items-center w-full bg-gray-50 mx-auto",children:[(0,s.jsx)(c,{setCurrentRegion:i}),e&&(0,s.jsxs)("div",{className:"flex flex-col w-3/4 bg-white px-4 py-4 shadow",children:[(0,s.jsx)("h2",{className:"text-xl font-bold ",children:e.region_name}),(0,s.jsx)("textarea",{className:"mt-4 p-2 w-full rounded-lg outline outline-offset-2 outline-1 outline-blue-500 h-32",value:e.region_description}),(0,s.jsx)("label",{className:"mt-4 text-lg font-bold",children:"Cities"}),(0,s.jsx)("div",{className:"grid grid-flow-col auto-cols-max gap-x-4 gap-y-4 w-1/2 mt-4",children:(0,e.cities).map(e=>(0,s.jsx)("div",{className:"px-4 py-2 border",children:e}))})]})]})]})]})},c=e=>{let{setCurrentRegion:i}=e,t=e=>{i(e)},n=e=>{console.log(e);let t=l.UA.find(i=>i.region_id.toString()===e);console.log(t),i(t)};return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{className:"container mx-auto py-12",children:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)("div",{className:"text-center max-w-screen-lg ",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Regions"}),(0,s.jsxs)("div",{className:"shadow bg-white px-8 py-8 rounded text-center mt-4",children:[(0,s.jsxs)("table",{className:"table-auto w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{}),(0,s.jsx)("th",{className:"px-4 py-2",children:"#"}),(0,s.jsx)("th",{className:"px-4 py-2",children:"City"}),(0,s.jsx)("th",{})]})}),(0,s.jsx)("tbody",{children:l.UA.map((e,i)=>(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("input",{type:"radio",id:"radio-button",name:"radio-group",value:e.region_id,onChange:e=>n(e.target.value),className:"w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-4"})," "]}),(0,s.jsx)("td",{className:"border px-6 py-2",children:i+1}),(0,s.jsx)("td",{className:"border px-6 py-2",children:e.region_name}),(0,s.jsx)("td",{className:"px-6",children:(0,s.jsx)("button",{className:"hover:underline hover:underline-offset-1",onClick:()=>t(e),children:"Edit"})}),(0,s.jsx)("td",{className:"pl-6",children:(0,s.jsx)("button",{className:"hover:underline hover:underline-offset-1",onClick:()=>t(e),children:"Delete"})})]},e.region_id))})]}),(0,s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8",children:"Add Region"})]})]})})})})})})};i.default=o}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=4307)}),_N_E=e.O()}]);