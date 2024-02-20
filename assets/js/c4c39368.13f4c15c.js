"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[7810],{3151:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),t=n(8453);const r={title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},o=void 0,a={id:"known-limits",title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",source:"@site/versioned_docs/version-0.4.1/known-limits.md",sourceDirName:".",slug:"/known-limits",permalink:"/hauler-docs/docs/0.4.1/known-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.1/known-limits.md",tags:[],version:"0.4.1",frontMatter:{title:"Known Issues and Limits",description:"Known Issues and Limitations for Hauler",sidebar_label:"Known Issues/Limits"},sidebar:"haulerSidebar",previous:{title:"Hauler Version",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler-version"}},l={},c=[{value:"Issues",id:"issues",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Notices",id:"notices",level:2},{value:"Upcoming Deprecated Command(s):",id:"upcoming-deprecated-commands",level:4}];function d(e){const s={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Copying SBOMS to AWS Elastic Container Registry (AWS ECR):","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["When using ",(0,i.jsx)(s.code,{children:"hauler store copy"})," to AWS ECR, the Software Bill of Materials (SBOM) attachement will fail to copy due to changes in the way ",(0,i.jsx)(s.code,{children:"cosign"})," handles attachments. ",(0,i.jsx)(s.strong,{children:"We are investigating a way forward to address this issue."})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md",children:"https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/sigstore/cosign/issues/2755",children:"https://github.com/sigstore/cosign/issues/2755"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Display of Information in the Hauler Store:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["When using ",(0,i.jsx)(s.code,{children:"hauler store info"})," with signature verification, you may encounter errors in the presentation of the number layers and size of layers in the store. Hauler is correctly fetching, storing, packaging, and distributing each image, but the presentation and display can error. ",(0,i.jsx)(s.strong,{children:"We are actively working to address and fix this issue."})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"notices",children:"Notices"}),"\n",(0,i.jsx)(s.h4,{id:"upcoming-deprecated-commands",children:"Upcoming Deprecated Command(s):"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"hauler download"})," (alternatively ",(0,i.jsx)(s.code,{children:"hauler dl"}),") is deprecated and will be removed in a future release."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"hauler serve"})," is deprecated and will be removed in a future release."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var i=n(6540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);