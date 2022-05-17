"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3901],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var A=n.createContext({}),s=function(e){var a=n.useContext(A),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(A.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,A=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=i,d=c["".concat(A,".").concat(u)]||c[u]||k[u]||r;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var A in a)hasOwnProperty.call(a,A)&&(l[A]=a[A]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5523:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return A},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return k}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={},A=void 0,s={unversionedId:"Data Science/klastrowanie/DBSCAN",id:"Data Science/klastrowanie/DBSCAN",title:"DBSCAN",description:"Jest jednym z algorytm\xf3w g\u0119sto\u015bciowych. Dop\xf3ki bedzi\u0119 wystarczaj\u0105ca liczba punkt\xf3w wok\xf3\u0142 klastra to b\u0119dzie on si\u0119 powi\u0119ksza\u0142.",source:"@site/docs/Data Science/klastrowanie/DBSCAN.md",sourceDirName:"Data Science/klastrowanie",slug:"/Data Science/klastrowanie/DBSCAN",permalink:"/docs/Data Science/klastrowanie/DBSCAN",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Data Science/klastrowanie/DBSCAN.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Miary ewolucyjne",permalink:"/docs/Data Science/Miary ewolucyjne"}},p={},k=[{value:"Parametry",id:"parametry",level:3},{value:"S\u0142ownik",id:"s\u0142ownik",level:3},{value:"Zasada dzia\u0142ania",id:"zasada-dzia\u0142ania",level:3},{value:"Zalety algorytmu",id:"zalety-algorytmu",level:3},{value:"Jak okre\u015bli\u0107 jako\u015b\u0107 klastrowania",id:"jak-okre\u015bli\u0107-jako\u015b\u0107-klastrowania",level:3},{value:"Silhouette Coefficient m\xf3wi o jako\u015bci skupie\u0144:",id:"silhouette-coefficient-m\xf3wi-o-jako\u015bci-skupie\u0144",level:4},{value:"Davies-bouldin",id:"davies-bouldin",level:4},{value:"Wska\u017anik Cali\u0144skiego-Harabasza (inaczej kryterium wsp\xf3\u0142czynnika wariancji)",id:"wska\u017anik-cali\u0144skiego-harabasza-inaczej-kryterium-wsp\xf3\u0142czynnika-wariancji",level:4},{value:"Przykad Iris",id:"przykad-iris",level:3}],c={toc:k};function u(e){var a=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jest jednym z algorytm\xf3w g\u0119sto\u015bciowych. Dop\xf3ki bedzi\u0119 wystarczaj\u0105ca liczba punkt\xf3w wok\xf3\u0142 klastra to b\u0119dzie on si\u0119 powi\u0119ksza\u0142."),(0,r.kt)("h3",{id:"parametry"},"Parametry"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"epsilon")," - maksymalna odleg\u0142o\u015b\u0107 od punkty jaka b\u0119dzie rozszerza\u0142a kluster"),(0,r.kt)("h1",{id:""}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"min_samples")," = minimalna liczba punkt\xf3w wok\xf3\u0142 badanego punkty potrzebna do uznania punktu za core point "),(0,r.kt)("h3",{id:"s\u0142ownik"},"S\u0142ownik"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"core point")," - punkt kt\xf3ry mo\u017ce rozszerza\u0107 grup\u0119 oraz spe\u0142nia kryteria epsilon oraz min_samples. "),(0,r.kt)("h1",{id:"-1"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"non core point")," - punkty kt\xf3re spe\u0142niaj\u0105 epsilon oraz maj\u0105 w zasi\u0119gu conajmniej jeden core point. Nie mog\u0105 rozszerza\u0107 klastra. "),(0,r.kt)("h1",{id:"-2"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"outliers")," - punkty kt\xf3re nie spe\u0142ni\u0142y \u017cednego z warunk\xf3w "),(0,r.kt)("h3",{id:"zasada-dzia\u0142ania"},"Zasada dzia\u0142ania"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wybieramy parametry epsilon i liczb\u0119 min_samples"),(0,r.kt)("li",{parentName:"ol"},"Liczb\u0119 epsilon mo\u017cna okre\u015bli\u0107 za pomoc\u0105 metody \u0142okcia i algorytmu Knn - ta metoda jest w stanie okre\u015bli\u0107 w przyblizeniu warto\u015bci epsilon."),(0,r.kt)("li",{parentName:"ol"},"Okre\u015blamy liczb\u0119 min_samples - tutaj nalepiej wykona\u0107 kilka test\xf3w z r\xf3\u017cn\u0105 liczb\u0105."),(0,r.kt)("li",{parentName:"ol"},"Na pocz\u0105tku oznaczamy core points na podstawie podanych kryteri\xf3w."),(0,r.kt)("li",{parentName:"ol"},"Nast\u0119pnie przyporz\u0105dkowujemy core ponints do klustr\xf3w."),(0,r.kt)("li",{parentName:"ol"},"Kolejnym krokiem jest oznacznie non core points oraz outlieres")),(0,r.kt)("h3",{id:"zalety-algorytmu"},"Zalety algorytmu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nie trzeba zna\u0107 liczby klastr\xf3w"),(0,r.kt)("li",{parentName:"ul"},"znaduj\u0105 outlieres"),(0,r.kt)("li",{parentName:"ul"},"dzia\u0142a na r\xf3znych ksza\u0142tach")),(0,r.kt)("h3",{id:"jak-okre\u015bli\u0107-jako\u015b\u0107-klastrowania"},"Jak okre\u015bli\u0107 jako\u015b\u0107 klastrowania"),(0,r.kt)("p",null,"Dost\u0119pne sa r\xf3\u017cne metryki kt\xf3re pozwalaj\u0105 na sprawdzeniu jako\u015bci klastrowania. Dzielimy je na zewn\u0119trzne i wewn\u0119trzne"),(0,r.kt)("h4",{id:"silhouette-coefficient-m\xf3wi-o-jako\u015bci-skupie\u0144"},"Silhouette Coefficient m\xf3wi o jako\u015bci skupie\u0144:"),(0,r.kt)("p",null,"a - blisko\u015b\u0107 punkt\xf3w w grupie"),(0,r.kt)("h1",{id:"-3"}),(0,r.kt)("p",null,"b - jak daleko jeste\u015bmy od najbli\u017cszej grupy\nInterpetacja jest taka, \u017ce im bli\u017cej 1 tym lepiej"),(0,r.kt)("h4",{id:"davies-bouldin"},"Davies-bouldin"),(0,r.kt)("h1",{id:"-4"}),(0,r.kt)("p",null,"Na podstawie podobie\u0144stwa pomi\u0119dzy grupami, im mniejszy tym lepiej"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Liczymy srednie odleg\u0142osci mi\u0119dzy punktami w grupie"),(0,r.kt)("li",{parentName:"ol"},"Liczymy odlego\u015bci mi\u0119dzy grupami"),(0,r.kt)("li",{parentName:"ol"},"Obliczmy podobie\u0144stwo pomi\u0119dzy grupami"),(0,r.kt)("li",{parentName:"ol"},"Znjdujemy najbardziej podobne grupy dla ka\u017cdego"),(0,r.kt)("li",{parentName:"ol"},"Liczymy wp\xf3\u0142czynnik davies-bouldin kt\xf3ry jest \u015bredni\u0105 z podobie\u0144stw\nIm mnijeszy wynik tym lepiej")),(0,r.kt)("h4",{id:"wska\u017anik-cali\u0144skiego-harabasza-inaczej-kryterium-wsp\xf3\u0142czynnika-wariancji"},"Wska\u017anik Cali\u0144skiego-Harabasza (inaczej kryterium wsp\xf3\u0142czynnika wariancji)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Index jest stosunkie sumy rozprosze\u0144 pomi\u0119dzy klastrami oraz rozprosze\u0144 wewn\u0105trz klastr\xf3w"),(0,r.kt)("li",{parentName:"ol"},"Rozproszenie zdefiniowane jest jako suma kwadrat\xf3w odleg\u0142o\u015bci)"),(0,r.kt)("li",{parentName:"ol"},"Jak czyta\u0107?"),(0,r.kt)("li",{parentName:"ol"},"Im wy\u017cszy wynik tym klastry s\u0105 g\u0119strze i lepiej rozdzielone od siebie")),(0,r.kt)("h3",{id:"przykad-iris"},"Przykad Iris"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Elbow.py"',title:'"Elbow.py"'},"iris_scaled = StandardScaler().fit_transform(iris_numpy)\nneigh = NearestNeighbors(n_neighbors=2)\nnbrs = neigh.fit(iris_scaled)\ndistances, indices = nbrs.kneighbors(iris_scaled)\ndistances = -np.sort(-distances, axis=0)\ndistances = distances[:,1]\nplt.plot(distances)\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1894).Z,width:"388",height:"243"})),(0,r.kt)("p",null,"Nast\u0119pnie u\u017cywaj\u0105c bibliotek sklearn mo\u017cemy obliczy\u0107 jako\u015b\u0107 klustrowania, u\u017cywaj\u0105c wybranych wska\u017anik\xf3w."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="dbscan.py"',title:'"dbscan.py"'},"m = DBSCAN(eps=i, min_samples=min_sample)\nm.fit(iris_scaled)\nclusters = m.labels_\nsilhouette = metrics.silhouette_score(iris_scaled, m.labels_)\ndavies_bouldin = metrics.davies_bouldin_score(iris_scaled, m.labels_)\ncalinski_harabasz = metrics.calinski_harabasz_score(iris_scaled, m.labels_)\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5918).Z,width:"843",height:"587"})),(0,r.kt)("p",null,"Na podstawie obliczonych metryk mo\u017cemy wybra\u0107 dla jakich wej\u015bciowych parametr\xf3w (eps i min_samples) algorytm wykona\u0142 klastrowanie najlepiej."))}u.isMDXComponent=!0},1894:function(e,a){a.Z="data:image/png;base64,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"},5918:function(e,a,t){a.Z=t.p+"assets/images/metrics_dbscan-4955424824319f2f6b5a11e37b9a6dde.PNG"}}]);