"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4020],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,y=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(y,p(p({ref:n},u),{},{components:t})):r.createElement(y,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2938:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),p=["components"],c={sidebar_position:1},i="Function component example:",s={unversionedId:"Java Script/React/Class && Functional Components copy",id:"Java Script/React/Class && Functional Components copy",title:"Function component example:",description:"W powy\u017cszym przyk\u0142adzie mamy do czynienia z komponentem funkcyjnym. Jest on funkcj\u0105 kt\xf3ra przyjmuje zmienne (props)  i zwraca jsx.",source:"@site/docs/Java Script/React/Class && Functional Components copy.md",sourceDirName:"Java Script/React",slug:"/Java Script/React/Class && Functional Components copy",permalink:"/docs/Java Script/React/Class && Functional Components copy",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java Script/React/Class && Functional Components copy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SAGA",permalink:"/docs/Java/patterns/SAGA"},next:{title:"Props",permalink:"/docs/Java Script/React/Props"}},u={},l=[],m={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-component-example"},"Function component example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\n// const App =() => mo\u017cemy u\u017cy\u0107 arrow function or 'function'\nfunction App(props) {\n  return (\n    <div className='App'>\n    <h1>Hello World </h1>\n    </div>\n  );\n\nexport default App\n")),(0,a.kt)("p",null,"W powy\u017cszym przyk\u0142adzie mamy do czynienia z komponentem funkcyjnym. Jest on funkcj\u0105 kt\xf3ra przyjmuje zmienne (props)  i zwraca jsx."),(0,a.kt)("h1",{id:"class-component-example"},"Class component example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\n\nclass Map extends Component {\n  render() {\n    return (\n      <div>\n        \n      </div>\n    );\n  }\n}\n\nexport default Map;\n\n")),(0,a.kt)("p",null,"W tym przypadku tworzona jest class kt\xf3ra dziedziczy Component. W celu zwr\xf3cenia jsx nale\u017cy wykona\u0107 metod\u0119 render."),(0,a.kt)("p",null,"Na korzy\u015b\u0107 u\u017cywania class przemawia\u0142y STATE kt\xf3re znacznie u\u0142atwiaj\u0105 prac\u0119.\nFunkcyjne komponenty tak\u017ce posiadaj\u0105 mo\u017cliwo\u015b\u0107 u\u017cywania state dzi\u0119ki hooks. S\u0105 to metody funkcyjne umo\u017cliwiaj\u0105ce odczyta\u0107 i zapisa\u0107 warto\u015b\u0107 do zmiennej."),(0,a.kt)("h1",{id:"class-state"},"Class state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},' class Map extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      "imie":"test"\n    }\n  }\n\n  render() {\n    const {name} = this.state;\n    return (\n      <div>\n        {name}\n        {this.props.street}\n      </div>\n    );\n  }\n}\n')),(0,a.kt)("p",null,"Poprzez konstruktor przekazywane s\u0105 props do klasy z kt\xf3rej dziedziczy (Components). Dalej do zmiennych przekazanych przez props mo\u017cemy si\u0119 odwo\u0142a\u0107 u\u017cywaj\u0105 kropki."),(0,a.kt)("h1",{id:"functional-state"},"Functional state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\n// const App =() => mo\u017cemy u\u017cy\u0107 arrow function or 'function'\nfunction App(props) {\n    const [name, setName] = useSate(\"\");\n  return (\n    <div className='App'>\n    <h1>Hello World {name}</h1>\n    <h1>Hello World {props.street}</h1>\n    </div>\n  );\n\nexport default App\n")),(0,a.kt)("p",null,"Zamiast u\u017cywania App(props) mo\u017cna u\u017cy\u0107 ({street}), mo\u017cna tak\u017ce doda\u0107 kolejne zmienne kt\xf3re przychodz\u0105 wraz z props lub u\u017cy\u0107 ...props kt\xf3re zrobi dekonstrukcj\u0119 zmiennych."))}d.isMDXComponent=!0}}]);