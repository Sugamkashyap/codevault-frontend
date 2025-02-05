(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{3236:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(7468)}])},4279:function(e,t,n){"use strict";var a=n(5893),i=n(7294),r=n(3495);t.Z=e=>{let{type:t,onSubmit:n,isLoading:s}=e,[o,l]=(0,i.useState)({username:"",email:"",password:""});return(0,a.jsxs)(r.E.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"space-y-6",onSubmit:e=>{e.preventDefault(),n(o)},children:["register"===t&&(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Username"}),(0,a.jsx)("input",{type:"text",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:o.username,onChange:e=>l({...o,username:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,a.jsx)("input",{type:"email",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:o.email,onChange:e=>l({...o,email:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,a.jsx)("input",{type:"password",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",value:o.password,onChange:e=>l({...o,password:e.target.value})})]}),(0,a.jsx)("button",{type:"submit",disabled:s,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50",children:s?"Loading...":"login"===t?"Sign In":"Sign Up"})]})}},7468:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(7294),r=n(1163),s=n(1664),o=n.n(s),l=n(4279),c=n(9500),u=n(3495);t.default=()=>{let e=(0,r.useRouter)(),[t,n]=(0,i.useState)(!1),[s,d]=(0,i.useState)(""),handleLogin=async t=>{try{n(!0),d("");let a=await (0,c.x4)(t.email,t.password);localStorage.setItem("user",JSON.stringify(a)),e.push("/")}catch(e){var a,i;d((null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message)||"An error occurred")}finally{n(!1)}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)(u.E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"max-w-md w-full space-y-8",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to CodeVault"})}),s&&(0,a.jsx)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",children:s}),(0,a.jsx)(l.Z,{type:"login",onSubmit:handleLogin,isLoading:t}),(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)(o(),{href:"/register",className:"text-indigo-600 hover:text-indigo-500",children:"Don't have an account? Sign up"})})]})})}},9500:function(e,t,n){"use strict";n.d(t,{$M:function(){return getSnippets},D:function(){return getSnippetById},JD:function(){return updateSnippet},V9:function(){return createSnippet},rN:function(){return deleteSnippet},uO:function(){return searchSnippets},x4:function(){return login},z2:function(){return register}});var a=n(7066);let i=a.Z.create({baseURL:"http://localhost:5000"});i.interceptors.request.use(e=>{let t=JSON.parse(localStorage.getItem("user")||"{}");return(null==t?void 0:t.token)&&(e.headers.Authorization="Bearer ".concat(t.token)),e});let login=async(e,t)=>{let n=await i.post("/api/auth/login",{email:e,password:t});return n.data},register=async(e,t,n)=>{let a=await i.post("/api/auth/register",{username:e,email:t,password:n});return a.data},createSnippet=async e=>{let t=await i.post("/api/snippets",e);return t.data},getSnippets=async()=>{let e=await fetch("/api/snippets");if(!e.ok)throw Error("Failed to fetch snippets");let t=await e.json();return console.log(t),t},getSnippetById=async e=>{let t=await fetch("/api/snippets/".concat(e));if(!t.ok)return null;let n=await t.json();return n},updateSnippet=async(e,t)=>{let n=await i.put("/api/snippets/".concat(e),t);return n.data},deleteSnippet=async e=>{let t=await i.delete("/api/snippets/".concat(e));return t.data},searchSnippets=async e=>{let t=await i.post("/api/snippets/search",{query:e});return t.data}}},function(e){e.O(0,[9774,9559,2888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);