"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3143],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:6},o="Features",l={unversionedId:"reference/units/layers/features",id:"reference/units/layers/features",title:"Features",description:"When it becomes difficult to find the boundaries of specific user scenarios in a project, which worsens the controllability and reuse of logic",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/units/layers/features.md",sourceDirName:"reference/units/layers",slug:"/reference/units/layers/features",permalink:"/docs/reference/units/layers/features",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/units/layers/features.md",tags:[],version:"current",lastUpdatedAt:1664816389,formattedLastUpdatedAt:"Oct 3, 2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"referenceSidebar",previous:{title:"Widgets",permalink:"/docs/reference/units/layers/widgets"},next:{title:"Entities",permalink:"/docs/reference/units/layers/entities"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Structure",id:"structure",level:2},{value:"Rules",id:"rules",level:2},{value:"One feature = one functionality",id:"one-feature--one-functionality",level:3},{value:"Structural grouping of features",id:"structural-grouping-of-features",level:3},{value:"Features should not depend on each other",id:"features-should-not-depend-on-each-other",level:3},{value:"Examples",id:"examples",level:2},{value:"Changing the application interface language",id:"changing-the-application-interface-language",level:3},{value:"Transfer of funds between accounts",id:"transfer-of-funds-between-accounts",level:3},{value:"Filter by tags",id:"filter-by-tags",level:3},{value:"Hints when filling in the form fields",id:"hints-when-filling-in-the-form-fields",level:3},{value:"Authorization by phone",id:"authorization-by-phone",level:3},{value:"See also",id:"see-also",level:2}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("admonition",{title:"When to use?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When it becomes difficult to find the boundaries of specific user scenarios in a project, which worsens the controllability and reuse of logic"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Use it only if you are sure that additional separation by features will help your application, and will not cause too much misunderstanding and skepticism! (instead, you can locate such logic directly in widgets) \u26a0\ufe0f"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"features-themed-bordered",src:n(8283).Z,width:"1200",height:"630"})),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Each feature is a part of the business logic, while it necessarily has meaning and value for the end user"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"ProductList"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"OfficeMap")," - can hardly be called features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"WalletAddFunds"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"AddToCart")," - already makes more sense for the end user"))),(0,a.kt)("p",null,"At the same time:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the underlying layers are used to build the logic",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"shared"),", ",(0,a.kt)("inlineCode",{parentName:"em"},"entities"))))),(0,a.kt)("li",{parentName:"ul"},"one feature ",(0,a.kt)("strong",{parentName:"li"},"cannot")," import another",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"If ",(0,a.kt)("a",{parentName:"em",href:"/docs/reference/isolation/coupling-cohesion"},"there is such a need")," - the dependency needs to be transferred to the layer above / below, or solved through the composition through children-props")))),(0,a.kt)("li",{parentName:"ul"},"features cannot be nested, but they can be combined by a common folder, i.e. structurally",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"At the same time, you can not create intermediate files that are necessary for a specific group of features")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"You can only use re-export files"))),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 features/{slice}\n          \u251c\u2500\u2500 lib/\n          \u251c\u2500\u2500 model/\n          \u251c\u2500\u2500 ui/\n          \u2514\u2500\u2500 index.ts\n")),(0,a.kt)("p",null,"Thus, the feature stores information about:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"What data is needed for its operation"),(0,a.kt)("li",{parentName:"ol"},"By what rules do data changes occur"),(0,a.kt)("li",{parentName:"ol"},"What ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/entities"},"entities")," are needed for the complete construction of the feature"),(0,a.kt)("li",{parentName:"ol"},"How the data is presented to the user")),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("h3",{id:"one-feature--one-functionality"},"One feature = one functionality"),(0,a.kt)("p",null,"The feature contains code that implements ",(0,a.kt)("strong",{parentName:"p"},"one")," useful functionality for the user."),(0,a.kt)("h3",{id:"structural-grouping-of-features"},"Structural grouping of features"),(0,a.kt)("p",null,"Often there is a need to put together a number of somewhat related features ",(0,a.kt)("em",{parentName:"p"},"(at the same time, they can and should not import each other directly)")),(0,a.kt)("p",null,"The methodology recommends avoiding ",(0,a.kt)("strong",{parentName:"p"},"nested features"),", i.e. features that are strongly connected under a common wrapper with an additional one. by logic"),(0,a.kt)("p",null,"Instead, the methodology suggests that, if necessary, ",(0,a.kt)("strong",{parentName:"p"},"group the necessary features by folders")," ",(0,a.kt)("em",{parentName:"p"},"(at the same time, you can not link these features directly, folders are only needed for structural grouping by meaning)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"features/order/            Feature group\n   \u251c\u2500\u2500 add-to-cart         Full-fledged feature\n   \u251c\u2500\u2500 total-info          Full-fledged feature\n-  \u251c\u2500\u2500 model.ts            General logic for the group\n-  \u251c\u2500\u2500 hooks.ts            General hooks for the group\n   \u251c\u2500\u2500 index.ts            Public API with re-export of features\n")),(0,a.kt)("h3",{id:"features-should-not-depend-on-each-other"},"Features should not depend on each other"),(0,a.kt)("p",null,"This rule is not always possible to comply with, but it is better to minimize the number of such violations."),(0,a.kt)("p",null,"Usually, it is precisely because of the neglect of this rule that there is a high coupling between the modules of the system and unpredictable side effects during development."),(0,a.kt)("p",null,"One of the ways to solve the problem is to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/units/layers/entities"},"entity"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From the point of view of the code: not all changes for the user are ",(0,a.kt)("inlineCode",{parentName:"em"},"features"),", but all ",(0,a.kt)("inlineCode",{parentName:"em"},"features")," are changes for the user.")),(0,a.kt)("h3",{id:"changing-the-application-interface-language"},"Changing the application interface language"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Feature")," for the user and the developer.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"At the same time, the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n")," logic itself can be used not only in this feature, but even in entities. Therefore, this should rather be placed in ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/lib")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/config")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"A separate guide will be added later"))),(0,a.kt)("h3",{id:"transfer-of-funds-between-accounts"},"Transfer of funds between accounts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Feature")," for the user and the developer.")),(0,a.kt)("h3",{id:"filter-by-tags"},"Filter by tags"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For the user: ",(0,a.kt)("inlineCode",{parentName:"li"},"feature"),"."),(0,a.kt)("li",{parentName:"ul"},"For the developer: ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/entities"},"entity")," ",(0,a.kt)("inlineCode",{parentName:"li"},"tags")," allow you to implement a filter by tags inside ",(0,a.kt)("inlineCode",{parentName:"li"},"feature"),".")),(0,a.kt)("h3",{id:"hints-when-filling-in-the-form-fields"},"Hints when filling in the form fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For the user: ",(0,a.kt)("inlineCode",{parentName:"li"},"feature"),"."),(0,a.kt)("li",{parentName:"ul"},"For the developer: part of ",(0,a.kt)("inlineCode",{parentName:"li"},"form")," ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/entities"},"entity"),".")),(0,a.kt)("h3",{id:"authorization-by-phone"},"Authorization by phone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=features/auth/by-phone/ui.tsx",title:"features/auth/by-phone/ui.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const AuthByPhone = () => {\n    return (\n        // for redux - dispatch is additionally needed\n        <Form onSuccess={(user) => viewerModel.setUser(user)}>\n            <Form.Input \n                type="phone"\n                ...\n            />\n            <Form.Button\n                ...\n            />\n        </Form>\n    )\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/isolation"},'"Guide to getting rid of cross-imports"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/about/understanding/needs-driven"},"Understanding user needs and business tasks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To understand the ",(0,a.kt)("inlineCode",{parentName:"li"},"features")," layer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/23#discussioncomment-451017"},"(Thread) About features and entities clearly"))))}c.isMDXComponent=!0},8283:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/features-c02167f92747c214473ed6a4d27c7523.png"}}]);