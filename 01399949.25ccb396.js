(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{298:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,b=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return n?o.a.createElement(b,l(l({ref:t},u),{},{components:n})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},300:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},301:function(e,t,n){"use strict";var r=n(0),o=n(300);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(301),i=n(299),l=n(47),s=n.n(l),u=37,c=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,d=e.values,f=e.groupId,p=Object(a.a)(),b=p.tabGroupChoices,m=p.setTabGroupChoices,v=Object(r.useState)(l),O=v[0],g=v[1],h=Object(r.useState)(!1),y=h[0],L=h[1];if(null!=f){var j=b[f];null!=j&&j!==O&&d.some((function(e){return e.value===j}))&&g(j)}var w=function(e){g(e),null!=f&&m(f,e)},N=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||L(!0)},T=function(){L(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",T)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),L(!1)},onPointerDown:function(){return L(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),a=(n(0),n(298)),i=n(302),l=n(303),s={title:"Sort List"},u={unversionedId:"sorting/merge-sort/sort-list",id:"sorting/merge-sort/sort-list",isDocsHomePage:!1,title:"Sort List",description:"\u63cf\u8ff0",source:"@site/docs/sorting/merge-sort/sort-list.md",slug:"/sorting/merge-sort/sort-list",permalink:"/sorting/merge-sort/sort-list",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/merge-sort/sort-list.md",version:"current"},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:c};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Sort a linked list in ",Object(a.b)("inlineCode",{parentName:"p"},"O(n log n)")," time using constant space complexity."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u5e38\u6570\u7a7a\u95f4\u4e14",Object(a.b)("inlineCode",{parentName:"p"},"O(nlogn)"),"\uff0c\u5355\u94fe\u8868\u9002\u5408\u7528\u5f52\u5e76\u6392\u5e8f\uff0c\u53cc\u5411\u94fe\u8868\u9002\u5408\u7528\u5feb\u901f\u6392\u5e8f\u3002\u672c\u9898\u53ef\u4ee5\u590d\u7528 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/sorting/merge-sort/merge-two-sorted-lists"}),"Merge Two Sorted Lists")," \u7684\u4ee3\u7801\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Sort List\n// \u5f52\u5e76\u6392\u5e8f\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode sortList(ListNode head) {\n        if (head == null || head.next == null)return head;\n\n        final ListNode middle = findMiddle(head);\n        final ListNode head2 = middle.next;\n        middle.next = null; // \u65ad\u5f00\n\n        final ListNode l1 = sortList(head);  // \u524d\u534a\u6bb5\u6392\u5e8f\n        final ListNode l2 = sortList(head2);  // \u540e\u534a\u6bb5\u6392\u5e8f\n        return mergeTwoLists(l1, l2);\n    }\n\n    // Merge Two Sorted Lists\n    private static ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(-1);\n        for (ListNode p = dummy; l1 != null || l2 != null; p = p.next) {\n            int val1 = l1 == null ? Integer.MAX_VALUE : l1.val;\n            int val2 = l2 == null ? Integer.MAX_VALUE : l2.val;\n            if (val1 <= val2) {\n                p.next = l1;\n                l1 = l1.next;\n            } else {\n                p.next = l2;\n                l2 = l2.next;\n            }\n        }\n        return dummy.next;\n    }\n    // \u5feb\u6162\u6307\u9488\u627e\u5230\u4e2d\u95f4\u8282\u70b9\n    private static ListNode findMiddle(ListNode head) {\n        if (head == null) return null;\n\n        ListNode slow = head;\n        ListNode fast = head.next;\n\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n}\n"))),Object(a.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Sort List\n// \u5f52\u5e76\u6392\u5e8f\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *sortList(ListNode *head) {\n        if (head == NULL || head->next == NULL)return head;\n\n        ListNode *middle = findMiddle(head);\n        ListNode *head2 = middle->next;\n        middle->next = nullptr; // \u65ad\u5f00\n\n        ListNode *l1 = sortList(head);  // \u524d\u534a\u6bb5\u6392\u5e8f\n        ListNode *l2 = sortList(head2);  // \u540e\u534a\u6bb5\u6392\u5e8f\n        return mergeTwoLists(l1, l2);\n    }\nprivate:\n    // Merge Two Sorted Lists\n    static ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {\n        ListNode dummy(-1);\n        for (ListNode* p = &dummy; l1 != nullptr || l2 != nullptr; p = p->next) {\n            int val1 = l1 == nullptr ? INT_MAX : l1->val;\n            int val2 = l2 == nullptr ? INT_MAX : l2->val;\n            if (val1 <= val2) {\n                p->next = l1;\n                l1 = l1->next;\n            } else {\n                p->next = l2;\n                l2 = l2->next;\n            }\n        }\n        return dummy.next;\n    }\n    // \u5feb\u6162\u6307\u9488\u627e\u5230\u4e2d\u95f4\u8282\u70b9\n    static ListNode* findMiddle(ListNode* head) {\n        if (head == nullptr) return nullptr;\n\n        ListNode *slow = head;\n        ListNode *fast = head->next;\n\n        while (fast != nullptr && fast->next != nullptr) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n        return slow;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/sorting/insertion-sort/insertion-sort-list"}),"Insertion Sort List"))))}f.isMDXComponent=!0}}]);