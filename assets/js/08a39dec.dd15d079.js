"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[4356],{5334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(4848),o=t(8453);const a={title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},s=void 0,l={id:"guides-references/command-line/hauler-store",title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",source:"@site/versioned_docs/version-0.4.1/guides-references/command-line/hauler-store.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler-store",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler-store",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.1/guides-references/command-line/hauler-store.md",tags:[],version:"0.4.1",frontMatter:{title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},sidebar:"haulerSidebar",previous:{title:"Hauler",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler"},next:{title:"Hauler Completion",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler-completion"}},c={},i=[{value:"Command Overview",id:"command-overview",level:3},{value:"<code>hauler store add</code>:",id:"hauler-store-add",level:4},{value:"<code>hauler store copy</code>:",id:"hauler-store-copy",level:4},{value:"<code>hauler store extract</code>:",id:"hauler-store-extract",level:4},{value:"<code>hauler store info</code>:",id:"hauler-store-info",level:4},{value:"<code>hauler store load</code>:",id:"hauler-store-load",level:4},{value:"<code>hauler store save</code>:",id:"hauler-store-save",level:4},{value:"<code>hauler store serve</code>:",id:"hauler-store-serve",level:4},{value:"<code>hauler store sync</code>:",id:"hauler-store-sync",level:4}];function d(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Interact with Hauler's embedded content store."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store [flags]\n  hauler store [command]\n\nAliases:\n  store, s\n\nAvailable Commands:\n  add         Add content to store\n  copy        Copy all store contents to another OCI registry\n  extract     Extract content from the store to disk\n  info        Print out information about the store\n  load        Load a content store from a store archive\n  save        Save a content store to a store archive\n  serve       Expose the content of a local store through an OCI compliant server\n  sync        Sync content to the embedded content store\n\nFlags:\n      --cache string   Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -h, --help           help for store\n  -s, --store string   Location to create store at (default "store")\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n\nUse "hauler store [command] --help" for more information about a command.\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-add",children:[(0,r.jsx)(n.code,{children:"hauler store add"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add content to store."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store add [flags]\n  hauler store add [command]\n\nAvailable Commands:\n  chart       Add a local or remote chart to the content store\n  file        Add a file to the content store\n  image       Add an image to the content store\n\nFlags:\n  -h, --help   help for add\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n\nUse "hauler store add [command] --help" for more information about a command.\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-copy",children:[(0,r.jsx)(n.code,{children:"hauler store copy"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Copy all store contents to another OCI registry."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store copy [flags]\n\nFlags:\n  -h, --help              help for copy\n      --insecure          Toggle allowing insecure connections when copying to a remote registry\n  -p, --password string   Password when copying to an authenticated remote registry\n      --plain-http        Toggle allowing plain http connections when copying to a remote registry\n  -u, --username string   Username when copying to an authenticated remote registry\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-extract",children:[(0,r.jsx)(n.code,{children:"hauler store extract"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extract content from the store to disk."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store extract [flags]\n\nAliases:\n  extract, x\n\nFlags:\n  -h, --help            help for extract\n  -o, --output string   Directory to save contents to (defaults to current directory)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-info",children:[(0,r.jsx)(n.code,{children:"hauler store info"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Print out information about the store."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store info [flags]\n\nAliases:\n  info, i, list, ls\n\nFlags:\n  -h, --help            help for info\n  -o, --output string   Output format (table, json) (default "table")\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-load",children:[(0,r.jsx)(n.code,{children:"hauler store load"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Load a content store from a store archive."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store load [flags]\n\nFlags:\n  -h, --help   help for load\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-save",children:[(0,r.jsx)(n.code,{children:"hauler store save"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Save a content store to a store archive."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store save [flags]\n\nFlags:\n  -f, --filename string   Name of archive (default "pkg.tar.zst")\n  -h, --help              help for save\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-serve",children:[(0,r.jsx)(n.code,{children:"hauler store serve"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Expose the content of a local store through an OCI compliant server."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store serve [flags]\n\nFlags:\n  -c, --config string      Path to a config file, will override all other configs\n  -d, --daemon             Toggle serving as a daemon\n      --directory string   Directory to use for registry backend (defaults to \'$PWD/registry\') (default "registry")\n  -h, --help               help for serve\n  -p, --port int           Port to listen on (default 5000)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"hauler-store-sync",children:[(0,r.jsx)(n.code,{children:"hauler store sync"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sync content to the embedded content store."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --files strings      Path to content files\n  -h, --help               help for sync\n  -k, --key string         (Optional) Path to the key for signature verification\n      --products strings   Used for RGS Carbide customers to supply a product and version and Hauler will retrieve the images. i.e. \'--product rancher=v2.7.6\'\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);