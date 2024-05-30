"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[5584],{1633:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(4848),a=n(8453);const s={title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},l=void 0,o={id:"guides-references/command-line/hauler-store",title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",source:"@site/docs/guides-references/command-line/hauler-store.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler-store",permalink:"/hauler-docs/docs/next/guides-references/command-line/hauler-store",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/docs/guides-references/command-line/hauler-store.md",tags:[],version:"current",frontMatter:{title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},sidebar:"haulerSidebar",previous:{title:"Hauler",permalink:"/hauler-docs/docs/next/guides-references/command-line/hauler"},next:{title:"Hauler Completion",permalink:"/hauler-docs/docs/next/guides-references/command-line/hauler-completion"}},i={},c=[{value:"Command Overview",id:"command-overview",level:3},{value:"<code>hauler store add</code>:",id:"hauler-store-add",level:4},{value:"<code>hauler store add image</code>:",id:"hauler-store-add-image",level:4},{value:"<code>hauler store add chart</code>:",id:"hauler-store-add-chart",level:4},{value:"<code>hauler store add file</code>:",id:"hauler-store-add-file",level:4},{value:"<code>hauler store copy</code>:",id:"hauler-store-copy",level:4},{value:"<code>hauler store extract</code>:",id:"hauler-store-extract",level:4},{value:"<code>hauler store info</code>:",id:"hauler-store-info",level:4},{value:"<code>hauler store load</code>:",id:"hauler-store-load",level:4},{value:"<code>hauler store save</code>:",id:"hauler-store-save",level:4},{value:"<code>hauler store sync</code>:",id:"hauler-store-sync",level:4},{value:"<code>hauler store serve</code>:",id:"hauler-store-serve",level:4},{value:"<code>hauler store serve registry</code>:",id:"hauler-store-serve-registry",level:4},{value:"<code>hauler store serve fileserver</code>:",id:"hauler-store-serve-fileserver",level:4}];function d(e){const r={code:"code",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Interact with Hauler's embedded content store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store [flags]\n  hauler store [command]\n\nAliases:\n  store, s\n\nAvailable Commands:\n  add         Add content to store\n  copy        Copy all store contents to another OCI registry\n  extract     Extract content from the store to disk\n  info        Print out information about the store\n  load        Load a content store from a store archive\n  save        Save a content store to a store archive\n  serve       Expose the content of a local store through an OCI compliant registry or file server\n  sync        Sync content to the embedded content store\n\nFlags:\n      --cache string   (deprecated flag and currently not used)\n  -h, --help           help for store\n  -s, --store string   Location to create store at (default "store")\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n\nUse "hauler store [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-add",children:[(0,t.jsx)(r.code,{children:"hauler store add"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Add content to store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store add [flags]\n  hauler store add [command]\n\nAvailable Commands:\n  chart       Add a local or remote chart to the content store\n  file        Add a file to the content store\n  image       Add an image to the content store\n\nFlags:\n  -h, --help   help for add\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n\nUse "hauler store add [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-add-image",children:[(0,t.jsx)(r.code,{children:"hauler store add image"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Add an image to the content store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store add image [flags]\n\nFlags:\n  -h, --help              help for image\n  -k, --key string        (Optional) Path to the key for digital signature verification\n  -p, --platform string   (Optional) Specific platform to save. i.e. linux/amd64. Defaults to all if flag is omitted.\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-add-chart",children:[(0,t.jsx)(r.code,{children:"hauler store add chart"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Add a local or remote chart to the content store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store add chart [flags]\n\nExamples:\n\n# add a local chart\nhauler store add chart path/to/chart/directory\n\n# add a local compressed chart\nhauler store add chart path/to/chart.tar.gz\n\n# add a remote chart\nhauler store add chart longhorn --repo "https://charts.longhorn.io"\n\n# add a specific version of a chart\nhauler store add chart rancher --repo "https://releases.rancher.com/server-charts/latest" --version "2.6.2"\n\n\nFlags:\n      --ca-file string             verify certificates of HTTPS-enabled servers using this CA bundle\n      --cert-file string           identify HTTPS client using this SSL certificate file\n  -h, --help                       help for chart\n      --insecure-skip-tls-verify   skip tls certificate checks for the chart download\n      --key-file string            identify HTTPS client using this SSL key file\n      --password string            chart repository password where to locate the requested chart\n      --repo string                chart repository url where to locate the requested chart\n      --username string            chart repository username where to locate the requested chart\n      --verify                     verify the package before using it\n      --version string             specify a version constraint for the chart version to use. This constraint can be a specific tag (e.g. 1.1.1) or it may reference a valid range (e.g. ^2.0.0). If this is not specified, the latest version is used\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-add-file",children:[(0,t.jsx)(r.code,{children:"hauler store add file"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Add a file to the content store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store add file [flags]\n\nFlags:\n  -h, --help          help for file\n  -n, --name string   (Optional) Name to assign to file in store\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-copy",children:[(0,t.jsx)(r.code,{children:"hauler store copy"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Copy all store contents to another OCI registry."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store copy [flags]\n\nFlags:\n  -h, --help              help for copy\n      --insecure          Toggle allowing insecure connections when copying to a remote registry\n  -p, --password string   Password when copying to an authenticated remote registry\n      --plain-http        Toggle allowing plain http connections when copying to a remote registry\n  -u, --username string   Username when copying to an authenticated remote registry\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-extract",children:[(0,t.jsx)(r.code,{children:"hauler store extract"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Extract content from the store to disk."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store extract [flags]\n\nAliases:\n  extract, x\n\nFlags:\n  -h, --help            help for extract\n  -o, --output string   Directory to save contents to (defaults to current directory)\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-info",children:[(0,t.jsx)(r.code,{children:"hauler store info"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Print out information about the store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store info [flags]\n\nAliases:\n  info, i, list, ls\n\nFlags:\n  -h, --help            help for info\n  -o, --output string   Output format (table, json) (default "table")\n  -t, --type string     Filter on type (image, chart, file, sigs, atts, sbom) (default "all")\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-load",children:[(0,t.jsx)(r.code,{children:"hauler store load"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Load a content store from a store archive."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store load [flags]\n\nFlags:\n  -h, --help             help for load\n  -t, --tempdir string   overrides the default directory for temporary files, as returned by your OS.\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-save",children:[(0,t.jsx)(r.code,{children:"hauler store save"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Save a content store to a store archive."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store save [flags]\n\nFlags:\n  -f, --filename string   Name of archive (default "haul.tar.zst")\n  -h, --help              help for save\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-sync",children:[(0,t.jsx)(r.code,{children:"hauler store sync"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Sync content to the embedded content store."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --files strings             Path to content files\n  -h, --help                      help for sync\n  -k, --key string                (Optional) Path to the key for signature verification\n  -p, --platform string           (Optional) Specific platform to save. i.e. linux/amd64. Defaults to all if flag is omitted.\n  -c, --product-registry string   (Optional) Specific Product Registry to use. Defaults to RGS Carbide Registry (rgcrprod.azurecr.us).\n      --products strings          Used for RGS Carbide customers to supply a product and version and Hauler will retrieve the images. i.e. \'--product rancher=v2.7.6\'\n  -r, --registry string           (Optional) Default pull registry for image refs that are not specifying a registry name.\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-serve",children:[(0,t.jsx)(r.code,{children:"hauler store serve"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Expose the content of a local store through an OCI compliant registry or file server."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store serve [flags]\n  hauler store serve [command]\n\nAvailable Commands:\n  fileserver  Serve the file server\n  registry    Serve the embedded registry\n\nFlags:\n  -h, --help   help for serve\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n\nUse "hauler store serve [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-serve-registry",children:[(0,t.jsx)(r.code,{children:"hauler store serve registry"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Serve the embedded registry"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store serve registry [flags]\n\nFlags:\n  -c, --config string      Path to a config file, will override all other configs\n      --directory string   Directory to use for backend.  Defaults to $PWD/registry (default "registry")\n  -h, --help               help for registry\n  -p, --port int           Port to listen on. (default 5000)\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})}),"\n",(0,t.jsxs)(r.h4,{id:"hauler-store-serve-fileserver",children:[(0,t.jsx)(r.code,{children:"hauler store serve fileserver"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Serve the fileserver"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'Usage:\n  hauler store serve fileserver [flags]\n\nFlags:\n      --directory string   Directory to use for backend.  Defaults to $PWD/fileserver (default "fileserver")\n  -h, --help               help for fileserver\n  -p, --port int           Port to listen on. (default 8080)\n\nGlobal Flags:\n      --cache string       (deprecated flag and currently not used)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n'})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var t=n(6540);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);