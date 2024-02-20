"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[2732],{710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=r(4848),n=r(8453);const s={title:"Quickstart",description:"Quickstart Documentation for Hauler",sidebar_label:"Quickstart"},l=void 0,o={id:"introduction/quickstart",title:"Quickstart",description:"Quickstart Documentation for Hauler",source:"@site/versioned_docs/version-0.4.4/introduction/quickstart.md",sourceDirName:"introduction",slug:"/introduction/quickstart",permalink:"/hauler-docs/docs/0.4.4/introduction/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.4/introduction/quickstart.md",tags:[],version:"0.4.4",frontMatter:{title:"Quickstart",description:"Quickstart Documentation for Hauler",sidebar_label:"Quickstart"},sidebar:"haulerSidebar",previous:{title:"Airgap Workflow",permalink:"/hauler-docs/docs/0.4.4/airgap-workflow"},next:{title:"Installation",permalink:"/hauler-docs/docs/0.4.4/introduction/install"}},i={},h=[{value:"Quick Installation",id:"quick-installation",level:2},{value:"Example Use of Hauler",id:"example-use-of-hauler",level:2},{value:"Add Content to the Hauler Store",id:"add-content-to-the-hauler-store",level:3},{value:"Using the Command Line:",id:"using-the-command-line",level:4},{value:"Using a Hauler Manifest:",id:"using-a-hauler-manifest",level:4},{value:"View the Hauler Store",id:"view-the-hauler-store",level:3},{value:"Save the Hauler Store",id:"save-the-hauler-store",level:3},{value:"Load the Airgapped Hauler Store",id:"load-the-airgapped-hauler-store",level:3},{value:"Serve the Hauler Store",id:"serve-the-hauler-store",level:3},{value:"Copy the Hauler Store to a Registry",id:"copy-the-hauler-store-to-a-registry",level:3},{value:"Copy the Hauler Store to a Directory",id:"copy-the-hauler-store-to-a-directory",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Skipping past most of the documentation? Here's an easy to follow Quick Start Guide:"}),"\n",(0,a.jsx)(t.h2,{id:"quick-installation",children:"Quick Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# install latest release\ncurl -sfL https://get.hauler.dev | bash\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example-use-of-hauler",children:"Example Use of Hauler"}),"\n",(0,a.jsx)(t.h3,{id:"add-content-to-the-hauler-store",children:"Add Content to the Hauler Store"}),"\n",(0,a.jsx)(t.h4,{id:"using-the-command-line",children:"Using the Command Line:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# add a image: neuvector/scanner:latest\nhauler store add image neuvector/scanner:latest --platform linux/amd64\n\n# add a image with supply chain artifacts\nhauler store add image rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.5.2 --key carbide-key.pub --platform linux/amd64\n\n# add a chart: rancher-stable/rancher (v2.8.2)\nhauler store add chart rancher --repo https://releases.rancher.com/server-charts/stable --version 2.8.2\n\n# add a file: rke2-install.sh\nhauler store add file https://get.rke2.io --name install.sh\n"})}),"\n",(0,a.jsx)(t.h4,{id:"using-a-hauler-manifest",children:"Using a Hauler Manifest:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"hauler store sync --files hauler-manfiest.yaml\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="hauler-manfiest.yaml"',children:"apiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: hauler-content-images-example\nspec:\n  images:\n    - name: neuvector/scanner:latest\n    - name: rgcrprod.azurecr.us/longhornio/longhorn-ui:v1.5.1\n      key: carbide-key.pub\n      platform: linux/amd64\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: hauler-content-charts-example\nspec:\n  charts:\n    - name: rancher\n      repoURL: https://releases.rancher.com/server-charts/stable\n      version: 2.8.2\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Files\nmetadata:\n  name: hauler-content-files-example\nspec:\n  files:\n    - path: https://get.rke2.io\n      name: install.sh\n"})}),"\n",(0,a.jsx)(t.h3,{id:"view-the-hauler-store",children:"View the Hauler Store"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# view and verify the content in the local hauler store\nhauler store info\n"})}),"\n",(0,a.jsx)(t.h3,{id:"save-the-hauler-store",children:"Save the Hauler Store"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# save and export the content in the local hauler store\nhauler store save --filename haul.tar.zst\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["airgap the ",(0,a.jsx)(t.code,{children:"haul.tar.zst"})," to the disconnected environment"]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"load-the-airgapped-hauler-store",children:"Load the Airgapped Hauler Store"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# load and import the airgapped content to the new local hauler store\nhauler store load haul.tar.zst\n"})}),"\n",(0,a.jsx)(t.h3,{id:"serve-the-hauler-store",children:"Serve the Hauler Store"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# serve the content as a registry from the hauler store\nhauler store serve registry\n\n# serve the file content as a fileserver from the hauler store\nhauler store serve fileserver\n"})}),"\n",(0,a.jsx)(t.h3,{id:"copy-the-hauler-store-to-a-registry",children:"Copy the Hauler Store to a Registry"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# copy the content to a registry from the hauler store\nhauler store copy registry://harbor.example.com\n"})}),"\n",(0,a.jsx)(t.h3,{id:"copy-the-hauler-store-to-a-directory",children:"Copy the Hauler Store to a Directory"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# copy the content to a directory from the hauler store\nhauler store copy dir://hauler-files\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var a=r(6540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);