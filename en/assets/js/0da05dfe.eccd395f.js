"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9418],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return y}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},w=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),w=s(t),y=a,d=w["".concat(u,".").concat(y)]||w[y]||p[y]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=w;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},906:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:6},u="Airflow",s={unversionedId:"tutorial-basics/airflow",id:"tutorial-basics/airflow",title:"Airflow",description:"Jest narz\u0119dziem do tworzenia proces\xf3w w formie Directed Acyclic Graphs (DAGs). U\u017cytkownik mo\u017ce kontrolowa\u0107 przebieg, \u0142\u0105czy\u0107 przej\u015bcia, testowa\u0107 oraz monitorowa\u0107 wydajno\u015b\u0107. Wierzcho\u0142kami grafu s\u0105 kr\xf3tkie programy napisane w j\u0119zyku Python. Wykonywane s\u0105 one jeden po drugim. Stany ka\u017cdego z wierzcho\u0142k\xf3w s\u0105 zapsiywane w bazie danych co pozwala prostym sposobem zachowa\u0107 wysok\u0105 dost\u0119pno\u015b\u0107 aplikacji nawet w przypadku restartu lub d\u0142u\u017cej nie aktywno\u015bci.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-basics/airflow.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/airflow",permalink:"/en/docs/tutorial-basics/airflow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/airflow.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Praktyczny Python nr. 1 - Memcached",permalink:"/en/docs/python/Intermediate/Praktyczny Python nr. 1 - Memcached"},next:{title:"Webdev s\u0142ownik cz.1",permalink:"/en/docs/webdev/Webdev s\u0142ownik cz.1"}},l={},p=[{value:"Architektura",id:"architektura",level:2}],w={toc:p};function y(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},w,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"airflow"},"Airflow"),(0,o.kt)("p",null,"Jest narz\u0119dziem do tworzenia proces\xf3w w formie Directed Acyclic Graphs (DAGs). U\u017cytkownik mo\u017ce kontrolowa\u0107 przebieg, \u0142\u0105czy\u0107 przej\u015bcia, testowa\u0107 oraz monitorowa\u0107 wydajno\u015b\u0107. Wierzcho\u0142kami grafu s\u0105 kr\xf3tkie programy napisane w j\u0119zyku Python. Wykonywane s\u0105 one jeden po drugim. Stany ka\u017cdego z wierzcho\u0142k\xf3w s\u0105 zapsiywane w bazie danych co pozwala prostym sposobem zachowa\u0107 wysok\u0105 dost\u0119pno\u015b\u0107 aplikacji nawet w przypadku restartu lub d\u0142u\u017cej nie aktywno\u015bci."),(0,o.kt)("h2",{id:"architektura"},"Architektura"),(0,o.kt)("p",null,"Podstaw\u0105 s\u0105 DAGi kt\xf3re opisuj\u0105 zale\u017cno\u015bci pomi\u0119dzy taskami.\nTaski s\u0105 programami napisanymi w j\u0119zyku Python.\nW systemie mo\u017cemy wyr\xf3\u017cni\u0107 takie komponenty jak:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scheduler - planuje oraz wyzwala zaplanowane zadania"),(0,o.kt)("li",{parentName:"ul"},"executor - uruchamia taski(podstawowa wersja uruchamia je wewn\u0105trz scheduler), preferowanym rozwi\u0105zaniem jest posiadanie zewn\u0119trznych worker\xf3w tj: celeryExecutor lub kubernetesExecutor lub po\u0142\u0105czenie obu czyli celeryKubernetesExecutor  "),(0,o.kt)("li",{parentName:"ul"},"webserver - zawiera interfejs graficzny u\u017cytkownika "),(0,o.kt)("li",{parentName:"ul"},"baza danych - u\u017cywane przez scheduler, executor oraz webserver ")),(0,o.kt)("p",null,"CeleryKubernetesExecutor - celery executor umo\u017cliwa posiadanie kilku sta\u0142ych worker\xf3w, natomiast Kubernetes executor umo\u017cliwia na dynamiczne generowanie worker\xf3w(w nomenklaturze kubernetes jest to Pod). Zestawienie tych dw\xf3ch typ\xf3w daje nam ogromne mo\u017cliwo\u015bci w skalowaniu aplikacji."))}y.isMDXComponent=!0}}]);