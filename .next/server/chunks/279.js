"use strict";exports.id=279,exports.ids=[279],exports.modules={4279:(e,s,a)=>{a.a(e,async(e,i)=>{try{a.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=a(997),t=a(6689),o=a(6197),d=e([o]);o=(d.then?(await d)():d)[0];let __WEBPACK_DEFAULT_EXPORT__=({type:e,onSubmit:s,isLoading:a})=>{let[i,d]=(0,t.useState)({username:"",email:"",password:""});return(0,r.jsxs)(o.motion.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-6",onSubmit:e=>{e.preventDefault(),s(i)},children:["register"===e&&(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Username"}),r.jsx("input",{type:"text",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:i.username,onChange:e=>d({...i,username:e.target.value})})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),r.jsx("input",{type:"email",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:i.email,onChange:e=>d({...i,email:e.target.value})})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),r.jsx("input",{type:"password",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:i.password,onChange:e=>d({...i,password:e.target.value})})]}),r.jsx("button",{type:"submit",disabled:a,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50",children:a?"Loading...":"login"===e?"Sign In":"Sign Up"})]})};i()}catch(e){i(e)}})}};