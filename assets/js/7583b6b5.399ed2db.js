"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8678],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},u=void 0,s={unversionedId:"Java/patterns/SAGA",id:"Java/patterns/SAGA",title:"SAGA",description:"Saga jest wzorcem projektowym u\u017cywanym przy wielu us\u0142ugach. G\u0142\xf3wn\u0105 rol\u0105 Sagi jest kompensacja zdarze\u0144 - kiedy ramach uruchomienia wielu zada\u0144 procesu biznesowego, jedno ulegnie awarii to jeste\u015bmy w stanie cofn\u0105\u0107 wcze\u015bniejsze zmianny dokonane w ramach tego procesu.",source:"@site/docs/Java/patterns/SAGA.md",sourceDirName:"Java/patterns",slug:"/Java/patterns/SAGA",permalink:"/docs/Java/patterns/SAGA",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/patterns/SAGA.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Inbox Outbox",permalink:"/docs/Java/patterns/Inbox Outbox"},next:{title:"intro",permalink:"/docs/intro"}},p={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Saga jest wzorcem projektowym u\u017cywanym przy wielu us\u0142ugach. G\u0142\xf3wn\u0105 rol\u0105 Sagi jest kompensacja zdarze\u0144 - kiedy ramach uruchomienia wielu zada\u0144 procesu biznesowego, jedno ulegnie awarii to jeste\u015bmy w stanie cofn\u0105\u0107 wcze\u015bniejsze zmianny dokonane w ramach tego procesu.",(0,o.kt)("br",{parentName:"p"}),"\n","Istneij\u0105 dwa podej\u015bcia podczas koordynacji sagi:"),(0,o.kt)("h1",{id:""}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choreography - domenowe eventy trigeruj\u0105 kolejne us\u0142ugi"),(0,o.kt)("li",{parentName:"ul"},"Orchestration  - koordynator dba o wykonywanie zada\u0144 przez us\u0142ugi")),(0,o.kt)("p",null,"Powi\u0105zane wzorce - Process Manager"))}d.isMDXComponent=!0}}]);