"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8384],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),y=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=y(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=y(r),k=n,d=u["".concat(l,".").concat(k)]||u[k]||s[k]||i;return r?a.createElement(d,c(c({ref:t},p),{},{components:r})):a.createElement(d,c({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var y=2;y<i;y++)c[y]=r[y];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return y},toc:function(){return s}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),c=["components"],o={},l=void 0,y={unversionedId:"Data Science/Miary ewolucyjne",id:"Data Science/Miary ewolucyjne",title:"Miary ewolucyjne",description:"| Rzeczywiste |Rzeczywiste |",source:"@site/docs/Data Science/Miary ewolucyjne.md",sourceDirName:"Data Science",slug:"/Data Science/Miary ewolucyjne",permalink:"/docs/Data Science/Miary ewolucyjne",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Data Science/Miary ewolucyjne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KMeans",permalink:"/docs/Data Science/klastrowanie/KMeans"},next:{title:"Naiwny klasyfikator bayesowski",permalink:"/docs/Data Science/Naiwny klasyfikator bayesowski"}},p={},s=[{value:"Czu\u0142o\u015b\u0107 (sensitivity, recall)",id:"czu\u0142o\u015b\u0107-sensitivity-recall",level:2},{value:"Dok\u0142adno\u015b\u0107 (accuracy)",id:"dok\u0142adno\u015b\u0107-accuracy",level:2},{value:"Precyzja (precision)",id:"precyzja-precision",level:2},{value:"Specyficzno\u015b\u0107 (specificity)",id:"specyficzno\u015b\u0107-specificity",level:2},{value:"Krzywa ROC (Receiver Operating Characteristic)",id:"krzywa-roc-receiver-operating-characteristic",level:2},{value:"Krzywa uczenia si\u0119",id:"krzywa-uczenia-si\u0119",level:2}],u={toc:s};function k(e){var t=e.components,o=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Rzeczywiste"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Rzeczywiste"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"True positive"),(0,i.kt)("td",{parentName:"tr",align:"left"},"False positive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"False negative"),(0,i.kt)("td",{parentName:"tr",align:"left"},"False positive")))),(0,i.kt)("p",null,"Kolumny okre\u015blaja rzeczywisto\u015b\u0107, wiersze predykcj\u0119.\nPoni\u017cej macierz dla predykcji przy wykorzystaniu algorytmy kNN na zbiorze Iris "),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5078).Z,width:"716",height:"548"})),(0,i.kt)("p",null,"Chc\u0105c przeanalizowa\u0107 taki wykres musimy wybra\u0107 etykiet\u0119 kt\xf3r\u0105 b\u0119dziemy por\xf3wnywa\u0107 z pozosta\u0142ymi.\nWybierzmy etykiet\u0119 0."),(0,i.kt)("p",null,"Ca\u0142y zbi\xf3r testowy zawiera 38 danych (Suma warto\u015bci w macierzy) "),(0,i.kt)("p",null,"Na pocz\u0105teku widzimy, \u017ce 0 zosta\u0142o zaklasyfikowane 9 razy jako etykieta 0 i 2 razy jako etykieta 1.\nNie mamy tak\u017ce FP, poniewa\u017c \u017cadna etykieta nie zosta\u0142a b\u0142\u0119dnie zinterpretowana jako 0."),(0,i.kt)("p",null,"Po pierwszym kroku wiemy, \u017ce:\nTP = 9\nFP = 0\nFN = 2"),(0,i.kt)("p",null,"Aby obliczy\u0107 TN wystarczy od ca\u0142o\u015bci odj\u0105\u0107 pozota\u0142e co daje TN = 27"),(0,i.kt)("h2",{id:"czu\u0142o\u015b\u0107-sensitivity-recall"},"Czu\u0142o\u015b\u0107 (sensitivity, recall)"),(0,i.kt)("p",null,"Okre\u015bla ile TP jest w calym zbiorze Positive (r\xf3wnie\u017c FN).\nTPR = TP/P = TP/TP+FN"),(0,i.kt)("p",null,"Minusem jest to, \u017ce nie bierz\u0119 pod uwage FP\nNie bierz\u0119 pod uwag\u0119 TN.\nWynik powinien d\u0105\u017cy\u0107 do 1."),(0,i.kt)("h2",{id:"dok\u0142adno\u015b\u0107-accuracy"},"Dok\u0142adno\u015b\u0107 (accuracy)"),(0,i.kt)("p",null,"ACC = (TP + TN) / P+N"),(0,i.kt)("p",null,"Okre\u015bla jako\u015b\u0107 klasyfikacji. Wskazuje procent poprawnych predykcji w skali wszystkich pr\xf3bek. Im wynik bli\u017cszy 1 tym lepiej."),(0,i.kt)("h2",{id:"precyzja-precision"},"Precyzja (precision)"),(0,i.kt)("p",null,"PPV = TP / TP + FP"),(0,i.kt)("p",null,"M\xf3wi ile by\u0142o rzeczywi\u015bcie pozytywncyh w\u015br\xf3d wszystkich zaklasyfikowanych pozytywnie.\nNie bierz\u0119 pod uwag\u0119 TN."),(0,i.kt)("h2",{id:"specyficzno\u015b\u0107-specificity"},"Specyficzno\u015b\u0107 (specificity)"),(0,i.kt)("p",null,"TNR = TN / N"),(0,i.kt)("p",null,"Sprawdza ile by\u0142o pozytywnych  w\u015br\xf3d wszystkich negatywnych."),(0,i.kt)("h2",{id:"krzywa-roc-receiver-operating-characteristic"},"Krzywa ROC (Receiver Operating Characteristic)"),(0,i.kt)("p",null,"Wyznaczenie progu odci\u0119cia"),(0,i.kt)("h2",{id:"krzywa-uczenia-si\u0119"},"Krzywa uczenia si\u0119"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.statystyczny.pl/macierz-bledow-raport-dokladnosc-czulosc-precyzja/"},"Wi\u0119cej informacji na ten temat"),".\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1uYvFbPml_A"},"Lub tutaj "),"."))}k.isMDXComponent=!0},5078:function(e,t,r){t.Z=r.p+"assets/images/heatmap_kNN-40ae9b125416ccbc2434db29c22c61c2.PNG"}}]);