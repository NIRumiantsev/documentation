"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7116],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const i={sidebar_position:4},o="Pages",s={unversionedId:"reference/units/layers/pages",id:"reference/units/layers/pages",title:"Pages",description:"Working with pages and routing is very specific for different projects",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/units/layers/pages.md",sourceDirName:"reference/units/layers",slug:"/reference/units/layers/pages",permalink:"/docs/reference/units/layers/pages",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/units/layers/pages.md",tags:[],version:"current",lastUpdatedAt:1664816389,formattedLastUpdatedAt:"Oct 3, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"referenceSidebar",previous:{title:"Processes",permalink:"/docs/reference/units/layers/processes"},next:{title:"Widgets",permalink:"/docs/reference/units/layers/widgets"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Structure",id:"structure",level:2},{value:"Examples",id:"examples",level:2},{value:"Checkout page",id:"checkout-page",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pages"},"Pages"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Working with pages and routing is very specific for different projects")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"is the page the same slice"),(0,a.kt)("li",{parentName:"ul"},"can the page hierarchy be fractal in order to repeat the structure of routes"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("p",{parentName:"admonition"},"Therefore, here is an overview of this layer (adapt to your framework if needed)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pages-themed-bordered",src:r(838).Z,width:"1200",height:"630"})),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Here are the application pages"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"corresponding to a specific route"),(0,a.kt)("li",{parentName:"ul"},"if necessary - grouped by a shared folder / parent page"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Each page should have ",(0,a.kt)("strong",{parentName:"p"},"as simple logic as possible")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"all the logic of display, business rules and other things-should be implemented by composing the underlying layers (",(0,a.kt)("inlineCode",{parentName:"li"},"shared"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"entitites"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"features"),")"),(0,a.kt)("li",{parentName:"ul"},"while the interaction between the underlying layers - should also be carried out most often on the page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"That is, if ",(0,a.kt)("inlineCode",{parentName:"em"},"featureA")," affects ",(0,a.kt)("inlineCode",{parentName:"em"},"featureB")," on a certain page - this logic should be written in the model of the page itself and only on it!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Without the code in the features themselves, and even more so, cross-imports!"))))))),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 pages/{slice}\n          \u251c\u2500\u2500 index.ts\n          \u251c\u2500\u2500 lib.ts\n          \u251c\u2500\u2500 model.ts\n          \u2514\u2500\u2500 ui.tsx\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"checkout-page"},"Checkout page"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The implementation of the BL order depends very much on your project, sometimes it can be regulated by processes. Therefore, only one of the implementations is given here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/**/index.tsx",title:"pages/**/index.tsx"},'import { Order } from "features/order";\nimport { ProductCard } from "entities/product";\nimport { orderModel } from "entities/order";\nimport { Layout } from "shared/ui/layout"\n\nexport const CartPage = () => {\n    const order = orderModel.useOrder();\n    \n    // Very conditional markup\n    return (\n        {/** Using shared (Layout) */}\n        <Layout>\n            <Layout.Main>\n                ...\n                {/** Using entities (order.items, ProductCard)*/}\n                {order.items.map((item) => (\n                    <ProductCard key={item.id} data={item} />\n                ))}\n            </Layout.Main>\n            <Layout.Sidebar>\n                ...\n                {/** Using features (Order. TotalInfo)*/}\n                <Order.TotalInfo />\n            </Layout.Sidebar>\n        </Layout>\n    )\n}\n')))}u.isMDXComponent=!0},838:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pages-ca9c30c09a1951fdcd9f30b30204161b.png"}}]);