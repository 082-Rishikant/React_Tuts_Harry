(this.webpackJsonpreact_tuts_harry=this.webpackJsonpreact_tuts_harry||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(8),l=a.n(n),o=(a(13),a(4)),r=(a(14),a(0));function i(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2e343a":"white"};return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"black"},children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{style:t,className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{style:t,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{style:t,className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{style:t,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{style:t,className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}var d=a(5);function h(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/Aboutus",children:e.about})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toogleMode}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Darks Mode"})]})]})]})})})}function b(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container my-3 ",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2e343a":"white"},children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){n(e.target.value)},id:"myBox",rows:"9",placeholder:"Enter Text here",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2e343a":"white"}})}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toUpperCase();n(t),e.showAlert(" converted to uppercase","success ")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toLowerCase();n(t),e.showAlert(" converted to lowercase","success ")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){n(""),e.showAlert(" all cleared","success ")},children:"clear all"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(c),e.showAlert(" Text copied","success ")},children:"copy text"}),Object(r.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.split(/[ ]+/);n(t.join(" ")),e.showAlert(" space removed","success ")},children:"Remove extra space"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#2e343a":"white"},children:[Object(r.jsx)("h3",{children:"Text Details"}),Object(r.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words  ",c.length," characters"]}),Object(r.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," minutes read time"]}),Object(r.jsx)("h3",{children:"Text Preview"}),Object(r.jsx)("p",{children:c.length>0?c:"Nothing to preview!"})]})]})}function j(e){var t;return Object(r.jsx)("div",{style:{height:50},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.message," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:(t=e.alert.message,(t=t.toLowerCase()).charAt(0).toUpperCase()+t.slice(1))}),":",e.alert.explanation]})})}function m(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center border-top bg-dark mt-5",children:[Object(r.jsx)("div",{className:"col-12 d-flex align-items-center justify-content-center px-3",children:Object(r.jsxs)("p",{className:"text-center text-muted p-0 m-0 pt-2 pb-1",children:["Made With",Object(r.jsx)("i",{className:"bi bi-heart-fill p-0 m-0 px-1",style:{width:28,height:25,color:"red"}}),"By",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/082-rishikant/",className:"px-1 text-muted",rel:"noopener noreferrer",target:"_blank",children:"Rishikant Patel"})]})}),Object(r.jsx)("div",{className:"col-12 d-flex align-items-center justify-content-center px-3",children:Object(r.jsxs)("p",{className:"text-center text-muted p-0 m-0 py-1",children:["Contact Us:",Object(r.jsx)("a",{href:"https://mail.google.com/mail/u/0/#inbox",className:"text-muted",rel:"noopener noreferrer",target:"_blank",children:"rishikant9650@gmail.com"})]})}),Object(r.jsxs)("ul",{className:"col-12 d-flex justify-content-center align-items-center list-unstyled p-0 m-0 px-3 pb-2 pt-1",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"text-muted",href:"/",rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)("i",{className:"bi bi-twitter"})})}),Object(r.jsx)("li",{className:"ms-3",children:Object(r.jsx)("a",{className:"text-muted",href:"https://www.instagram.com/",rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)("i",{className:"bi bi-instagram"})})}),Object(r.jsx)("li",{className:"ms-3",children:Object(r.jsx)("a",{className:"text-muted",href:"https://www.facebook.com/rishikant.patel.31/",rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)("i",{className:"bi bi-facebook"})})})]})]})})}h.defaultProps={about:"about"};var u=a(2);var x=function(){var e=Object(s.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),l=Object(o.a)(n,2),x=l[0],p=l[1],g=function(e,t){p({message:t,explanation:e}),setTimeout((function(){p(null)}),"1500")};return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(h,{title:"TextUtils",about:"about TextUtils",mode:a,toogleMode:function(){"dark"===a?(c("light"),document.body.style.backgroundColor="white",g(" Light mode enabled","success "),document.title="TextUtils - Light Mode"):(c("dark"),document.body.style.backgroundColor="#2e343a",g(" dark mode enabled","success "),document.title="TextUtils - Dark Mode")}}),Object(r.jsx)(j,{alert:x}),Object(r.jsx)("div",{className:"container my-4",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",element:Object(r.jsx)(b,{heading:"Enter Text to analyze below",mode:a,showAlert:g})}),Object(r.jsx)(u.a,{path:"/Aboutus",element:Object(r.jsx)(i,{mode:a})})]})}),Object(r.jsx)(m,{mode:a})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.b941cf88.chunk.js.map