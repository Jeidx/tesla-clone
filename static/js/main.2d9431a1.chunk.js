(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{13:function(n,e,t){n.exports={wrp:"Header_wrp__3JB95",MenuIcon:"Header_MenuIcon__2oTOE",MenuIcona:"Header_MenuIcona__EqNTx"}},28:function(n,e,t){n.exports={wrpArrow:"Section_wrpArrow__nUu2P",animateDown:"Section_animateDown__3NMK9"}},34:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r,i,o,c,a=t(0),s=t.n(a),d=t(6),l=t.n(d),j=(t(34),t(2)),x=t(29),g=t(3),b=t(13),h=t.n(b),p=t(12),u=Object(p.b)({name:"car",initialState:{cars:["Model S","Model Y","Model 3","Model X"]},reducers:{}}),m=function(n){return n.car.cars},O=u.reducer,f=t(11),w=t(4),v=t(1);var y,k,T,I,B,M,_=function(){var n=Object(a.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],i=Object(f.b)(m);return Object(v.jsxs)(S,{children:[Object(v.jsx)("a",{children:Object(v.jsx)("img",{src:"/images/logo.svg"})}),Object(v.jsx)(C,{children:i&&i.map((function(n,e){return Object(v.jsx)(w.Link,{to:e+1,smooth:!0,duration:1e3,children:n},e)}))}),Object(v.jsxs)(N,{children:[Object(v.jsx)(w.Link,{to:"7",smooth:!0,duration:1500,children:"Shop"}),Object(v.jsx)(w.Link,{children:"Tesla Account"}),Object(v.jsx)("div",{className:h.a.wrp,onClick:function(){return r(!t)},children:Object(v.jsx)("span",{className:t?h.a.MenuIcona:h.a.MenuIcon})})]}),Object(v.jsxs)(E,{show:t,children:[i&&i.map((function(n,e){return Object(v.jsx)(w.Link,{to:e+1,smooth:!0,duration:1e3,children:n},e)})),Object(v.jsx)("li",{children:Object(v.jsx)("a",{children:"Existing Inventory"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{children:"Used Inventory"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{children:"Trade-in"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{children:"Cybertruck"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{children:"Roadster"})})]})]})},S=g.a.div(r||(r=Object(j.a)(["\n    min-height:60px;\n    position:fixed;\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    padding:0 20px;\n    top:0;\n    left:0;\n    right:0;\n    z-index:1;\n"]))),C=g.a.div(i||(i=Object(j.a)(["\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    flex:1;\n    a{\n        font-weight:600;\n        text-transform:uppercase;\n        padding:0 10px;\n        flex-wrap:nowrap;\n        transition:.2s;\n    }\n    a:hover{\n        cursor:pointer;\n        color:yellow;\n\n    }\n    @media(max-width: 768px){\n        display:none;\n    }\n"]))),N=g.a.div(o||(o=Object(j.a)(["\n    display:flex;\n    align-items:center;\na{\n    font-weight:600;\n    text-transform:uppercase;\n    margin-right:10px;\n    transition:.2s;\n}\na:hover{\n    cursor:pointer;\n    color:yellow;\n}\n"]))),E=g.a.div(c||(c=Object(j.a)(["\n    position:fixed;\n    top:0;\n    bottom:0;\n    right:0;\n    background:white;\n    width:300px;\n    z-index:16;\n    list-style:none;\n    padding:20px;\n    display:flex;\n    flex-direction:column;\n    text-align:start;\n    transform: ",";\n    transition:all .3s;\n    li,a{\n        padding:15px 0 ;\n        border-bottom:1px solid rgba(0,0,0,.2);\n        font-weight:600;\n        transition:.2s;\n\n    }\n    a:hover{\n        cursor:pointer;\n        color:rgba(0,0,0,.5);\n    }\n\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),L=t(19),z=t.n(L),A=t(28),D=t.n(A);var R,P=function(n){var e=n.title,t=n.description,r=n.backgroundImg,i=n.leftBtnTex,o=n.rightBtnText,c=n.img,a=n.id;return Object(v.jsxs)(X,{id:a,bgImage:r,children:[Object(v.jsx)(z.a,{bottom:!0,children:Object(v.jsxs)(H,{children:[Object(v.jsx)("h1",{children:e}),Object(v.jsx)("p",{children:t})]})}),Object(v.jsxs)(Y,{children:[Object(v.jsx)(z.a,{bottom:!0,children:Object(v.jsxs)(J,{children:[Object(v.jsx)(U,{children:i}),o&&Object(v.jsx)(W,{children:o})]})}),Object(v.jsx)("div",{className:D.a.wrpArrow,children:Object(v.jsx)(w.Link,{to:++a,smooth:!0,duration:1e3,children:Object(v.jsx)("img",{src:c})})})]})]})},X=g.a.div(y||(y=Object(j.a)(["\n    z-index:10;\n    width:100vw;\n    height:100vh;\n    background-size:cover;\n    background-position:center;\n    backgrond-repeat:no-repeat;\n    background-image:url('/images/model-s.jpg');\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n    align-items:center;\n    background-image:","\n"])),(function(n){return'url("/images/'.concat(n.bgImage,'")')})),H=g.a.div(k||(k=Object(j.a)(["\n    padding-top:15vh;\n    text-align:center;\n"]))),J=g.a.div(T||(T=Object(j.a)(["\n    display:flex;\n    margin-bottom:30px;\n    @media(max-width:768px){\n        flex-direction:column;\n    }\n"]))),U=g.a.div(I||(I=Object(j.a)(["\n    background-color:rgba(23,26,32,.8);\n    height:40px;\n    width:256px;\n    color:white;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    border-radius:100px;\n    opacity: .85;\n    text-transform:uppercase;\n    font-size:12px;\n    cursor:pointer;\n    margin:8px;\n"]))),W=Object(g.a)(U)(B||(B=Object(j.a)(["\n    background-color:#fff;\n    opacity: .65;\n    color:#000;\n"]))),Y=g.a.div(M||(M=Object(j.a)(["\n    display:flex;\n    flex-direction:column;\n\n"])));var q=function(){return Object(v.jsxs)(K,{children:[Object(v.jsx)(P,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnTex:"Custom order",rightBtnText:"Existing inventory",img:"/images/down-arrow.svg",id:"1"}),Object(v.jsx)(P,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnTex:"Custom order",rightBtnText:"Existing inventory",img:"/images/down-arrow.svg",id:"2"}),Object(v.jsx)(P,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnTex:"Custom order",rightBtnText:"Existing inventory",img:"/images/down-arrow.svg",id:"3"}),Object(v.jsx)(P,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnTex:"Custom order",rightBtnText:"Existing inventory",img:"/images/down-arrow.svg",id:"4"}),Object(v.jsx)(P,{title:"Lower Cost Solar Panels In America",description:"Money-back guarantee",backgroundImg:"solar-panel.jpg",leftBtnTex:"Custom order",rightBtnText:"Learn more",img:"/images/down-arrow.svg",id:"5"}),Object(v.jsx)(P,{title:"Solar for New Roofs",description:"Solar Roof Costs less Than a New Roof Plus Solar Panels",backgroundImg:"solar-roof.jpg",leftBtnTex:"Custom order",rightBtnText:"Learn more",img:"/images/down-arrow.svg",id:"6"}),Object(v.jsx)(P,{title:"Solar for New Roofs",backgroundImg:"accessories.jpg",leftBtnTex:"Shop now",id:"7"})]})},K=g.a.div(R||(R=Object(j.a)(["\n    height: 100vh;\n    z-index:10;\n"])));var $=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(_,{}),Object(v.jsx)(q,{})]})},F=Object(p.a)({reducer:{car:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(f.a,{store:F,children:Object(v.jsx)($,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.2d9431a1.chunk.js.map