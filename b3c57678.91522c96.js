(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=(n(0),n(301)),a=n(305),o=n(306);const l={title:"Simplify Path"},c={unversionedId:"string/simplify-path",id:"string/simplify-path",isDocsHomePage:!1,title:"Simplify Path",description:"\u63cf\u8ff0",source:"@site/docs/string/simplify-path.md",slug:"/string/simplify-path",permalink:"/string/simplify-path",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/simplify-path.md",version:"current",sidebar:"someSidebar",previous:{title:"Valid Anagram",permalink:"/string/valid-anagram"},next:{title:"Length of Last Word",permalink:"/string/length-of-last-word"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:s};function p({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given an absolute path for a file (Unix-style), simplify it."),Object(i.b)("p",null,"For example,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"path = ",Object(i.b)("inlineCode",{parentName:"li"},'"/home/"'),", => ",Object(i.b)("inlineCode",{parentName:"li"},'"/home"')),Object(i.b)("li",{parentName:"ul"},"path = ",Object(i.b)("inlineCode",{parentName:"li"},'"/a/./b/../../c/"'),", => ",Object(i.b)("inlineCode",{parentName:"li"},'"/c"'))),Object(i.b)("p",null,"Corner Cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Did you consider the case where path = ",Object(i.b)("inlineCode",{parentName:"p"},'"/../"'),"?"),Object(i.b)("p",{parentName:"li"},"In this case, you should return ",Object(i.b)("inlineCode",{parentName:"p"},'"/"'),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Another corner case is the path might contain multiple slashes ",Object(i.b)("inlineCode",{parentName:"p"},"'/'")," together, such as ",Object(i.b)("inlineCode",{parentName:"p"},'"/home//foo/"'),"."),Object(i.b)("p",{parentName:"li"},"In this case, you should ignore redundant slashes and return ",Object(i.b)("inlineCode",{parentName:"p"},'"/home/foo"'),"."))),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u5f88\u6709\u5b9e\u9645\u4ef7\u503c\u7684\u9898\u76ee\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import java.util.*;\n\n// Simplify Path\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public String simplifyPath(String path) {\n        Stack<String> dirs = new Stack<>();\n\n        for (int i = 0; i < path.length();) {\n            ++i;\n\n            int j = path.indexOf('/', i);\n            if (j < 0) j = path.length();\n            final String dir = path.substring(i, j);\n\n            // \u5f53\u6709\u8fde\u7eed '///'\u65f6\uff0cdir \u4e3a\u7a7a\n            if (!dir.isEmpty() && !dir.equals(\".\")) {\n                if (dir.equals(\"..\")) {\n                    if (!dirs.isEmpty())\n                        dirs.pop();\n                } else {\n                    dirs.push(dir);\n                }\n            }\n\n            i = j;\n        }\n\n        StringBuilder result = new StringBuilder();\n        if (dirs.isEmpty()) {\n            result.append('/');\n        } else {\n            for (final String dir : dirs) {\n                result.append('/').append(dir);\n            }\n        }\n        return result.toString();\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Simplify Path\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    string simplifyPath(const string& path) {\n        vector<string> dirs; // \u5f53\u505a\u6808\n\n        for (auto i = path.begin(); i != path.end();) {\n            ++i;\n\n            auto j = find(i, path.end(), '/');\n            auto dir = string(i, j);\n\n            if (!dir.empty() && dir != \".\") {// \u5f53\u6709\u8fde\u7eed '///'\u65f6\uff0cdir \u4e3a\u7a7a\n                if (dir == \"..\") {\n                    if (!dirs.empty())\n                        dirs.pop_back();\n                } else\n                    dirs.push_back(dir);\n            }\n\n            i = j;\n        }\n\n        stringstream out;\n        if (dirs.empty()) {\n            out << \"/\";\n        } else {\n            for (auto dir : dirs)\n                out << '/' << dir;\n        }\n\n        return out.str();\n    }\n};\n")))))}p.isMDXComponent=!0},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},302:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},303:function(e,t,n){"use strict";var r=n(0);const i=Object(r.createContext)(void 0);t.a=i},304:function(e,t,n){"use strict";var r=n(0),i=n(303);t.a=function(){const e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(304),o=n(302),l=n(49),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(a.a)(),[m,h]=Object(r.useState)(l),[O,y]=Object(r.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some((t=>t.value===e))&&h(e)}const j=e=>{h(e),null!=b&&f(b,e)},g=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},w=()=>{y(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",w)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),style:O?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),v(e)},onFocus:()=>j(e),onClick:()=>{j(e),y(!1)},onPointerDown:()=>y(!1)},t)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},306:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);