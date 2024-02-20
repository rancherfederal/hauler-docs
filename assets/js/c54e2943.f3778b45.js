"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[9182],{6005:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var l=o(4848),s=o(8453);const r={title:"Hauler Completion (Command)",description:"Hauler CLI Reference for hauler completion",sidebar_label:"Hauler Completion"},i=void 0,t={id:"guides-references/command-line/hauler-completion",title:"Hauler Completion (Command)",description:"Hauler CLI Reference for hauler completion",source:"@site/versioned_docs/version-0.4.1/guides-references/command-line/hauler-completion.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler-completion",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler-completion",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.1/guides-references/command-line/hauler-completion.md",tags:[],version:"0.4.1",frontMatter:{title:"Hauler Completion (Command)",description:"Hauler CLI Reference for hauler completion",sidebar_label:"Hauler Completion"},sidebar:"haulerSidebar",previous:{title:"Hauler Store",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler-store"},next:{title:"Hauler Version",permalink:"/hauler-docs/docs/0.4.1/guides-references/command-line/hauler-version"}},a={},c=[{value:"Command Overview",id:"command-overview",level:3},{value:"<code>hauler completion bash</code>:",id:"hauler-completion-bash",level:4},{value:"<code>hauler completion fish</code>:",id:"hauler-completion-fish",level:4},{value:"<code>hauler completion powershell</code>:",id:"hauler-completion-powershell",level:4},{value:"<code>hauler completion zsh</code>:",id:"hauler-completion-zsh",level:4}];function h(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"command-overview",children:"Command Overview"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generate an autocompletion script for hauler for the specified shell."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'Usage:\n  hauler completion [command]\n\nAvailable Commands:\n  bash        Generate the autocompletion script for bash\n  fish        Generate the autocompletion script for fish\n  powershell  Generate the autocompletion script for powershell\n  zsh         Generate the autocompletion script for zsh\n\nFlags:\n  -h, --help   help for completion\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n\nUse "hauler completion [command] --help" for more information about a command.\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"hauler-completion-bash",children:[(0,l.jsx)(n.code,{children:"hauler completion bash"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Generate the autocompletion script for the bash shell.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," This script depends on the 'bash-completion' package."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'To load completions in your current shell session:\n\n        source <(hauler completion bash)\n\nTo load completions for every new session, execute once:\n\n#### Linux:\n\n        hauler completion bash > /etc/bash_completion.d/hauler\n\n#### macOS:\n\n        hauler completion bash > $(brew --prefix)/etc/bash_completion.d/hauler\n\nYou will need to start a new shell for this setup to take effect.\n\nUsage:\n  hauler completion bash\n\nFlags:\n  -h, --help              help for bash\n      --no-descriptions   disable completion descriptions\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"hauler-completion-fish",children:[(0,l.jsx)(n.code,{children:"hauler completion fish"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generate the autocompletion script for the fish shell."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'To load completions in your current shell session:\n\n        hauler completion fish | source\n\nTo load completions for every new session, execute once:\n\n        hauler completion fish > ~/.config/fish/completions/hauler.fish\n\nYou will need to start a new shell for this setup to take effect.\n\nUsage:\n  hauler completion fish [flags]\n\nFlags:\n  -h, --help              help for fish\n      --no-descriptions   disable completion descriptions\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"hauler-completion-powershell",children:[(0,l.jsx)(n.code,{children:"hauler completion powershell"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Generate the autocompletion script for powershell."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'To load completions in your current shell session:\n\n        hauler completion powershell | Out-String | Invoke-Expression\n\nTo load completions for every new session, add the output of the above command\nto your powershell profile.\n\nUsage:\n  hauler completion powershell [flags]\n\nFlags:\n  -h, --help              help for powershell\n      --no-descriptions   disable completion descriptions\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"hauler-completion-zsh",children:[(0,l.jsx)(n.code,{children:"hauler completion zsh"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Generate the autocompletion script for the zsh shell.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," If shell completion is not already enabled in your environment you will need to enable it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'To load completions in your current shell session:\n\n        source <(hauler completion zsh)\n\nTo load completions for every new session, execute once:\n\n#### Linux:\n\n        hauler completion zsh > "${fpath[1]}/_hauler"\n\n#### macOS:\n\n        hauler completion zsh > $(brew --prefix)/share/zsh/site-functions/_hauler\n\nYou will need to start a new shell for this setup to take effect.\n\nUsage:\n  hauler completion zsh [flags]\n\nFlags:\n  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n\nGlobal Flags:\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var l=o(6540);const s={},r=l.createContext(s);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);