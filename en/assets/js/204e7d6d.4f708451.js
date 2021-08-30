"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3267],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a={sidebar_position:7},s="Entities",l={unversionedId:"reference/layers/entities",id:"reference/layers/entities",isDocsHomePage:!1,title:"Entities",description:"entities-themed-bordered",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/entities.md",sourceDirName:"reference/layers",slug:"/reference/layers/entities",permalink:"/en/docs/reference/layers/entities",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/entities.md",tags:[],version:"current",lastUpdatedAt:1630340830,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/en/docs/reference/layers/features"},next:{title:"Shared",permalink:"/en/docs/reference/layers/shared"}},c=[{value:"Description",id:"description",children:[]},{value:"Structure",id:"structure",children:[]},{value:"Examples",id:"examples",children:[{value:"Using the Entity Model",id:"using-the-entity-model",children:[]},{value:"Using Entity components",id:"using-entity-components",children:[]}]}],u={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entities"},"Entities"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"entities-themed-bordered",src:n(3698).Z})),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"There are usually placed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"business entities, for building the business logic of the application",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"For example: ",(0,o.kt)("inlineCode",{parentName:"em"},"user"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"order"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"post"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"journal"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"navigation"),", ...")))),(0,o.kt)("li",{parentName:"ul"},"components with the representation of entities, for building the UI of the overlying layers",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"For example: ",(0,o.kt)("inlineCode",{parentName:"em"},"UserCard"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"TweetCard"),", ..."))))),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 entities/{slice}\n          \u251c\u2500\u2500 lib/\n          \u251c\u2500\u2500 model/\n          \u251c\u2500\u2500 ui/\n          \u2514\u2500\u2500 index.ts\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"using-the-entity-model"},"Using the Entity Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=**/**/index.tsx",title:"**/**/index.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const Wallet = () => {\n    const viewer = viewerModel.useViewer();\n    const { moneyCount } = viewer;\n    \n    ...\n}\n')),(0,o.kt)("h3",{id:"using-entity-components"},"Using Entity components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/book/index.ts",title:"entities/book/index.ts"},'export { BookCard, ... } from "./ui";\nexport * as bookModel from "./model";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/**/index.tsx",title:"pages/**/index.tsx"},'import { BookCard } from "entities/book";\n\nexport const CatalogPage = () => {\n    const bookQuery = ...;\n    return (\n        ...\n        {bookQuery.map((book) => (\n            <Book key={book.id} data={book} />\n        ))}\n        ...\n    )\n}\n')))}p.isMDXComponent=!0},3698:function(e,t,n){t.Z=n.p+"assets/images/entities-5371350e42cfad7a170dfe64658c5839.png"}}]);