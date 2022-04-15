"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[549],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(t),d=n,m=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8527:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(7462),n=t(3366),o=(t(7294),t(3905)),i=["components"],l={},p=void 0,s={unversionedId:"konsensus/Paxos&Raft",id:"konsensus/Paxos&Raft",title:"Paxos&Raft",description:"Algorytmy konsensusu",source:"@site/docs/konsensus/Paxos&Raft.md",sourceDirName:"konsensus",slug:"/konsensus/Paxos&Raft",permalink:"/docs/konsensus/Paxos&Raft",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/konsensus/Paxos&Raft.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"types",permalink:"/docs/python/Basics/types"}},c={},u=[{value:"PAXOS",id:"paxos",level:2},{value:"Jak Paxos radzi sobie z awariami.",id:"jak-paxos-radzi-sobie-z-awariami",level:3},{value:"Acceptor ulega awarii",id:"acceptor-ulega-awarii",level:4},{value:"Learner ulega awarii",id:"learner-ulega-awarii",level:4},{value:"Proposer ulega awarii",id:"proposer-ulega-awarii",level:4},{value:"Links",id:"links",level:4}],y={toc:u};function d(e){var a=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Algorytmy konsensusu")),(0,o.kt)("p",null,"W tym artukule postram si\u0119 przybli\u017cy\u0107 co wsp\xf3lnego ma Grecka wyspa z systememi rozproszonymi. \\\nPrzedstawi\u0119 zasad\u0119 dzia\u0142ania popularnych algorytm\xf3w osi\u0105gania konsensu w systemach rozproszonych - Paxos I Raft."),(0,o.kt)("p",null,"Historia algorytmu Paxos si\u0119ga czas\xf3w antycznej Grecji. Transformacja rz\u0105du na system parlamentarny, kt\xf3ry z za\u0142o\u017cenie wymaga posiedze\u0144 rz\u0105dz\u0105cych by\u0142o nie lada wyzwaniem. W \xf3wczesnych czasach priorytetem greka by\u0142 handel, na kt\xf3ry po\u015bwi\u0119ca\u0142 wi\u0119kszo\u015b\u0107 swojego czasu. Aby parlament m\xf3g\u0142 funkcjonowa\u0107 poprawnie, musieli wypracowa\u0107 system, kt\xf3ry pozwala\u0142 politykom na wchodzenie i wychodzenie w dowolnym czasie. W zwi\u0105zku z tym, \u017ce pozosta\u0142y szcz\u0105tkowe informacje dzia\u0142ania takiego algorytmu pozwoli\u0142o to zainspirowa\u0107 si\u0119 nim w sytemach rozroszonych."),(0,o.kt)("h2",{id:"paxos"},"PAXOS"),(0,o.kt)("p",null,"U\u017cyty w implementacji na przyk\u0142ad:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Apache ZooKeeper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Systemy Google"))),(0,o.kt)("p",null,"W teorii algorytm jest prosty jednak implementacja nie jest taka \u0142atwa na jak\u0105 si\u0119 wydaj\u0119. Ci\u0119\u017cko jest znale\u017a\u0107 zaimplementowany algorytm zgodny z oryginalnymi za\u0142o\u017ceniemi."),(0,o.kt)("p",null,"W podstawowej wersji algorytmu mamy 4 g\u0142\xf3wne role:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Rola"),(0,o.kt)("th",{parentName:"tr",align:null},"Opis"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Client"),(0,o.kt)("td",{parentName:"tr",align:null},"wysy\u0142a \u017c\u0105dania do systemu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Proposer"),(0,o.kt)("td",{parentName:"tr",align:null},"przewodzi w g\u0142osowaniu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Acceptor"),(0,o.kt)("td",{parentName:"tr",align:null},"g\u0142osuje")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Learner"),(0,o.kt)("td",{parentName:"tr",align:null},"powiela podj\u0119te decyzje")))),(0,o.kt)("p",null,"Przyk\u0142adowy przebieg osi\u0105gania wp\xf3lnego statnu dla maszyn w systemie:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"System otrzymuje \u017c\u0105danie od Clienta")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wybrany lider(Proposer) wysy\u0142a pro\u015bb\u0119 o obietnic\u0119 do ka\u017cdego z cz\u0142onk\xf3w. Pro\u015bba musi zawiera\u0107 liczb\u0119 ",(0,o.kt)("em",{parentName:"p"},"n")," kt\xf3ra jest warto\u015bcia kontoln\u0105 dla cz\u0142onk\xf3w na podstawie kt\xf3rej mog\u0105 stwierdzi\u0107 czy dany lider jest aktualny.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Je\u017celi warto\u015b\u0107 kontrolna si\u0119 zgadza to ka\u017cdy cz\u0142onek odsy\u0142a obietnic\u0119(Promise) w kt\xf3rej deklaruj\u0119, \u017ce je\u017celi wy\u015blesz mi propozycj\u0119 wprowadzenia zmian w systemi oraz pro\u015bba b\u0119dzie zawiera\u0142a t\u0105 konkretn\u0105 warto\u015bci\u0105 ",(0,o.kt)("em",{parentName:"p"},"n")," to wprowadze zaproponowane zmiany.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Je\u017celi Proposer otrzyma\u0142 wi\u0119cej ni\u017c po\u0142owe pozytywnych odpwiedzi, wysy\u0142a wiadomo\u015b\u0107 typu Accept kt\xf3ra zawiera warto\u015b\u0107 n oraz warto\u015bc/stan kt\xf3ry cz\u0142onek ma zapisa\u0107.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Acceptor odsy\u0142a potwierdzenie"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(6203).Z,width:"653",height:"260"})),(0,o.kt)("p",null,"Przyk\u0142adowy przebieg osi\u0105gania wp\xf3lnego statnu dla maszyn w systemie"),(0,o.kt)("p",null,"Prepare(n) \u2013 n za ka\u017cdym razem musi by\u0107 wi\u0119ksza ni\u017c poprzednio"),(0,o.kt)("p",null,"Proces sk\u0142ada si\u0119 z dw\xf3ch etap\xf3w. Pierwszy odpowiada za otrzymanie przez Proposera odpoweidzi Promise od cz\u0142onk\xf3w. Drugi to zapisanie dancyh przez cz\u0142onk\xf3w."),(0,o.kt)("p",null,"Tak jak mo\u017cna zauwa\u017cy\u0107 w algorytmie wsyt\u0119puj\u0119 redundancja ale o tym za chwil\u0119."),(0,o.kt)("h3",{id:"jak-paxos-radzi-sobie-z-awariami"},"Jak Paxos radzi sobie z awariami."),(0,o.kt)("h4",{id:"acceptor-ulega-awarii"},"Acceptor ulega awarii"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(6672).Z,width:"779",height:"278"})),(0,o.kt)("p",null,"Acceptor ulega awarii"),(0,o.kt)("p",null,"Ze wzgl\u0119du na to, \u017ce algorytm potrzebuj\u0119 wi\u0119kszo\u015b\u0107 pozytywnych odowiedzi, przypadek kiedy jeden Acceptor ulegnie awarii nic sie nie dzieje z ca\u0142ym systemem."),(0,o.kt)("h4",{id:"learner-ulega-awarii"},"Learner ulega awarii"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(8126).Z,width:"680",height:"272"})),(0,o.kt)("p",null,"Learner ulega awarii"),(0,o.kt)("p",null,"Tak samo jak powy\u017cej, system sprawnie radzi sobie z awari\u0105 Learnenra."),(0,o.kt)("h4",{id:"proposer-ulega-awarii"},"Proposer ulega awarii"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tr",src:t(2314).Z,width:"828",height:"401"})),(0,o.kt)("p",null,"Proposer ulega awarii"),(0,o.kt)("p",null,"Ten przypadek jest dosy\u0107 z\u0142o\u017cony. W przypadku kiedy awarii ulega Proposer musi niezw\u0142ocznie zosta\u0107 wybrany nowy. Procedura wybierania nowego Proposera jest bardzo podobna do poprzednich, polegamy na demokracji. Ka\u017cdy cz\u0142onek ma losowy timer po kt\xf3rego up\u0142ywie mo\u017ce zg\u0142osi\u0107 kandydatur\u0119 na Proposera(o ile obecny nie odpowiada)"),(0,o.kt)("p",null,"Wychodz\u0105c naprzeciw redundancji wyst\u0119puj\u0105cej w podstawowej wersji algorytmu, wprowadzono MULTIPAXOS kt\xf3ry wykonuj\u0119 pierwszy etap tylko w momencie utraty lidera. W pozosta\u0142ych przypadkach wykonywana jest tylko druga cz\u0119\u015b\u0107 algorytmu."),(0,o.kt)("h4",{id:"links"},"Links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Paxos_(computer_science)/"},"Wikipedia - Paxos")))}d.isMDXComponent=!0},6672:function(e,a,t){a.Z=t.p+"assets/images/acceptor-8fb5820a863bc5f6202a84109e722de0.jpg"},6203:function(e,a,t){a.Z=t.p+"assets/images/basic-634a2941eaf8fbddaf3309298c82e871.jpg"},8126:function(e,a,t){a.Z=t.p+"assets/images/learner-2d482cbd752f8ed2badde0f7de7efb01.jpg"},2314:function(e,a,t){a.Z=t.p+"assets/images/proposer-3e46f396a30d5265fab1cdccb25feae6.jpg"}}]);