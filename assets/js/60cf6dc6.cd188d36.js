"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1203],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),d=r,m=y["".concat(u,".").concat(d)]||y[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},u="Equals and HashCode",l={unversionedId:"Java/concepts/Equals i hashCode",id:"Java/concepts/Equals i hashCode",title:"Equals and HashCode",description:"Przyk\u0142ad funckji equals:",source:"@site/docs/Java/concepts/Equals i hashCode.md",sourceDirName:"Java/concepts",slug:"/Java/concepts/Equals i hashCode",permalink:"/docs/Java/concepts/Equals i hashCode",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/concepts/Equals i hashCode.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comparable vs. Comparator",permalink:"/docs/Java/concepts/Comparable vs. Comparator"},next:{title:"Inbox Outbox",permalink:"/docs/Java/patterns/Inbox Outbox"}},c={},p=[],y={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"equals-and-hashcode"},"Equals and HashCode"),(0,o.kt)("p",null,"Przyk\u0142ad funckji equals:"),(0,o.kt)("p",null,"@Override\npublic boolean equals(Object o) {\nif (o == this)\nreturn true;\nif (!(o instanceof Voucher))\nreturn false;\nVoucher other = (Voucher) o;\nboolean valueEquals = (this.value == null && other.value == null)\n|| (this.value != null && this.value.equals(other.value));\nboolean storeEquals = (this.store == null && other.store == null)\n|| (this.store != null && this.store.equals(other.store));\nreturn valueEquals && storeEquals;\n}"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sprawdzamy czy wska\u017aniki wskazuj\u0105 na ten sam obiekt - je\u015bli tak zwracamy true"),(0,o.kt)("li",{parentName:"ol"},"Sprawdzamy czy obiekt jest w\u0142a\u015bciewgo typu - je\u015bli nie to zwracamy false"),(0,o.kt)("li",{parentName:"ol"},"sprawdzamy czy warto\u015bci s\u0105 r\xf3wne i zwracamy true/false")),(0,o.kt)("p",null,"Object identity okre\u015bla, czy zmienne wskazuj\u0105 na ten sam obiekt.  "),(0,o.kt)("p",null,"HashCode przechowuje obliczon\u0105 warto\u015b\u0107 hasha dla obiektu. Hash jest to wyniku pewego algorytmy wykonanego na wybranych polach klasy np: mamy klas\u0119 pies, a w niej atrybuty takie jak imie oraz wiek. Ustalamy, \u017ce b\u0119dziemy mno\u017cy\u0107 wiek oraz imi\u0119 przez 31 i na ko\u0144cu zsumujemy te wyniki. Tak powsta\u0142a liczba mo\u017ce by\u0107 u\u017cyta jako unikalny identyfikator obiektu policzony na wielu polach jednej klasy. U\u017cywany jest w przypadku kiedy dodajemy obiekty do hashMapy w kt\xf3rej obiekty s\u0105 grupowane po hashCode. Niepoprawna implementacja hashCode dla funckji mo\u017ce znacz\u0105c\u0105 spowolni\u0107 wyszukiwanie w strukturze.\nWed\u0142ug bada\u0144 nad wydajno\u015bci\u0105, najoptymalniejsz\u0105 metod\u0105 obliczania hasha jest mno\u017cenie wyniku przez liczby pierwsze. 31 jest liczb\u0105 pierwsz\u0105 co powoduj\u0105 mniejsz\u0105 liczb\u0119 kolizji."))}d.isMDXComponent=!0}}]);