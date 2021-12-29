(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{246:function(t,e,r){"use strict";var n=r(6),c=r(69).find,o=r(130),l="find",_=!0;l in[]&&Array(1).find((function(){_=!1})),n({target:"Array",proto:!0,forced:_},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},247:function(t,e,r){"use strict";r.r(e);var n={name:"Header"},c=r(16),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"header__content u-maxwidth-center"},[r("div",{staticClass:"header__text-box"},[r("h1",{staticClass:"heading__primary scroll-tranfrom"},[r("span",{staticClass:"heading__primary--main"},[t._v("Charlie's")]),t._v(" "),r("span",{staticClass:"heading__primary--sub"},[t._v("Profile")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(247).default})},249:function(t,e,r){"use strict";r.r(e);r(246),r(15),r(44);var n={name:"ProjectCard",props:{projectName:{type:String,required:!0},projectClassName:{type:String,required:!0},projectDescription:{type:Array,required:!0}},data:function(){return{projectClass:{picture:"projectCard__picture--".concat(this.projectClassName),heading:"projectCard__heading-text--".concat(this.projectClassName),linkBox:"projectCard__linkBox--".concat(this.projectClassName),backSide:"projectCard__side--back-".concat(this.projectClassName)}}},computed:{projectObject:function(){var t=this;return this.$store.state.projectArray.find((function(e){return e.name===t.projectName}))}}},c=r(16),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projectCard__item"},[r("div",{staticClass:"projectCard__side projectCard__side--front"},[r("div",{staticClass:"projectCard__picture u-mb-3",class:[t.projectClass.picture]}),t._v(" "),r("h4",{staticClass:"projectCard__heading"},[r("span",{staticClass:"projectCard__heading-text",class:[t.projectClass.heading]},[t._v("\n        "+t._s(t.projectObject.name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"projectCard__details"},[r("ul",{staticClass:"projectCard__list"},[r("li",{staticClass:"projectCard__list-item"},[t._v(t._s(t.projectObject.description))]),t._v(" "),t._l(t.projectDescription,(function(e,n){return r("li",{key:n,staticClass:"projectCard__list-item"},[t._v("\n          "+t._s(e)+"\n        ")])}))],2)]),t._v(" "),r("div",{staticClass:"projectCard__linkBox",class:[t.projectClass.linkBox]},[r("nuxt-link",{staticClass:"btn btn--white",attrs:{to:"/project"}},[t._v("查閱詳情")])],1)]),t._v(" "),r("div",{staticClass:"projectCard__side projectCard__side--back",class:[t.projectClass.backSide]},[r("div",{staticClass:"projectCard__back-content"},[r("p",{staticClass:"projectCard__back-heading"},[t._v(t._s(t.projectObject.description))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn--white",attrs:{to:"/project"}},[t._v("查閱詳情")])],1)])])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,r){"use strict";r.r(e);var n=r(124);var c=r(165),o=r(95);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(15),r(35);var _=r(247),d=r(249);var v={layout:"base",mounted:function(){window.addEventListener("scroll",this.parallaxScrolling)},destroyed:function(){window.removeEventListener("scroll",this.parallaxScrolling)},methods:{parallaxScrolling:function(){var t=document.querySelector(".scroll-tranfrom"),e=document.querySelector(".scroll-background"),r=l(document.querySelectorAll(".fade-in-from")),n=window.screen.availHeight,c=document.documentElement.scrollTop||document.body.scrollTop;t.setAttribute("style","transform: translateY(".concat(c/18,"rem)")),e.setAttribute("style","background-position-y: -".concat(c/35,"rem")),r.forEach((function(t){var e,r,o,l=(e=t,o={top:0},"none"===window.getComputedStyle(e).display||function t(e,n){1===e.nodeType&&(r=window.getComputedStyle(e).position,void 0!==n||"static"!==r?(o.top+=e.offsetTop-e.scrollTop,"fixed"!==r&&t(e.parentNode)):t(e.parentNode))}(e,!0),o).top,_=t.scrollHeight;c+n>=l&&c<l+_&&t.classList.add("fade-in-to")}))}},components:{Header:_.default,ProjectCard:d.default}},C=r(16),component=Object(C.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("section",{staticClass:"story scroll-background"},[n("div",{staticClass:"anchor-adjustment",attrs:{id:"profile-story"}}),t._v(" "),n("h2",{staticClass:"heading__secondary u-mb-4"},[t._v("學經歷")]),t._v(" "),n("div",{staticClass:"story__box fade-in-from"},[n("svg",{staticClass:"story__icon"},[n("use",{attrs:{"xlink:href":r(100)+"#icon-graduation-cap"}})]),t._v(" "),t._m(0),t._v(" "),n("svg",{staticClass:"story__icon"},[n("use",{attrs:{"xlink:href":r(100)+"#icon-briefcase"}})]),t._v(" "),t._m(1)])]),t._v(" "),n("section",{staticClass:"projectCard"},[n("div",{staticClass:"anchor-adjustment",attrs:{id:"profile-projectCard"}}),t._v(" "),n("h2",{staticClass:"heading__secondary u-mb-5"},[t._v("專案成就")]),t._v(" "),n("div",{staticClass:"projectCard__box fade-in-from u-maxwidth-center"},[n("ProjectCard",{attrs:{"project-name":"e-website-user-interface","project-class-name":"e-website","project-description":["產品管理和展示","購物車系統","結帳系統"]}}),t._v(" "),n("ProjectCard",{attrs:{"project-name":"To-Do-List","project-class-name":"todolist","project-description":["項目新增(快捷/細項)","項目細項修改","項目間拖曳"]}})],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story__text"},[r("h3",{staticClass:"heading__tertiary u-mb-2"},[t._v("學歷")]),t._v(" "),r("p",{staticClass:"story__title"},[t._v("學校名稱"),r("span",[t._v("：")]),r("span",{staticClass:"story__description"},[t._v("廈門大學")])]),t._v(" "),r("p",{staticClass:"story__title"},[t._v("學歷"),r("span",[t._v("：")]),r("span",{staticClass:"story__description"},[t._v("大學")])]),t._v(" "),r("p",{staticClass:"story__title"},[t._v("科系名稱"),r("span",[t._v("：")]),r("span",{staticClass:"story__description"},[t._v("國際經濟與貿易")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story__text"},[r("h3",{staticClass:"heading__tertiary u-mb-2"},[t._v("工作經歷")]),t._v(" "),r("p",{staticClass:"story__title"},[t._v("公司名稱"),r("span",[t._v("：")]),r("span",{staticClass:"story__description"},[t._v("洋宏股份有限公司")])]),t._v(" "),r("p",{staticClass:"story__title"},[t._v("總年資"),r("span",[t._v("：")]),r("span",{staticClass:"story__description"},[t._v("2年4個月")])]),t._v(" "),r("p",{staticClass:"story__title"},[t._v("職務名稱"),r("span",[t._v("：")]),r("span",{staticClass:"story__description"},[t._v("船務部/文件部專員")])]),t._v(" "),r("p",{staticClass:"story__title story__title--startalign"},[t._v("工作描述\n          "),r("span",[t._v("：")]),t._v(" "),r("span",{staticClass:"story__description story__description--startalign"},[t._v("\n            同國內外客戶及船東方溝通，協調航程詳情與運價合約。同時，處理進出口文件作業，製作各式報關所需單據。\n          ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(247).default,ProjectCard:r(249).default})}}]);