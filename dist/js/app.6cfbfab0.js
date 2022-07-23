(function(){"use strict";var e={1808:function(e,t,a){var n=a(6369),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("svg",{staticStyle:{position:"absolute",height:"0"}},[a("filter",{attrs:{id:"colorblind-filter"}},[a("feColorMatrix",{attrs:{type:"matrix",values:" 0.367  0.861  -0.228  0.000  0.000 \n                    0.280  0.673  0.047  0.000  0.000 \n                    -0.012  0.043  0.969  0.000  0.000 \n                    0.000  0.000  0.000  1.000  0.000"}})],1)]),a("NavBar",{on:{menuItemClicked:e.menuItemClicked,toggleFilter:e.toggleFilter}}),a("div",{attrs:{id:"page"}},["About Me"===e.currentPage?a("AboutMePage"):"Projects"===e.currentPage?a("ProjectsPage"):"Resume"===e.currentPage?a("ResumePage"):"Fun Facts"===e.currentPage?a("FunFactsPage",{on:{toggleFilter:e.toggleFilter}}):a("HomePage")],1)],1)},o=[],s=a(7389),r=a(4121),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar",attrs:{id:"mainNav"}},[n("div",{class:e.containerClasses},[n("img",{staticClass:"profile-pic",attrs:{src:a(5336),alt:"profile-pic"},on:{click:function(t){return e.menuItemClicked("Home")}}}),e.menuButton?n("button",{class:e.navbarTogglerClasses,attrs:{id:"navButton",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:e.toggleVerticalMenu}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-bars"}})],1):e._e(),n("div",{class:e.navbarContainerClasses,attrs:{id:"navbarResponsive"}},[n("ul",{class:e.navbarClasses},[n("li",{class:e.itemClasses("About Me"),on:{click:function(t){return e.menuItemClicked("About Me")}}},[n("a",{staticClass:"nav-link rounded"},[e._v("About Me")])]),n("li",{class:e.itemClasses("Projects"),on:{click:function(t){return e.menuItemClicked("Projects")}}},[n("a",{staticClass:"nav-link rounded"},[e._v("Projects")])]),n("li",{class:e.itemClasses("Resume"),on:{click:function(t){return e.menuItemClicked("Resume")}}},[n("a",{staticClass:"nav-link rounded"},[e._v("Resume")])]),n("li",{class:e.itemClasses("Fun Facts"),on:{click:function(t){return e.menuItemClicked("Fun Facts")}}},[n("a",{staticClass:"nav-link rounded"},[e._v("Fun Facts")])]),n("li",{staticClass:"nav-item"},[n("ColorblindSwitch",{on:{switchClicked:function(t){return e.$emit("toggleFilter",t)}}})],1)])])])])},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"colorblind-switch"},[a("input",{staticClass:"colorblind-checkbox",attrs:{type:"colorblind"},on:{click:e.inputClicked}}),a("span",{staticClass:"slider round"})])},d=[],p=(0,s.aZ)({setup(e,{emit:t}){const a=(0,s.iH)(!1),n=(0,s.Fl)((()=>({"colorblind-checkbox":!0,"is-active":a.value}))),i=function(){var e=!1;const n=document.getElementsByClassName("colorblind-checkbox");for(var i=0;i<n.length;i++){const t=n.item(i);t?.classList.toggle("is-active"),e=t?.classList.contains("is-active")}a.value=e,t("switchClicked",a.value)};return(0,s.bv)((()=>{const e=document.getElementsByClassName("colorblind-checkbox"),t=e.item(0);t?.classList.contains("is-active")&&(e.item(e.length-1)?.classList.toggle("is-active"),a.value=!0)})),{inputClicked:i,inputClasses:n}}}),m=p,g=a(1001),v=(0,g.Z)(m,u,d,!1,null,null,null),f=v.exports,h=(0,s.aZ)({setup(e,{emit:t}){const a=(0,s.iH)(""),n=(0,s.iH)(!1),i=(0,s.iH)(!1),o=(0,s.iH)(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<575),r=(0,s.Fl)((()=>({container:!0,vertical:n.value}))),l=(0,s.Fl)((()=>({"navbar-nav":!0,vertical:n.value}))),c=(0,s.Fl)((()=>e=>({"nav-item":!0,"is-active":e===a.value}))),u=function(e){a.value=e,t("menuItemClicked",e)},d=function(){const e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);o.value=e<575,n.value&&!o.value&&(n.value=!1),!o.value&&i.value&&(i.value=!1)},p=(0,s.Fl)((()=>({"navbar-toggler":!0,"is-active":i.value})));(0,s.bv)((()=>{window.addEventListener("resize",d)})),(0,s.Ah)((()=>{window.removeEventListener("resize",d)}));const m=(0,s.Fl)((()=>({"horizontal-nav":!o.value,"vertical-nav":o.value,show:!o.value||n.value}))),g=function(e){const t=e.target,a=document.getElementById("mainNav");"mainNav"===t.id||a?.contains(t)||(n.value=!1,i.value=!1,window.removeEventListener("click",g))},v=function(){n.value="navButton"===document.activeElement?.id,i.value=!0,window.addEventListener("click",g)},f=function(){console.log("Focus Out")};return{containerClasses:r,menuButton:o,menuItemClicked:u,navbarContainerClasses:m,showVerticalNav:n,toggleVerticalMenu:v,navbarClasses:l,itemClasses:c,focusOut:f,navbarTogglerClasses:p}},components:{ColorblindSwitch:f}}),b=h,y=(0,g.Z)(b,l,c,!1,null,"70387c08",null),w=y.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me-wrapper"},[n("div",{staticClass:"about-card-wrapper",staticStyle:{"background-color":"#071E3D"}},[n("span",[n("h6",[e._v("Texas A&M University")]),e._v(" I am currently a senior at Texas A&M University, Gig'em!. I am planning on graduating in the spring of 2023 with a B.S. in Computer Science and a minor in Cybersecurity. Through my coursework at A&M, I learned how to work in a team, agile development, SQL, python, C++, and many other languages and tools. ")]),n("img",{staticClass:"about-right-pic",staticStyle:{"background-color":"#21E6C1"},attrs:{src:"",alt:"personal-aggie-pic"}})]),n("div",{staticClass:"about-card-wrapper",staticStyle:{"background-color":"#278EA5"}},[n("img",{staticClass:"about-left-pic",staticStyle:{"background-color":"#071E3D"},attrs:{src:a(1352),alt:"artificial-logo"}}),n("span",[n("h6",[e._v("Artificial")]),e._v(" I worked as a software engineering intern at "),n("a",{staticClass:"about-link",attrs:{href:"https://www.artificial.com/"}},[e._v(" Artificial Inc. ")]),e._v(" during the summer of 2021 and the summer of 2022. At Artificial, I got to work on porjects using vue.js and typescript. I added features to the artificial lab suite that were requested by clients. I also created an internal UI tool for use by other Artificial developers. ")])]),n("div",{staticClass:"about-card-wrapper",staticStyle:{"background-color":"#071E3D"}},[n("span",[n("h6",[e._v("Amplifood LLC")]),e._v(" In 2019, a high school friend approached me with an idea and needed help building an application. I started working with the small team already assembled to create an android application that could scan a barcode at a grocery store and tell if that food item is part of the users diet or not. My time at "),n("a",{staticClass:"about-link",attrs:{href:"https://www.amplifood.app"}},[e._v(" Amplifood ")]),e._v(" has not only allowed me to delve deep into Android development, but also gave me invaluable experience in project management, marketing, and pitching ideas. ")]),n("img",{staticClass:"about-right-pic apple-pic",staticStyle:{"background-color":"#21E6C1"},attrs:{src:a(3755),alt:"amplifood-apple"}})]),n("div",{staticClass:"about-card-wrapper",staticStyle:{"background-color":"#278EA5"}},[n("img",{staticClass:"about-left-pic",staticStyle:{"background-color":"#071E3D"},attrs:{src:a(6074),alt:"venue-valet-logo"}}),n("span",[n("h6",[e._v("Venue Valet")]),e._v(" During the summer of 2019, I worked at "),n("a",{staticClass:"about-link",attrs:{href:"https://venue-valet.com/"}},[e._v("Venue Valet")]),e._v(" in Austin, TX. I used my knowledge of Java to help make an admin page for electronic movie poster management. At Venue Valet, I learned JSP with JSTL tags and added features and unit tests to the Venue Valet product suite. ")])])])}],_=(0,s.aZ)({}),I=_,S=(0,g.Z)(I,k,C,!1,null,null,null),j=S.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects-wrapper"},[n("div",{staticClass:"project-card-wrapper",staticStyle:{"background-color":"#278EA5"}},[n("img",{staticClass:"project-left-pic",staticStyle:{"background-color":"#1F4287"},attrs:{src:a(4320),alt:"bike.svg"}}),n("span",[n("h6",[n("a",{staticClass:"project-link",attrs:{href:"https://github.com/wjpasq/BikeSpot"}},[e._v("Bike Spot")])]),e._v(" Bike Spot is an Android Applicaition I developed in a team at the City of College Station Hackothon in 2019. Bike Spot uses the Google Maps API to display all the bike rack locations in College Station. ")])]),n("div",{staticClass:"project-card-wrapper",staticStyle:{"background-color":"#1F4287"}},[n("span",[n("h6",[n("a",{staticClass:"project-link",attrs:{href:"https://github.com/wjpasq/Dominoes"}},[e._v("Dominoes")])]),e._v(" In this application, up to 4 different users can play draw dominoes. The player can also set any number of the 4 players to computer players. Although this started as a project for class, I ended up greatly exapanding upon the GUI and the functionality to make a Dominoes game that I could enjoy playing. ")]),n("img",{staticClass:"project-right-pic",staticStyle:{"background-color":"#21E6C1"},attrs:{src:a(9866),alt:"domino.svg"}})]),n("div",{staticClass:"project-card-wrapper",staticStyle:{"background-color":"#278EA5"}},[n("img",{staticClass:"project-left-pic",staticStyle:{"background-color":"#FFF"},attrs:{src:a(8901),alt:"cards.svg"}}),n("span",[n("h6",[n("a",{staticClass:"project-link",attrs:{href:"https://github.com/wjpasq/BlackJack"}},[e._v("Black Jack")])]),e._v(" Black Jack was the my first attempt at a NetBeans project. I wanted to make somehing that I could enjoy playing as well us something that could let me grow as a programmer. I made a black jacke game that allows the player to bet, split, double down, and even tells the player the real-time chance they have of winning the hand. ")])])])}],x=(0,s.aZ)({}),M=x,A=(0,g.Z)(M,E,F,!1,null,null,null),P=A.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"resume-wrapper"},[a("div",{staticClass:"pdf-frame-wrapper"},[a("iframe",{staticClass:"resume-pdf",attrs:{src:"https://drive.google.com/file/d/1L7szdeI1xnsMvGcYz8mzW5OHLZepMFUX/preview",allow:"autoplay"}})])])}],Z=(0,s.aZ)({}),O=Z,T=(0,g.Z)(O,B,L,!1,null,null,null),$=T.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fun-facts-wrapper"},[n("div",{staticClass:"fun-card-wrapper",staticStyle:{"background-color":"#1F4287"}},[n("img",{staticClass:"fun-left-pic",staticStyle:{"background-color":"#FFFFFF"},attrs:{src:a(7195),alt:"colorblind-test"}}),e._m(0),n("ColorblindSwitch",{on:{switchClicked:function(t){return e.$emit("toggleFilter",t)}}})],1),n("div",{staticClass:"fun-card-wrapper",staticStyle:{"background-color":"#278EA5"}},[n("span",{staticStyle:{width:"100%"}},[n("h6",[e._v("Murphy")]),e._v(" Murphy is my family dog. He is a five year old labradoodle who is always the center of attention. Murphy loves bacon, chasing squirrels, belly rubs, and lounging on the couch. "),n("PictureGallery",{staticClass:"gallery",attrs:{images:e.images}})],1)]),e._m(1),e._m(2)])},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("h6",[e._v("I'm Color Blind")]),e._v(" When I was in second grade, I colored the sky purple and the grass brown. Afterwards, I was taken to the optometrist and found out I had Dueteranomaly color deficiency, or red-green color blindness. I rarely notice my color blindness in day-to-day life (except when I'm asked to read a color-coded map). If you want to see what the world looks like to me, flip the switch to "),n("img",{staticClass:"cb-eye-img",attrs:{src:a(830)}}),e._v(" in the top right corner. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fun-card-wrapper",staticStyle:{"background-color":"#1F4287"}},[n("span",[n("h6",[e._v("Drums")]),e._v(" I loved playing drums growing up. I started playing drums in the third grade and my parents got their first set of noise cancelling headphones shortly after. I also got to play on the drumline in high school. My favorite songs to play on the drum set are Brain Stew by Green Day, Last Resort by Papa Roach, My Hero by the Foo Fighters, Come Together by the Beatles, and Bombtrack by Rage Against the Machine. ")]),n("img",{staticClass:"fun-right-pic",staticStyle:{"background-color":"#21E6C1"},attrs:{src:a(3416)}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fun-card-wrapper",staticStyle:{"background-color":"#278EA5"}},[n("img",{staticClass:"fun-left-pic",staticStyle:{"background-color":"#1F4287"},attrs:{src:a(7276),alt:"gears"}}),n("span",[n("h6",[e._v("Family of Engineers")]),e._v(" Both my parents graduated from college with degrees in Electrical Engineering. Growing up in a family of engineers has been fun (and a little odd). I have been going to robotics and programming camps for as long as I can remember. I even got to tag along with my parents to a couple technology conferences. Even my older sister graduated from A&M with a degree in Mechanical Engineering. ")])])}],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gallery-container"},[a("div",{staticClass:"slides"},e._l(e.images,(function(e){return a("div",{key:e},[a("img",{staticClass:"slide-img",attrs:{src:e}})])})),0)])},q=[],D=(0,s.aZ)({props:{images:Array},setup(e){const t=(0,s.iH)(0),a=(0,s.Fl)((()=>a=>({highlighted:e.images.indexOf(a)===t.value}))),n=function(t){console.log(e.images.indexOf(t))};return{thumbnailClicked:n,thumbnailClasses:a}}}),N=D,V=(0,g.Z)(N,R,q,!1,null,null,null),W=V.exports,z=a.p+"img/IMG_0217.33902ab3.jpg",J=a.p+"img/IMG_0336.b8ca1299.jpg",U=a.p+"img/IMG_0340.c3c040a7.jpg",X=a.p+"img/IMG_0345.97de51ed.jpg",Y=a.p+"img/IMG_0349.6356058e.jpg",Q=a.p+"img/IMG_20190803_151811_01.288564e4.jpg",K=a.p+"img/Mur.f83d41b4.jpg",ee=a.p+"img/murph_holstrom.2c41edd6.jpg",te=a.p+"img/murph_night.43883df9.jpg",ae=a.p+"img/murph_outside.51a6c686.jpg",ne=a.p+"img/murph_wet.ed0fed9b.jpg",ie=(0,s.aZ)({setup(){const e=function(){console.log("switch clicked")},t=(0,s.iH)([z,J,U,X,Y,Q,K,ee,te,ae,ne]);return{test:e,images:t}},components:{ColorblindSwitch:f,PictureGallery:W}}),oe=ie,se=(0,g.Z)(oe,G,H,!1,null,null,null),re=se.exports,le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"elevator-pitch-super-wrapper"},[n("div",{staticClass:"el-pitch-wrapper"},[n("img",{staticClass:"el-pitch-profile-pic",attrs:{src:a(5336)}}),n("span",{staticClass:"el-pitch"},[n("br"),n("span",{staticClass:"hello-span"},[e._v("Hello!")]),n("br"),e._v(" I am Will Pasquarette, a senior at Texas A&M University. I am majoring in Computer Science with a minor in cybersecurity. My front-end and back-end experience at Texas A&M and multiple internships have given me the knowledge and skills to make an impact in software development at your company. ")])])])}],ue=(0,s.aZ)({}),de=ue,pe=(0,g.Z)(de,le,ce,!1,null,"2829ff27",null),me=pe.exports,ge=(0,s.aZ)({components:{NavBar:w,AboutMePage:j,ProjectsPage:P,ResumePage:$,FunFactsPage:re,HomePage:me},setup(){(0,s.bv)((()=>{window.addEventListener("DOMContentLoaded",(e=>{var t=function(){const e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))};t(),document.addEventListener("scroll",t);const a=document.body.querySelector("#mainNav");a&&new r.ZPm.ScrollSpy(document.body,{target:"#mainNav",offset:72});const n=document.body.querySelector(".navbar-toggler"),i=[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));i.map((function(e){e.addEventListener("click",(()=>{n&&"none"!==window.getComputedStyle(n).display&&n.click()}))}))}))}));const e=(0,s.iH)("home"),t=function(t){e.value=t},a=function(e){const t=document.documentElement;e?t.style.setProperty("--root-filter-color","url('#colorblind-filter')"):t.style.setProperty("--root-filter-color","none")};return{currentPage:e,menuItemClicked:t,toggleFilter:a}},methods:{menuToggle(){document.querySelector("#navbarResponsive")?.classList.toggle("show")}}}),ve=ge,fe=(0,g.Z)(ve,i,o,!1,null,null,null),he=fe.exports,be=a(8125),ye=a(7749),we=a(8321);be.vI.add(we.xiG),n["default"].component("font-awesome-icon",ye.GN),n["default"].use(s.ZP),n["default"].config.productionTip=!1,n["default"].config.productionTip=!1,new n["default"]({render:e=>e(he)}).$mount("#app")},3416:function(e,t,a){e.exports=a.p+"img/Drums.dfea5dfa.svg"},3755:function(e,t,a){e.exports=a.p+"img/apple.206f3c75.svg"},1352:function(e,t,a){e.exports=a.p+"img/artificial-logo.398ad513.svg"},4320:function(e,t,a){e.exports=a.p+"img/bike.dba190f3.svg"},830:function(e,t,a){e.exports=a.p+"img/cb_eye.6abd36bd.svg"},9866:function(e,t,a){e.exports=a.p+"img/domino.0514735c.svg"},8901:function(e,t,a){e.exports=a.p+"img/card-blackjack.70fc5d74.png"},7195:function(e,t,a){e.exports=a.p+"img/colorblind-test.e9fde709.png"},7276:function(e,t,a){e.exports=a.p+"img/gears.0560ecb6.png"},5336:function(e,t,a){e.exports=a.p+"img/profile_pic.11345e42.jpg"},6074:function(e,t,a){e.exports=a.p+"img/venue-valet-logo.6a150ee8.png"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var u=l(a)}for(t&&t(n);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkwjpasq_github_io"]=self["webpackChunkwjpasq_github_io"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1808)}));n=a.O(n)})();
//# sourceMappingURL=app.6cfbfab0.js.map