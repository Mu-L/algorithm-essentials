(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{298:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return j}));var n=t(0),s=t.n(n);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),i=function(e){var a=s.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=i(e.components);return s.a.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},O=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,m=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=i(t),O=n,j=l["".concat(c,".").concat(O)]||l[O]||o[O]||m;return t?s.a.createElement(j,r(r({ref:a},p),{},{components:t})):s.a.createElement(j,r({ref:a},p))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var m=t.length,c=new Array(m);c[0]=O;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var p=2;p<m;p++)c[p]=t[p];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},299:function(e,a,t){"use strict";function n(e){var a,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(s&&(s+=" "),s+=t);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.a=function(){for(var e,a,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(s&&(s+=" "),s+=a);return s}},300:function(e,a,t){"use strict";var n=t(0),s=Object(n.createContext)(void 0);a.a=s},301:function(e,a,t){"use strict";var n=t(0),s=t(300);a.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,a,t){"use strict";var n=t(0),s=t.n(n),m=t(301),c=t(299),r=t(47),b=t.n(r),p=37,i=39;a.a=function(e){var a=e.block,t=e.children,r=e.defaultValue,l=e.values,o=e.groupId,O=Object(m.a)(),j=O.tabGroupChoices,u=O.setTabGroupChoices,N=Object(n.useState)(r),h=N[0],d=N[1],g=Object(n.useState)(!1),v=g[0],f=g[1];if(null!=o){var y=j[o];null!=y&&y!==h&&l.some((function(e){return e.value===y}))&&d(y)}var w=function(e){d(e),null!=o&&u(o,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||f(!0)},k=function(){f(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",k)}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},l.map((function(e){var a=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===a}),style:v?{}:{outline:"none"},key:a,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case i:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(C,e.target,e),x(e)},onFocus:function(){return w(a)},onClick:function(){w(a),f(!1)},onPointerDown:function(){return f(!1)}},t)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},303:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(e){return s.a.createElement("div",null,e.children)}},62:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return o}));var n=t(2),s=t(6),m=(t(0),t(298)),c=t(302),r=t(303),b={title:"Combination Sum II"},p={unversionedId:"dfs/combination-sum-ii",id:"dfs/combination-sum-ii",isDocsHomePage:!1,title:"Combination Sum II",description:"\u63cf\u8ff0",source:"@site/docs/dfs/combination-sum-ii.md",slug:"/dfs/combination-sum-ii",permalink:"/algorithm-essentials/dfs/combination-sum-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dfs/combination-sum-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Combination Sum",permalink:"/algorithm-essentials/dfs/combination-sum"},next:{title:"Combination Sum III",permalink:"/algorithm-essentials/dfs/combination-sum-iii"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],l={rightToc:i};function o(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(m.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(m.b)("p",null,"Given a collection of candidate numbers (",Object(m.b)("inlineCode",{parentName:"p"},"C"),") and a target number (",Object(m.b)("inlineCode",{parentName:"p"},"T"),"), find all unique combinations in ",Object(m.b)("inlineCode",{parentName:"p"},"C")," where the candidate numbers sums to ",Object(m.b)("inlineCode",{parentName:"p"},"T"),"."),Object(m.b)("p",null,"Each number in ",Object(m.b)("inlineCode",{parentName:"p"},"C")," may only be used ",Object(m.b)("strong",{parentName:"p"},"once")," in the combination."),Object(m.b)("p",null,"Note:"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"All numbers (including target) will be positive integers."),Object(m.b)("li",{parentName:"ul"},"Elements in a combination (",Object(m.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"a"),Object(m.b)("mn",{parentName:"msub"},"1")),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"a"),Object(m.b)("mn",{parentName:"msub"},"2")),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"a"),Object(m.b)("mi",{parentName:"msub"},"k"))),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"a_1, a_2, ..., a_k")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"1")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.33610799999999996em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}}),"k")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))))))),") must be in non-descending order. (ie, ",Object(m.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"a"),Object(m.b)("mn",{parentName:"msub"},"1")),Object(m.b)("mo",{parentName:"mrow"},">"),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"a"),Object(m.b)("mn",{parentName:"msub"},"2")),Object(m.b)("mo",{parentName:"mrow"},">"),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(m.b)("mo",{parentName:"mrow"},">"),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"a"),Object(m.b)("mi",{parentName:"msub"},"k"))),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"a_1 > a_2 > ... > a_k")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.6891em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"1")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),">"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.6891em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),">"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),">"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.33610799999999996em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}}),"k")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(m.b)("span",{parentName:"span"})))))))))),")."),Object(m.b)("li",{parentName:"ul"},"The solution set must not contain duplicate combinations.")),Object(m.b)("p",null,"For example, given candidate set ",Object(m.b)("inlineCode",{parentName:"p"},"10,1,2,7,6,1,5")," and target ",Object(m.b)("inlineCode",{parentName:"p"},"8"),",\nA solution set is:"),Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{}),"[1, 7]\n[1, 2, 5]\n[2, 6]\n[1, 1, 6]\n")),Object(m.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(m.b)("p",null,"\u65e0"),Object(m.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(m.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(m.b)(r.a,{value:"java",mdxType:"TabItem"},Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Combination Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> combinationSum2(int[] nums, int target) {\n        Arrays.sort(nums); // \u8ddf\u7b2c 50 \u884c\u914d\u5408\uff0c\n        // \u786e\u4fdd\u6bcf\u4e2a\u5143\u7d20\u6700\u591a\u53ea\u7528\u4e00\u6b21\n        List<List<Integer>> result = new ArrayList<>();\n        List<Integer> path = new ArrayList<>();\n        dfs(nums, path, result, target, 0);\n        return result;\n    }\n    // \u4f7f\u7528nums[start, nums.size())\u4e4b\u95f4\u7684\u5143\u7d20\uff0c\u80fd\u627e\u5230\u7684\u6240\u6709\u53ef\u884c\u89e3\n    private static void dfs(int[] nums, List<Integer> path,\n                            List<List<Integer>> result, int gap, int start) {\n        if (gap == 0) {  //  \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.add(new ArrayList<>(path));\n            return;\n        }\n\n        int previous = -1;\n        for (int i = start; i < nums.length; i++) {\n            // \u5982\u679c\u4e0a\u4e00\u8f6e\u5faa\u73af\u5df2\u7ecf\u4f7f\u7528\u4e86nums[i]\uff0c\u5219\u672c\u6b21\u5faa\u73af\u5c31\u4e0d\u80fd\u518d\u9009nums[i]\uff0c\n            // \u786e\u4fddnums[i]\u6700\u591a\u53ea\u7528\u4e00\u6b21\n            if (previous == nums[i]) continue;\n\n            if (gap < nums[i]) return;  // \u526a\u679d\n\n            previous = nums[i];\n\n            path.add(nums[i]);\n            dfs(nums, path, result, gap - nums[i], i + 1);\n            path.remove(path.size() - 1);  // \u6062\u590d\u73af\u5883\n        }\n    }\n}\n"))),Object(m.b)(r.a,{value:"cpp",mdxType:"TabItem"},Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Combination Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n!)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > combinationSum2(vector<int> &nums, int target) {\n        sort(nums.begin(), nums.end()); // \u8ddf\u7b2c 50 \u884c\u914d\u5408\uff0c\n                                        // \u786e\u4fdd\u6bcf\u4e2a\u5143\u7d20\u6700\u591a\u53ea\u7528\u4e00\u6b21\n        vector<vector<int> > result;\n        vector<int> path;\n        dfs(nums, path, result, target, 0);\n        return result;\n    }\nprivate:\n    // \u4f7f\u7528nums[start, nums.size())\u4e4b\u95f4\u7684\u5143\u7d20\uff0c\u80fd\u627e\u5230\u7684\u6240\u6709\u53ef\u884c\u89e3\n    static void dfs(const vector<int> &nums, vector<int> &path,\n            vector<vector<int> > &result, int gap, int start) {\n        if (gap == 0) {  //  \u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u89e3\n            result.push_back(path);\n            return;\n        }\n\n        int previous = -1;\n        for (size_t i = start; i < nums.size(); i++) {\n            // \u5982\u679c\u4e0a\u4e00\u8f6e\u5faa\u73af\u5df2\u7ecf\u4f7f\u7528\u4e86nums[i]\uff0c\u5219\u672c\u6b21\u5faa\u73af\u5c31\u4e0d\u80fd\u518d\u9009nums[i]\uff0c\n            // \u786e\u4fddnums[i]\u6700\u591a\u53ea\u7528\u4e00\u6b21\n            if (previous == nums[i]) continue;\n\n            if (gap < nums[i]) return;  // \u526a\u679d\n\n            previous = nums[i];\n\n            path.push_back(nums[i]);\n            dfs(nums, path, result, gap - nums[i], i + 1);\n            path.pop_back();  // \u6062\u590d\u73af\u5883\n        }\n    }\n};\n")))),Object(m.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",Object(n.a)({parentName:"li"},{href:"/algorithm-essentials/dfs/combination-sum"}),"Combination Sum")),Object(m.b)("li",{parentName:"ul"},Object(m.b)("a",Object(n.a)({parentName:"li"},{href:"/algorithm-essentials/dfs/combination-sum-iii"}),"Combination Sum III"))))}o.isMDXComponent=!0}}]);