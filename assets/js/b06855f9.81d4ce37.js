"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,d=m["".concat(l,".").concat(s)]||m[s]||y[s]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return y}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l=void 0,p={unversionedId:"python/Intermediate/Praktyczny Python nr. 1 - Memcached",id:"python/Intermediate/Praktyczny Python nr. 1 - Memcached",title:"Praktyczny Python nr. 1 - Memcached",description:"---",source:"@site/docs/python/Intermediate/Praktyczny Python nr. 1 - Memcached.md",sourceDirName:"python/Intermediate",slug:"/python/Intermediate/Praktyczny Python nr. 1 - Memcached",permalink:"/docs/python/Intermediate/Praktyczny Python nr. 1 - Memcached",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/Intermediate/Praktyczny Python nr. 1 - Memcached.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"types",permalink:"/docs/python/Basics/types"},next:{title:"Webdev s\u0142ownik cz.1",permalink:"/docs/webdev/Webdev s\u0142ownik cz.1"}},u={},y=[{value:"Memcached",id:"memcached",level:3},{value:"Gdzie powinie\u0144 sie znajdowa\u0107 cache?",id:"gdzie-powinie\u0144-sie-znajdowa\u0107-cache",level:3},{value:"U\u017cycie memcached w j\u0119zyku Python na przyk\u0142adzie zapisywania ankiet.",id:"u\u017cycie-memcached-w-j\u0119zyku-python-na-przyk\u0142adzie-zapisywania-ankiet",level:2},{value:"Serwer",id:"serwer",level:3},{value:"Client",id:"client",level:3}],m={toc:y};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"memcached"},"Memcached"),(0,o.kt)("p",null,"Przechowywa\u0107 dane mo\u017cemy na wiele sposob\xf3w. Najbardziej popularn\u0105 metod\u0105 s\u0105 bazy danych. Utrzymanie danych jest proste i dane s\u0105 uporzadkowane."),(0,o.kt)("p",null,"Wykonuj\u0105c zapytania do bazy kt\xf3ra posiada znaczn\u0105 ilo\u015b\u0107 danych mo\u017ce si\u0119 okaza\u0107, \u017ce czas otrzymania informacji zwrotnej nie b\u0119dzie optymalny."),(0,o.kt)("p",null,"Rozwi\u0105zaniem tego problemu jest cachowanie danych."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Plusy"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Szybki dost\u0119p do danych")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Redukcja zapyta\u0144 do bazy danych")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Odci\u0105\u017cenie bazy danych w przypadku kiedy mamy system rozproszony"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minusy"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"memcache jest struktur\u0105 klucz:warto\u015b\u0107 wi\u0119c szybko\u015b\u0107 dost\u0119pu do danych maleje wraz ze wzrostem ilo\u015bci danych(tutaj mo\u017cemy u\u017cy\u0107 algorytmu LRU, kt\xf3ry b\u0119dzie dba\u0142 o to aby w memcached by\u0142y tylko te k\xf3re s\u0105 najcz\u0119\u015bciej wykorzystywane)")),(0,o.kt)("h3",{id:"gdzie-powinie\u0144-sie-znajdowa\u0107-cache"},"Gdzie powinie\u0144 sie znajdowa\u0107 cache?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"na tym samym serwerze co aplikacja "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"szybki dost\u0119p"),(0,o.kt)("li",{parentName:"ul"},"dane s\u0105 zsynchronizowe"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cache globalny "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"dost\u0119p jest wolniejszy"),(0,o.kt)("li",{parentName:"ul"},"\u0142atwe skalowanie"),(0,o.kt)("li",{parentName:"ul"},"posiadaj\u0105c dwie instancj\u0119 musimy synchronizowa\u0107 cache")))),(0,o.kt)("h2",{id:"u\u017cycie-memcached-w-j\u0119zyku-python-na-przyk\u0142adzie-zapisywania-ankiet"},"U\u017cycie memcached w j\u0119zyku Python na przyk\u0142adzie zapisywania ankiet."),(0,o.kt)("h3",{id:"serwer"},"Serwer"),(0,o.kt)("p",null,"Pierwszym krokiem jest pobranie memcached i zainstalowanie lokalnie na naszym komputerze. Po uruchomieniu, serwer b\u0119dzie nas\u0142uchiwa\u0142 na wybranym porcie."),(0,o.kt)("h3",{id:"client"},"Client"),(0,o.kt)("p",null,"Tworzymy obiekt za pomoc\u0105 kt\xf3rego b\u0119dziemy mogli kominikowa\u0107 sie z cachem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"client = Client('localhost')\n")),(0,o.kt)("p",null,"{{< note >}}\nNale\u017cy pobra\u0107 bibliotk\u0119 pymemcache oraz j\u0105 zaimportowa\u0107: from pymemcache.client.base import Client\n{{< /note >}}"),(0,o.kt)("p",null,"Wybrane metody:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"client.get(key)")," - pobieramy warto\u015b\u0107 z pod klucza 'key'"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"client.set('key','value')")," - dodajemy dane(klucz, warto\u015b\u0107) do struktury "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"client.gets('key')"),"-  dzia\u0142a tak samo jak get() ale dodatkowo zwraca CAS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CAS(check and set)")," -  warto\u015b\u0107 stosowana w celu zapobiegania nadpisywania warto\u015bci spod jakiego\u015b klucza. Przyk\u0142dem mo\u017ce by\u0107 pr\xf3ba zapisania warto\u015bci przez dw\xf3ch u\u017cytkwonik\xf3w do tego samego klucza."),(0,o.kt)("p",null,"Projekt z u\u017cyciem memcashed mo\u017cna znale\u017a\u0107 pod nast\u0119puj\u0105cym linkiem:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/7GitHub7/Python_Learning/tree/master/Lecture2"},"Github")))}s.isMDXComponent=!0}}]);